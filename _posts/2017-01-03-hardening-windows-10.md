---
title: Hardening Windows 10
date: 2017-01-03
layout: post
permalink: /2017/01/hardening-windows-10/
img: 2017/2017-01-03-hardening-windows-10.jpg
tags: [security, windows]
published: true
---
Security 'hardening' is the process of raising the baseline security of a device. I harden every device I use. It's not my intention to provide a hardening guide here (I've linked several good ones at the end), but I did want to go through some of the resources available if you need to do this for a group of computers (your organisation, for example).

# Locking things down
When most people think of security hardening, they picture covering the basics - uninstall programs that aren't needed, install the ones that are, get any available updates and add an antivirus program. Hopefully this includes a fresh windows installation, checking the BIOS settings, adding some sort of full disk encryption (Bitlocker, FileVault, etc). Depending on your approach it might also include [EMET](http://technet.microsoft.com/en-us/security/jj653751) and a variety of vendor-based solutions.

But where do you go from there?

There are an number of settings you can change to improve security in Windows 10, but some of them will be reset any time there is a major windows upgrade. The one type of setting Microsoft seems to honor over time is anything set by Group Policy Objects (GPOs).

This should be familiar territory for most systems administrators, any you can get secure baseline settings for each Windows 10 build from Microsoft at their <a href="http://blogs.technet.microsoft.com/secguide/" target="_blank" rel="noopener nofollow">Security Guidance</a> site. Be aware that, depending on your requirements, Microsoft's settings will probably not go far enough, since they <a href="http://technet.microsoft.com/en-au/itpro/windows/manage/configure-windows-telemetry-in-your-organization" target="_blank" rel="noopener nofollow">want to get telemetry from your systems</a>. This isn't sinister, but it should be understood.

This makes a good starting point and the next steps should be to source additional settings advice from a the below organisations, then finish with a manual inspection of the policy settings.

# Building a Baseline
Various Governments offer advice on what a secure baseline should look like. Settings/GPOs are part of this, but aren't the only steps that should be taken. Here are some guides from the countries I currently deal with:

## Australia
The Australian Signals Directorate provides high level advice in the form of their <a href="http://www.asd.gov.au/publications/Information_Security_Manual_2016_Controls.pdf" target="_blank" rel="noopener nofollow">Information Security Manual</a>, but once that gets down into details, it directs the reader to the Whole-of-Government Common Operating Environment build guidelines, the <a href="http://www.finance.gov.au/files/2013/05/SOE-Build-Guidelines-Windows-v3.0-Official-Draft.pdf" target="_blank" rel="noopener nofollow">public version</a> of which is only for Windows 7 SP1, and still in draft state. This is apparently produced by the Department of Finance, whose cyber security credentials I am unaware of. In practice, I expect the ASD consults directly with the organisations they are protecting, rather than publishing their defaults.

## USA
The NSA has provided a significant quantity of <a href="http://www.iad.gov/iad/library/ia-guidance/" target="_blank" rel="noopener nofollow">advice</a>, including information on Windows 10, broken down into short advisories. Unfortunately this doesn't provide a comprehensive blueprint for building a security baseline, unless you want to read all 112 documents and assemble something cohesive out of them.

Also produced by the US government, NIST provides <a href="http://web.nvd.nist.gov/view/ncp/repository" target="_blank" rel="noopener nofollow">baseline settings</a>, including importable GPOs, but it doesn't yet include Windows 10. NIST also produces a range of standards (<a href="http://web.nvd.nist.gov/view/800-53/home" target="_blank" rel="noopener nofollow">SP 800-53</a>, etc) which are considered an industry benchmark, but they are also some of the least readable.

The USA is also home to a non-profit organisation, the Center for Internet Security, which does produce <a href="http://benchmarks.cisecurity.org/downloads/browse/index.cfm?category=benchmarks.os.windows.10" target="_blank" rel="noopener nofollow">baselines for Windows 10</a>, including importable GPOs. This is the best advice I've found thus far.

## UK
Probably my favourite of the government guidance websites, the UK government’s National Technical Authority for Information Assurance (CESG) has produced a readable <a href="http://www.gov.uk/government/publications/end-user-devices-security-guidance-windows-10/end-user-devices-security-guidance-windows-10" target="_blank" rel="noopener nofollow">Windows 10 guide</a>. It's still relatively bare-bones, and doesn't include importable GPOs, but it's still ahead of the curve, since it actively attempts to communicate the risks and solutions in a concise format.

# Manual Review
Once you have a My preference is to build a custom baseline that fits what you do (Press Win + R and run gpedit.msc to review individual settings). A quick walk through google shows a range of resources for Windows 10 hardening, but if you take one at random, you are trusting that they are complete, and correct. That's not to say they aren't of use, but confirm everything before you add it to your baseline configuration. If you are thinking this sounds like a lot of work to do and keep up to date, you are correct.

If you are just securing your own machines, consider Tron Script <a href="http://redd.it/5hl351" target="_blank" rel="noopener nofollow">https://redd.it/5hl351</a> as a starting point.


# Securing the User
Ultimately, the easiest point of attack will always be the user. There is a limit as to how much you can do this via a secure baseline, but you can enforce policies on access, on mobile devices, etc.

If that user is you, you should at a minimum be using a recognised, commercial VPN when outside your home/office network, and enable two factor authentication (2FA) for any service you use. I tend to advise people to start with the least important services first, since that increases the chance the user will cover off all their social media accounts. <a href="http://twofactorauth.org/" target="_blank" rel="noopener nofollow">https://twofactorauth.org/</a> has a comprehensive list of what services can have 2FA enabled, and via what methods. If you are securing a group of other people, then there is significantly more to do, which is beyond the scope of this post.

# Rolling it out
If you are imposing these limitations on someone else, then make sure they are involved in the decision process, and accountable for the end result. You can add a significant amount of protection without sacrificing much usability, and if you start with a locked down baseline, and roll back protections depending on what is required, you can achieve a reasonable compromise. Lastly, make time to keep it up to date - these things change.

More info:
<ul>
 	<li><a href="http://hackernoon.com/the-2017-pentester-guide-to-windows-10-privacy-security-cf734c510b8d#.waayb62gc" target="_blank" rel="noopener nofollow">The 2017 Pentester Guide to Windows 10 Privacy &amp; Security</a>, Andrew Douma</li>
 	<li><a href="http://benchmarks.cisecurity.org/downloads/browse/index.cfm?category=benchmarks.os.windows.10" target="_blank" rel="noopener nofollow">Windows 10 Benchmarks</a>, Centre For Internet Security</li>
 	<li><a href="http://hardenwindows10forsecurity.com/" target="_blank" rel="noopener nofollow">Windows 10 Hardening</a>, Unknown</li>
 	<li><a href="http://redd.it/5hl351" target="_blank" rel="noopener nofollow">Tron Script</a>, Vocatus</li>
</ul>