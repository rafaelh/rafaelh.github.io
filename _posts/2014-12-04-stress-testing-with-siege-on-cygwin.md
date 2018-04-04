---
id: 466
title: Stress Testing with Siege, on Cygwin
date: 2014-12-04T20:06:56+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=466
permalink: /2014/12/stress-testing-with-siege-on-cygwin/
seo_content_helper:
  - 'a:2:{s:9:"keywords1";N;s:9:"keywords2";N;}'
dsq_thread_id:
  - "3435258418"
categories:
  - All
---
Siege is one of many website stress testers. It spawns multiple processes and begins requesting the pages from the target website as rapidly as it can. There is no attempt at obfuscation; it's very obvious, traceable and blockable, but it is good for seeing how your server will handle under load. You can get the source code from <a title="http://www.joedog.org/siege-home/" href="http://www.joedog.org/siege-home/">http://www.joedog.org/siege-home/</a>
<pre class=""># Get the source, or download it via your browser
wget http://download.joedog.org/siege/siege-3.0.7.tar.gz

# Untar and gunzip the file
tar xvf siege-3.0.7.tar.gz

# This produces the siege-3.0.7 directory which you must enter
cd siege-3.0.7

# Configure (requires devel/gcc-g++ installed)
./configure --prefix=/usr/ssl

# Make
make

# Install
make install

# Siege stores it's logfiles under /usr/local/var/, which we will need to create.
mkdir /usr/local/var

# Siege is controlled by .siegerc. Run the following to create one in your home directory
siege.config</pre>
Once installed, you can invoke it with <strong>siege www.sitename.com</strong>. For more information, look at <strong>man siege</strong>. As mentioned above, the program is configured with a .siegerc file - you can see what your current active settings are by running:
<pre class="">siege -C
</pre>