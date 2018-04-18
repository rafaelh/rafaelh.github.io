---
title: ShellCheck
date: 2015-02-15
layout: post
permalink: /2015/02/shellcheck/
img: 2015/2015-02-15-shellcheck.png
tags: [cygwin]
---
This is a quick note to share a useful tool by Vidar 'koala_man' Holen, [www.shellcheck.net](http://www.shellcheck.net). ShellCheck is a site that allows you to paste in your bash scripts and receive automated feed back on common errors and security holes.

{: style="text-align: center"}
![ShellCheck checks your scripts for errors]({{site.baseurl}}/assets/img/2015/2015-02-15-shellcheckpage.png)

For most cygwin users, sending your shell scripts over an unencrypted internet connection will have to be sufficient. You can download and compile ShellCheck locally, provided you have 2G of RAM available to do it, but GHC does not work with Cygwin, and won't be able to locate anything using the Cygwin path structure, such as '/bin/bash', and neither will the programs it compiles.

The issue is explained in more depth [here](https://downloads.haskell.org/~ghc/7.6.3/docs/html/users_guide/ghci-cygwin.html) - let me know if you can get it running!