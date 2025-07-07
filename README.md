# rafaelhart.com
A tech blog. See the live site at [https://rafaelhart.com](https://rafaelhart.com).

* https://rafaelhart.com/
* [Instructions for hosting on Github Pages](https://pages.github.com/)

## Installation
```bash
# On Debian
sudo apt install ruby ruby-bundler jekyll
gem install jekyll-paginate jekyll-sitemap jekyll-feed jekyll-seo-tag
gem update --system

# Or via the gem package manager:
gem install bundler jekyll jekyll-paginate jekyll-sitemap jekyll-feed jekyll-seo-tag

# Then go to the blog folder and:
bundle install
bundle update jekyll
```

## Running
Demo site: https://localhost:4000
```bash
bundle exec jekyll serve
# Browse to https://localhost:4000
```

## Post Template
```markdown
---
title: title
date: 2021-01-30
layout: post
published: false
permalink: /2017/03/windows-10-privacy/
featured_image: /assets/img/2017/2017-03-27-windows-10-privacy.jpg
excerpt: info goes here
---

URL:
[Amass](https://github.com/OWASP/Amass#-owasp-amass)

Image:
![Views on DevOps]({{site.baseurl}}/assets/img/2018/2018-02-23-devops-ecosystem.jpg)
```


# More Info
* [Front Matter in posts](https://jekyllrb.com/docs/front-matter/)
* [GUI for Less, Sass, and CoffeeScript files, so you can recompile them](http://koala-app.com/)
* [GitHub Custom domains with HTTPS](https://github.blog/2018-05-01-github-pages-custom-domains-https/)