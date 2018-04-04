---
id: 1522
title: MySQL in Windows Subsystem for Linux
date: 2017-08-08T17:45:54+00:00
author: Rafael
layout: post
guid: https://www.rafaelhart.com/?p=1522
permalink: /2017/08/mysql-in-windows-subsystem-for-linux/
nkweb_code_in_head:
  - default
nkweb_Use_Custom_js:
  - default
nkweb_Custom_js:
  - ""
nkweb_Use_Custom_Values:
  - default
nkweb_Custom_Values:
  - ""
nkweb_Use_Custom:
  - 'false'
nkweb_Custom_Code:
  - ""
categories:
  - All
---
I'm recording this because I haven't come across any other good explanations in my googling. If you are using WSL for web development, it's likely that you are going to want to install mysql. Unfortunately, when you run it, you start to get errors like <i>"Can't start server: Bind on TCP/IP port: Address already in use"</i>. If you do get these, it's most likely because you've followed a set of instructions and skipped something in the preamble - you need to be on the latest version of windows.

I assume you have joined the <a href="https://insider.windows.com/en-us/">Windows Insider Program</a>, and installed WSL in the first place. Next, make sure you have the most recent version of windows using the <a href="https://www.microsoft.com/en-us/software-download/windows10">upgrade tool</a>.

Once that is installed, and you have been through many reboots, upgrade WSL:
<pre class="lang:sh decode:true">sudo do-release-upgrade

# When I did this, MySQL failed to upgrade from 5.5 to 5.7, so remove and reinstall:
sudo apt-get purge mysql* &amp;&amp; sudo apt-get autoremove &amp;&amp; sudo rm -rf /etc/mysql

# Then reinstall, start and secure:
sudo apt-get install mysql-server mysql-client
sudo mysql</pre>
If you run into any problems reinstalling mysql, it might be <a href="https://bugs.launchpad.net/ubuntu/+source/mysql-5.7/+bug/1573279">this bug</a>, and you can find suggested solutions in the comments. That got it working for me, but if you still have problems, you can always reinstall WSL from scratch by opening an administrative powershell window, then running <pre class="lang:sh decode:1 inline:1 " >lxrun /uninstall</pre> , then <pre class="lang:sh decode:1 inline:1 " >lxrun /install</pre> . Remember that if you have installed MySQL for windows, you'll need to run WSL on a different port (change in <pre class="lang:sh decode:1 inline:1 " >/etc/mysql/mysql.conf.d/mysqld.cnf</pre> ), or uninstall it.