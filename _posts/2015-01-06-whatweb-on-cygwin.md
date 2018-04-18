---
title: WhatWeb on Cygwin
date: 2015-01-06
layout: post
permalink: /2015/01/whatweb-on-cygwin/
img: 2015/2015-07-12-cygwin.jpg
tags: [cygwin, security]
---
HTTP fingerprinting on windows normally uses a windows based gui, like [httprint](http://www.net-square.com/httprint.html), but there are some excellent command line options as well. Whatweb is a ruby program that identifies websites, their frameworks, language version, server version, etc. The current stable build is 0.4.6, which won't work on cygwin, since it's written for ruby 1.9, and cygwin currently ships with 2.0. Fortunately the git development copy 0.4.8 works just fine.

You will need to have a ruby environment installed. The packages I have are as follows: *ruby, ruby-activesupport, ruby-builder, ruby-builder-doc, ruby-glib2, ruby-i18n, ruby-io-console, ruby-jbuilder, ruby-json, ruby-minitest4, ruby-multi_json, ruby-net-http-persistent, ruby-pkg-config, ruby-psych, ruby-rake, ruby-rdoc, ruby-thread_safe, ruby-tzinfo*. You could probably get away with less, but whatweb works with the above installed.

``` sh
# Download whatweb
git clone https://github.com/urbanadventurer/whatweb /usr/local/whatweb

# Update ruby gems & install optional dependencies
gem update --system
gem install json rchardet

# Then set an alias in your .bashrc 
alias whatweb='/usr/local/whatweb/whatweb'
```

Now you should be able to use whatweb to identify a website, which should look something like this:

{: style="text-align: center"}
![WhatWeb]({{site.baseurl}}/assets/img/2015/2015-01-06-whatweb.png)

As you can see, I've got some work to do obfuscating that information from people using tools like this. As a sidenote, if you install the mongo gem for logging, you will also need to install bson_ext, and you will encounter some errors. I don't need logging at this stage, so I haven't gone through seeing if they can be fixed.

Instructions on how to use whatweb can be obtained by running it, or looking at the [github site](https://github.com/urbanadventurer/whatweb).