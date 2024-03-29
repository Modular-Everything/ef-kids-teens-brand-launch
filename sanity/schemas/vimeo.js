export default {
  name: "vimeo",
  type: "object",
  title: "Vimeo Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Vimeo Video URL",
    },
  ],
  validation: (Rule) => Rule.required(),
};