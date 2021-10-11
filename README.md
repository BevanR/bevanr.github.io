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
