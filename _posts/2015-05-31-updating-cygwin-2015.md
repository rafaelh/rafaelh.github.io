---
title: Updating Cygwin
date: 2015-05-31
layout: post
permalink: /2015/05/updating-cygwin-2015/
img: 2015/2015-07-12-cygwin.jpg
tags: [cygwin]
published: true
---
Cygwin doesn't automatically update itself, and doesn't provide a command line utility to do so. In order to get updates, and install or remove software, you need to run the installer again. Occasionally, you will also need to get an updated copy of the installer. Fortunately, all this can be automated:

The option I use is to create a small bash script which checks [www.cygwin.com](www.cygwin.com) to see if there is a newer setup file, download it if there is an update, and then run it, with a few parameters that stop it from creating a dozen shortcuts on your desktop, etc. Thanks to the functionality of wget (which you'll have to install) this is as simple as:

``` sh
#!/bin/bash
wget -NP /usr/local/bin/ http://cygwin.com/setup-x86_64.exe
chmod u+x /usr/local/bin/setup-x86_64.exe
/usr/local/bin/setup-x86_64.exe -n
```

The script downloads a copy of the setup executable to your /usr/local/bin directory, which is the correct place for locally installed programs of this sort. I'd recommend putting this script in that directory too, then making sure it's in your path variable so that you can run it.

``` sh
# Change to the appropriate directory
cd /usr/local/bin

# Create a script for editing. I'm going to call mine 'update'
nano update

# After entering the script into that file, save it and make it executable.
chmod u+x update

# And make sure /usr/local/bin is in your .bashrc path variable, or add it like so:
PATH="$PATH:/usr/local/bin"
export PATH
```

Alternately, there is a command line installer, much like Debian's apt-get, called [apt-cyg](https://github.com/transcode-open/apt-cyg), which has now moved off Google Code, onto Github. It allows you to install or remove new packages from the command line, which is neat, but it's one fatal flaw is that it doesn't have a command which allows you to scan the installed packages for available updates, so it won't remove your need to use the original setup program. You can install it with the following commands:

``` sh
lynx -source rawgit.com/transcode-open/apt-cyg/master/apt-cyg > apt-cyg
install apt-cyg /bin
```
