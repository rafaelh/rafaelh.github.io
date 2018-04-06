---
title: Installing Node.js on Kali Linux
date: 2017-08-27
layout: post
permalink: /2017/08/installing-node-js-on-kali-linux/
img: logos/nodejs.png
tags: [nodejs, linux]
published: true
---
Most of the guides I've found on how to do this are fairly involved, requiring you to build from source and install without a .dpkg, which is messy if you ever want to change your installation. Installing Node.js is the same as for Debian:

<pre class="lang:sh decode:true ">
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt install -y nodejs
</pre>

The package <span class="lang:sh decode:true  crayon-inline ">build-essential</span> is required for compiling and installing native packages, but it's already included in Kali's base image.