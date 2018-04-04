---
id: 474
title: 'Nmap &#038; Wireshark'
date: 2014-12-09T20:29:12+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=474
permalink: /2014/12/nmap-wireshark/
seo_content_helper:
  - 'a:2:{s:9:"keywords1";N;s:9:"keywords2";N;}'
dsq_thread_id:
  - "3441913049"
categories:
  - All
---
Both very handy tools, <a href="http://www.nmap.org">Nmap</a> allows you to scan an object for listening ports, discover services on a network and more. <a href="http://www.wireshark.org">Wireshark</a> lets you log network traffic and analyse it. Both leverage winpcap to work on Windows.

<a href="https://www.rafaelhart.com/wp-content/uploads/2014/12/wiresharknmap.jpg"><img class="aligncenter size-full wp-image-475" src="https://www.rafaelhart.com/wp-content/uploads/2014/12/wiresharknmap.jpg" alt="Wireshark &amp; Nmap" width="524" height="107" /></a>

To be honest, both come with GUI tools which are great to work with, and you may not need them at the command line, but since the option is available, it can be convenient, especially if you're working in multiple terminals with something like <a title=".tmux.conf" href="http://cygwin.rafaelhart.com/dotfiles/tmux-conf/">tmux</a>.

&nbsp;
<h1>Installing Nmap</h1>
Go to <a href="http://www.nmap.org" title="www.nmap.org">www.nmap.org</a>, download and install nmap, and WinPCap (bundled with it).
<pre class=""># nmap just requires an alias in your .bashrc, nothing more:
alias nmap="/cygdrive/c/Program Files (x86)/Nmap/nmap.exe"

# Then you can run nmap with:
nmap

# For example, to discover hosts on your network 192.168.0.0/24
nmap -sP 192.168.0.0/24
</pre>
A great list of commands is available here: <a title="http://www.cyberciti.biz/networking/nmap-command-examples-tutorials/" href="http://www.cyberciti.biz/networking/nmap-command-examples-tutorials/">http://www.cyberciti.biz/networking/nmap-command-examples-tutorials/</a>

&nbsp;
<h1>Installing Wireshark</h1>
Go to <a href="http://www.wireshark.org" title="www.wireshark.org">www.wireshark.org</a>, download and install Wireshark (and WinPCap if you haven't already).
<pre class=""># Check that you are part of the 'Administrators' group
groups

# Provided you are, recursively add read/write/execute permissions to group members for 
# the wireshark directory
chmod -R g+rwx /cygdrive/c/Program Files/Wireshark/*

Then create aliases for all of the executables. 

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
</pre>