---
title: "The best languages for AI coding"
date: 2026-05-24
layout: post
published: true
permalink: /2026/05/the-stack-for-the-ai-era/
featured_image: assets/img/2026/ai_network.jpg
excerpt: AI can now write most of your code. The language you choose matters more than ever - not just for developer productivity, but because some languages produce measurably better AI-generated code than others. In my view Python, TypeScript, and Rust have pulled clear of the field.
---

AI can now write most of your code. The question isn't whether to use it - that ship has sailed - it's what language to point it at.

This isn't just a question of developer preference or hiring pools, though both matter. It turns out the language you choose has a measurable effect on *how well* AI performs. Some languages are significantly better targets for AI-generated code than others, and the reasons are instructive.

My view: three languages have pulled clear of the field for AI-assisted development - Python for AI, data, and security automation; TypeScript for full-stack applications and integrations; and Rust for anything where performance and memory safety matter. I'll explain why, address the obvious challengers, and then make the case for why good architecture still matters even when AI is doing the typing.

## Why Language Choice Matters More in the AI Era

The quality of AI-generated code isn't uniform across languages. It's heavily influenced by how much code in that language exists in the training data.

A 2023 paper published in ACM PACMPL ([arXiv:2308.09895](https://arxiv.org/abs/2308.09895)) studied this directly: *"Code LLMs produce impressive results on programming languages that are well represented in their training data (e.g., Java, Python, or JavaScript), but struggle with low-resource languages that have limited training data available."* The training corpus for BigCode's StarCoder 2 - 67.5TB of code across 600+ languages - reflects this reality: Python and JavaScript have hundreds of gigabytes of representation; many other languages have less than a gigabyte.

The practical consequence shows up in agentic benchmarks. Multi-SWE-bench ([arXiv:2504.02605](https://arxiv.org/abs/2504.02605)), a 2025 multilingual benchmark accepted to NeurIPS, tested Claude 3.7 Sonnet autonomously resolving real GitHub issues across eight languages:

| Language   | Resolution rate |
|------------|-----------------|
| Python     | 52.20%          |
| Java       | 21.88%          |
| Rust       | 15.90%          |
| C++        | 14.73%          |
| TypeScript | 11.16%          |
| Go         | 7.48%           |

Python outperforms the next-best language by more than two to one. The paper's conclusion is direct: "Existing LLMs and methods demonstrate strong performance in resolving Python issues but struggle to generalise effectively across other languages."

This doesn't mean you should write everything in Python. It means the language choices you make will affect the quality of the AI assistance available to you. Choose the right language for the domain, and you get better AI performance as a side effect.

## Python: AI, Data, and Security Automation

If you're building anything in the AI or data space, the choice is Python and the question is closed.

Python overtook JavaScript as the #1 language on GitHub in 2024 ([GitHub Octoverse 2024](https://github.blog/news-insights/octoverse/octoverse-2024/)), ending a ten-year reign. The Stack Overflow Developer Survey 2024 - 65,000+ respondents - found it's the most *desired* language: the one developers who don't yet use it most want to learn. TIOBE named it Language of the Year for 2024 with a 9.3 percentage point gain, hitting an 18% rating - the first language to reach that threshold since Java in 2016.

For AI and ML specifically, the numbers are stark. The PyTorch Foundation reports 85% of deep learning research papers use PyTorch ([PyTorch 2024 Year in Review](https://pytorch.org/blog/2024-year-in-review/)), and the entire Hugging Face ecosystem - over one million models as of late 2024, with 15,000 uploaded weekly - is Python-first. You can build AI applications in other languages, but you'll spend most of your time wrapping Python libraries.

For security automation and DevSecOps tooling, Python is similarly dominant. Most OSINT tools, penetration testing frameworks, and security automation scripts are Python. The developer pool matters here too: Python has roughly ten times the developer base of Go, which translates directly to hiring, tooling, and ecosystem support for teams building security tooling.

## TypeScript: Full-Stack Applications and Integrations

TypeScript has quietly become the dominant language for web applications and integrations. In 2024, it surpassed Java to become the third-most-used language on GitHub. By August 2025, it had climbed to number one by contributor count - growing 66% year-over-year, driven in part by AI tooling ([GitHub Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)).

The State of JavaScript 2024 survey found that 67% of respondents now write more TypeScript than JavaScript; 34% write all their code in TypeScript. JetBrains tracked TypeScript adoption among JavaScript developers rising from 12% in 2017 to 35% in 2024.

The AI tooling angle here is worth pausing on. TypeScript's static type system makes AI-generated code significantly easier to verify. When an AI generates a function with a clear type signature, you can see immediately what it expects and what it returns. Catching type errors at compile time rather than runtime is always a good idea - it's an even better idea when the code was written by a model that occasionally confuses itself.

For integrations and full-stack work, TypeScript gives you a single language across front and back end, a rich ecosystem of typed API clients, and a deep training corpus for the models writing your code.

## Rust: Performance and Memory Safety

Rust is the outlier on this list. It's not in the top tier of AI agentic benchmarks, and its learning curve is famously steep. The case for Rust isn't about AI productivity - it's about what you're building and what happens when it breaks.

If you're building anything performance-critical, systems-level, or where memory safety bugs can be exploited, Rust is the answer. The evidence for why is strong:

- Microsoft reports approximately 70% of CVEs assigned each year are memory safety issues
- Google finds the same pattern in Chromium: 70% of serious security bugs are memory safety problems ([Chromium Security](https://www.chromium.org/Home/chromium-security/memory-safety/))
- The White House Office of the National Cyber Director published a [technical report in February 2024](https://bidenwhitehouse.archives.gov/oncd/briefing-room/2024/02/26/press-release-technical-report/) explicitly calling on technology manufacturers to adopt memory-safe languages, citing 35 years of vulnerabilities including Heartbleed and the Morris worm
- The NSA issued similar guidance in 2022, naming Rust as the strongest memory-safe option at the systems programming level

The industry agrees. Rust drivers were accepted into the Linux kernel in version 6.8. Microsoft has rewritten over 188,000 lines of Windows kernel and DirectWrite code in Rust. Azure's CTO, Mark Russinovich, banned new C/C++ projects. Google invested $1 million in the Rust Foundation.

Developer sentiment is also positive. Rust has been the most-admired language in the Stack Overflow Developer Survey for nine consecutive years, with 83% of users wanting to continue using it - the highest admiration score of any language. The 2024 State of Rust Survey found 45% of organisations now make non-trivial use of Rust in production, with 82% reporting it has helped their company achieve its goals.

For AI workloads, Rust is increasingly important at the infrastructure layer - the inference runtimes, WebAssembly targets, and embedded applications where Python's performance ceiling becomes a problem.

## Other Choices

I don't claim nothing else is worth using; there are other excellent choices, I'm just not choosing them myself:

**Go** is an excellent language and the de facto standard for cloud infrastructure tooling. Kubernetes, Terraform, Docker, Helm, and most of the CNCF ecosystem are Go. If your team is building cloud-native infrastructure components, Go is probably the right choice. My argument for Python in the DevSecOps space is specifically about *security automation and scripting* - where Python's ecosystem and developer pool are an advantage. For infrastructure-level tooling, Go's concurrency model and deployment simplicity are hard to beat.

**Java and C#** remain strong choices for enterprise application development (though some people will have a hard time getting excited about Java), particularly in organisations with deep existing investment. Both are memory-safe languages explicitly recommended by the White House ONCD report. The trade-off is that their AI performance in agentic benchmarks lags Python significantly, and neither has TypeScript's current hold on modern full-stack development.

**C++** retains its position in domains where Rust hasn't yet penetrated - game engines, automotive, legacy embedded systems. If your performance-critical codebase is already C++, a full rewrite in Rust isn't necessarily the right call. But Rust is probably the right choice going forward.

## Architecture = Money

AI is great at copying patterns and mechanically extending an application with new functionality. It's also great at extending a mess into a *real mess*. Starting from scratch and left to its own devices, it's likely that AI will generate something similar to it's training data, but when you think about what most real world systems end up looking like, that may not be the end goal you want.

Every time an AI agent touches your codebase, it reads context to understand the system before it writes. The larger and more tangled that context, the more tokens it costs - and the lower the quality of the output. A well-structured application with clear domain boundaries and consistent naming is cheaper to modify. Not just cheaper in developer time - cheaper in token costs, and higher quality, because the model has less noise to reason through.

I don't think that fully spec -> code is likely to ever completely come about. Having a human at key decision points is always likely to be valuable. Our understanding of what we are trying to implement shifts over time, and past technological approaches aren't always the best choice for a future solution. AI will try and give us what we want, but chances are we don't know what we want or won't know how to clearly articulate every detail of it at the initiation of the project.

Architectural quality isn't just good engineering hygiene any more. It's an finacnial decision. Companies that maintain clear domain models, consistent abstractions, and good separation of concerns will get predictable and stable returns from AI tooling, at the cost of maintaining a team. Companies that don't will get compounding and less predictable costs, which won't matter for time-limited or small projects, but will for ongoing streams of work.

## The Practical Takeaway

If you're tasking a team with a new project and want to maximise the value you get from AI-assisted development:

- **Python** for anything in the AI, data science, or security automation space
- **TypeScript** for web applications, APIs, and integrations
- **Rust** for performance-critical systems, embedded applications, or anything where memory safety vulnerabilities would be a serious risk

And regardless of language, invest in the design of the system. AI gives a loudspeaker to your actions; good ones have substantially more impact, and bad ones are terrible.
