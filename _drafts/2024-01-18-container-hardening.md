---
title: Hardening .NET containers
date: 2024-01-18
layout: post
published: false
permalink: /2024/01/hardening-dotnet-containers/
featured_image: /assets/img/2024/2024-01-18-hardening-dotnet-containers.jpg
excerpt: info goes here
---
If you take an [ASP.NET](http://asp.net/) web API project and choose the .NET Development Container image, you'll end up with a dockerfile that uses debian as it's base ([https://mcr.microsoft.com/en-us/product/devcontainers/dotnet/tags](https://mcr.microsoft.com/en-us/product/devcontainers/dotnet/tags)).

https://devblogs.microsoft.com/dotnet/securing-containers-with-rootless/

Debian is great, but this base image is designed with utility in mind, so not only will your dotnet app run, but if an attacker gets code execution through your app, it presents them with an unhardened environment from which to attack your kubernetes cluster, or the other pods that it can talk to.

There is a great article [here](https://techcommunity.microsoft.com/t5/azure-developer-community-blog/hardening-an-asp-net-container-running-on-kubernetes/ba-p/2542224) that covers hardening your dockerfile, which boils down to:

- ✅ Add an unprivileged user to run the dotnet app (which requires exposing a port above 1024)
- ✅ Stop the container from running as root, remove the ability to escalate privileges, and drop container capabilities
- ✅ Ideally, run on a read-only filesystem. There is mixed commentary on whether [ASP.NET](http://asp.NET) runs smoothly on a read-only filesystem, and the suggestion is to check this with integration tests.

The catch with 👆 this is that you are hardening the container, but not the image it is based on, and the Debian image will ship with vulnerabilities on occasion.

An alternative is ⛰️ Alpine linux, and you can use the latest official Microsoft dotnet container from https://hub.docker.com/_/microsoft-dotnet-aspnet/. This is a container image designed for security, but also speed and scalability. Alpine containers are smaller and faster - everyone wins!

Now we have a hardened container, and a secure image. The next step is to harden the Alpine image itself, so that if someone does get code execution on our app, the tools they will have available to them are limited. There is a Belgian cybersecurity firm that publish scripts for this in their [iron-alpine](https://github.com/ironpeakservices/iron-alpine) repository, and there is a great article on implementing them [here](https://michaeldimoudis.medium.com/hardening-asp-net-core-3-1-docker-images-f0c2ede1667f). The script removes potentially unused components such as crontabs, init scripts, interactive shells and the package manager. It doesn't leave much for an attacker to use if they get in.

An even leaner alternative is to use a [Distroless](https://github.com/GoogleContainerTools/distroless) container. Instead of cutting down a distro by removing unused components, distroless containers only add the runtime and the dependencies for the app (this is how Google builds their containers). Currently the dotnet distroless container is an experimental build from GCP ([gcr.io/distroless/dotnet:latest](http://gcr.io/distroless/dotnet:latest)) so it isn't recommended for production, but it would be interesting to test out.

Lastly, when containerizing apps, they can be split into multi-stage builds, which yields smaller image sizes and faster build times. This is difficult to summarize neatly, so I'll point you to [this article](https://medium.com/01001101/containerize-your-net-core-app-the-right-way-35c267224a8d) which steps through it.

>[!note]TL;DR:
>
> - Containerize .NET Core apps with multi-stage builds
> - Harden your container via the docker file
> - Use the smallest, securest image you are comfortable with, not just for security, but for scalability and speed.

```yaml
runAsNonRoot: true
 runAsUser: 1000
 runAsGroup: 2000
 allowPrivilegeEscalation: false
 privileged: false
 readOnlyRootFilesystem: true
 capabilities:
  drop:
   - all
# Select the latest .NET container for Alpine Linux 
# from [<https://hub.docker.com/_/microsoft-dotnet-aspnet/>](<https://hub.docker.com/_/microsoft-dotnet-aspnet/>)
ARG VERSION=3.1-alpine

# Acknowledgements:
# This file was derived with the help of a combination of <https://github.com/ironPeakServices/iron-alpine/blob/master/Dockerfile>
# and these 2 blog posts <https://medium.com/01001101/containerize-your-net-core-app-the-right-way-35c267224a8d> and <https://medium.com/asos-techblog/minimising-your-attack-surface-by-building-highly-specialised-docker-images-example-for-net-b7bb177ab647>

# Stage 1: Build application
FROM mcr.microsoft.com/dotnet/core/sdk:$VERSION AS build-env

WORKDIR /build
COPY . .

# Publish app
RUN dotnet publish \\
  -c Release \\
  -o ./output \\
  -r alpine-x64 \\
  /p:PublishReadyToRun=true

# Stage 2: Copy application artifacts into a smaller, hardened runtime 
# environment, which is then used as our final image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-alpine

# Make a pipe fail on the first failure
SHELL ["/bin/sh", "-o", "pipefail", "-c"]

# The user the app should run as
ENV APP_USER=app
# The home directory
ENV APP_DIR="/$APP_USER"

# Harden docker image
COPY --from=build-env /build/harden.sh .
RUN chmod +x harden.sh && \\
  sh harden.sh && \\
  rm harden.sh

# default directory is /app
WORKDIR $APP_DIR

# Copy application over
COPY --from=build-env --chown=$APP_USER:$APP_USER /build/output .
ENV ASPNETCORE_URLS=http://+:8080

# Run some post install hardening commands
COPY --from=build-env /build/post-install.sh .
RUN chmod +x post-install.sh && \\
  sh post-install.sh && \\
  rm post-install

# Run app as non root user
USER $APP_USER
EXPOSE 8080
ENTRYPOINT ["dotnet", "MyApp.dll"]
```
