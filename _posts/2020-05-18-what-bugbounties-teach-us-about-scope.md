---
title: What Bug Bounties teach us about Scope
date: 2020-05-18
layout: post
permalink: /2020/05/what-bug-bounties-teach-us-about-scope/
featured_image: /assets/img/2020/2020-05-18-what-bug-bounty-teaches-us-about-scope.jpg
excerpt: Bug bounties use a dramatically more open scope of targets to find security flaws than your average pentest. And while we might still lean on pentests for compliance purposes, there is a lot of merit to hacking yourself the bug bounty way.
---
Have you ever had a pentest, to check your company's security?

Even with the best of intentions, the average pentest scope is a small subset of the targets in a company. Usually it's about triaging work; the more targets you test, the more time it takes, the more you pay and the more you have to fix. So most scopes stay small out of neccessity. But not all companies operate in this way; some join bug bounty programs where they pay monetary rewards for hackers who find a way into their system. And their scope? It varies from program to program, but it's often everything under their primary domain (*.example.com). This is a lot more realistic, because it's what an attacker will target.

The point I'd like to make with what follows is that whether you have the funds and security maturity to join a bug bounty program or not, you can use those techniques to find flaws before your real adversaries do, and thanks to the thriving bug bounty community there are a variety of tools which make the process reasonably straightforward for someone with a technical background.

What follows isn't intended to be a comprehensive guide on bug bounty tools or methods, the idea is to get you thinking about what tests you can perform on your own company, and some tools I've found helpful for that process.

## Google yourself first
Google knows all, and in it's indexes you can find many things that shouldn't be there. As the [Google Hacking Database](https://www.exploit-db.com/google-hacking-database) shows, there are many sensitive files that have unknowingly been made public. Do you know what there is out there on your company? Here are two google queries to test, replacing 'Target' with your company name:

``` html
# First Query:
Target site:ideone.com | site:codebeautify.org | site:codeshare.io | site:codepen.io | 
site:repl.it | site:justpaste.it | site:pastebin.com | site:jsfiddle.net | site:trello.com | 
site:dotnetfiddle.net | site:paste2.org | site:pastebin.fr | site:pastehtml.com | site:slexy.org | 
site:snipplr.com | site:snipt.net | site:textsnip.com | site:bitpaste.app | site:justpaste.it | 
site:jsbin.com | site:heypasteit.com | site:hastebin.com | site:dpaste.org | site:dpaste.com | 
site:dumpz.org | site:codepad.org | site:jsitor.com | site:jsfiddle.net | site:play.golang.org | 
site:dartpad.dartlang.org | site:try.ceylon-lang.org

# Second Query
Target site:rextester.com | site:phpfiddle.org | site:ide.codingblocks.com | 
site:ide.geeksforgeeks.org | site:repl.it | site:ideone.com | site:paste.debian.net | 
site:paste.fedoraproject.org | site:paste.frubar.net | site:paste.lisp.org | 
site:paste.pound-python.org | site:paste.opensuse.org | site:paste.org | site:paste.org.ru | 
site:paste.ubuntu.com | site:paste.xinu.at
```

### Do the same in Shodan
Shodan indexes the open ports and services of the world. You may not find your own assets on [Shodan](https://www.shodan.io/), but you might find your customers, and you can warn them.

## What is your real attack surface?
Any subdomain of your main site is fair game for an attacker, and you should know what you have that is discoverable. You may not feel your dev.example.com site is fair game, but if an attacker can use that to pivot on to your production resources, they will. There are *many* tools for subdomain discovery:

* [Amass](https://github.com/OWASP/Amass) ❤ (my favourite)
* [assetfinder](https://github.com/tomnomnom/assetfinder)
* [subfinder](https://github.com/projectdiscovery/subfinder)
* [sublist3r](https://github.com/aboul3la/Sublist3r)

So which one do you use? It's up to your personal preference, but there is no reason you can't use a bunch of them in unison. It's pretty simple to script them all together, sort the output and remove duplicate findings. See [rafaelh/recon](https://github.com/rafaelh/recon) for an example.

To get the best results, these tools take some setup, as they need credentials for services like [shodan](https://www.shodan.io/), [spyse](https://spyse.com/), facebook, github, etc to find records of your subdomains on those sites. You can still use them without those credentials, but your results may be less complete. For good measure, you can use [dnsgen](https://github.com/ProjectAnte/dnsgen) on your list of discovered domain names to create a huge list of guesses at potential domain names.

### Verifying your results

So now you have a huge file of potential subdomains, many of which are going to be wrong. The beauty of the tools that have come out of the bug bounty ecosystem is that they follow the old school unix philosophy of being able to be chained together. With that in mind you can use the following tools:

* [massdns](https://github.com/blechschmidt/massdns) - built to scan the **whole** internet, massdns will rapidly confirm which are real
* [wildcheck](https://github.com/theblackturtle/wildcheck) - this removes wildcard domains (eg *.app.example.com)
* [httprobe](https://github.com/tomnomnom/httprobe) - see which domains have responding web servers

The end result is that within a few minutes you have a list of the web properties linked to your company's domain. Use something like [aquatone](https://github.com/michenriksen/aquatone) and you can screenshot them all automatically, to help you sift through them faster (and easily identify targets for [subdomain takeover](https://github.com/EdOverflow/can-i-take-over-xyz)).

### Searching for endpoints
Once you have a list of responding http servers, you can use a crawling tool to pick all the links off the servers you've identified so that you can feed them en masse into attacking tools. Additionally, you can get additional links off sites that snapshot pages over time, or you can straight-up brute force them out of those webservers. Needless to say, since this isn't passive, you shouldn't be doing this on anything you can't legally test. Tools you might use include:

* [hakrawler](https://github.com/hakluke/hakrawler) - crawl the subdomains for links
* [getallurls](https://github.com/lc/gau) - get all known links from alienvault, wayback & common crawl
* [gobuster](https://github.com/OJ/gobuster) - brute force additional pages and files

You can reduce the links found to a more promising subset with something like the following:

``` sh
cat urls.txt | grep "=" | grep -v ".jpg\|.png\|.css\|.js" | yourattacktool (eg dalfox)
```

### Attacking endpoints
With a fairly comprehensive list of endpoints for a company, you can then start feeding likely URLs into attack tools like [XSStrike](https://github.com/s0md3v/XSStrike), [SQLmap](http://sqlmap.org/) or others.

Once you've built up a decent range of these you can have some confidence that anything that can be found by automation will be, and you can get out Burpsuite and start manually testing.

## Why do this?
Playing with tools like this dispels the myth that hackers just poke around your site till they find a way in - some probably do, but many will be crawling every link and port connected with your company's name with automation before they move on to the manual approach.

Bug bounty programs are for companies with mature security, where anything easy is already dealt with. They help maintain a strong security posture, and that's great if that's where you are at. For the majority of companies it isn't though, and the techniques used in bug bountying can very rapidly find issues which you can then fix. The majority of bug bounty tools are very accessible, so all you need to chain them together and see the results. If you don't, you can bet others will.
