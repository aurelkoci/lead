# Agent Instructions for LEAD Consulting Nuxt Portfolio

Welcome! This workspace contains a custom single-page portfolio with sub-pages built with Nuxt 4, Nuxt Content v3, Nuxt UI v3, and Tailwind CSS v4.

To make changes or extend this codebase efficiently, please follow the conventions and guidelines below.

---

## 1. Core Tech Stack & Major Versions

- **Nuxt**: v4 (Specifically `nuxt: "^4.4.8"`)
- **Nuxt Content**: v3 (`@nuxt/content: "^3.14.0"`) — Do not confuse with v2!
- **Nuxt UI**: v3 (`@nuxt/ui: "^4.9.0"`) — Uses Tailwind CSS v4, which defines styling differently than v3.
- **Tailwind CSS**: v4

---

## 2. Directory Layout & Nuxt 4 Structure

Nuxt 4 defaults to placing frontend codebase assets in the [app/](app/) directory as the source folder.
**CRITICAL**: Do NOT place new pages, layouts, components, or assets in the root folder. They belong inside [app/](app/).

- **Pages**: Located in [app/pages/](app/pages/) (e.g., [app/pages/index.vue](app/pages/index.vue), [app/pages/about.vue](app/pages/about.vue), and dynamic routes like [app/pages/blog/[...slug].vue](app/pages/blog/[...slug].vue)).
- **Components**: Located in [app/components/](app/components/) (e.g., [app/components/landing/Hero.vue](app/components/landing/Hero.vue)).
- **Layouts**: Located in [app/layouts/](app/layouts/) (e.g., [app/layouts/default.vue](app/layouts/default.vue)).
- **CSS / Assets**: Main CSS is [app/assets/css/main.css](app/assets/css/main.css) and [app/assets/css/inter.css](app/assets/css/inter.css).
- **Global Config**: Core app configuration defaults in [app/app.config.ts](app/app.config.ts) (brand assets, logos, links).
- **Nuxt Config**: Framework config is configured in [nuxt.config.ts](nuxt.config.ts) at the root.

---

## 3. Nuxt Content v3 Conventions

Nuxt Content v3 relies on collection definitions configured in [content.config.ts](content.config.ts) and the new collection querying API (`queryCollection`). Do NOT use Content v2 `queryContent()` queries!

- **Config**: Collections like `index`, `projects`, `blog`, `pages`, `speaking`, and `about` are specified with strong schema validation (Zod) in [content.config.ts](content.config.ts).
- **Markdown / YAML Sources**: Sources are stored in [content/](content/) (e.g., [content/index.yml](content/index.yml), [content/projects/](content/projects/), [content/blog/](content/blog/)).
- **Querying API**:
  - To fetch a single page:
    ```typescript
    const { data: page } = await useAsyncData('index', () => {
      return queryCollection('index').first()
    })
    ```
  - To fetch all blog posts ordered by date:
    ```typescript
    const { data: posts } = await useAsyncData('index-blogs', () => {
      return queryCollection('blog').order('date', 'DESC').all()
    })
    ```
  - Navigation queries:
    ```typescript
    const { data: navigation } = await useAsyncData('navigation', () => {
      return queryCollectionNavigation('blog')
    })
    ```

---

## 4. Nuxt UI & Tailwind CSS v4 Patterns

- **UI Components**: Employs layout wrappers such as `<UApp>`, `<UMain>`, `<UPage>`, `<UPageHero>`, and `<UPageSection>`.
- **Icon Collections**: Built-in simple icon formats such as `i-lucide-arrow-right` or `i-simple-icons-facebook`.
- **Search Support**: Implements `<LazyUContentSearch>` with custom parameters linked to navigation indices.
- **Global Colors**: Tailored through `app.config.ts` (`ui.colors` with `primary: "blue"`, `neutral: "neutral"`).

---

## 5. Development Workflow & Commands

Always use standard `pnpm` workspace scripts to handle setup, checks, and builds.

- **Start Dev Server**: `pnpm dev`
- **Build / Prerender Production**: `pnpm build`
- **Preview Production Build**: `pnpm preview`
- **TypeScript Typecheck**: `pnpm typecheck`
- **Run Linter Checks**: `pnpm lint`
- **Automatically Fix Linter Issues**: `pnpm lint:fix`

---

## 6. Guardrails & Key Pitfalls

1. **Schema Violations**: When editing any YAML or Markdown files under [content/](content/), verify that all fields perfectly match schemas defined in [content.config.ts](content.config.ts). Run `pnpm dev` or `pnpm build` to let Nuxt generate type helpers.
2. **ESLint Rules**: ESLint Flat Config is enforced in [eslint.config.mjs](eslint.config.mjs). If compile errors occur, run `pnpm lint:fix` to resolve formatting discrepancies. Note that `@typescript-eslint/no-explicit-any` rules are turned off.
3. **Paths Rule**: Avoid hardcoding static files, routes, or assets without checking directories and their aliases (e.g., `~/assets/` is mapped correctly inside [app/](app/)).
