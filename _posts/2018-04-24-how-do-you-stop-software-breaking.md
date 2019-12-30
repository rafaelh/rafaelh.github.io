---
title: How do you stop software breaking?
date: 2018-04-24
layout: post
featured_image: /assets/img/2018/2018-04-24-gears.jpg
excerpt: The difficulty with quality is that like all knowledge work, it’s invisible. Each practice within the discipline guards against specific issues, and each can be skipped... until something breaks. Software testers devote an entire career to this topic, so it is difficult to cover it all with any kind of brevity, but here are the things I would look for.
---
The difficulty with quality is that like all knowledge work, it’s invisible. Each practice within the discipline guards against specific issues, and each can be skipped... until something breaks. Software testers devote an entire career to this topic, so it is difficult to cover it all with any kind of brevity, but here are the things I would look for.

## Automation that works

Automated testing is essential for any software that is going to be successful. Repetitive testing of key functions should happen every time your software is pushed into production, and any monotonous boundary-checking should similarly be done by the code, leaving testers free to do exploratory testing, and find the things that automation can’t. This is where the test pyramid concept comes in.


![Software Test Pyramid]({{site.baseurl}}/assets/img/2018/2018-04-24-test-pyramid.jpg)

*(Source: The pyramid concept was developed by Mike Cohn, in conversation Lisa Crispin, and separately by Jason Huggins.)*

The test pyramid describes the ratio of types of automated tests that should support your manual testing. It’s important, because not adhering to this ratio is the cause of many software issues. The aim is to automate as much as you can, only trust tests that you’ve seen fail, and make sure your tests fail within a timeframe that is useful.

### End to end tests (E2E)

These function like a user, clicking on functionality as they would, stepping through an automated test. They aren’t fast, but they validate that a particular piece of functionality, and thusly business value, is working, just as if a user had done it. Whilst this sounds good, when they fail, you don’t know what broke, just that *something* broke. The temptation is to have a lot of them - don’t. Ideally, your E2E tests should cover just the critical paths in your software, so that they run fast enough to fail before the developer has finished their coffee and moved onto something else. Google wrote an excellent [blog post](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html) on why you minimize these. 

### Integration Tests

Integration tests cut across two or more parts of a system, demonstrating that the link between them works. Similarly, component tests cover one module within the software, and API tests cover a particular endpoint. Each of these testing methods divide up the software without requiring the full stack to work (as an E2E test would) and without becoming so granular that a single function is tested (like a unit test).

### Unit Tests

The majority of your automated tests should be unit tests, each of which test the smallest sensible pieces of code in the software, and are innately fast to run. I’m sure we all have a friend who works with a team that doesn’t write enough unit tests. A common approach for improving this is to implement Test Driven Development (TDD). A developer starts by writing a test, and then running it, to watch it fail, because you only trust tests that you’ve seen fail. After that, the developer writes the code to make it pass, refactors to make it maintainable and readable, and then repeats the process with the next portion of the code. This ensures a high number of unit tests are created, which will make isolating errors faster when the tests fail. Once you’ve done TDD for a while, it no longer needs to be followed prescriptively, so long as code produced continues to have good quality unit tests.

## Test for quality, not just to see if it works

Making sure your software is functional tends to be the focus of testing, since that is what makes it fit-for-purpose, but there are other attributes to cover. The Agile testing quadrants (below) cover a range of other tests, particularly Q4, which covers accessibility, security, performance and all the other areas that make a good product great.

![Software Test Pyramid]({{site.baseurl}}/assets/img/2018/2018-04-24-agile-testing-quadrants.jpg)

*(Source: Lisa Crispin, Brian Marick)*

The quadrants on the right are where testing moves from functionality to quality, and they often have to fight for attention with the other two quadrants. The left hand quadrants are essential for delivering product, but the right is where customer satisfaction lives.

## Keep it agile

We want to avoid mini-waterfall systems, where work is completed in the first three quarters of a sprint, and handed to the testers towards the end, leaving them with a highly variable workflow. This can be addressed, firstly through work in progress (WIP) limits that force a continual flow through the system, but also by having the testers collaborate with developers at the start of each job. This way, the developer and tester can define how each of the acceptance criteria will be tested. 

![Software Test Pyramid]({{site.baseurl}}/assets/img/2018/2018-04-24-atdd.jpg)

This is a practice known as Acceptance Test Driven Development (ATDD). In ATDD, the developer and tester (or the whole team, depending on your approach) collaborate on the requirements of a story, and discuss the acceptance criteria, using examples. This yields an agreed approach to performing the acceptance tests, and where possible, automating them at the appropriate levels. This builds shared understanding of the tasks and gives the testers time to build test plans for any manual testing steps. 

## Quality is about people (like everything else)

Lastly, quality is a whole team responsibility, not just that of the software testers within the team. Developers can test each other’s work and write tests. They can pair program to share knowledge and work on difficult problems. They can review each other’s code before it goes into the product.

![Software Test Pyramid]({{site.baseurl}}/assets/img/2018/2018-04-24-pair-programming.jpg)

Product owners can identify the highest value features, so that feedback on them is received promptly. They can group planned releases to limit the change in each. They can get internal and external customers involved in the process to make sure the software is something they will want to use all day long, before it gets to production.

Next time you have an issue in production, ask yourself if one of these building blocks could have prevented the issue. Then, like everything else in agile, *inspect and adapt*.
