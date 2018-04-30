---
title: Setting up Apache on Cygwin
date: 2014-07-27
layout: post
permalink: /2014/07/setting-up-apache-on-cygwin/
img: logos/apache.png
tags: [cygwin]
---

# Installing apache2 on Cygwin

Theoretically this should be easy, but depending on the type of webpages you'd like to run, you may require a little help from the [Cygwin Ports](http://cygwin.rafaelhart.com/installing-cygwin-2/cygwin-ports/) project, as php, django, etc are not packaged by the cygwin project.

The first step is to run the cygwin setup program and install apache2, which is located under the web programs group.

Once that is done, you need to start with the setup of the daemon. If you've already installed sshd, then during that process you should have created the cyg_server account that these daemons run under. If you haven't created it, you can do so by running **'cygserver-config'**, though you will be offered the option to set it up when you configure apache anyway.

``` sh
# You can configure apache2 with the following command:
httpd2-config

# And then start it with:
cygrunsrv --start httpd2
```

The configuration is stored in /etc/apache2/httpd.conf, and apache2 expects your webpages to be stored in /srv/www/htdocs.

# That didn't work, I get: 'Win32 error 1062' instead

Okay, this can be from a whole bunch of reasons, from 3rd parties packaging another version of cygwin1.dll in your path to incorrect privilege separation. The fix for me was as follows:

``` sh
# First remove the service you just installed so it doesn't conflict with anything
cygrunsrv --remove httpd2
```

Next, close cygwin and start it up again with administrator rights:

{: style="text-align: center"}
![Cygwin with Admin Rights]({{site.baseurl}}/assets/img/2014/2014-07-27-runasadmin.jpg)

``` sh
# Make sure cygserver is set up as a service, with the correct rights
cygserver-config

# Which produces:
# Do you want to install cygserver as service?
# (Say "no" if it's already installed as service) (yes/no) yes

# Now install apache2 manually
cygrunsrv -I httpd2 -d "CYGWIN httpd2" -p /usr/sbin/httpd2 -a "-DNO_DETACH" -y cygserver -e "CYGWIN=server" -s TERM -o

# And try running it again...
cygrunsrv --start httpd2
```

Once the server starts, you should be able to go to http://localhost in a browser, and see the default page saying 'It works!'
