---
title: 'Monolith or Microservices?'
date: 2018-03-18
layout: post
img: 2018/2018-03-18-monolith-or-microservices.jpg
tags: [Agile, Architecture]
---

If you are starting a new project, what should you build? Perhaps a more important question is, how should you build it?

Historically, most teams have built monolithic products. Monolithic systems contain all the components necessary for their operation, and increase in complexity as they grow, till they become hard for any one individual to grasp. Large monoliths are also hard to test, since repeated actions can take different paths through the system (cache invalidation anyone?).

{: style="text-align: center"}
![Monolithic Apps vs Microservices]({{site.baseurl}}/assets/img/2018/2018-03-18-monolithic-vs-microservice.jpg)


Microservice architectures on the other hand, are loosely coupled and safer to change, since the complexity of each part is low, and the chance of creating cascading effects is reduced due to isolation. Both architectures should have high coherence, in which related components are grouped to reduce complexity, to make them easier to reason about, test and maintain.

So the discussion is simple, build microservices, right? The answer is probably *yes*, but just as important is *how* you build it.

# Building for a perfect end state
People want to do meaningful work. When we launch into a new project, we have often have grand plans; use the lessons of the past, and build this project the right way. This leads us to plan an architecture up front that will enable that, and contains flexibility for a number of possible futures. But architecture does not by itself deliver business value. When you consider all the additional things we need to do to build a complete solution, we can be trapped into always building for our end state, rather than where we need to be next.

{: style="text-align: center"}
![There is a lot of Yak shaving]({{site.baseurl}}/assets/img/2018/2018-03-18-there-is-a-lot-of-yak-shaving.jpg)

In the above example, a common approach would be to build tooling to create an environment, a deployment engine, put in place testing and a loosely coupled architecture, one later at a time. In the long term this is great, if we haven’t made an assumption or a mistake. Alternately, we can attempt to build a small part of each, even manually doing some steps, in each sprint. This will take longer to reach our end state, but it will be faster to diagnose problems that we didn’t see at the outset.

{: style="text-align: center"}
![Build in slices not layers]({{site.baseurl}}/assets/img/2018/2018-03-18-build-in-slices-not-layers.jpg)

The great thing about this approach is that it supports building a loosely coupled architecture. We break down our plan into chunks and adapt as we learn from each iteration. More importantly, we invest in only enough architecture to take us forward to the next iteration, rather than where we propose to be in 12 months.

# Stepping back from the latest trend
Microservice architectures are popular right now, and for good reason. They are simpler and more maintainable as they grow, so in the long term, they are the right choice. They also take longer to build, and have their own complexity once you are dealing with large numbers of services.

Monoliths on the other hand allow you to easily hook up a variety of cross-cutting concerns; adding features with logging, security, etc within the same codebase. They can also have a performance advantage, since shared memory access is faster than inter-process communication. They do become increasingly unwieldy as they grow, but not all products are intended to last forever.

There are also steps in between, such as a Service Oriented Architecture (SOA), that offers some of the benefits of both. While it's good to know where you want to get to in the future, you should only build what you need to deliver value now.

{: style="text-align: center"}
![Monolith vs SOA vs Microservice]({{site.baseurl}}/assets/img/2018/2018-03-18-monolith-soa-microservice.jpg)

# Defer to the last responsible moment
Planning all architecture up front feels good because it provides a roadmap; changes at this stage are are cheaper than rework. But experience tells us that we will rarely get everything correct up-front, as it is hard to think through every outcome in a complex system, even when there are no requirement changes during development.

You will need a loose plan when you start, but after that, architecture should be done frequently and as needed. Maybe you will build microservices from the start. Maybe you will start with a monolith, keeping services independent at the code level, so that you can break it up later.

The Agile manifesto makes the following statement: *“The best architectures, requirements and designs emerge from self-organising teams”* . In short, only build what you need to deliver value now.