---
title: pydf & Disk Space on Cygwin
date: 2015-06-21
layout: post
permalink: /2015/06/pydf-disk-space-on-cygwin/
img: 2015/2015-07-12-cygwin.jpg
tags: [cygwin]
published: true
---
Occasionally you may want to check your diskspace, and via cygwin, you can see all the drives mounted on your computer via the 'df' command line utility. A slightly nicer approach however is pydf, a python-based replacement.

The [website](http://kassiopeia.juls.savba.sk/~garabik/software/pydf/) for pydf contains all the files you will need - just download, extract and alias the script:

``` sh
# Download the tarball
wget http://kassiopeia.juls.savba.sk/~garabik/software/pydf/pydf_12.tar.gz

# Extract and move the files
tar xvf pydf_12.tar.gz && mv pydf-12 /usr/local/bin/

# Copy the man file into the right place
cp /usr/local/bin/pydf-12/pydf.1 /usr/share/man/man1/

# Add an alias to your .bashrc to use it:
alias 'df'='/usr/local/bin/pydf-12/pydf'
```

Then when you run it, your disk space should be displayed like so:

{: style="text-align: center"}
![Anonymous Pro Font]({{site.baseurl}}/assets/img/2015/2015-06-21-pydf.jpg)
