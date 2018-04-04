---
id: 487
title: Meld on Cygwin
date: 2014-12-18T21:22:11+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=487
permalink: /2014/12/meld-on-cygwin/
seo_content_helper:
  - 'a:2:{s:9:"keywords1";N;s:9:"keywords2";N;}'
dsq_thread_id:
  - "3440837318"
categories:
  - All
---
Meld is a graphical diff and merge program for comparing files. It is particularly good at helping you review the differences between differing code. The project's homepage is <a title="http://meldmerge.org" href="http://meldmerge.org">http://meldmerge.org</a>, and like many good programs, it can run on Cygwin, though you will need <a title="Installing X" href="http://cygwin.rafaelhart.com/installing-cygwin-2/installing-x/">X Windows</a> up and running. Note that there is a Windows Installer at <a title="http://sourceforge.net/projects/meld-installer/" href="http://sourceforge.net/projects/meld-installer/">http://sourceforge.net/projects/meld-installer/</a>, but the result won't be integrated into your cygwin environment.

<a href="https://www.rafaelhart.com/wp-content/uploads/2014/12/meld.jpg"><img class="aligncenter size-large wp-image-488" src="http://cygwin.rafaelhart.com/wp-content/uploads/2014/12/meld-1024x404.jpg" alt="meld" width="720" height="284" /></a>
The requirements for installation are available as cygwin packages, but not for the latest version. While you could spend many hours messing around with packaging GTK3, a better solution is to install the GTK2 version, which was released July 2014. You need to have:
<ul>
	<li>python</li>
	<li>libglib2.0_0</li>
	<li>python-gobject</li>
	<li>python-gtksourceview2</li>
	<li>python-gi</li>
	<li>intltool</li>
	<li>itstool</li>
	<li>rarian</li>
</ul>
Once these packages are installed, you can download the source code and install with:
<pre class=""># Download the GTK2 version
wget https://download.gnome.org/sources/meld/1.8/meld-1.8.6.tar.xz

# Extract it and change into that directory
tar xvf meld-1.8.6.tar.xz
cd meld-1.8.6

# Then install it
make
make install</pre>
After this point you should be able to launch meld from the command line, provided <a title="Installing X" href="http://cygwin.rafaelhart.com/installing-cygwin-2/installing-x/">X Windows</a> is running. The shell will wait for meld to exit before continuing, so it's best to set up an alias to fork it into the background.
<pre class="">alias meld="meld &"
</pre>