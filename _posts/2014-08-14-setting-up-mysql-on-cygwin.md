---
id: 368
title: Setting up MySQL on Cygwin
date: 2014-08-14T21:50:24+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=368
permalink: /2014/08/setting-up-mysql-on-cygwin/
seo_content_helper:
  - 'a:2:{s:9:"keywords1";a:1:{i:0;s:15:"mysql on cygwin";}s:9:"keywords2";N;}'
dsq_thread_id:
  - "3436659684"
categories:
  - All
---
MySQL is a well known database program, which you will need if you plan on setting up a locally hosted site for web development, or similar. MariaDB, a fork of the project which came into existence after Oracle purchased MySQL, is not yet available on Cygwin or <a title="Cygwin Ports" href="http://cygwin.rafaelhart.com/installing-cygwin-2/cygwin-ports/">CygwinPorts</a>, but watch this space.
<h1>MySQL on Cygwin</h1>
You need to run the Cygwin Setup program, and install:
<ul>
	<li>mysql</li>
	<li>mysqld</li>
</ul>
Once they and their dependencies have been installed, you can begin configuring MySQL at the command line:
<pre abp="1640"># To begin MySQL setup run the following:
mysql_install_db

# Run mysql - you'll get a firewall alert from windows if you have it active.
mysqld_safe &

# Immediately following that, it would be wise to run the following:
mysql_secure_installation
</pre>
In case you're not aware, you should follow the setup program's suggestions and remove the test database, anonymous users, etc. Once this is done, you can launch MySQL by running <strong>mysqld_safe</strong>, and stop it with<strong> mysqladmin shutdown</strong>, though this can take up to a minute to take effect.

And that's it. MySQL on Cygwin is hardly server material, but it is good for practicing if you don't want to set up a VM for the purpose.