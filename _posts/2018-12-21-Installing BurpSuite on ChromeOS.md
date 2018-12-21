---
title: Installing Burp Suite on ChromeOS
date: 2018-12-21
layout: post
img: logos/burpsuite.jpg
tags: [Security, ChromeOS]
github_comments_issueid: "3"
---

I recently purchased a Pixelbook while over in the US, and I've slowly been exploring it's capabilities. I really like it as a travelling device, and I've naturally been curious about what you can set up. VSCode, Signal and other apps all seem to work in the Linux sandbox environment, and it turns out that Burp Suite does as well. Here is how to install it:

```
# Firstly, I'm making the assumption that you've got the linux command line environment installed.
# If not, do that first. Next, install elinks, or another text based browser.
sudo apt install elinks

# Go to Burp Suite's site and download a copy (it's about 95 MB)
elinks https://portswigger.net/burp/communitydownload

# Save the 'Download for Linux (64-bit)', then make the file executable
chmod u+x burpsuite_community_linux_v1_X_XX.sh

# Run the installer
./burpsuite_community_linux_v1_X_XX.sh

# Go into the program directory and run the Burp Suite
cd BurpSuiteCommunity
./BurpSuiteCommunity
```

Once you've done this, you'll need to install a proxy switching extension for chrome. The one I used is [Proxy SwitchyOmega](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=en), in which you should set up two profiles:

* A 'normal' one that's set to DIRECT connection
* A 'BurpSuite' one that is set to http, with 127.0.0.1 for the server, and 8080 for the port

Once this is set up, you should be able to browse, with a bunch of warnings and broken links for secure webpages. The next step is to install Burp Suite's CA certificate, to get rid of these errors.

1. Navigate to **http://127.0.0.1:8080/** (The official docs say to go to http://burp/ but this will not work on ChromeOS)
2. Click on **CA Certificate** in the top right-hand corner
3. Open ChromeOS settings, search for SSL and navigate to **Manage Certificates**
4. Select **DER-encoded binary, single certificate** from the file type on the bottom left, select ```cacert.der``` and click open
5. Tick *Trust this certificate for identifying websites* and click OK

At this point you should be set up, and able to use Burp Suite without errors. Happy hunting!
