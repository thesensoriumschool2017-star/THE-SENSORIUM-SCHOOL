export default {
  name: "sitePopup",
  title: "Site Popup",
  type: "document",
  fields: [
    {
      name: "enabled",
      title: "Enable Popup",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      rows: 6,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "images",
      title: "Slider Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Add multiple images here to show an auto-sliding gallery in popup.",
    },
    {
      name: "video_url",
      title: "Video URL (YouTube or direct)",
      type: "url",
    },
    {
      name: "button_text",
      title: "Button Text",
      type: "string",
    },
    {
      name: "button_link",
      title: "Button Link",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      enabled: "enabled",
      media: "image",
    },
    prepare(selection) {
      return {
        title: selection.title || "Site Popup",
        subtitle: selection.enabled ? "Enabled" : "Disabled",
        media: selection.media,
      };
    },
  },
};
