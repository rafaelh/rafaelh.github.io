---
id: 500
title: WhatWeb on Cygwin
date: 2015-01-06T10:23:50+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=500
permalink: /2015/01/whatweb-on-cygwin/
seo_content_helper:
  - 'a:2:{s:9:"keywords1";N;s:9:"keywords2";N;}'
dsq_thread_id:
  - "3425333692"
categories:
  - All
---
HTTP fingerprinting on windows normally uses a windows based gui, like <a title="httprint" href="http://www.net-square.com/httprint.html">httprint</a>, but there are some excellent command line options as well. Whatweb is a ruby program that identifies websites, their frameworks, language version, server version, etc. The current stable build is 0.4.6, which won't work on cygwin, since it's written for ruby 1.9, and cygwin currently ships with 2.0. Fortunately the git development copy 0.4.8 works just fine.
<p class="">You will need to have a ruby environment installed. The packages I have are as follows: <em>ruby, ruby-activesupport, ruby-builder, ruby-builder-doc, ruby-glib2, ruby-i18n, ruby-io-console, ruby-jbuilder, ruby-json, ruby-minitest4, ruby-multi_json, ruby-net-http-persistent, ruby-pkg-config, ruby-psych, ruby-rake, ruby-rdoc, ruby-thread_safe, ruby-tzinfo</em>. You could probably get away with less, but whatweb works with the above installed.</p>

<pre class=""># Download whatweb
git clone https://github.com/urbanadventurer/whatweb /usr/local/whatweb

# Update ruby gems & install optional dependencies
gem update --system
gem install json rchardet

# Then set an alias in your .bashrc 
alias whatweb='/usr/local/whatweb/whatweb'
</pre>
Now you should be able to use whatweb to identify a website, which should look something like this:

<a href="https://www.rafaelhart.com/wp-content/uploads/2015/01/whatweb_output.png"><img class="aligncenter size-full wp-image-501" src="https://www.rafaelhart.com/wp-content/uploads/2015/01/whatweb_output.png" alt="whatweb output" width="902" height="105" /></a>

As you can see, I've got some work to do obfuscating that information from people using tools like this. As a sidenote, if you install the mongo gem for logging, you will also need to install bson_ext, and you will encounter some errors. I don't need logging at this stage, so I haven't gone through seeing if they can be fixed.

Instructions on how to use whatweb can be obtained by running it, or looking at the <a href="https://github.com/urbanadventurer/whatweb">github site</a>.