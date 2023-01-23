# [arciniega.one][site]

My own personal website, powered by [Astro][astro] and [Tailwind CSS][tailwind].

## How to Deploy

To deploy this website, use a service like Vercel, Netlify, Render, or Heroku:

[![Deploy to Vercel](https://vercel.com/button)][vercel]
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)][netlify]
[![Deploy to Render](https://binbashbanana.github.io/deploy-buttons/buttons/official/render.svg)][render]
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)][heroku]

You're now up and running!

_GitHub Pages is not recommended for deploying this site._

## Customizing the website

To customize and tailor this website for yourself, you'll want to:

- Edit the [`site.config.ts`](src/site.config.ts) file. This acts as the website's configuration. 
- Edit the [`footer.astro`](src/components/footer.astro) file.
- Edit the [`index.astro`](src/pages/index.astro) file. This is the main content that will be displayed on the site.
- Optional:
    - Change the `site` variable in [`astro.config.ts`](astro.config.ts) if you plan on making your site public.
    - Edit the variables found in [`tailwind.config.cjs`](tailwind.config.cjs) to stylize the website to your needs.
    - Edit the [`public`](public/) folder's contents. 
        - I would appreciate if you credited me in the [`public/credits.txt`](public/credits.txt) file. ❤️

## Hosting in a local environment

**Node.js 18+** or newer is required to be installed for this site.

1. `git clone https://github.com/solelychloe/arciniega.one`
2. `corepack enable`
3. `yarn install`

- To preview, run `yarn dev`. Pages will update automatically on file save.
- To build, run `yarn build`. Afterwards, you can run `yarn start` to serve the site from the `dist/` folder.

You're now up and running!

## License

This website is licensed under the [zlib][license] license.

&copy; 2023 Chloe Arciniega.

[astro]: https://astro.build 'Astro'
[license]: https://github.com/solelychloe/arciniega.one/blob/main/LICENSE 'zlib License'
[site]: https://www.arciniega.one 'arciniega.one'
[tailwind]: https://tailwindcss.com/ 'Tailwind CSS'

[heroku]: https://heroku.com/deploy?template=https://github.com/solelychloe/arciniega.one 'Deploy to Heroku'
[netlify]: https://app.netlify.com/start/deploy?repository=https://github.com/solelychloe/arciniega.one 'Deploy to Netlify'
[render]: https://render.com/deploy?repo=https://github.com/solelychloe/arciniega.one 'Deploy to Render'
[vercel]: https://vercel.com/new/clone?repository-url=https://github.com/solelychloe/arciniega.one 'Deploy to Vercel'
