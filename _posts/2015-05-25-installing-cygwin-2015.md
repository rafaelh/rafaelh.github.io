---
id: 589
title: Installing Cygwin (2015)
date: 2015-05-25T22:15:55+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=589
permalink: /2015/05/installing-cygwin-2015/
dsq_thread_id:
  - "3793271751"
categories:
  - All
---
As one might expect, taking a voluntary redundancy, job hunting, and getting up to speed in a new role leaves very little time for blogging. Now that I'm able to do so again, I've decided that instead of focusing on new programs for a while, I'm going to go through and update previous guides. Cygwin is a moving target, and there have been changes to how windows and cygwin usernames are mapped to each other, and other updates. So first off, installing cygwin...

&nbsp;

<p style="text-align: justify;">Installing Cygwin is straightforwards, and works on Windows XP SP3 and on up. In case you had a burning desire to install Cygwin on Windows ME, you're out of luck, as versions earlier than XP are no longer supported. Cygwin comes in 32 bit and 64 bit options. There are sometimes differences in the packages that are available in each, but they fluctuate over time; now that Cygwin64 has been running for several years, I find no disadvantage to using it. The 64 bit version also includes the option to download a 32 bit compilation toolchain, just in case you want to compile for that architecture.</p>
<p style="text-align: justify;">Go to <a title="www.cygwin.com" href="http://www.cygwin.com">www.cygwin.com</a>, download <a href="http://cygwin.com/setup-x86.exe">setup-x86.exe</a> (32-bit installation) or <a href="http://cygwin.com/setup-x86_64.exe">setup-x86_64.exe</a> (64-bit installation), and run the program.</p>
First, click through the introductory screens:

<a href="https://www.rafaelhart.com/wp-content/uploads/2014/02/1.jpg"><img class="aligncenter wp-image-574 size-full" src="https://www.rafaelhart.com/wp-content/uploads/2014/02/1.jpg" alt="Cygwin Installation Screen 1" width="724" height="489" /></a>

Choose a download source - this really only matters if you want to download on one computer, then install on another:

<a href="https://www.rafaelhart.com/wp-content/uploads/2014/02/2.jpg"><img class="aligncenter size-full wp-image-575" src="https://www.rafaelhart.com/wp-content/uploads/2014/02/2.jpg" alt="Cygwin Installation Screen 2" width="724" height="489" /></a>
<p style="text-align: justify;">Then choose a directory to install it into. I tend to capitalize the leading 'C' to keep it consistent with the other directories, but that's just personal taste.</p>
<p style="text-align: justify;"><a href="https://www.rafaelhart.com/wp-content/uploads/2014/02/3.jpg"><img class="aligncenter size-full wp-image-576" src="https://www.rafaelhart.com/wp-content/uploads/2014/02/3.jpg" alt="Cygwin Installation Screen 3" width="724" height="489" /></a></p>
<p style="text-align: justify;">Next, choose where the packages you download will go. The default choice that the program makes isn't great, so I set it to be a subdirectory in the Cygwin structure, in /var/cache/packages, which is consistent with the purpose of the /var/cache directory.</p>
<a href="https://www.rafaelhart.com/wp-content/uploads/2014/02/4.jpg"><img class="aligncenter size-full wp-image-577" src="https://www.rafaelhart.com/wp-content/uploads/2014/02/4.jpg" alt="Cygwin Installation Screen 4" width="724" height="489" /></a>
<p style="text-align: justify;">Select how you'll connect to the internet. This will be a direct connection for most people, but if you're using Cygwin at work, it may be through a proxy. If so, you should set it as shown below:</p>
<a href="https://www.rafaelhart.com/wp-content/uploads/2014/02/5.jpg"><img class="aligncenter size-full wp-image-578" src="https://www.rafaelhart.com/wp-content/uploads/2014/02/5.jpg" alt="Cygwin Installation Screen 5" width="724" height="489" /></a>
<p style="text-align: justify;">Now is a good time to note down that your .bashrc will need to contain your proxy settings to help programs like git make contact with the outside world. You can set it like so:</p>

<pre># HTTP
export http_proxy=http://user:pass@host:port/

# HTTPS
export https_proxy=https://user:pass@host:port/</pre>
<p style="text-align: justify;">Next, choose a mirror that is close to you.</p>
<a href="https://www.rafaelhart.com/wp-content/uploads/2014/02/6.jpg"><img class="aligncenter size-full wp-image-579" src="https://www.rafaelhart.com/wp-content/uploads/2014/02/6.jpg" alt="Cygwin Installation Screen 6" width="724" height="489" /></a>
<p style="text-align: justify;">This will then bring up the package selection window.</p>
<a href="https://www.rafaelhart.com/wp-content/uploads/2014/02/7.jpg"><img class="aligncenter size-full wp-image-580" src="https://www.rafaelhart.com/wp-content/uploads/2014/02/7.jpg" alt="Cygwin Installation Screen 7" width="887" height="655" /></a>
<p style="text-align: justify;">Here it helps to have an understanding of the packages you want to install for your environment. You can run and re-run this program to add and update the packages that have been installed, so if in doubt, stick with a relatively slim selection and add as needed. Dependency resolution is automatically done in the next step. The packages I normally choose (initially) are:</p>

