---
title: MySQL in Windows Subsystem for Linux
date: 2017-08-08
layout: post
permalink: /2017/08/mysql-in-windows-subsystem-for-linux/
img: logos/mysql.jpg
tags: [mysql, wsl]
---
I'm recording this because I haven't come across any other good explanations in my googling. If you are using WSL for web development, it's likely that you are going to want to install mysql. Unfortunately, when you run it, you start to get errors like *"Can't start server: Bind on TCP/IP port: Address already in use"*. If you do get these, it's most likely because you've followed a set of instructions and skipped something in the preamble - you need to be on the latest version of windows.

I assume you have joined the [Windows Insider Program](https://insider.windows.com/en-us/), and installed WSL in the first place. Next, make sure you have the most recent version of windows using the [upgrade tool](https://www.microsoft.com/en-us/software-download/windows10).

Once that is installed, and you have been through many reboots, upgrade WSL:

``` sh
sudo do-release-upgrade

# When I did this, MySQL failed to upgrade from 5.5 to 5.7, so remove and reinstall:
sudo apt-get purge mysql* && sudo apt-get autoremove && sudo rm -rf /etc/mysql

# Then reinstall, start and secure:
sudo apt-get install mysql-server mysql-client
sudo mysql
```

If you run into any problems reinstalling mysql, it might be [this bug](https://bugs.launchpad.net/ubuntu/+source/mysql-5.7/+bug/1573279"), and you can find suggested solutions in the comments. That got it working for me, but if you still have problems, you can always reinstall WSL from scratch by opening an administrative powershell window, then running *lxrun /uninstall*, then *lxrun /install*. Remember that if you have installed MySQL for windows, you'll need to run WSL on a different port (change in */etc/mysql/mysql.conf.d/mysqld.cnf*), or uninstall it.