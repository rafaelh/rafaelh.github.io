---
id: 614
title: 'pydf &#8211; Disk Space on Cygwin'
date: 2015-06-21T19:18:56+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=614
permalink: /2015/06/pydf-disk-space-on-cygwin/
dsq_thread_id:
  - "3817227483"
categories:
  - All
---
Occasionally you may want to check your diskspace, and via cygwin, you can see all the drives mounted on your computer via the 'df' command line utility. A slightly nicer approach however is pydf, a python-based replacement.

The <a href="http://kassiopeia.juls.savba.sk/~garabik/software/pydf/">website</a> for pydf contains all the files you will need - just download, extract and alias the script:
<pre class=""># Download the tarball
wget http://kassiopeia.juls.savba.sk/~garabik/software/pydf/pydf_12.tar.gz

# Extract and move the files
tar xvf pydf_12.tar.gz && mv pydf-12 /usr/local/bin/

# Copy the man file into the right place
cp /usr/local/bin/pydf-12/pydf.1 /usr/share/man/man1/

# Add an alias to your .bashrc to use it:
alias 'df'='/usr/local/bin/pydf-12/pydf'
</pre>
Then when you run it, your disk space should be displayed like so:

<a href="https://www.rafaelhart.com/wp-content/uploads/2015/06/pydf.jpg"><img class="aligncenter size-full wp-image-615" src="https://www.rafaelhart.com/wp-content/uploads/2015/06/pydf.jpg" alt="pydf on Cygwin" width="900" height="278" /></a>