export default {
  name: "imageCard",
  type: "object",
  title: "Image Card",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Timeline Year",
    },
    {
      name: "imageTitle",
      type: "string",
      title: "Title",
    },
    {
      name: "bgImage",
      type: "image",
      title: "Image",
    },
    {
      name: "alt",
      type: "string",
      title: "Image Alt",
    },
  ],
};