# gayath.dev

My personal portfolio, live at **[gayath.dev](https://gayath.dev)**.

A static site with a star chart background and a solar system menu, all drawn in code. Built with Astro and plain CSS, with only a few small scripts in the browser.

## Stack

- **Site:** Astro, TypeScript, CSS
- **Hosting:** AWS S3 and CloudFront, with Route 53 and ACM for the domain
- **Infrastructure:** Terraform
- **Deploys:** GitHub Actions using OIDC, so no AWS keys are stored in GitHub

## Run it locally

Needs Node 22 or newer.

```sh
npm install
npm run dev
```

Then open http://localhost:4321.

## Project layout

```text
src/pages       one file per page
src/components  layout, background and solar system menu
src/data        page content (projects, experience, education)
public          images, icons and the CV
infra           Terraform for AWS
```

## Deploys

Work happens on feature branches off `dev`. Merging into `main` builds the site and uploads it to S3, then clears the CloudFront cache.
