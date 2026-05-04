export default {
  name: "galleryPage",
  title: "Gallery Page",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    {
      name: "items",
      title: "Gallery Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID", type: "string" },
            {
              name: "type",
              title: "Type",
              type: "string",
              options: { list: ["image", "video"] },
              validation: (Rule) => Rule.required(),
            },
            { name: "caption", title: "Caption", type: "string" },
            { name: "image", title: "Image", type: "image", options: { hotspot: true } },
            { name: "video", title: "Video File", type: "file" },
            { name: "video_url", title: "YouTube / Video URL", type: "url" },
          ],
          preview: {
            select: {
              title: "caption",
              subtitle: "type",
              media: "image",
            },
          },
        },
      ],
    },
  ],
};

