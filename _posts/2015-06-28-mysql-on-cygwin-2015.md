---
id: 622
title: mysql on Cygwin (2015)
date: 2015-06-28T21:42:01+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=622
permalink: /2015/06/mysql-on-cygwin-2015/
dsq_thread_id:
  - "3888458833"
categories:
  - All
---
MySQL is a well known database, which you will need if you plan on setting up a locally hosted site for web development, or similar. MariaDB, a fork of the project which came into existence after Oracle purchased MySQL, is not yet available on Cygwin as of 2015 or on <a title="Cygwin Ports" href="http://cygwin.rafaelhart.com/installing-cygwin-2/cygwin-ports/">CygwinPorts</a>, but watch this space.
<h1>MySQL on Cygwin</h1>
You need to run the Cygwin Setup program, and install:
<ul>
	<li>mysql</li>
	<li>mysqld</li>
</ul>
Once they and their dependencies have been installed, you can begin configuring MySQL at the command line:
<pre># To begin MySQL setup run the following:
mysql_install_db

# Run mysql - you'll get a firewall alert from windows if you have it active.
mysqld_safe &

# Immediately following that, it would be wise to run the following:
mysql_secure_installation
</pre>
You will likely get a warning from Windows Firewall, asking whether you want to allow connections to the database, and if so, what networks. I allow private networks, but you should choose what is appropriate for your setup. Since the secure installation prevents remote root login, it shouldn't be too much of a risk.

You should follow the setup program's suggestions and remove the test database, anonymous users, etc. Once this is done, you can launch MySQL by running <strong>mysqld_safe</strong>, and stop it with<strong> mysqladmin shutdown</strong>, though this can take up to a minute to take effect.

And that's it. MySQL on Cygwin is hardly server material, but it is good for practicing if you don't want to set up a VM for the purpose.