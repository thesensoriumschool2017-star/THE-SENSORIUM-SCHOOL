export default {
  name: "servicesList",
  title: "Services List",
  type: "document",
  fields: [
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            { name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() },
            { name: "description", title: "Description", type: "text" },
            { name: "details", title: "Details (Optional)", type: "text" },
            { name: "image", title: "Image", type: "image", options: { hotspot: true } },
          ],
          preview: {
            select: {
              title: "title",
              media: "image",
            },
          },
        },
      ],
    },
  ],
};

