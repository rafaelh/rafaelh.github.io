---
title: Installing xRDP on Kali Linux
date: 2019-10-13
layout: post
permalink: /2019/10/installing-xrdp-on-kali-linux/
img: logos/kalilogo.png
tags: [Security, Kali, Linux]
---
There are a lot of complicated tutorials on how to get xRDP working on Kali Linux, when using Gnome. I suspect the tutorials have become complicated as they address a variety of bugs that xRDP and connecting software has had over time, but there isn't much you actually need to do:

# Install Software
The only package you need is xrdp, which you should enable after installation.
``` sh
sudo apt update
sudo apt install xrdp

sudo systemctl enable xrdp
sudo systemctl restart xrdp
```

# Fix Polkit
You will also need to add the following file to policy kit, and restart it:

``` sh
# Create /etc/polkit-1/rules.d/02-allow-colord.rules, and insert the following as its contents:

polkit.addRule(function(action, subject) {
   if ((action.id == "org.freedesktop.color-manager.create-device" ||
        action.id == "org.freedesktop.color-manager.create-profile" ||
        action.id == "org.freedesktop.color-manager.delete-device" ||
        action.id == "org.freedesktop.color-manager.delete-profile" ||
        action.id == "org.freedesktop.color-manager.modify-device" ||
        action.id == "org.freedesktop.color-manager.modify-profile") &&
        subject.isInGroup("vglusers")) {
      return polkit.Result.YES;
   }
});

# Then restart policy kit
sudo systemctl restart polkit
```

# Open your Firewall
If you are using UFW, you'll need to open up a port.

``` sh
sudo ufw allow 3389/tcp
```

Then in Windows, you'll need to lower your color depth in the RDP settings when you make a connection:

{: style="text-align: center"}
![RDP Color Settings]({{site.baseurl}}/assets/img/2019/2019-10-13-rdp-color-settings.jpg)

And it should work from this point.