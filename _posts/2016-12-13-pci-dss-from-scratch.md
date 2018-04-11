---
title: PCI DSS from scratch
date: 2016-12-13
layout: post
permalink: /2016/12/pci-dss-from-scratch/
img: 2016/2016-12-13-pci-dss.jpg
tags: [security, windows]
published: true
---
PCI DSS is the Payment Card Industry Data Security Standard, and it is required for any merchant, payment processor, or service provider that interacts with cardholder data. I recently went through the process of implementing this standard, and I thought I would share some of my observations on the process.


# Do your due diligence
 Several times I heard statements to the effect of *"Surely XYZ payment provider is compliant - they're owned by a bank!"* and I found myself nodding in agreement. Then on checking the VISA and MasterCard websites, it turns out that some of the people who claim to be compliant are not. Maybe they were once, but it's a big process to keep up to date with new versions of the standard, and clearly not everyone does it. The chain of compliance in PCI isn't always as good as you would expect, so check who you are working with. Often it's just a difference between trading name and the registered PCI name, but you don't know unless you find out.

Similarly, I had assumed an existing secure architecture would be able to be plugged into PCI DSS without much modification. It didn't turn out to be that simple, and a lot of reasonable assumptions we had made about our vendors turned out to not be entirely correct. For example, I learned that Azure SQL databases can't be firewalled from Azure services owned by other customers, including people who set up a new trial account. There are other means of performing traffic isolation, but that isn't something you want to find out just as you are going into implementation.

# Communication is oxygen
Emotions tend to run high when change occurs, especially with a security framework  that most stakeholders won't understand unless they have taken time to read it, which isn't a realistic expectation. Without frequent and tailored communication, It can seem to others that PCI threatens their productivity and the stability of their processes.

This applies to external stakeholders too; depending on their familiarity with the standard, they may need to be educated on what they need to provide. If you can give effective, concise information to the people maintaining those relationships, then the process of ensuring stakeholders are compliant can be made less combative, and will happen faster. With PCI DSS, this can add up to a big impact on the overall length of time it takes to become compliant, since your company is only one part of the puzzle.

# Don't write a novel
Reams of documentation are not necessary; effective processes are. I've come across a number of people who champion putting together a giant slab of documentation, to cover every possible scenario. If your aim is purely certification, then that is an approach that will get you there. But people don't read giant slabs of information, especially about security. Build a central matrix of where you meet the compliance documentation requirements, then locate the instructions for each process with that process. If you can back this up with workflow automation and some well thought out procedures, your policies will be followed because they are the path of least resistance.

Whilst compliance isn't the same as security, PCI DSS does create a good baseline to work from, and is a reasonable standard to hold other companies to. Where you go after that depends on what your company needs from its security program, but before you move onto another standard, consider some basic steps such as using a vulnerability scanner on your full internal network, not just your CDE. Compliance works best when it's partnered with practical tests.

---

More info:
<ul>
 	<li><a href="http://www.pcisecuritystandards.org/" target="_blank" rel="nofollow noopener">PCI DSS</a></li>
 	<li><a href="http://www.visa.com/splisting/" target="_blank" rel="nofollow noopener">VISA</a> (Firefox/IE only)</li>
 	<li><a href="http://www.mastercard.us/en-us/merchants/safety-security/security-recommendations/service-providers-need-to-know.html" target="_blank" rel="nofollow noopener">MasterCard</a></li>
</ul>