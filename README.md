# JS.geek.NZ static site builder

## Requires

- Hugo

## Local development

```shell
hugo -w
```

## Deploy

Production builds are built on GitHub Actions and deployed by the GHA workflow to GitHub Pages.

```shell
git push
```

See `.github/actions/gh-pages.yml`.

## Tasks

- [x] Find a good scraper
- [x] Import HTML content
- [ ] Fix display date
- [ ] Support .html in Hugo path. Or redirect URLs to paths without it
- [ ] Migrate images
