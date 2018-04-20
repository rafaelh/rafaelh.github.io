---
title: Stress Testing with Siege, on Cygwin
date: 2014-12-04
layout: post
permalink: /2014/12/stress-testing-with-siege-on-cygwin/
img: 2015/2015-07-12-cygwin.jpg
tags: [cygwin, security]
---
Siege is one of many website stress testers. It spawns multiple processes and begins requesting the pages from the target website as rapidly as it can. There is no attempt at obfuscation; it's very obvious, traceable and blockable, but it is good for seeing how your server will handle under load. You can get the source code from [http://www.joedog.org/siege-home](http://www.joedog.org/siege-home/)

``` sh
# Get the source, or download it via your browser
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
siege.config
```

Once installed, you can invoke it with **siege www.sitename.com**. For more information, look at **man siege**. As mentioned above, the program is configured with a .siegerc file - you can see what your current active settings are by running:

``` sh
siege -C
```
