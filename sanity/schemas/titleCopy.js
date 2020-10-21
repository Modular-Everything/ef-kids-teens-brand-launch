export default {
  name: "titleCopy",
  type: "object",
  title: "Title Copy",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "paragraph",
      type: "text",
      title: "Paragraph",
      rows: 2,
    },
  ],
  validation: (Rule) => Rule.required(),
};
