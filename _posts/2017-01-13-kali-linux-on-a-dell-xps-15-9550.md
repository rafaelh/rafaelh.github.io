---
id: 1456
title: Kali Linux on a Dell XPS 15, 9550
date: 2017-01-13T19:57:15+00:00
author: Rafael
layout: post
guid: https://www.rafaelhart.com/?p=1456
permalink: /2017/01/kali-linux-on-a-dell-xps-15-9550/
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
Please see my updated post on this: <a href="https://www.rafaelhart.com/2017/12/installing-kali-linux-on-a-dell-xps-9550/">https://www.rafaelhart.com/2017/12/installing-kali-linux-on-a-dell-xps-9550/</a>

&nbsp;

<hr />

I recently decided to change my laptop over to Kali Linux. The Dell XPS 15 is a great laptop, but it has had a number of issues running Linux over the last few months. This time around it seems there have been enough upstream changes that you can get Linux running smoothly enough for everyday use.
<h1>Before you start</h1>
You need to change the following two settings in the BIOS. Now is a good time to set a BIOS password if you haven't already.
<ul>
 	<li>BIOS &gt; Secure Boot &gt; Disabled</li>
 	<li>BIOS &gt; System Configuration &gt; SATA Operation &gt; Switch RAID to AHCI</li>
</ul>
You can still upgrade the BIOS using the boot menu and a flash stick, but versions 1.2.10 through 1.2.16 of the firmware have been associated with a series of bugs, so if you are going to update, make sure it's to 1.2.18.

&nbsp;
<h1>Installation</h1>
Install Kali Linux with a USB. I used <a href="https://rufus.akeo.ie/">rufus</a> on Windows to DD a copy of the amd64 ISO directly onto the USB stick. I chose to use the whole disk - I'll virtualize Windows rather than dual boot it.
Whilst installing, you will get a request for additional firmware - brcmfmac43602-pcie.txt, which I've been unable to find. Some guides reference using <a href="https://github.com/OpenELEC/wlan-firmware/blob/master/firmware/brcm/brcmfmac43602-pcie.bin">brcmfmac43602-pcie.bin</a> instead, but the installer doesn't accept that in place of the .txt file. Regardless, wireless works fine, so I'll figure that out later.
After the initial installation, make sure your installation is up to date.
<pre class="">apt-get update &amp;&amp; apt-get upgrade &amp;&amp; apt-get dist-upgrade &amp;&amp; apt-get autoremove</pre>
This will take some time, and it's worth rebooting afterwards.
<h1>Optimus</h1>
Since this laptop has an intel and nvidia graphics card, installing optimus will allow you to access the nvidia card for those programs that require it. Reboot after installing. In my case I had to reboot twice - it failed to boot the first time for some reason.
<pre class="">apt-get install bumblebee-nvidia &amp;&amp; systemctl enable bumblebeed</pre>
Once that's done, it's time to update some config files. Firstly, edit /etc/bumblebee/bumblebee.conf and change line 22 from:
<pre class="">Driver=
# to
Driver=nvidia</pre>
Then run 'lspci | grep NVIDIA' to get your graphics card's BusID. Mine is:
<pre class="">01:00.0 3D controller: NVIDIA Corporation GM107M [GeForce GTX 960M] (rev ff)</pre>
Then edit /etc/bumblebee/xorg.conf.nvidia, uncomment the BusID line, and update it if yours is different.

This should get everything working. You can see the two cards working by running:
<pre class="">glxinfo | grep vendor #intel
optirun glxinfo | grep vendor #nvidia</pre>
If you run glxgears with both, you'll notice the performance is about the same, which isn't right. To fix this, install VirtualGL, which has to be downloaded separately. Go to <a href="https://sourceforge.net/projects/virtualgl/files/">https://sourceforge.net/projects/virtualgl/files/</a> and download the latest amd64.deb, and install it:
<pre class="">dpkg -i virtualgl_2.5.1_amd64.deb</pre>
After that, you can run glxgears / optirun glxgears, and you should see a noticeable difference. If you have an everyday user account you want to use in a similar fashion, you'll need to add it to the bumblebee group. This now gives you the ability to use the nvidia card for password cracking, but note that in most cases, offloading password cracking to <a href="https://www.nvidia.com/object/gpu-cloud-computing.html">a cloud instance</a> is a better approach than running it on a laptop.

&nbsp;
<h1>Fans</h1>
So that the OS can tell the temperature it's operating at, and control the fans, you will need to install lm-sensors, and activate them
<pre class="">apt-get install lm-sensors
sensors-detect</pre>
When sensors-detect asks if you want to make changes to /etc/modules automatically, say yes.
<h1>Scaling</h1>
The hidpi display is readable in its initial state, but I prefer some scaling. Open up gnome-tweak, go to fonts and set the scaling to 1.25, then windows and set the scaling to 2.

In a similar vein, to avoid a tiny GRUB screen, edit /etc/default/grub, and add GRUB_GFXMODE=640x480. Once that's done, run sudo update-grub. Higher resolutions are available, but they don't look great.

QT programs, such as VLC will also render with tiny controls. You can improve this by creating a script in /etc/profile.d/, called qt-hidpi.sh. In that file, put:
<pre class="">export QT_AUTO_SCREEN_SCALE_FACTOR=1</pre>
The end result isn't perfect, but it's very usable. See this article for more info.

&nbsp;
<h1>Everyday user</h1>
Some programs (VLC, Google Chrome, Visual Studio Code, etc.) object to being run as root, and I want to use different programs depending on what I'm doing, so I create a normal user for daily use.
<pre class="">adduser username &amp;&amp; gpasswd -a username sudo &amp;&amp; gpasswd -a username bumblebee</pre>
&nbsp;

And that's it! Kali should be ready to fill with your preferences and utilities of choice. If I run into any further issues, I'll update this article.
References:
<ul>
 	<li><a href="http://wiki.yobi.be/wiki/Laptop_Dell_XPS_15">http://wiki.yobi.be/wiki/Laptop_Dell_XPS_15</a> - Lots of detail, but many of these problems seem to have been solved upstream</li>
 	<li><a href="https://ubuntuforums.org/showthread.php?t=2317843">https://ubuntuforums.org/showthread.php?t=2317843</a> - As above, lots of these issues seem to be solved, so wait till you experience an issue before you apply a fix</li>
 	<li><a href="https://blog.qt.io/blog/2016/01/26/high-dpi-support-in-qt-5-6/">https://blog.qt.io/blog/2016/01/26/high-dpi-support-in-qt-5-6/</a></li>
</ul>