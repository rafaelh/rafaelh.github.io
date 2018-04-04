---
id: 1508
title: Windows 10 Privacy
date: 2017-03-27T19:47:23+00:00
author: Rafael
layout: post
guid: https://www.rafaelhart.com/?p=1508
permalink: /2017/03/windows-10-privacy/
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
Last week in the US the <a href="https://www.businessinsider.com.au/republicans-kill-fcc-broadband-privacy-rules-2017-3?r=US&amp;IR=T">FCC privacy regulations</a> were repealed, which, amongst other things, allows ISPs to track your internet usage and sell it to third parties. It's a good time to think about privacy.

Windows 10 doesn't have the best record on privacy. Most app teams need to get data about their users to improve their products, and Microsoft is no different in that respect. If you want to look deeper into the issue, you can read Microsoft's reasoning for their <a href="https://technet.microsoft.com/en-au/itpro/windows/manage/configure-windows-telemetry-in-your-organization">data gathering</a>, and the EFF's <a href="https://www.eff.org/deeplinks/2016/08/windows-10-microsoft-blatantly-disregards-user-choice-and-privacy-deep-dive">criticism of it</a>.

&nbsp;
<h1>Improve your Windows Privacy</h1>
There are multiple tools to turn off Windows 10 telemetry, depending on what services you are prepared to go without. There is a slightly melodramatic naming convention for these tools that ever so subtly hints at what their authors might say on this topic if you got a few beers into them.
<ul>
 	<li><a href="https://github.com/Nummer/Destroy-Windows-10-Spying/releases/tag/1.6.722">Destroy-Windows-10-Spying</a> adds host entries to block telemetry servers, and shuts down a range of Windows tasks that try to report your data</li>
 	<li><a href="https://www.oo-software.com/en/shutup10/update">O&amp;OShutup10</a> gives you a fast way to disable all the privacy affecting settings in Windows, and provides guidance with each one. Don't tick everything, especially the ones with red exclamation marks next to them</li>
 	<li><a href="https://modzero.github.io/fix-windows-privacy/">fix-windows-privacy</a> will disable a wider range of tracking via the registry, including removing OneDrive</li>
</ul>
Remember to run these after any major Windows update, as Microsoft has turned tracking back on with some of these in the past.

If you have an NVidia card, they send telemetry home as well, but it seems to be <a href="http://www.howtogeek.com/280101/relax-nvidias-telemetry-didnt-just-start-spying-on-you/">mostly harmless</a> so far. Instructions to turn it off are <a href="https://www.youtube.com/watch?v=bp850f5_rzk">here</a>.

Depending on where you are living, the sites you visit may also be logged by your ISP, for government use. In Australia, that metadata is held for <a href="https://www.ag.gov.au/dataretention">two years</a>, in the UK it's 1-2 years, and if you live in the US it's now a commercial product that can be sold to, well, anyone really.

A VPN is the only real defence against this, but it is of limited use if you still refer to your ISPs DNS for name resolution. You can lower the amount of data collected about you by selecting a DNS provider that does not keep logs, and uses the dnscrypt protocol to sign communications, making the responses harder to spoof. Note that dnscrypt does not provide privacy without a VPN.

For a simple solution, you can change your DNS servers to <a href="https://www.opendns.com/setupguide/">OpenDNS</a> or <a href="https://developers.google.com/speed/public-dns/">Google DNS</a>. Both keep logs, which isn't ideal, but they aren't exactly known for handing them over. A better solution is <a href="https://simplednscrypt.org/">Simple DNScrypt</a>, which gives you non-logging options, and implements the dnscrypt protocol

&nbsp;
<h1>Improve your browser privacy</h1>
Your browser broadcasts a lot of information. If you are signed in on Facebook, and you visit another site that has placed an link on their page, Facebook knows about it.

There is a 'Do Not Track' setting in most browsers these days, but the best approach is to install EFF's <a href="https://www.eff.org/privacybadger">Privacy Badger</a> extension, which will detect and block sites tracking you. Privacy Badger is available for Chrome and Firefox. If you use Safari, consider installing Ghostery instead. What if you're using IE? Stop using IE. There. I fixed it for you.

While you are there, you should install <a href="https://www.eff.org/https-everywhere">HTTPS-Everywhere</a> and uBlock Origin (<a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en">Chrome</a> / <a href="https://addons.mozilla.org/en-us/firefox/addon/ublock-origin/">Firefox</a>) to remove potentially malicious ads and upgrade insecure connections where possible.

&nbsp;
<h1>Improve your social media privacy</h1>
Make sure you are happy with the list of apps connected to each of your social media accounts, because each of them is likely to be recording as much information as possible.
<ul>
 	<li>Microsoft - <a href="https://account.microsoft.com/privacy">https://account.microsoft.com/privacy</a></li>
 	<li>Google - <a href="https://myaccount.google.com/privacycheckup">https://myaccount.google.com/privacycheckup</a></li>
 	<li>Apple - You're mostly out of luck, but Apple do have a history of not sharing data with anyone else. What settings you can change are detailed <a href="https://www.apple.com/privacy/manage-your-privacy/">here</a></li>
 	<li>Facebook - <a href="https://www.facebook.com/about/basics">https://www.facebook.com/about/basics</a>, and choose 'Take the Privacy Check-up' at the bottom</li>
 	<li>LinkedIn - <a href="https://www.linkedin.com/psettings/">https://www.linkedin.com/psettings/</a></li>
 	<li>Twitter - <a href="https://twitter.com/settings/security">https://twitter.com/settings/security</a></li>
 	<li>Instagram - <a href="https://help.instagram.com/196883487377501">https://help.instagram.com/196883487377501</a></li>
</ul>
And if you live in the US, I'd also recommend opting out of the various services who index information on you from publicly available records. This <a href="https://tisiphone.net/2017/01/25/thwart-my-osint-efforts-while-binging-tv/">article</a> eloquently explains how to do that.

&nbsp;

The last point I'd make about privacy is that it's something that is important to maintain, even when you have nothing to hide. If 99% of mail was postcards, envelopes would be suspicious. There plenty of people with legitimate reasons not to want their privacy invaded, and by protecting your privacy, you protect theirs.