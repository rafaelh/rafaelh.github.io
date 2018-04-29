---
title: Shellshock + PHP
date: 2014-10-05
layout: post
permalink: /2014/10/shellshock-php/
img: 2014/2014-10-05-shellshock.png
tags: [cygwin, security]
---
Just a quick update for those living in Cygwin-land.

Cygwin was vulnerable to the [shellshock vulnerability](http://web.nvd.nist.gov/view/vuln/search-results?query=CVE-2014-6271&amp;search_type=all&amp;cves=on), and the subsequent vulnerabilities that have been found. Bash has experienced a series of updates, which would seem to indicate that the maintainers are keeping pace with the security patches as they are released.

PHP has been released in the Cygwin installer, meaning that you no longer have to install it from <a title="Cygwin Ports" href="http://cygwin.rafaelhart.com/installing-cygwin-2/cygwin-ports/">cygports</a>. I'll update my apache guide soon to include getting php operational.

*UPDATE (2018): I later learned at Ruxcon 13 that multiple shellshock-like vulnerabilities were fuzzed out of bash using [American Fuzzy Lop](http://lcamtuf.coredump.cx/afl/). If you've felt over the last few years that there seem to be a lot of bash updates, that's probably one reason why.*