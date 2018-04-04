---
id: 515
title: dtrx on Cygwin
date: 2015-01-22T20:32:19+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=515
permalink: /2015/01/dtrx-on-cygwin/
dsq_thread_id:
  - "3447203014"
categories:
  - All
---
These days, most files that are compressed come in 7zip, zip or tar/gunzip format, though there are a myriad of other types out there. I first cut my teeth on arj, but those were the days of DOOM, Slackware 3.0 and floppy disks. When you do come across an unfamiliar format, it can slow down your workflow to look for the right switches, which is where dtrx - "Do the Right Extraction" comes in. It will extract bz2, cab, cpio, deb, gem, gz, lzh, lzma, rar, rpm, xz, 7z and a variety of other niche compressions. It depends on Python, and you can install it with:

<pre>
wget http://brettcsmith.org/2007/dtrx/dtrx-7.1.tar.gz
tar xvf dtrx-7.1.tar.gz
cd dtrx-7.1
python setup.py install --prefix=/usr/local

# Then just make sure that you have /usr/local/bin in your cygwin path, with a line like 
# the following in your .bashrc
PATH="$PATH:/usr/local/bin"
</pre>

To quote from the features:

<ul>
<li><strong>Keeps everything organized:</strong> dtrx will make sure that archives are extracted into their own dedicated directories.</li>
<li><strong>Sane permissions:</strong> dtrx makes sure you can read and write all the files you just extracted, while leaving the rest of the permissions intact.</li>
<li><strong>Recursive extraction:</strong> dtrx can find archives inside the archive and extract those too.</li>
</ul>
It's really useful.