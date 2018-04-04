---
id: 379
title: Shellshock + PHP
date: 2014-10-05T20:46:59+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=379
permalink: /2014/10/shellshock-php/
seo_content_helper:
  - 'a:2:{s:9:"keywords1";N;s:9:"keywords2";N;}'
dsq_thread_id:
  - "3522317162"
categories:
  - All
---
Just a quick update for those living in Cygwin-land.

Cygwin was vulnerable to the <a href="http://web.nvd.nist.gov/view/vuln/search-results?query=CVE-2014-6271&amp;search_type=all&amp;cves=on">shellshock vulnerability</a>, and the subsequent vulnerabilities that have been found. Bash has experienced a series of updates, which would seem to indicate that the maintainers are keeping pace with the security patches as they are released.

PHP has been released in the Cygwin installer, meaning that you no longer have to install it from <a title="Cygwin Ports" href="http://cygwin.rafaelhart.com/installing-cygwin-2/cygwin-ports/">cygports</a>. I'll update my apache guide soon to include getting php operational.