<ul style="text-align: justify;">
	<li style="text-align: left;"><strong>Admin</strong> - shutdown</li>
	<li style="text-align: left;"><strong>Archive</strong> - bsdcpio, bsdtar, bzip2, p7zip, unzip, sharutils (contains uuencode/uudecode), zip</li>
	<li style="text-align: left;"><strong>Devel</strong> - autoconf, autoconf2.1-2.5, automake 1.1-1.9, binutils, bison, gcc-core, gcc-g++, git, git-completion, gperf, make, patch, patchutils, pkg-config</li>
	<li style="text-align: left;"><strong>Editors</strong> - nano, vim</li>
	<li style="text-align: left;"><strong>Interpreters</strong> - python, ruby</li>
	<li style="text-align: left;"><strong>Net</strong> - bind-utils, ca-certificates, curl, gnutls, inetutils, irssi, lftp, nc, nc6, openssh, openssl, ping, rsync, whois, wget</li>
	<li style="text-align: left;"><strong>Security</strong> - pwgen</li>
	<li style="text-align: left;"><strong>Shells</strong> - bash-completion</li>
	<li style="text-align: left;"><strong>System</strong> - procps, psmisc, util-linux</li>
	<li style="text-align: left;"><strong>Text</strong> - aspell, aspell-en, figlet, less</li>
	<li style="text-align: left;"><strong>Utils</strong> - colordiff, cpio, diffutils, gnupg, ncurses (enables the 'clear' command), nosleep, screen, time</li>
	<li style="text-align: left;"><strong>Web</strong> - wget, w3m</li>
</ul>
<p style="text-align: justify;">Once you go through the rest of the install, you'll have a cygwin terminal icon on your desktop. If you run it, you will see something similar to the following:</p>
<p style="text-align: justify;"><a href="https://www.rafaelhart.com/wp-content/uploads/2014/02/8.jpg"><img class="aligncenter size-full wp-image-582" src="https://www.rafaelhart.com/wp-content/uploads/2014/02/8.jpg" alt="Cygwin Installation Screens 8" width="761" height="407" /></a></p>
<p style="text-align: justify;">Previously this is the point where you would have changed your home directory via the /etc/passwd file, however that file, and group files are no longer generated by default, starting with Cygwin 1.7.34. This issue is explained <a href="https://cygwin.com/cygwin-ug-net/ntsec.html">here</a>.</p>
<p style="text-align: justify;">These files can still be generated, and windows will use them by preference if they are present, but this has only been done for backward compatability. When these files aren't present, Cygwin uses <a href="http://en.wikipedia.org/wiki/Active_Directory">Active Directory</a>, and falls back to <a href="http://en.wikipedia.org/wiki/Security_Account_Manager">SAM</a> where AD is not available. If you just want to change your home directory, and not your username, you can do this by editing the nsswitch.conf file (nano /etc/nssswitch.conf).</p>
<p style="text-align: justify;"><a href="https://www.rafaelhart.com/wp-content/uploads/2014/02/9.jpg"><img class="aligncenter size-full wp-image-581" src="https://www.rafaelhart.com/wp-content/uploads/2014/02/9.jpg" alt="Cygwin Installation Screen 9" width="1004" height="453" /></a></p>
<p style="text-align: justify;">However, if you want to have a different Cygwin username to your windows username (as I do), you will need to generate the passwd/group files for the moment.</p>

<pre># Create the passwd file
mkpasswd -l -p "$(cygpath -H)" > /etc/passwd

# Create the group file
mkgroup -L server1 -S= > /etc/group

# Then edit the passwd file
nano /etc/passwd</pre>
Open up /etc/passwd in your editor of choice, find the bottom line, and edit each instance of your name to the one you prefer, and the directory location (the bit starting /cygdrive/c/) to reflect where you'd like your home directory:

<a href="https://www.rafaelhart.com/wp-content/uploads/2014/02/10.jpg"><img class="aligncenter size-full wp-image-585" src="https://www.rafaelhart.com/wp-content/uploads/2014/02/10.jpg" alt="Cygwin Installation Screen 10" width="806" height="467" /></a>
<p style="text-align: justify;">As you can see above, I've changed the file to reflect my first name, and a subdirectory in /home. After saving these changes, you'll need to rename your home directory as well.</p>

<pre class="">cd /home
mv Rafael Hart/ rafael</pre>
<p style="text-align: justify;">It should be noted that this would not be advisable for any installation where you are hoping to work with Active Directory. That isn't a concern for me, as I mostly use it for working with scripts and remote servers. From here you can restart, and you'll have a basic installation with the username of your choice.</p>
<p style="text-align: justify;">Done!</p>