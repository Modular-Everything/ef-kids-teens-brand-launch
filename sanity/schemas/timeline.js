export default {
  name: "timeline",
  type: "array",
  title: "Timeline",
  of: [
    {
      name: "doubleCard",
      type: "doubleCard",
      title: "Double Card",
    },
    {
      name: "imageCard",
      type: "imageCard",
      title: "Image Card",
    },
    {
      name: "singleCard",
      type: "singleCard",
      title: "Single Card",
    },
  ],
};
