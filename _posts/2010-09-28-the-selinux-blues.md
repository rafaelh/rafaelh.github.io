---
id: 3
title: The SELinux Blues
date: 2010-09-28T16:14:42+00:00
author: Rafael
layout: post
guid: http://www.electrickinetic.com/?p=3
permalink: /2010/09/the-selinux-blues/
categories:
  - All
---
Okay, so I can see why you would want to have SELinux enabled in order to keep everything on the server where it should be. It is, however, making for uphill work setting up WordPress to be able to create it's own directories, etc. Still, I can't bring myself to change SELinux out of enforcing mode. I guess I'll go hunting the right boolean to change tomorrow.

<strong>Update:</strong>
so, setting the following -
<pre>setsebool -P ftpd_disable_trans=1</pre>
After restarting the service, allows ftp users to create directories.
<pre>setsebool -P httpd_disable_trans=1</pre>
After restarting the service, allows wordpress to use the themes properly.

The problem with this is that it effectively means you're disabling selinux for two major services. Once I've had a chance to read up on it, I'll find out what selinux context the files should have, and try re-enabling it for these services.