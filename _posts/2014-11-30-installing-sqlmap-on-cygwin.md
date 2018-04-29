---
title: Installing sqlmap on Cygwin
date: 2014-11-30
layout: post
permalink: /2014/11/installing-sqlmap-on-cygwin/
img: 2015/2015-02-15-project-finished.jpg
tags: [cygwin, security]
---

Sqlmap is a tool for automating SQL injection discovery and exploitation on your websites, or your clients. Fortuitously it works well via cygwin, though it requires some setting up.

You can download and install sqlmap from the site ([www.sqlmap.org](www.sqlmap.org)), but if you'd like to update it on an ongoing basis, it's better to clone it as a git repository:

```sh
git clone https://github.com/sqlmapproject/sqlmap.git /usr/local/bin/sqlmap
```

Then add the directory to your path. You may also want to add an alias so that you aren't typing the '.py' bit all the time.

``` sh
# In your .bashrc
PATH="$PATH:/usr/local/bin/sqlmap"         # Sqlmap
export PATH
alias sqlmap='python /usr/local/bin/sqlmap/sqlmap.py'
```

Once you have done this, you should be able to update sqlmap using git, which can be invoked from the program itself with:

``` sh
sqlmap --update
```

It goes without saying that you will need python and git installed on your computer. Several additional dependencies are needed to get full functionality out of sqlmap, which you can discover with the following command:

``` sh
sqlmap --dependencies
```

This will yield a list of python modules which are generally speaking not packaged for cygwin, but which can easily be installed. Take for example the following message:
```
[19:59:23] [WARNING] sqlmap requires 'python-pyodbc' third-party library in order to directly 
connect to the database Microsoft Access. Download from http://pyodbc.googlecode.com/
```

Go to [http://pyodbc.googlecode.com/](http://pyodbc.googlecode.com/), and download the source code, in this case a .zip file. Extract it, go to the directory on the command line and run:

``` sh
python setup.py install
```

This particular module needed gcc-g++ installed, but many of them will install without additional dependencies. These will make the python modules available to your cygwin environment, and not any separate python environment you might have for windows. Remember not to download the windows versions of these modules if you're building for cygwin, as you're building as if you were in a linux environment.

It's all relatively straight forward, it just takes a bit of work. The end result is sqlmap working from the cygwin commandline, with an easy way of upgrading in the future.
