---
id: 1367
title: securityheaders.io
date: 2016-02-07T19:46:10+00:00
author: Rafael
layout: post
guid: https://www.rafaelhart.com/?p=1367
permalink: /2016/02/securityheaders-io/
nkweb_code_in_head:
  - default
  - default
nkweb_Use_Custom_js:
  - default
  - default
nkweb_Custom_js:
  - ""
  - ""
nkweb_Use_Custom_Values:
  - default
  - default
nkweb_Custom_Values:
  - ""
  - ""
nkweb_Use_Custom:
  - 'false'
  - 'false'
nkweb_Custom_Code:
  - ""
  - ""
categories:
  - All
---
According to Verizon, 9.4% of breaches last year occurred through vulnerabilities in web applications. A lot of these vulnerabilities were SQL injections and the like, which really shouldn't happen these days, especially when you consider that most professional companies should be using a framework for development. However, many of the other potential vulnerabilities can be reduced by tightening the scope of your server config.

This is where <a href="https://securityheaders.io">securityheaders.io</a> is a great tool. It's a project of <a href="https://scotthelme.co.uk/">Scott Helme's</a> and it does what is says on the label - checks the headers of your server for security improvements.

<img class="aligncenter size-large wp-image-1380" src="https://www.rafaelhart.com/wp-content/uploads/2016/02/securityheaders-1024x206.png" alt="Example of securityheaders.io output" width="720" height="145" />
<p style="text-align: center;"><em>(I'm not using public key pins because LetsEncrypt certificates only last 3 months, and I'm going for low maintenance... until I can automate it)</em></p>
Using this site to check around, it becomes clear that, since http headers are invisible to most people, they aren't being applied. There is a lot of security in the world that is just theater... and in the physical world that does work. Unfortunately for the digital world, it is possible to check every door and try to pick every lock. Security consultants will have work for many years to come; but their typical clients will be people who have suffered a breach. There is a natural cognitive bias against risks that we personally have experienced, and it's alive and well in cybersecurity.

btw, if you use apache, <a href="https://github.com/h5bp/server-configs-apache">check this out</a> for config examples.