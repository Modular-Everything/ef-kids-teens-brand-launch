export default {
  name: "page",
  type: "document",
  title: "Pages",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
    },

    {
      name: "video",
      type: "vimeo",
      title: "Header Video",
    },

    {
      name: "openingCopy",
      type: "titleCopy",
      title: "Opening Copy",
    },

    {
      name: "talkingHeadsCopy",
      type: "titleCopy",
      title: "Talking Heads Copy",
    },

    {
      name: "talkingHeads",
      type: "talkingHeads",
    },

    {
      name: "quizCta",
      type: "quizCta",
    },

    {
      name: "timelineCopy",
      type: "titleCopy",
      title: "Pre-timeline Copy",
    },

    {
      name: "timeline",
      type: "timeline",
      title: "Timeline",
    },

    {
      name: "guidelinesCta",
      type: "guidelinesCta",
      title: "Guidelines CTA",
    },

    {
      name: "uniformInfo",
      type: "uniformInfo",
      title: "Uniforms",
    },

    {
      name: "questionsCopy",
      type: "titleCopy",
      title: "Any Questions Copy",
    },
  ],
};
