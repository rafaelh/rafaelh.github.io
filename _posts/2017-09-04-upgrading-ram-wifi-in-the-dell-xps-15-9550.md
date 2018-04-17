---
title: 'Upgrading RAM & WiFi in the Dell XPS 15 (9550)'
date: 2017-09-04
layout: post
permalink: /2017/09/upgrading-ram-wifi-in-the-dell-xps-15-9550/
img: 2017/2017-09-05-open-laptop.jpg
tags: [hardware]
---
After spending a reasonable amount of time running Linux on the Dell XPS 15 (9550), I can say that the only hardware I can't get to work reliably is the Bluetooth support. I've had partial success, but really this is something I just want to work when I need it. The solution is to change out the existing Broadcom card for a cheap Intel AC 8260 card (cost me AUD $40), after which I now have good WiFi and Bluetooth support. Provided you have the right hex tool, the Dell XPS is easy to open and upgrade:

{: style="text-align: center"}
![Hex screws from the laptop]({{site.baseurl}}/assets/img/2017/2017-09-05-hex-screws.jpg)

The Intel AC 8260 is a 2x2 card, rather than the 3x3 Broadcom, so the last grey wire will just hang loose in the chassis - not optimal, but not a problem either. At some future point when a newer Intel 3x3 card comes out, I might upgrade again.

{: style="text-align: center"}
![Wifi card connected to the laptop]({{site.baseurl}}/assets/img/2017/2017-09-05-wifi-card.jpg)

I also chose to upgrade to 32gb of RAM at the same time, to assist with running virtual machines - I went with the G.skill Ripjaws DDR4-2400 32GB(2x16GB) F4-2400C16D-32GRS SODIMM set. There are no tricks to this, it's straightforward as you would expect - pull the holding tabs to the side, pop out the SODIMM, and put in the new one.

All in all, this process took about 5 minutes, and was quite straightforward. Kali detected the new hardware on first boot, and WiFi worked immediately. I had to powercycle Bluetooth to get it to work:

``` sh
# As root
bluetoothctl
power off
power on
```

And that's it. The RAM was a little pricey, but the WiFi card was pretty cheap, and now the only issues to resolve on the laptop are scaling ones, which will be dealt with over time as more applications adopt GTK 3+.
