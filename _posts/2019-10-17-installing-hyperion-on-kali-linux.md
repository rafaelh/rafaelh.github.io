---
title: Installing Hyperion on Kali Linux
date: 2019-10-17
layout: post
permalink: /2019/10/installing-hyperion-on-kali-linux/
featured_image: /assets/img/logos/nullsecurity.jpg
excerpt: Hyperion is a runtime encrypter for 32/64 bit portable executables, typically used to evade antivirus software. Here are step by step instructions to build hyperion on your Kali system.
---
Hyperion is a runtime encrypter for 32/64 bit portable executables, made by [NullSecurity](http://nullsecurity.net/), typically used to evade antivirus software. You can check for the most recent version [here](https://github.com/nullsecuritynet/tools/tree/master/binary/hyperion/release), and install it on Kali Linux with a variation of these commands.

## Building Hyperion

``` sh
# We intend to run this on Windows, so we need a windows cross compiler
apt install update
apt install mingw-w64

# Get Hyperion and unzip it in an appropriate directory
wget https://github.com/nullsecuritynet/tools/raw/master/binary/hyperion/release/Hyperion-1.2.zip
unzip Hyperion-1.2.zip

# Then build it
i686-w64-mingw32-c++ Hyperion-1.2/Src/Crypter/*.cpp -o hyperion.exe
```

Where you put the built file now is up to you, but ```/usr/local/bin``` is the traditional location for locally built stuff.