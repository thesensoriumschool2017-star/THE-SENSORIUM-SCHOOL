export default {
  name: "servicesPage",
  title: "Services Page Intro",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
    { name: "intro", title: "Intro", type: "text" },
    { name: "show_blog", title: "Show Blog in Services Menu", type: "boolean", initialValue: true },
  ],
};
