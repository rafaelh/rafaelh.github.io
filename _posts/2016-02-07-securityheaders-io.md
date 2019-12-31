---
title: securityheaders.io
date: 2016-02-07
layout: post
permalink: /2016/02/securityheaders-io/
featured_image: 2016/2016-02-07-not-the-securityheaders-logo.png
excerpt: According to Verizon, 9.4% of breaches last year occurred through vulnerabilities in web applications. A lot of these vulnerabilities were SQL injections and the like, which really shouldn't happen these days, especially when you consider that most professional companies should be using a framework for development. However, many of the other potential vulnerabilities can be reduced by tightening the scope of your server config.
---
According to Verizon, 9.4% of breaches last year occurred through vulnerabilities in web applications. A lot of these vulnerabilities were SQL injections and the like, which really shouldn't happen these days, especially when you consider that most professional companies should be using a framework for development. However, many of the other potential vulnerabilities can be reduced by tightening the scope of your server config.

This is where [securityheaders.io](https://securityheaders.io) is a great tool. It's a [Scott Helme](https://scotthelme.co.uk/) project and it does what is says on the label - checks the headers of your server for security improvements.

{: style="text-align: center"}
![Example of securityheaders.io output]({{site.baseurl}}/assets/img/2016/2016-02-07-securityheaders.png)
(I'm not using public key pins because LetsEncrypt certificates only last 3 months, and I'm going for low maintenance... until I can automate it)

Using this site to check around, it becomes clear that, since http headers are invisible to most people, they aren't being applied. There is a lot of security in the world that is just theater... and in the physical world that does work. Unfortunately for the digital world, it is possible to check every door and try to pick every lock. Security consultants will have work for many years to come; but their typical clients will be people who have suffered a breach. There is a natural cognitive bias against risks that we personally have experienced, and it's alive and well in cybersecurity.

btw, if you use apache, [check this out](https://github.com/h5bp/server-configs-apache) for config examples.