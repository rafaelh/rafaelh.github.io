---
id: 1536
title: Install Visual Studio Code on Kali Linux
date: 2017-08-16T20:07:29+00:00
author: Rafael
layout: post
guid: https://www.rafaelhart.com/?p=1536
permalink: /2017/08/install-visual-studio-code-on-kali-linux/
nkweb_code_in_head:
  - default
nkweb_Use_Custom_js:
  - default
nkweb_Custom_js:
  - ""
nkweb_Use_Custom_Values:
  - default
nkweb_Custom_Values:
  - ""
nkweb_Use_Custom:
  - 'false'
nkweb_Custom_Code:
  - ""
categories:
  - All
---
Anyone spending a decent amount of time in Kali is going to want a GUI code editor, and they'll probably want something a little more advanced than gedit (which is currently unmaintained as of writing). My preference is Visual Studio code, though others swear by <a href="https://atom.io/">Atom</a> or <a href="https://www.sublimetext.com/">Sublime Text</a>.

<img class="aligncenter size-large wp-image-1538" src="https://www.rafaelhart.com/wp-content/uploads/2017/08/VSCode-in-Kali-1024x600.jpg" alt="Visual Studio Code running in Kali Linux" width="720" height="422" />

Since Kali is a Debian-based distribution, you can add it much as you would Debian or Ubuntu:
<pre class="lang:sh decode:true crayon-selected"># Download the Microsoft GPG key, and convert it from OpenPGP ASCII 
# armor format to GnuPG format
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor &gt; microsoft.gpg

# Move the file into your apt trusted keys directory (requires root)
mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg

# Add the VS Code Repository
echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" &gt; /etc/apt/sources.list.d/vscode.list

# Update and install Visual Studio Code 
apt update &amp;&amp; apt install code</pre>
If you have previously installed the VSCode .deb package, you will likely get some warnings that dpkg can't remove some directories that aren't empty, but this won't interfere with the operation of the program. You will get a warning each time you open it as the root user, since that's generally not a good idea on most systems - I haven't found a way to suppress this thus far, but maybe that's not a bad thing.