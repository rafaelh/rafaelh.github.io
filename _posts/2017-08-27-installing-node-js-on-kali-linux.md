---
id: 1545
title: Installing Node.js on Kali Linux
date: 2017-08-27T11:32:38+00:00
author: Rafael
layout: post
guid: https://www.rafaelhart.com/?p=1545
permalink: /2017/08/installing-node-js-on-kali-linux/
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
Most of the guides I've found on how to do this are fairly involved, requiring you to build from source and install without a .dpkg, which is messy if you ever want to change your installation. Installing Node.js is the same as for Debian:
<pre class="lang:sh decode:true ">curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt install -y nodejs</pre>
The package <span class="lang:sh decode:true  crayon-inline ">build-essential</span> is required for compiling and installing native packages, but it's already included in Kali's base image.