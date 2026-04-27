# rafaelhart.com
A tech blog built with Jekyll and deployed on GitHub Pages.

Live site: [https://rafaelhart.com](https://rafaelhart.com)

## Structure
- `_config.yml`: Jekyll configuration.
- `_data/`: site data files.
- `_drafts/`: unpublished draft posts.
- `_includes/`: shared HTML partials.
- `_layouts/`: page layout templates.
- `_pages/`: standalone pages (about, contact, etc).
- `_posts/`: blog posts.
- `_projects/`: project entries.
- `_sass/`: Sass source files.
- `assets/`: images and other static assets.
- `css/` and `js/`: compiled/static frontend files.
- `.github/workflows/`: GitHub Actions deployment workflow.

## Technologies
- [Jekyll](https://jekyllrb.com/) static site generator.
- [Ruby](https://www.ruby-lang.org/) and [Bundler](https://bundler.io/) for dependency management.
- Jekyll plugins used by this site:
	- `jekyll-paginate`
	- `jekyll-sitemap`
	- `jekyll-feed`
- [GitHub Pages](https://pages.github.com/) for hosting.

## Installation (Arch Linux)
```bash
# Install Ruby and development tools
sudo pacman -S --needed ruby base-devel

# Install Bundler
gem install bundler

# From the project directory
bundle install
```

## Installation (macOS)
```bash
# Install Homebrew if needed: https://brew.sh

# Install Ruby (recommended over system Ruby)
brew install ruby

# Ensure Homebrew Ruby is first in PATH (zsh)
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Install Bundler and project gems
gem install bundler
bundle install
```

## Running
Local site: http://localhost:4000
```bash
bundle exec jekyll serve
# Browse to http://localhost:4000
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
* [GitHub Custom domains with HTTPS](https://github.blog/2018-05-01-github-pages-custom-domains-https/)
