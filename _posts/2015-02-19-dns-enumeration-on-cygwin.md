---
title: DNS Enumeration on Cygwin
date: 2015-02-19
layout: post
permalink: /2015/02/dns-enumeration-on-cygwin/
img: 2015/2015-07-12-cygwin.jpg
tags: [cygwin, security]
---
As part of pentesting your site, or that of a client, you will need to find all as much detail out about a domain and it's IP ranges as possible, or at least demonstrate what can be found via automated tools. Typically this is done through dig, or a bruteforcing tool like [dnsenum](https://code.google.com/p/dnsenum/) or [fierce.pl](http://ha.ckers.org/fierce/). Dig is installed with the bind-utils cygwin package, and it straightforward to use (type 'dig any domainname.com', or look at man dig to get started).

DNSenum gives you the ability to brute force domain names using a custom text file. dnsenum is written in perl, and requires several libraries to be installed first. From cygwin you'll need to have perl and several other modules - I've installed perl, perl-ExUtils-LibBuilder, perl-IO-Socket-IP, perl-IO-Socket-SSL, perl-Archive-Zip, perl-List-AllUtils, perl-List-MoreUtils.

``` sh
# Set up CPAN
cpan

# Which will show:
# CPAN.pm requires configuration, but most of it can be done automatically.
# If you answer 'no' below, you will enter an interactive dialog for each
# configuration option instead.
#
# Would you like to configure as much as possible automatically? [yes]

# From here, just press  for each option, till the configuration exits.

# Then install the required modules. If you have any errors with this, reboot 
# and do it again - according to stackexchange cpan seems to run into memory issues.
cpan Term::ANSIColor Getopt::Long IO::File Net::IP Net::DNS Net::Netmask Net::Whois::IP HTML::Parser WWW::Mechanize XML::Writer String::Random

# Clone the git repo to a directory in /usr/local/bin and make the perl script executable
git clone https://github.com/fwaeytens/dnsenum /usr/local/bin/dnsenum
chmod u+x /usr/local/bin/dnsenum/dnsenum.pl

# and add an alias to your .bashrc so you don't need to navigate to the directory
alias dnsenum="/usr/local/bin/dnsenum/dnsenum.pl"

# or alternately, if you are always going to use it to bruteforce...
alias dnsbrute="/usr/local/bin/dnsenum/dnsenum.pl --enum -f /usr/local/bin/dnsenum/dns.txt --update a -r"
```

Now that this is done, dnsenum should run. You can brute force a domain name with the following command:

``` sh
dnsenum --enum -f /usr/local/bin/dnsenum/dns.txt --update a -r exampledomain.com
```

[Fierce.pl](http://ha.ckers.org/fierce/) doesn't look like it's seen an update in a while, but it is included here for completeness

``` sh
# assuming you've already done the above, just download the file and make it executable.
mkdir /usr/local/bin/fierce
cd /usr/local/bin/fierce
wget http://ha.ckers.org/fierce/fierce.pl
http://ha.ckers.org/fierce/hosts.txt
chmod u+x fierce.pl

# and add a bash alias, as always
alias fierce="/usr/local/bin/fierce/fierce.pl"
```

Then execute with the following command, or see for more options

``` sh
fierce -dns example.com
```

Happy enumerating!
