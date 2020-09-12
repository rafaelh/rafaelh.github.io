---
title: Digital Self-Defence in 2020
date: 2017-03-27
layout: post
published: false
permalink: /2017/03/windows-10-privacy/
featured_image: /assets/img/2017/2017-03-27-windows-10-privacy.jpg
excerpt: info goes here
---

Table of Contents
Know your enemy

Defending your computer

Defending your phone
Faraday bag

Social Media and other surveillance systems

Habits
-2fa, data minimisation, good passwords, good usernames, password manager


## Know your Enemy
You can't chose the right level of protection for yourself and your information without knowing what threats you are facing. In the business we call the personal Threat Modelling; understanding what risks you face, who is likely to be after your information and what they have to gain, as well as what you have to loose. There are many reasons you may want to control who sees your data:

* Adverts via Google have been shown to be less likely to show you higher paying jobs if you are a woman ([source](https://www.theguardian.com/technology/2015/jul/08/women-less-likely-ads-high-paid-jobs-google-study))
* The credit rating of your Facebook friends could change your chances of getting a loan ([source](https://money.cnn.com/2015/08/04/technology/facebook-loan-patent/))
* You don't want the menstrual cycle tracking app on your phone to tell your employer that you are pregnant before you do [source](https://www.washingtonpost.com/technology/2019/04/10/tracking-your-pregnancy-an-app-may-be-more-public-than-you-think/)
* You don't want your data mined for personal behaviour, such as when Uber used their data to identify when users were having one night stands ([source](https://web.archive.org/web/20141118192805/http://blog.uber.com/ridesofglory)])
* You don't want a company like [fama.io](https://fama.io/press/) to influence your chances of getting a job

With that in mind I recommend I recommend going through the following steps with pen and paper

### Step 1: Identify what risks you face
Depending on who you are, you will face different risks. If you are someone who faces the common risks that everyone else does, then as long as you set your privacy settings thoughtfully, use 2 Factor authentication everywhere, and keep your devices up to date, you should be fine. If you organise protests in some parts of the world however, very few options will be sufficient. Write down what you actually want to protect yourself from, whether that's specific people, groups, or companies.

For me, this is as follows:
* I face most common data risks, such as my data being sold to people who will direct marketing at me, in the form of emails, calls, etc.
* I face the standard online criminal threats, such as phishing, identity theft, malware, etc.
* Since I work in cybersecurity, if I annoy the wrong person, I can expect them to go through my online stuff, and if I've done somethign don
* I don't have any abusive/aggressive individuals that I need to hide my location or activities from.
* I don't need to hide my activities from my government. I mean, they don't have a great privacy record, but they aren't Belarus.

### Step 2: Choose who you are willing to share your data with
I'm probably not going to stop using Uber to get a ride, at least until there is a viable local alternative. That's an example where the risk for me, and the distaste I have for the company isn't significant enough that I won't use the service. Unless you are prepared to forego most modern conveniences, you'll need to share your data with some groups. As long as you do that purposefully, you're likely to make good choices.

For me, I share the following:
* I share significant details with Google. I use it to search, get maps, email, cloud storage, etc. I use their privacy settings extensively, but I'm under no illusion about how much of my data they process and use. It's worth the tradeoff for me.
* I have a facebook account for work. It only gets used in a container, and has nothing other than a name and picture in it. I only use it for reading occasionally, and to integrate with open source intelligence tools like [Amass](https://github.com/OWASP/Amass#-owasp-amass). I do not use Instagram or Facebook messanger.
* I use twitter, and share a limited set of data with them.
* I have Windows computers and a Github account, so a certain amount of my data goes to Microsoft.
* I heavily restrict any other group from getting my data. This doesn't mean they aren't getting a certain amount, but they aren't doing so with my assistance.

Okay, have you done the above? When you face a privacy trade-off, such as the benefits of Google Maps vs the government being able to subpoena that data, and maybe charge you with a crime because you were near it when it happened, [such as this guy](https://nakedsecurity.sophos.com/2020/03/10/google-data-puts-innocent-man-at-the-scene-of-a-crime/), it will help you make better decisions. I don't want to be a hermit, but if I don't think through how I interact with the world digitally, I find that some choices get made by default, and usually for the worst.

## Defending your computer
I'm not going to provide in-depth guides on how to do each of these things - an internet search will quickly find you instructions on how to make each of these settings.

For HIGH risk scenarios, use Tails as your operating system. You boot this from a USB stick and it obfuscates all your traffic to and from the internet. It doesn't make you untraceable, but does make it very hard to do so. [Tails website](https://tails.boum.org/)

### MacOS
Apple has a curiously good reputation for privacy, which is surprising because they track you extensively and limit how much you can opt out. Still, you should do the following:

1. Password protect your computer and turn the firewall on
2. Encrypt your hard drive with FileVault (System Preferences > Security & Privacy > FileVault)
3. Lessen how much MacOS tracks your location (System Preferences > Security & Privacy > Location Services)
4. Lessen how much MacOS sells your data, such as which apps you use (System Preferences > Security & Privacy > Advertising)
5. Lessen how much MacOS tracks your activity (System Preferences > Security & Privacy > Analytics)
6. Limit which apps can harvest your contact list (System Preferences > Security & Privacy > Contacts)
7. Turn off Siri
8. Install Antivirus software
8. Get a webcam cover

This is far from an exhaustive list. You should go through the settings for each app you install and ensure that you are comfortable with them. Ultimately you have to accept that on Apple, you are not fully in control of any data you put into the device, and any activity that you engage will probably send out telemetry.

### Windows
Windows 10 

1. Wipe hard drive and install WIndows 10
    * Go into Settings > Updates, and get any updates
    * Open the Microsoft Store and download updates to all the apps
    * Windows should now be a privacy dumpster fire, but at least it has the latest software, and none of the next steps will get overwritten by updates
2. Remove any Windows 10 app that you don't intend to use with [this tool](https://www.thewindowsclub.com/10appsmanager-windows-10)
3. Install [Chocolatey](https://chocolatey.org/install)


8. If you know what you are doing, consider running [this script](https://gist.github.com/mackwage/08604751462126599d7e52f233490efe)




## Improve your Windows Privacy
There are multiple tools to turn off Windows 10 telemetry, depending on what services you are prepared to go without. There is a slightly melodramatic naming convention for these tools that ever so subtly hints at what their authors might say on this topic if you got a few beers into them.

* [O&OShutup10](https://www.oo-software.com/en/shutup10/update) gives you a fast way to disable all the privacy affecting settings in Windows, and provides guidance with each one. Don't tick everything, especially the ones with red exclamation marks next to them
* [fix-windows-privacy](https://modzero.github.io/fix-windows-privacy/) will disable a wider range of tracking via the registry, including removing OneDrive

Remember to run these after any major Windows update, as Microsoft has turned tracking back on with some of these in the past.

If you have an NVidia card, they send telemetry home as well, but it seems to be [mostly harmless](http://www.howtogeek.com/280101/relax-nvidias-telemetry-didnt-just-start-spying-on-you/) so far. Instructions to turn it off are [here](https://www.youtube.com/watch?v=bp850f5_rzk).


### Linux
Now we are talking. Most Linux distributions don't track anything, and have extremely honest privacy controls. You are trading your convenience though, since many common programs like Photoshop don't have Linux versions. Still, with the rising quality of these systems and most work being done in browsers, it's a tradeoff many millions of internet users make.

1. Set a BIOS password
2. Encrypt your hard drive. This is generally an option at installation, and may result in you needing to enter two passwords to log in, so choosing hardware that incorporates a fingerprint reader will make for a better experience.
3. Turn on a firewall. This varies between systems, but a common one is Ubuntu's [Uncomplicated Firewall](https://wiki.ubuntu.com/UncomplicatedFirewall) (UFW)
4. Use antivirus software. Linux is a growing target, and while it's inately resistant, it isn't immune. [Sophos](https://secure2.sophos.com/en-us/products/free-tools.aspx) lets you run one free home device, but there are other choices as well.
5. Get a webcam cover

You can literally make a career out of securing linux, so if you are interested you can fire up a search engine and keep securing further ad infinitum. If you are in the position where you need to buy new hardware, consider privacy and security consious options like [Purism](https://puri.sm/).

### VPN
Despite what VPN companies advertise, these don't make you significantly safer. What they do is encrypt your traffic and let it emerge from a different part of the internet, so that you can appear to be somewhere different to where you actually are. They are useful when you are travelling, since you shouldn't trust your cafe's wifi, and to get around geoblocking.

Also, don't be under the impression that because you have a VPN, you can do all the illegal stuff you want. These companies aren't going to go to court for your $5 a month, and while many claim not to keep logs, data breaches have shown that they probably all do.

### Defending your Browser
In 2020, all browsers are Chrome... well, except for Firefox and an assortment of miscellaneous ones. Under the hood, most of them are using the Chromium engine, and regardless of any privacy settings they may have, they are harvesting as much data as they can. Google Chrome sends your data to Google, Edge sends your data to Microsoft, Safari sends your data to Apple, etc. This will include what sites you visit, how long you spend, your IP address and approximate location, your bookmarks, and more. Incognito mode just hides your activity from other users of the same computer.

For HIGH risk scenarios, use [Tor browser](https://www.torproject.org/download/) and don't log in to anything.

**Browser Choice:** I would recommend you use Firefox, as it's the only major browser not in the data collection business. If you use Chrome, Edge, Safari, etc, do so because you are using other services in those ecosystems, since they will already be aggreating your data through that.

**Browser Plugins:** You can limit how sites track you, and which are able to show you ads with the following plugins. Remember that ads can deliver malware, cryptominers, etc, so it is reasonable to turn them off. It's also reasonable to put in exceptions for sites you trust, or to pay subscriptions to support sites that have an ad-free option.

* **Privacy Badger** - created by the EFF, it will detect and block sites that are tracking you. On very rare occasions it will break a site, and you can turn it off for those if you really have to. It also has the side effect of making your browser faster. [Firefox Addon](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/), [Chrome Plugin](https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp), [Edge Add-on](https://microsoftedge.microsoft.com/addons/detail/privacy-badger/mkejgcgkdlddbggjhhflekkondicpnop). If you use Safari, you're out of luck - try [Ghostery](https://www.ghostery.com/lite/) instead, which only sells anonymised data to others.

* **uBlock Origin** - this is an open source ad blocking plugin that doesn't track or sell your activity. Again, it'll also speed up your browser and make it more secure. [Firefox Addon](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Chrome Plugin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en), [Edge Addon](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak), [Safari Addon](https://ublock.org/safari/)

* **HTTPS Everywhere** - also by the EFF, this upgrades insecure connections that the browser makes, where that is a supported option. [Firefox Addon](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/), [Chrome Plugin](https://chrome.google.com/webstore/detail/https-everywhere/gcbommkclmclpchllfjekcdonpmejbdp?hl=en), [Edge Addon](https://microsoftedge.microsoft.com/addons/detail/https-everywhere/fchjpkplmbeeeaaogdbhjbgbknjobohb), not available on Safari.

* **Facebook Container** - if you are going to use Facebook, isolate it so that it can't harvest any information when you aren't actively using it. [Firefox Only](https://addons.mozilla.org/en-US/firefox/addon/facebook-container/)


**Search Engine Choice:** Unsurpisingly, these track everything you look for, and pass that data on. If you are already part of Google's ecosystem, then maybe it's fine for you to keep using Google. Similar with Microsoft and Bing... though Bing? Really? Anyway, if you don't want to share what you are searching for, switch your search engine to [Duck Duck Go](https://duckduckgo.com/) or [Startpage.com](https://startpage.com).






## Defending your phone
You probably know that your phone is tracking you a lot, but even then you might not be aware how much. The average phone sends off your location, activities and other data tens of thousands of times a day. 

Each time you do a search on Android, Chrome sends Google your location. If you turn off location sharing it still sends your location out, just with less accuracy.

https://www.washingtonpost.com/technology/2019/05/28/its-middle-night-do-you-know-who-your-iphone-is-talking/

Don't give any app other than your camera

1. Factory-reset your phone
1. Go through all the settings, and turn off anything you don't need.
2. Remove any app which you can remove, unless you are okay with using it
3. Only add apps that you will use every day. Ideally you should investigate what data each collects first. Don't have apps installed that you don't use frequently. If you use one occasionally, install it for each use then remove it.
4. Don't give apps permission to do things if they don't need it. For example, Instagram and Facebook don't need access to your camera or microphone - just use the built in camera app to take pictures/video, then import it.
5. Don't use the default browser if you can avoid it. Consider using Firefox Focus, or another similarly privacy-respecting browser
6. Use Signal for SMS/messaging.


## Social Media and other surveillance systems


Windows 10 doesn't have the best record on privacy. Most app teams need to get data about their users to improve their products, and Microsoft is no different in that respect. If you want to look deeper into the issue, you can read Microsoft's reasoning for their [data gathering](https://technet.microsoft.com/en-au/itpro/windows/manage/configure-windows-telemetry-in-your-organization), and the EFF's [criticism of it](https://www.eff.org/deeplinks/2016/08/windows-10-microsoft-blatantly-disregards-user-choice-and-privacy-deep-dive).

Depending on where you are living, the sites you visit may also be logged by your ISP, for government use. In Australia, that metadata is held for [two years](https://www.ag.gov.au/dataretention), in the UK it's 1-2 years, and if you live in the US it's now a commercial product that can be sold to, well, anyone really.

A VPN is the only real defence against this, but it is of limited use if you still refer to your ISPs DNS for name resolution. You can lower the amount of data collected about you by selecting a DNS provider that does not keep logs, and uses the dnscrypt protocol to sign communications, making the responses harder to spoof. Note that dnscrypt does not provide privacy without a VPN.





For a simple solution, you can change your DNS servers to [OpenDNS](https://www.opendns.com/setupguide/) or [Google DNS](https://developers.google.com/speed/public-dns/). Both keep logs, which isn't ideal, but they aren't exactly known for handing them over. A better solution is [Simple DNScrypt](https://simplednscrypt.org/), which gives you non-logging options, and implements the dnscrypt protocol.



## Improve your social media privacy
Make sure you are happy with the list of apps connected to each of your social media accounts, because each of them is likely to be recording as much information as possible.

* Microsoft - <a href="https://account.microsoft.com/privacy">https://account.microsoft.com/privacy</a>
* Google - <a href="https://myaccount.google.com/privacycheckup">https://myaccount.google.com/privacycheckup</a>
* Apple - You're mostly out of luck, but Apple do have a history of not sharing data with anyone else. What settings you can change are detailed <a href="https://www.apple.com/privacy/manage-your-privacy/">here</a>
* Facebook - <a href="https://www.facebook.com/about/basics">https://www.facebook.com/about/basics</a>, and choose 'Take the Privacy Check-up' at the bottom
* LinkedIn - <a href="https://www.linkedin.com/psettings/">https://www.linkedin.com/psettings/</a>
* Twitter - <a href="https://twitter.com/settings/security">https://twitter.com/settings/security</a>
* Instagram - <a href="https://help.instagram.com/196883487377501">https://help.instagram.com/196883487377501</a>

And if you live in the US, I'd also recommend opting out of the various services who index information on you from publicly available records. This [article](https://tisiphone.net/2017/01/25/thwart-my-osint-efforts-while-binging-tv/) eloquently explains how to do that.

The last point I'd make about privacy is that it's something that is important to maintain, even when you have nothing to hide. If 99% of mail was postcards, envelopes would be suspicious. There plenty of people with legitimate reasons not to want their privacy invaded, and by protecting your privacy, you protect theirs.

For HIGH risk scenarios, research what you are doing first. The [EFF's Surveillance Self-Defence](https://ssd.eff.org/en) is a good starting point.