---
title: Meld on Cygwin
date: 2014-12-18
layout: post
permalink: /2014/12/meld-on-cygwin/
img: 2014/2014-12-18-meld-mary.png
tags: [cygwin]
---
Meld is a graphical diff and merge program for comparing files. It is particularly good at helping you review the differences between differing code. The project's homepage is [http://meldmerge.org](http://meldmerge.org), and like many good programs, it can run on Cygwin, though you will need **X Windows** up and running. Note that there is a Windows Installer at [http://sourceforge.net/projects/meld-installer/](http://sourceforge.net/projects/meld-installer/), but the result won't be integrated into your cygwin environment.

{: style="text-align: center"}
![WhatWeb]({{site.baseurl}}/assets/img/2014/2014-12-18-meld.jpg)

The requirements for installation are available as cygwin packages, but not for the latest version. While you could spend many hours messing around with packaging GTK3, a better solution is to install the GTK2 version, which was released July 2014. You need to have:

* python
* libglib2.0_0
* python-gobject
* python-gtksourceview2
* python-gi
* intltool
* itstool
* rarian

Once these packages are installed, you can download the source code and install with:

``` sh
# Download the GTK2 version
wget https://download.gnome.org/sources/meld/1.8/meld-1.8.6.tar.xz

# Extract it and change into that directory
tar xvf meld-1.8.6.tar.xz
cd meld-1.8.6

# Then install it
make
make install
```

After this point you should be able to launch meld from the command line, provided X Windows is running. The shell will wait for meld to exit before continuing, so it's best to set up an alias to fork it into the background.

``` sh
alias meld="meld &"
```
