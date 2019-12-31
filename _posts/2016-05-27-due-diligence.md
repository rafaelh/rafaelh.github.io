---
title: Due Diligence
date: 2016-05-27
layout: post
permalink: /2016/05/due-diligence/
img: 2016/2016-05-27-due-diligence.jpg
featured_image: /assets/img/2016/2016-05-27-due-diligence.jpg
excerpt: Checking things at part of due diligence is rarely the most fun activity in the world, but it does have a habit of turning up some surprising things. I've been doing some compliance checking for PCI DSS recently, and it turns out a lot of the providers I thought were PCIDSS compliant (and claimed to be) aren't.
---
Checking things at part of due diligence is rarely the most fun activity in the world, but it does have a habit of turning up some surprising things. I've been doing some compliance checking for PCI DSS recently, and it turns out a lot of the providers I thought were PCIDSS compliant (and claimed to be) aren't.

[Mastercard](https://www.mastercard.us/en-us/merchants/safety-security/security-recommendations/service-providers-need-to-know.html) and [VISA}(http://www.visa.com/splisting) (doesn't work in Chrome) both maintain authoritative PCI DSS lists, so if you use any payment providers, it's worth checking them in there. A lot of the institutions that we take for granted *must* be compliant are no where to be found on that list. I was surprised to find that Microsoft Azure isn't on that list.

It turns out there are extenuating circumstances in Azure's case, and they have been audited to the standard by Coalfire, they just aren't part of the program... I do feel like there is some marketing spin in there somewhere; my suspicion is that all-windows infrastructure doesn't lend itself to single-tenanted environments on the scale that Azure needs to achieve, so they probably multi-tenant a lot of their systems more than PCI DSS is comfortable with.

The other thing that has got me thinking is the discovery that Azure SQL servers can be connected to by anyone inside Azure, whether they are part of your organisation or not. As stated in [Azure's documentation](https://azure.microsoft.com/en-us/documentation/articles/sql-database-configure-firewall-settings/):

<blockquote>To allow applications from Azure to connect to your Azure SQL server, Azure connections must be enabled.</blockquote>

Theoretically that means anyone could spin up an Azure VM and try and connect directly to your database, something which most enterprises would be deeply uncomfortable with. I still haven't formed any long term conclusions, as this is still something I'm researching, but it is food for thought.

Due diligence is not something to skip.