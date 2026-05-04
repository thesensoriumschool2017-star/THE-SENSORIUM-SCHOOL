export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    { name: "hero_title", title: "Hero Title", type: "string" },
    {
      name: "intro_paragraphs",
      title: "Intro Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    },
    { name: "impact_title", title: "Impact Title", type: "string" },
    {
      name: "impact_points",
      title: "Impact Points",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "closing_paragraph", title: "Closing Paragraph", type: "text" },
    { name: "follow_line", title: "Follow Line", type: "string" },
    { name: "meet_title", title: "Meet Title", type: "string" },
    { name: "meet_paragraph", title: "Meet Paragraph", type: "text" },
    { name: "founder_image_note", title: "Founder Image Note", type: "string" },
    { name: "founder_image", title: "Founder Image", type: "image", options: { hotspot: true } },
  ],
};

