---
title: 'WIP & Why multitasking is costly'
date: 2018-03-05
layout: post
permalink: /2018/03/wip-why-multitasking-is-costly/
img: 2018/2018-03-05-traffic-jam-in-china.jpg
tags: [Agile, DevOps]
published: true
---
5am on the road, and the streets are empty - you get from point A to point B rapidly, as does everyone else awake at that hour. Several hours later there are many more cars on the road; everyone gets where they are going much slower. It’s not that there isn’t enough room in the lanes for the cars, it’s that every has to start and stop, reacting to the car in front of them, not just the lights. These interruptions, in essence, are the problem with high levels of concurrent work.


Handling concurrent issues and the associated interruptions have been shown to negatively impact productivity - research shows that it [raises error rates](https://msutoday.msu.edu/news/2013/brief-interruptions-spawn-errors/), [stress levels](https://www.ics.uci.edu/~gmark/chi08-mark.pdf), and that each task has a [context switching overhead](https://www.ics.uci.edu/~gmark/chi08-mark.pdf) (23+ mins to get back to full productivity in one study, 40% of [overall productivity](https://www.apa.org/research/action/multitask.aspx). We often don’t realise this because knowledge work is invisible. You can spot work piling up in a bottleneck like a traffic jam, but if work instead proceeds slowly from point A to point B, the only red flag to show you something is wrong is a poor cycle time.
<h2>WIP Limits</h2>
Smart traffic systems address this by creating lights that let one vehicle at a time onto major roads, controlling the ingress of traffic into the system. Kanban (and DevOps) has a similar concept; Work in Progress (WIP) limits. In the original Toyota manufacturing plants that spawned Lean &amp; Kanban, workers could pull a cord when work went past the WIP limit, whereupon everyone else in the team would stop their work and ‘swarm’ on the problem.
<div class="slate-resizable-image-embed slate-image-embed__resize-middle"><img class="aligncenter size-medium wp-image-1626" src="https://www.rafaelhart.com/wp-content/uploads/2018/03/Ramp-Signals-300x197.jpg" alt="" width="300" height="197" /></div>
The intent is that the ‘swarming’ team members will work together to solve the problem and feed the learning from that into improving the system. In systems with high psychological safety, this is what happens. Without that safety, the cord is likely never to be pulled, even when everyone in the system knows the issues. As a result, one of the first steps after implementing a WIP limit is to support those pushing back against work that breaks them.
<h2>Limits enforce collaboration</h2>
In addition to increased focus when there are less tasks going through a system, WIP limits enforce collaboration. Even if your team doesn’t ‘swarm’ as in Kanban, introducing a WIP limit that is lower than the number of people in the team means that each stage of your process, team members will need to collaborate, by pairing or cooperating in another manner. The lower the limit is set, the more cross-skilling the team will get, though there is a point at which cycle time will increase, and you are instead investing in team training and more considered work, rather than throughput. Like all agile systems, they work best when implemented in an agile way; the team should choose the WIP limit that makes sense for them, and they should inspect and adapt the limits as they see the results of implementing them.

<img class="size-medium wp-image-1628 aligncenter" src="https://www.rafaelhart.com/wp-content/uploads/2018/03/2018-03-02-13.45.23-300x244.jpg" alt="" width="300" height="244" />

A good team is a cross-functional one, which will mean you have a variety of skills and specializations. But if we build a system with WIP limits, <strong>and</strong> enforce specialization, then the moment that specialist isn’t available, we can predict what will happen.

<img class="aligncenter size-medium wp-image-1629" src="https://www.rafaelhart.com/wp-content/uploads/2018/03/lane-ends-300x92.png" alt="" width="300" height="92" />

It’s not realistic that we expect everyone to code or do other specialist work, but there is a considerable amount of the product development process that can be done outside those areas of specialization, and your team will be better at this the more they collaborate. Developers should be comfortable testing each other’s work. Testers should collaborate with developers on acceptance criteria. Designers should collaborate with product owners, and so on.
<h2>Create a Pull System</h2>
Kanban was designed to be a pull system, only accepting new work as work is finished. Scrum ingests groups of tasks in pre-defined amounts. Regardless of the approach you use, the important point is to optimize the flow through the system. WIP limits are a leading indicator of full <em>lead time</em>, which is the time between the customer requesting a particular business value and receiving it in production. Concurrent streams of work on the other hand, are shown to reduce productivity. So the question your team needs to ask is what is the right limit for them.

To build a sustainable system, something must finish before something new starts. Success isn’t about starting things, it’s about finishing them.