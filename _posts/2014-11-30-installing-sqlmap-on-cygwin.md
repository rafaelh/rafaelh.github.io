---
id: 458
title: Installing sqlmap on Cygwin
date: 2014-11-30T19:14:14+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=458
permalink: /2014/11/installing-sqlmap-on-cygwin/
seo_content_helper:
  - 'a:2:{s:9:"keywords1";N;s:9:"keywords2";N;}'
dsq_thread_id:
  - "3430563285"
categories:
  - All
---
Sqlmap is a tool for automating SQL injection discovery and exploitation on your websites, or your clients. Fortuitously it works well via cygwin, though it requires some setting up.

You can download and install sqlmap from the site (<a title="www.sqlmap.org" href="www.sqlmap.org">www.sqlmap.org</a>), but if you'd like to update it on an ongoing basis, it's better to clone it as a git repository:
<pre>git clone https://github.com/sqlmapproject/sqlmap.git /usr/local/bin/sqlmap
</pre>
Then add the directory to your path. You may also want to add an alias so that you aren't typing the '.py' bit all the time.
<pre># In your .bashrc
PATH="$PATH:/usr/local/bin/sqlmap"         # Sqlmap
export PATH
alias sqlmap='python /usr/local/bin/sqlmap/sqlmap.py'
</pre>
Once you have done this, you should be able to update sqlmap using git, which can be invoked from the program itself with:
<pre class="">sqlmap --update
</pre>
It goes without saying that you will need python and git installed on your computer. Several additional dependencies are needed to get full functionality out of sqlmap, which you can discover with the following command:
<pre>sqlmap --dependencies
</pre>
This will yield a list of python modules which are generally speaking not packaged for cygwin, but which can easily be installed. Take for example the following message:
<pre class="">[19:59:23] [WARNING] sqlmap requires 'python-pyodbc' third-party library in order to directly 
connect to the database Microsoft Access. Download from http://pyodbc.googlecode.com/
</pre>
Go to <a title="http://pyodbc.googlecode.com/" href="http://pyodbc.googlecode.com/">http://pyodbc.googlecode.com/</a>, and download the source code, in this case a .zip file. Extract it, go to the directory on the command line and run:
<pre>python setup.py install
</pre>
This particular module needed gcc-g++ installed, but many of them will install without additional dependencies. These will make the python modules available to your cygwin environment, and not any separate python environment you might have for windows. Remember not to download the windows versions of these modules if you're building for cygwin, as you're building as if you were in a linux environment.

It's all relatively straight forward, it just takes a bit of work. The end result is sqlmap working from the cygwin commandline, with an easy way of upgrading in the future.