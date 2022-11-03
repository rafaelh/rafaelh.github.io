---
title: mysql on Cygwin
date: 2015-06-28
layout: post
permalink: /2015/06/mysql-on-cygwin-2015/
img: 2015/2015-07-12-cygwin.jpg
tags: [cygwin]
---
MySQL is a well known database, which you will need if you plan on setting up a locally hosted site for web development, or similar. MariaDB, a fork of the project which came into existence after Oracle purchased MySQL, is not yet available on Cygwin as of 2015 or on [Cygwin Ports](http://cygwin.rafaelhart.com/installing-cygwin-2/cygwin-ports/), but watch this space.

# MySQL on Cygwin
You need to run the Cygwin Setup program, and install:

* mysql
* mysqld

Once they and their dependencies have been installed, you can begin configuring MySQL at the command line:

``` sh
# To begin MySQL setup run the following:
mysql_install_db

# Run mysql - you'll get a firewall alert from windows if you have it active.
mysqld_safe &

# Immediately following that, it would be wise to run the following:
mysql_secure_installation
```

You will likely get a warning from Windows Firewall, asking whether you want to allow connections to the database, and if so, what networks. I allow private networks, but you should choose what is appropriate for your setup. Since the secure installation prevents remote root login, it shouldn't be too much of a risk.

You should follow the setup program's suggestions and remove the test database, anonymous users, etc. Once this is done, you can launch MySQL by running **mysqld_safe**, and stop it with **mysqladmin shutdown**, though this can take up to a minute to take effect.

And that's it. MySQL on Cygwin is hardly server material, but it is good for practicing if you don't want to set up a VM for the purpose.
