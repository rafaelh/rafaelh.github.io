# CLAUDE.md

Personal tech blog ([rafaelhart.com](https://rafaelhart.com)) built with Jekyll 4.4 and deployed to GitHub Pages via GitHub Actions.

## Build & local dev

Bundler is configured (in `.bundle/config`, gitignored) to install gems into project-local `vendor/bundle/` to avoid system-path permission errors. After cloning, run:

```bash
bundle install
bundle exec jekyll serve   # live preview at http://localhost:4000
bundle exec jekyll build   # one-shot build to _site/
```

Production parity: `JEKYLL_ENV=production bundle exec jekyll build` (enables analytics, etc.).

## Deployment

[.github/workflows/jekyll.yml](.github/workflows/jekyll.yml) builds on every push to `main` and deploys via `actions/deploy-pages@v4`. The workflow pins Ruby 3.3 and bundler 4.0.10. Because we build via Actions (not the legacy `github-pages` gem), **any** Jekyll plugin from RubyGems works — we are not restricted to the [pages.github.com/versions](https://pages.github.com/versions/) allowlist.

Custom domain in [CNAME](CNAME); DNS points at GitHub Pages with HTTPS enforced.

## Site structure

- [_config.yml](_config.yml) — Jekyll config + SEO fallbacks (top-level `title`, `description`, `author`)
- [_data/settings.yml](_data/settings.yml) — runtime branding (header logo, tagline, menu, socials, contact form). Templates read from `site.data.settings.*`, NOT from `site.title` directly. The `_config.yml` `title:`/`description:` keys exist purely as fallbacks for `jekyll-seo-tag`.
- [_layouts/](_layouts/) — `default.html` wraps every page; `page.html`, `post.html`, `project.html` extend it
- [_includes/](_includes/) — `header.html`, `footer.html`, `socials.html`, `contact-form.html`
- [_posts/](_posts/) — blog entries (~30+), paginated 6/page at `/blog/page:num/`
- [_pages/](_pages/) — standalone pages (about, contact, thanks)
- [_projects/](_projects/) — project entries
- [_plugins/](_plugins/) — custom Ruby Jekyll hooks (see below)

Collections are defined in [_config.yml](_config.yml) with custom permalinks: `/blog/:slug` for posts, `/project/:slug` for projects.

## Plugins

Registered in [_config.yml](_config.yml) plugins list:

| Plugin | Purpose |
|---|---|
| `jekyll-paginate` | Paginate the blog index |
| `jekyll-sitemap` | Auto-generate `sitemap.xml` |
| `jekyll-feed` | Auto-generate `feed.xml` |
| `jekyll-seo-tag` | Inject canonical/OG/Twitter/JSON-LD meta via `{% seo title=false %}` in [_layouts/default.html](_layouts/default.html) |
| `jekyll-redirect-from` | Add `redirect_from: [/old-url]` to any front matter to generate redirect stubs |
| `jekyll-github-metadata` | Exposes `site.github.*` (uses `repository:` key in `_config.yml`) |
| `jekyll-include-cache` | `{% include_cached %}` caches invariant partials (currently applied to `footer.html` and `socials.html`) |

## Front matter conventions

Posts and pages use `featured_image:` (NOT `image:`) for the hero image. The custom plugin [_plugins/featured_image_alias.rb](_plugins/featured_image_alias.rb) aliases `featured_image` → `image` at `:pre_render` time so `jekyll-seo-tag` picks it up for og:image, twitter:image, and JSON-LD without renaming front matter across all existing posts.

Why this is a plugin and not a Liquid trick: `Jekyll::Page` (e.g. `index.html`) snapshots its data to a Hash via `to_liquid` *before* `:pre_render` hooks fire, so the hook must write through to both `doc.data` (for `Jekyll::Document`/posts where to_liquid wraps a live Drop) AND `payload["page"]` (for `Jekyll::Page` where it's a snapshot).

Typical post front matter:

```yaml
---
title: ...
date: 2021-01-30
layout: post
permalink: /2017/03/windows-10-privacy/
featured_image: /assets/img/2017/2017-03-27-windows-10-privacy.jpg
excerpt: ...
---
```

## `<title>` is intentionally manual

[_layouts/default.html](_layouts/default.html) keeps a manual `<title>` with em-dash formatting (`Site – Page` on home, `Page – Site` elsewhere) and uses `{% seo title=false %}` so the SEO tag skips emitting its own `<title>`. Don't replace this with the default `{% seo %}` — it would change the title format.

## Gotchas

- `featured_image` is the convention; don't rename front matter to `image`. The plugin handles the aliasing.
- The legacy `github-pages` gem is **not** in the Gemfile. Don't add it — we build via GitHub Actions which is more permissive and uses the latest Jekyll.
- SCSS files emit `@import` deprecation warnings (Dart Sass 3.0 will remove `@import`). Not blocking; migration to `@use`/`@forward` is a separate task.
- `_drafts/` is ignored by default builds; pass `--drafts` to preview them.

## References

- Live site: https://rafaelhart.com
- Jekyll docs: https://jekyllrb.com/docs/
- jekyll-seo-tag usage: https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md
