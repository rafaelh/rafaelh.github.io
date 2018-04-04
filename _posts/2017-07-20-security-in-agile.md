---
id: 1517
title: Security in Agile
date: 2017-07-20T05:55:49+00:00
author: Rafael
layout: post
guid: https://www.rafaelhart.com/?p=1517
permalink: /2017/07/security-in-agile/
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
<div class="prose">

<em>(First posted on the </em><a href="https://agileaustraliablog.com/2017/07/19/security-in-agile/" target="_blank" rel="nofollow noopener"><em>Agile Australia</em></a><em> blog, 19/07/2017)</em>

At least once a fortnight I find myself filling out a Request for Proposal (RFP) describing my team’s development approach, and how we secure our Systems Development Life Cycle (SDLC). We have a formal security framework; they’re great for filling out RFPs. When you are trying to build products in an agile format they are less so. The traditional process looks something like this:

&nbsp;
<div class="slate-resizable-image-embed slate-image-embed__resize-full-width" data-imgsrc="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAA3ZAAAAJDcwODZjN2FmLTYyZTUtNDFkNS1iMWUxLWYwYjdhMmE4ZjNmZA.jpg"><img class="aligncenter wp-image-1519 size-full" src="https://www.rafaelhart.com/wp-content/uploads/2017/07/rafe-hart-blog1.jpg" alt="Traditional Secure SDLC" width="1075" height="302" /></div>
&nbsp;

Security is often an afterthought and never bolts on as well as when it has been considered from the start. This is to our advantage as well – we want each iteration to be shippable, and the sooner we can find issues, the cheaper they are to fix. Fortunately, with a little thought, building with security can become an agile process itself. Consider the following:
<h2>Incorporate Threats with Personas</h2>
If you use personas, try adding some who don’t have your best interests at heart. A few of these will be example attackers, along with the motivations they might have for hacking your product, and others will be legitimate users. Try including the potential harm that your authorised personas could inflict unintentionally, such as deleting the wrong information, or setting a password of ‘123456’. Ideally, your product should protect the personas from themselves. If you do UX research, consider asking users questions about mistakes with sensitive data that the software has allowed them to make.
<h2>User Security Stories</h2>
Incorporate User stories that model the behaviour the product should have: e.g. <em>“As a user, I want my information to be private so that other users cannot view it”</em>. Also, consider the attackers as sources for stories – e.g. <em>“As an attacker, I should not be able to deny access to the site, so that legitimate users can reach it”</em>. The stories don’t need to define the controls to be implemented, so they can be written without technical security knowledge, and focus on the behaviour that’s important to users. The team can then decompose the story into specific technical requirements as the backlog is refined.
<h2>Definition of Done</h2>
Include security criteria into the Definition of Done. This is a good opportunity to include minimum security criteria (the<a href="https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=OWASP_Proactive_Controls_2016" target="_blank" rel="nofollow noopener"> OWASP Proactive Controls</a> are a good reference for this) on input validation and other common security issues that should always be considered. This provides clear guidance on what should be in place before a feature is considered shippable. You will need to walk a fine line between adding too many implicit security requirements, and breaking security jobs out into their own stories so that you can still break your backlog down into manageable chunks.

The team should evaluate the delivered code at every Sprint Review, and have the authority to decide if they are done. This allows people with the best technical understanding to make a decision on whether the product is safe to ship. If all the security criteria have been met, then it’s up to the Product Owner to approve any residual risk before the iteration is shipped, or to add further backlog tasks to address those risks.
<h2>Avoid Bottlenecks</h2>
Security adds overhead, so to keep the process as lean as possible, automation needs to be used wherever practicable. Static code analysis should be incorporated into the build process so that it becomes part of the engineering process. This brings the discovery of common problems into the developer’s IDE and allows them to be fixed much faster than the same problem discovered in testing. Security should then be considered during manual code review to catch the issues that static analysis cannot find.

Automated tests should be written to verify controls in the business logic so that each user can only perform those actions they are supposed to. Further automation should include fuzzing and vulnerability scans, though this may involve changing products, as only some support being scripted into a CI/CD process.

There is quite a bit of work in setting all of this up, then tuning it so that you aren’t overwhelmed with false positives. You can’t build a massive verification infrastructure before actually working on the product, so adopt the agile approach for this too, and iteratively improve what you have automated in each sprint, then maintain it once it’s in place.
<h2>After Delivery</h2>
Regardless of what process you use, once you release your software into production, you need to have an incident response plan in place. This is likely to involve every part of the business, and for the team building the product, it means thinking through how issues will be identified, escalated, fixed and redeployed. This becomes a DevOps process and may be handled by a different team, but ideally, it should not be. It’s important that the team takes ownership of security, and learns from any incidents that occur.

Meaningful metrics in software development is difficult, but you need to be able to measure the impact that you are having. Some practical metric examples include: mean time to fix security bugs found in production, mean time between failures/application crashes in production, and mean time to recovery afterwards. You can produce many objective metrics from code analysis tools, but unless you are bringing a legacy codebase into line, they provide limited insight.

Hopefully, some of these ideas will resonate with those who are moving away from a process heavy security SDLC. As a parting thought, having a dedicated specialist in your sprint teams is ideal, but you aren’t going to get anywhere if security becomes that one person’s problem. Everyone needs to be aware of it, everyone needs training, and it needs to be a team responsibility.
<h3>Resources &amp; References:</h3>
<ul>
 	<li><a href="https://msdn.microsoft.com/en-us/library/windows/desktop/ee790621.aspx" target="_blank" rel="nofollow noopener">Security Development Lifecycle for Agile Development</a>, Microsoft</li>
 	<li><a href="https://www.microsoft.com/en-us/download/details.aspx?id=54092&amp;WT.mc_id=rss_alldownloads_all" target="_blank" rel="nofollow noopener">Security for Modern Engineering</a>, Microsoft</li>
 	<li><a href="https://www.owasp.org/index.php/OWASP_Proactive_Controls#tab=OWASP_Proactive_Controls_2016" target="_blank" rel="nofollow noopener">OWASP Proactive Controls 2016</a>, OWASP</li>
 	<li><a href="https://www.owasp.org/index.php/Category:OWASP_Application_Security_Verification_Standard_Project" target="_blank" rel="nofollow noopener">OWASP Application Security Verification Standard (ASVS) Project</a>, OWASP</li>
 	<li><a href="https://www.owasp.org/images/c/c6/OWASP_AppSec_Research_2010_Agile_Prod_Sec_Mgmt_by_Vaha-Sipila.pdf" target="_blank" rel="nofollow noopener">Product Security Risk Management in Agile Product Management</a>, Antti Vähä-Sipilä</li>
</ul>
</div>