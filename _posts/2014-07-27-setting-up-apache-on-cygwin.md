---
id: 365
title: Setting up Apache on Cygwin
date: 2014-07-27T20:34:48+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=365
permalink: /2014/07/setting-up-apache-on-cygwin/
seo_content_helper:
  - 'a:2:{s:9:"keywords1";N;s:9:"keywords2";N;}'
dsq_thread_id:
  - "3526423010"
categories:
  - All
---
<h3>Installing apache2 on Cygwin</h3>
Theoretically this should be easy, but depending on the type of webpages you'd like to run, you may require a little help from the <a title="Cygwin Ports" href="http://cygwin.rafaelhart.com/installing-cygwin-2/cygwin-ports/">cygwinports </a>project, as php, django, etc are not packaged by the cygwin project.

The first step is to run the cygwin setup program and install apache2, which is located under the web programs group.

Once that is done, you need to start with the setup of the daemon. If you've already installed sshd, then during that process you should have created the cyg_server account that these daemons run under. If you haven't created it, you can do so by running <strong>'cygserver-config'</strong>, though you will be offered the option to set it up when you configure apache anyway.
<pre># You can configure apache2 with the following command:
httpd2-config

# And then start it with:
cygrunsrv --start httpd2
</pre>
The configuration is stored in /etc/apache2/httpd.conf, and apache2 expects your webpages to be stored in /srv/www/htdocs.
<h3>That didn't work, I get: 'Win32 error 1062' instead</h3>
Okay, this can be from a whole bunch of reasons, from 3rd parties packaging another version of cygwin1.dll in your path to incorrect privilege separation. The fix for me was as follows:
<pre># First remove the service you just installed so it doesn't conflict with anything
cygrunsrv --remove httpd2
</pre>
Next, close cygwin and start it up again with administrator rights:
<p style="text-align: justify;"><a href="https://www.rafaelhart.com/wp-content/uploads/2014/07/runasadmin.jpg"><img class="alignnone size-full wp-image-363" src="https://www.rafaelhart.com/wp-content/uploads/2014/07/runasadmin.jpg" alt="Running Cygwin as Admin" width="336" height="181" /></a></p>

<pre># Make sure cygserver is set up as a service, with the correct rights
cygserver-config
# Which produces:
Do you want to install cygserver as service?
(Say "no" if it's already installed as service) (yes/no) yes

# Now install apache2 manually
cygrunsrv -I httpd2 -d "CYGWIN httpd2" -p /usr/sbin/httpd2 -a "-DNO_DETACH" -y cygserver -e "CYGWIN=server" -s TERM -o

# And try running it again...
cygrunsrv --start httpd2
</pre>
Once the server starts, you should be able to go to http://localhost in a browser, and see the default page saying 'It works!'