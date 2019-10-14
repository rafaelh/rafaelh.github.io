---
title: Installing Node.js on Kali Linux
date: 2017-08-27
layout: post
permalink: /2017/08/installing-node-js-on-kali-linux/
img: logos/nodejs.png
tags: [nodejs, linux]
---
Most of the guides I've found on how to do this are fairly involved, requiring you to build from source and install without a .dpkg, which is messy if you ever want to change your installation. Installing Node.js is the same as for Debian:


``` sh
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs
```

The package **build-essential** is required for compiling and installing native packages, but it's already included in Kali's base image.

As time moves on, you can see the most up to date Node.js version at [https://github.com/nodesource/distributions](https://github.com/nodesource/distributions)