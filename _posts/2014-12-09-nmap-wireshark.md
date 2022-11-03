---
title: Nmap & Wireshark
date: 2014-12-09
layout: post
permalink: /2014/12/nmap-wireshark/
img: 2014/2014-12-09-wiresharknmap.jpg
tags: [cygwin]
---
Both very handy tools, [Nmap](http://www.nmap.org) allows you to scan an object for listening ports, discover services on a network and more. [Wireshark](http://www.wireshark.org) lets you log network traffic and analyse it. Both leverage winpcap to work on Windows.

To be honest, both come with GUI tools which are great to work with, and you may not need them at the command line, but since the option is available, it can be convenient, especially if you're working in multiple terminals with something like tmux.

# Installing Nmap

Go to [Nmap](http://www.nmap.org), download and install nmap, and WinPCap (bundled with it).

``` sh
# nmap just requires an alias in your .bashrc, nothing more:
alias nmap="/cygdrive/c/Program Files (x86)/Nmap/nmap.exe"

# Then you can run nmap with:
nmap

# For example, to discover hosts on your network 192.168.0.0/24
nmap -sP 192.168.0.0/24
```

A great list of commands is available [here](http://www.cyberciti.biz/networking/nmap-command-examples-tutorials/)

# Installing Wireshark
Go to [www.wireshark.org](http://www.wireshark.org), download and install Wireshark (and WinPCap if you haven't already).

``` sh
# Check that you are part of the 'Administrators' group
groups

# Provided you are, recursively add read/write/execute permissions to group members for
# the wireshark directory
chmod -R g+rwx /cygdrive/c/Program Files/Wireshark/*

# Then create aliases for all of the executables.

alias capinfos="/cygdrive/c/Program Files/Wireshark/capinfos"
alias dumpcap="/cygdrive/c/Program Files/Wireshark/dumpcap"
alias editcap="/cygdrive/c/Program Files/Wireshark/editcap"
alias mergecap="/cygdrive/c/Program Files/Wireshark/mergecap"
alias rawshark="/cygdrive/c/Program Files/Wireshark/rawshark"
alias reordercap="/cygdrive/c/Program Files/Wireshark/reordercap"
alias text2pcap="/cygdrive/c/Program Files/Wireshark/text2pcap"
alias tshark="/cygdrive/c/Program Files/Wireshark/tshark"

# You could also add this to your path with the following line:
# PATH="$PATH:/cygdrive/c/Program Files/Wireshark/"
# but I prefer keeping the path small, and adding the directory would also add the
# uninstall program

# Reopen mintty or reload your .bashrc to add the aliases
source ~/.bashrc

# Then you can run Terminal Wireshark
tshark

# To select a particular interface, list the available ones:
tshark -D

# Then select your interface with the correct interface number
tshark -i <# of interface>

# Show network traffic - you'll probably want to redirect output to a file 
tshark -i <# of interface> -w filename 
```
