---
title: Installing Kali Linux on a Dell XPS 9550
date: 2017-12-27
layout: post
permalink: /2017/12/installing-kali-linux-on-a-dell-xps-9550/
featured_image: /assets/img/logos/kalilogo.jpg
excerpt: I've used Kali Linux as a daily driver on my Dell XPS 15 for most of the last year, and it works well for that purpose. There are a couple of things you need to do when setting it up to get it to run smoothly though.
---
I've used Kali Linux as a daily driver on my Dell XPS 15 for most of the last year, and it works well for that purpose. There are a couple of things you need to do when setting it up to get it to run smoothly though.

## Before you start
You need to change the following two settings in the BIOS. Now is a good time to set a BIOS password if you haven't already.

* BIOS > Secure Boot > Disabled
* BIOS > System Configuration > SATA Operation > Switch RAID to AHCI

You can upgrade the BIOS using the boot menu and a FREEDOS-formatted usb stick with <a href="http://www.dell.com/support/home/au/en/aubsd1/product-support/product/xps-15-9550-laptop/drivers">the latest firmware</a> (.EXE). Firmware versions 1.2.10 through 1.2.16 of the firmware have been associated with a series of bugs, but with December's news about <a href="http://www.dell.com/support/contents/au/en/aubsd1/article/product-support/self-support-knowledgebase/software-and-downloads/support-for-meltdown-and-spectre">Meltdown and Spectre</a> you will want to update to 1.6.1 or greater so that you have the mitigations for those exploits.

## Installation
Install Kali Linux with a USB. I used <a href="https://rufus.akeo.ie/">rufus</a> on Windows to DD a copy of the amd64 ISO directly onto the USB stick. <a href="https://etcher.io/">Etcher</a> is another fine choice. I chose to use the whole disk - I'll virtualize Windows rather than dual boot it.

Whilst installing, you will get a request for additional firmware - brcmfmac43602-pcie.txt, which I've been unable to find. Some guides reference using <a href="https://github.com/OpenELEC/wlan-firmware/blob/master/firmware/brcm/brcmfmac43602-pcie.bin">brcmfmac43602-pcie.bin</a> instead, but the installer doesn't accept that in place of the .txt file. Just skip this, and wireless will work fine anyway. You may find the bluetooth doesn't work that well - I chose to spend $15 and get an Intel AC8260 card <a href="https://www.rafaelhart.com/2017/09/upgrading-ram-wifi-in-the-dell-xps-15-9550/">and replaced the existing one</a>.

After the initial installation, make sure your installation is up to date.

``` sh
apt update && apt upgrade && apt dist-upgrade && apt autoremove
```

This will take some time, and you should reboot afterwards.

## Everyday user
Some programs (VLC, Google Chrome, Visual Studio Code, etc.) object to being run as root, and I want to use different programs depending on what I'm doing, so I create a normal user for daily use.
```
adduser -m username -s /bin/bash && gpasswd -a username sudo
```

## Optimus
Since this laptop has an intel and nvidia graphics card, installing optimus will allow you to access the nvidia card for those programs that require it. Reboot after installing. In my case I had to reboot twice - it failed to boot the first time for some reason.

```
apt install bumblebee-nvidia && systemctl enable bumblebeed

# You will need to add your everyday user to the bumblebee group as well
gpasswd -a username bumblebee

# Once that's done, it's time to update some config files. Firstly, 
# edit /etc/bumblebee/bumblebee.conf and change line 22 from:

Driver=
# to
Driver=nvidia
```

Then run ```lspci | grep NVIDIA``` to get your graphics card's BusID. Mine is:

```
01:00.0 3D controller: NVIDIA Corporation GM107M [GeForce GTX 960M] (rev ff)
```

Then edit ```/etc/bumblebee/xorg.conf.nvidia```, uncomment the BusID line, and update it if yours is different.

This should get everything working. You can see the two cards working by running:
```
glxinfo | grep vendor         # intel
optirun glxinfo | grep vendor # nvidia
```

If you run glxgears with both, you'll notice the performance is about the same, which isn't right. To fix this, install VirtualGL, which has to be downloaded separately. Go to <a href="https://sourceforge.net/projects/virtualgl/files/">https://sourceforge.net/projects/virtualgl/files/</a> and download the latest amd64.deb, and install it:
```
dpkg -i virtualgl_X.X.X_amd64.deb
```

After that, you can run glxgears / optirun glxgears, and you should see a noticeable difference. If you have an everyday user account you want to use in a similar fashion, you'll need to add it to the bumblebee group. This now gives you the ability to use the nvidia card for password cracking, but note that in most cases, offloading password cracking to <a href="https://www.nvidia.com/object/gpu-cloud-computing.html">a cloud instance</a> is a better approach than running it on a laptop.

## Fans
So that the OS can tell the temperature it's operating at, and control the fans, you will need to install lm-sensors, and activate them
```
apt install lm-sensors
sensors-detect
```
When sensors-detect asks if you want to make changes to /etc/modules automatically, say yes. Then make sure it loads on next boot:
```
systemctl enable lm-sensors
```

## Scaling
Run the following to set precise screen dimensions:
```
xrandr --dpi 288
```
The hidpi display is readable in its initial state, but if you prefer different settings, you can go into gnome-tweak and alter the scaling size of the font and windows.

In a similar vein, to avoid a tiny GRUB screen, edit ```/etc/default/grub```, and add ```GRUB_GFXMODE=1024x768```. You'll probably also want to set the timeout to zero to make it boot faster. Once that's done, run sudo update-grub.

