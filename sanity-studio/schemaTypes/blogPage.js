export default {
  name: "blogPage",
  title: "Blog Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Page Subtitle",
      type: "text",
      rows: 3,
    },
    {
      name: "posts",
      title: "Posts",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "slug",
              title: "Slug",
              type: "string",
              description: "Example: welcome-to-our-blog",
              validation: (Rule) =>
                Rule.required().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
                  name: "slug",
                  invert: false,
                }),
            },
            {
              name: "title",
              title: "Post Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "publish_date",
              title: "Publish Date",
              type: "string",
              description: "Example: 2026-05-04",
            },
            {
              name: "author_name",
              title: "Author Name",
              type: "string",
            },
            {
              name: "published",
              title: "Published",
              type: "boolean",
              initialValue: true,
            },
            {
              name: "cover_image",
              title: "Cover Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "excerpt",
              title: "Excerpt",
              type: "text",
              rows: 4,
            },
            {
              name: "tags",
              title: "Tags",
              type: "array",
              of: [{ type: "string" }],
              options: {
                layout: "tags",
              },
            },
            {
              name: "table_of_contents",
              title: "Table of Contents",
              type: "array",
              of: [{ type: "string" }],
              description: "Optional manual table of contents items.",
            },
            {
              name: "quote",
              title: "Highlight Quote",
              type: "text",
              rows: 3,
            },
            {
              name: "sections",
              title: "Sections",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "heading", title: "Heading", type: "string" },
                    { name: "text", title: "Text", type: "text", rows: 6 },
                    {
                      name: "image",
                      title: "Section Image",
                      type: "image",
                      options: { hotspot: true },
                    },
                    {
                      name: "youtube_url",
                      title: "YouTube URL",
                      type: "url",
                    },
                  ],
                  preview: {
                    select: {
                      title: "heading",
                    },
                    prepare(selection) {
                      return {
                        title: selection.title || "Section",
                      };
                    },
                  },
                },
              ],
            },
            {
              name: "cta_title",
              title: "CTA Title",
              type: "string",
            },
            {
              name: "cta_button_text",
              title: "CTA Button Text",
              type: "string",
            },
            {
              name: "cta_link",
              title: "CTA Link",
              type: "url",
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "slug",
              media: "cover_image",
            },
          },
        },
      ],
    },
  ],
};
