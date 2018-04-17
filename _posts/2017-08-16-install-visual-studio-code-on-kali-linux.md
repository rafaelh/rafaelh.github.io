---
title: Install Visual Studio Code on Kali Linux
date: 2017-08-16
layout: post
permalink: /2017/08/install-visual-studio-code-on-kali-linux/
img: logos/vscode.png
tags: [vscode, linux]
---
Anyone spending a decent amount of time in Kali is going to want a GUI code editor, and they'll probably want something a little more advanced than gedit (which is currently unmaintained as of writing). My preference is Visual Studio code, though others swear by [Atom](https://atom.io/) or [Sublime Text](https://www.sublimetext.com/).

{: style="text-align: center"}
![Visual Studio Code running in Kali Linux]({{site.baseurl}}/assets/img/2017/2017-08-16-vscode-in-kali.jpg)

Since Kali is a Debian-based distribution, you can add it much as you would Debian or Ubuntu:

``` sh
# Download the Microsoft GPG key, and convert it from OpenPGP ASCII 
# armor format to GnuPG format
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg

# Move the file into your apt trusted keys directory (requires root)
mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg

# Add the VS Code Repository
echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list

# Update and install Visual Studio Code 
apt update && apt install code
```

If you have previously installed the VSCode .deb package, you will likely get some warnings that dpkg can't remove some directories that aren't empty, but this won't interfere with the operation of the program. You will get a warning each time you open it as the root user, since that's generally not a good idea on most systems - I haven't found a way to suppress this thus far, but maybe that's not a bad thing.
