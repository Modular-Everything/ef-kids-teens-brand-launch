export default {
  name: "vimeoCaption",
  type: "object",
  title: "Vimeo Embed with Caption",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Vimeo Video URL",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "captionTitle",
      type: "string",
      title: "Caption Title",
    },
    {
      name: "captionCopy",
      type: "string",
      title: "Caption Copy",
    },
  ],
};