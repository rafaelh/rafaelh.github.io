---
id: 1548
title: 'Upgrading RAM &#038; WiFi in the Dell XPS 15 (9550)'
date: 2017-09-04T18:00:28+00:00
author: Rafael
layout: post
guid: https://www.rafaelhart.com/?p=1548
permalink: /2017/09/upgrading-ram-wifi-in-the-dell-xps-15-9550/
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
After spending a reasonable amount of time running Linux on the Dell XPS 15 (9550), I can say that the only hardware I can't get to work reliably is the Bluetooth support. I've had partial success, but really this is something I just want to work when I need it. The solution is to change out the existing Broadcom card for a cheap Intel AC 8260 card (cost me AUD $40), after which I now have good WiFi and Bluetooth support. Provided you have the right hex tool, the Dell XPS is easy to open and upgrade:

<img class="aligncenter size-full wp-image-1549" src="https://www.rafaelhart.com/wp-content/uploads/2017/09/2017-08-31-20.23.28.jpg" alt="Hex screws from the laptop" width="995" height="207" />

The Intel AC 8260 is a 2x2 card, rather than the 3x3 Broadcom, so the last grey wire will just hang loose in the chassis - not optimal, but not a problem either. At some future point when a newer Intel 3x3 card comes out, I might upgrade again.

<img class="aligncenter size-full wp-image-1550" src="https://www.rafaelhart.com/wp-content/uploads/2017/09/2017-08-31-20.22.23.jpg" alt="Wifi card connected to the laptop" width="759" height="625" />

I also chose to upgrade to 32gb of RAM at the same time, to assist with running virtual machines - I went with the G.skill Ripjaws DDR4-2400 32GB(2x16GB) F4-2400C16D-32GRS SODIMM set. There are no tricks to this, it's straightforward as you would expect - pull the holding tabs to the side, pop out the SODIMM, and put in the new one.

<img class="aligncenter size-full wp-image-1551" src="https://www.rafaelhart.com/wp-content/uploads/2017/09/2017-08-31-20.22.37.jpg" alt="Open Dell XPS 15 laptop, showing internals" width="991" height="688" />

All in all, this process took about 5 minutes, and was quite straightforward. Kali detected the new hardware on first boot, and WiFi worked immediately. I had to powercycle Bluetooth to get it to work:
<pre class="lang:sh decode:true "># As root
bluetoothctl
power off
power on</pre>
And that's it. The RAM was a little pricey, but the WiFi card was pretty cheap, and now the only issues to resolve on the laptop are scaling ones, which will be dealt with over time as more applications adopt GTK 3+.

&nbsp;