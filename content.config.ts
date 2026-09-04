import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const createCategorySchema = () =>
  z.object({
    title: z.enum([
      "arkitektonik",
      "inxhinierike",
      "arkitektur-publike",
      "objekte-shendetsore",
      "objekte-arsimore",
      "landscape",
      "hoteleri",
      "infrastuktura",
      "eficence-energjetike",
    ]),
    description: z.string().optional(),
    slug: z.string().optional(),
  });

const createBaseSchema = () =>
  z.object({
    title: z.string(),
    description: z.string(),
  });

const createButtonSchema = () =>
  z.object({
    label: z.string(),
    icon: z.string().optional(),
    to: z.string().optional(),
    color: z
      .enum(["primary", "neutral", "success", "warning", "error", "info"])
      .optional(),
    size: z.enum(["xs", "sm", "md", "lg", "xl"]).optional(),
    variant: z
      .enum(["solid", "outline", "subtle", "soft", "ghost", "link"])
      .optional(),
    target: z.enum(["_blank", "_self"]).optional(),
  });

const createImageSchema = () =>
  z.object({
    src: z.string().editor({ input: "media" }),
    alt: z.string(),
  });

const createAuthorSchema = () =>
  z.object({
    name: z.string(),
    description: z.string().optional(),
    username: z.string().optional(),
    twitter: z.string().optional(),
    to: z.string().optional(),
    avatar: createImageSchema().optional(),
  });

const createTestimonialSchema = () =>
  z.object({
    quote: z.string(),
    author: createAuthorSchema(),
  });

export default defineContentConfig({
  collections: {
    indexsq: defineCollection({
      type: "page",
      source: "sq/index.yml",
      schema: z.object({
        hero: z.object({
          links: z.array(createButtonSchema()),
          images: z.array(createImageSchema()),
        }),
        about: createBaseSchema(),
        experience: createBaseSchema().extend({
          items: z.array(
            z.object({
              date: z.date(),
              position: z.string(),
              company: z.object({
                name: z.string(),
                url: z.string(),
                logo: z.string().editor({ input: "icon" }),
                color: z.string(),
              }),
            }),
          ),
        }),
        testimonials: z.array(createTestimonialSchema()),
        projekte_sq: createBaseSchema(),
        faq: createBaseSchema().extend({
          categories: z.array(
            z.object({
              title: z.string().nonempty(),
              questions: z.array(
                z.object({
                  label: z.string().nonempty(),
                  content: z.string().nonempty(),
                }),
              ),
            }),
          ),
        }),
      }),
    }),
    indexen: defineCollection({
      type: "page",
      source: "en/index.yml",
      schema: z.object({
        hero: z.object({
          links: z.array(createButtonSchema()),
          images: z.array(createImageSchema()),
        }),
        about: createBaseSchema(),
        experience: createBaseSchema().extend({
          items: z.array(
            z.object({
              date: z.date(),
              position: z.string(),
              company: z.object({
                name: z.string(),
                url: z.string(),
                logo: z.string().editor({ input: "icon" }),
                color: z.string(),
              }),
            }),
          ),
        }),
        testimonials: z.array(createTestimonialSchema()),
        projekte_en: createBaseSchema(),
        faq: createBaseSchema().extend({
          categories: z.array(
            z.object({
              title: z.string().nonempty(),
              questions: z.array(
                z.object({
                  label: z.string().nonempty(),
                  content: z.string().nonempty(),
                }),
              ),
            }),
          ),
        }),
      }),
    }),
    indexit: defineCollection({
      type: "page",
      source: "it/index.yml",
      schema: z.object({
        hero: z.object({
          links: z.array(createButtonSchema()),
          images: z.array(createImageSchema()),
        }),
        about: createBaseSchema(),
        experience: createBaseSchema().extend({
          items: z.array(
            z.object({
              date: z.date(),
              position: z.string(),
              company: z.object({
                name: z.string(),
                url: z.string(),
                logo: z.string().editor({ input: "icon" }),
                color: z.string(),
              }),
            }),
          ),
        }),
        testimonials: z.array(createTestimonialSchema()),
        projekte_it: createBaseSchema(),
        faq: createBaseSchema().extend({
          categories: z.array(
            z.object({
              title: z.string().nonempty(),
              questions: z.array(
                z.object({
                  label: z.string().nonempty(),
                  content: z.string().nonempty(),
                }),
              ),
            }),
          ),
        }),
      }),
    }),
    // projekte: defineCollection({
    //   type: 'data',
    //   source: [
    //     { include: 'sq/projekte/*.md' },
    //     { include: 'en/projekte/*.md' },
    //     { include: 'it/projekte/*.md' }
    //   ],
    //   schema: z.object({
    //     links: z.array(createButtonSchema()),
    //     title: z.string().nonempty(),
    //     description: z.string().nonempty(),
    //     content: z.string().nonempty(),
    //     slug: z.string().nonempty(),
    //     minRead: z.number(),
    //     date: z.date(),
    //     image: z.string().nonempty().editor({ input: 'media' }),
    //     author: createAuthorSchema(),
    //     kategori: createCategorySchema()
    //   })
    // }),
    projektesq: defineCollection({
      type: "page",
      source: "sq/projekte/*.md",
      schema: z.object({
        links: z.array(createButtonSchema()),
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        slug: z.string().nonempty(),
        minRead: z.number(),
        date: z.date(),
        image: z.string().nonempty().editor({ input: "media" }),
        images: z.array(createImageSchema()),
        author: createAuthorSchema(),
        kategori: createCategorySchema(),
      }),
    }),
    projekteen: defineCollection({
      type: "page",
      source: "en/projekte/*.md",
      schema: z.object({
        links: z.array(createButtonSchema()),
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        slug: z.string().nonempty(),
        minRead: z.number(),
        date: z.date(),
        image: z.string().nonempty().editor({ input: "media" }),
        images: z.array(createImageSchema()),
        author: createAuthorSchema(),
        kategori: createCategorySchema(),
      }),
    }),
    projekteit: defineCollection({
      type: "page",
      source: "it/projekte/*.md",
      schema: z.object({
        links: z.array(createButtonSchema()),
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        slug: z.string().nonempty(),
        minRead: z.number(),
        date: z.date(),
        image: z.string().nonempty().editor({ input: "media" }),
        author: createAuthorSchema(),
        kategori: createCategorySchema(),
      }),
    }),
    pagessq: defineCollection({
      type: "page",
      source: "sq/projekte.yml",
      schema: z.object({
        links: z.array(createButtonSchema()),
      }),
    }),
    pagesen: defineCollection({
      type: "page",
      source: "en/projekte.yml",
      schema: z.object({
        links: z.array(createButtonSchema()),
      }),
    }),
    pagesit: defineCollection({
      type: "page",
      source: "it/projekte.yml",
      schema: z.object({
        links: z.array(createButtonSchema()),
      }),
    }),
    aboutsq: defineCollection({
      type: "page",
      source: "sq/about.yml",
      schema: z.object({
        content: z.object({}),
        images: z.array(createImageSchema()),
      }),
    }),
    abouten: defineCollection({
      type: "page",
      source: "en/about.yml",
      schema: z.object({
        content: z.object({}),
        images: z.array(createImageSchema()),
      }),
    }),
    aboutit: defineCollection({
      type: "page",
      source: "it/about.yml",
      schema: z.object({
        content: z.object({}),
        images: z.array(createImageSchema()),
      }),
    }),
  },
});