You have the option of scaling QT programs, such as VLC. I personally don't use this setting, and instead look for GTK3 software, with the knowledge that it will support scaling. You can scale QT programs by creating a script in /etc/profile.d/, called qt-hidpi.sh. In that file, put:
```
export QT_AUTO_SCREEN_SCALE_FACTOR=1<
```
The results are usable, but not great. Read <a href="https://blog.qt.io/blog/2016/01/26/high-dpi-support-in-qt-5-6/">this article</a> for more info.

## Other Stuff
### Fix smartd
smartd monitors your SMART capable devices for temperature and errors. Unfortunately, NVMe support is still experimental for smartd, so it doesn't scan for it by default, and fails on boot. You can fix this by telling it to scan for NVMe drives by adding ```-d nvme``` to ```/etc/smartd.conf``` in the DEVICESCAN line. Make the first uncommented line in ```/etc/smartd.conf``` look like this:

```
DEVICESCAN -d removable -d nvme -n standby -m root -M exec /usr/share/smartmontools/smartd-runner
```

### Touchpad/Touchscreen Gestures
To get pinch, zoom, and other gestures working, we need to install <a href="https://github.com/bulletmark/libinput-gestures">libinput-gestures</a>, which has some dependencies, and requires a config file.

```
# Install Dependencies
apt install libinput-tools xdotool wmctrl

# Add your everyday user to the 'input' group
gpasswd -a <username> input

# Build and Install libinput-gestures
git clone http://github.com/bulletmark/libinput-gestures
cd libinput-gestures
sudo ./libinput-gestures-setup install
```
You will need to log your everyday user out and in if you are using it, so that the 'input' group is recognised. Then you will need to switch to your everyday user account and create the following config file in ```.config/libinput-gestures.conf```:

```
# ~/.config/libinput-gestures.conf
 
# Go back/forward in chrome
gesture: swipe right 3 xdotool key Alt+Left
gesture: swipe left 3 xdotool key Alt+Right
 
# Zoom in / Zoom out
gesture: pinch out xdotool key Ctrl+plus
gesture: pinch in xdotool key Ctrl+minus
 
# Switch between desktops
gesture: swipe up 4 xdotool set_desktop --relative 1
gesture: swipe down 4 xdotool set_desktop --relative -- -1</pre>
```

Then, as your everyday user account:
```
libinput-gestures-setup start
libinput-gestures-setup autostart
```

### Enable Printing
This requires the cups service to be installed and started:

```
apt install cups
systemctl start cups.service
systemctl enable cups

# Then add your everyday user to the 'lpadmin' group to enable you 
# to administer printers without going via root
gpasswd -a <username> lpadmin
```

### Get rid of the On Screen Keyboard
Install this Gnome Extension: <a href="https://extensions.gnome.org/extension/1326/block-caribou/">block-caribou</a>. This is a bug, and you won't need the extension permanently.

### Save Power
First, install the following packages ```tlp tlp-rdw powertop```. The first two are a for a power tuning daemon for laptops. You can activate it by enabling the service:
```
systemctl enable tlp.service
```
Powertop is a power usage analyser, which will recommend settings that you can apply. Ideally you should create unit files and configuration changes for each recommendation, but for a quick and practical approach, you can have powertop make all the changes for you. Create the following file ```/etc/systemd/system/powertop.service``` and input the following:

```
[Unit]
Description=PowerTOP auto tune

[Service]
Type=idle
Environment="TERM=dumb"
ExecStart=/usr/sbin/powertop --auto-tune

[Install]
WantedBy=multi-user.target</pre>
Then issue the following commands to let systemd see it and activate it:
<pre class="lang:sh decode:true">systemctl daemon-reload
systemctl start powertop.service
systemctl enable powertop.service
```
And finally, confirm by running powertop that all settings are set to good by default.

With all of the above done, you should have a reasonably stable and working machine. There are still a few bugs that have been fixed upstream which will improve your experience as they come through to kali. I'll post another update if I discover anything new worth sharing.

## Things that don't work
### Bluetooth
First step is to install bluetooth support with ```apt install bluetooth``` and rebooting. According to this post, you also need to download the windows <a href="https://www.dropbox.com/s/7tlkere8y6xvvuz/BCM-0a5c-6410.hcd?dl=0">firmware</a>, and copy it into ```/lib/firmware/brcm```. Enable the bluetooth service and reboot.
```
systemctl start bluetooth && systemctl enable bluetooth
```
After a reboot, bluetooth will somewhat work. I was able to pair with a Logitech Anywhere MX 2 mouse, and use it with a small amount of lag, but I also tried Bose Soundsport wireless headphones, and they don't work at all. I'm ordering an <a href="https://www.intel.com/content/www/us/en/products/wireless/wireless-products/dual-band-wireless-ac-9260.html">Intel 9260</a> wireless card to see if that solves the problem.

## References

* <a href="https://wiki.archlinux.org/index.php/Dell_XPS_15_(9550)">https://wiki.archlinux.org/index.php/Dell_XPS_15_(9550)</a> - Lots of configuration tips
* <a href="http://wiki.yobi.be/wiki/Laptop_Dell_XPS_15">http://wiki.yobi.be/wiki/Laptop_Dell_XPS_15</a> - Lots of detail, but many of these problems seem to have been solved upstream
* <a href="https://ubuntuforums.org/showthread.php?t=2317843">https://ubuntuforums.org/showthread.php?t=2317843</a> - As above, lots of these issues seem to be solved, so wait till you experience an issue before you apply a fix
