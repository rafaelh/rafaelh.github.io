---
id: 528
title: ShellCheck
date: 2015-02-15T18:39:10+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=528
permalink: /2015/02/shellcheck/
dsq_thread_id:
  - "3601184827"
categories:
  - All
---
This is a quick note to share a useful tool by Vidar 'koala_man' Holen, <a title="ShellCheck" href="http://www.shellcheck.net">www.shellcheck.net</a>. ShellCheck is a site that allows you to paste in your bash scripts and receive automated feed back on common errors and security holes.

<a href="http://www.shellcheck.net"><img class="aligncenter wp-image-529 size-full" src="https://www.rafaelhart.com/wp-content/uploads/2015/02/shellcheck.png" alt="ShellCheck checks your scripts for errors" width="630" height="614" /></a>

For most cygwin users, sending your shell scripts over an unencrypted internet connection will have to be sufficient. You can download and compile ShellCheck locally, provided you have 2G of RAM available to do it, but GHC does not work with Cygwin, and won't be able to locate anything using the Cygwin path structure, such as '/bin/bash', and neither will the programs it compiles.

The issue is explained in more depth <a href="https://downloads.haskell.org/~ghc/7.6.3/docs/html/users_guide/ghci-cygwin.html">here</a> - let me know if you can get it running!