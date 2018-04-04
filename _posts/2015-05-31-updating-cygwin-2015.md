---
id: 594
title: Updating Cygwin (2015)
date: 2015-05-31T19:12:08+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=594
permalink: /2015/05/updating-cygwin-2015/
dsq_thread_id:
  - "3835016625"
categories:
  - All
---
Cygwin doesn't automatically update itself, and doesn't provide a command line utility to do so. In order to get updates, and install or remove software, you need to run the installer again. Occasionally, you will also need to get an updated copy of the installer. Fortunately, all this can be automated:

The option I use is to create a small bash script which checks <a href="http://www.cygwin.com">www.cygwin.com</a> to see if there is a newer setup file, download it if there is an update, and then run it, with a few parameters that stop it from creating a dozen shortcuts on your desktop, etc. Thanks to the functionality of wget (which you'll have to install) this is as simple as:
<pre class="">#!/bin/bash
wget -NP /usr/local/bin/ http://cygwin.com/setup-x86_64.exe
chmod u+x /usr/local/bin/setup-x86_64.exe
/usr/local/bin/setup-x86_64.exe -n</pre>
The script downloads a copy of the setup executable to your /usr/local/bin directory, which is the correct place for locally installed programs of this sort. I'd recommend putting this script in that directory too, then making sure it's in your path variable so that you can run it.
<pre class=""># Change to the appropriate directory
cd /usr/local/bin

# Create a script for editing. I'm going to call mine 'update'
nano update

# After entering the script into that file, save it and make it executable.
chmod u+x update

# And make sure /usr/local/bin is in your .bashrc path variable, or add it like so:
PATH="$PATH:/usr/local/bin"
export PATH</pre>
Alternately, there is a command line installer, much like Debian's apt-get, called <a href="https://github.com/transcode-open/apt-cyg">apt-cyg</a>, which has now moved off Google Code, onto Github. It allows you to install or remove new packages from the command line, which is neat, but it's one fatal flaw is that it doesn't have a command which allows you to scan the installed packages for available updates, so it won't remove your need to use the original setup program. You can install it with the following commands:
<pre class="">lynx -source rawgit.com/transcode-open/apt-cyg/master/apt-cyg > apt-cyg
install apt-cyg /bin
</pre>