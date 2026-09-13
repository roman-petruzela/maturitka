## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

**Cache gotcha:** after editing any of `src/lib/markdown/*.ts` (graph-svg.ts, geometry-svg.ts,
solid-svg.ts, the remark/rehype plugins) or `src/lib/{subjects,groups,content-fs}.ts`, both
`astro dev`'s file-watcher and a plain `npm run build` can silently keep serving/emitting the
*old* output — hit this twice in one session (content collections staying empty after a real
fix, then a solid-diagram fix not showing up). Force a clean re-sync before trusting the
result:

```
astro dev stop   # if a dev server is running
rm -rf dist node_modules/.astro node_modules/.vite .astro
npm run build    # or: astro dev --background
```

## Content ordering & labels

Subject and topic-group order/labels are NOT hardcoded in TypeScript (there's no
per-subject config table to edit). Instead, `src/content/*` directories (both subject
folders and the category folders inside them) follow a filesystem convention read by
`src/lib/content-fs.ts`:

- A leading `NN-` numeric prefix on a folder name sets its sort order and is stripped to
  form the public URL slug (e.g. `03-funkce-a-rovnice` → `/mat/funkce-a-rovnice/`).
- An optional `_meta.json` in that folder (`{ "label": "...", "description": "..." }`)
  supplies the display label/description when the auto-capitalized slug isn't good enough
  (missing diacritics, needs a "(2. ročník)" suffix, etc). Without it, the label falls back
  to an auto-capitalized version of the slug.
- To reorder or relabel subjects/categories: rename the folder and/or edit `_meta.json` —
  no code changes needed. Individual topic files keep their own existing convention
  (`NN-slug.md` filename + `order:` in frontmatter, both already in sync across the archive).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
