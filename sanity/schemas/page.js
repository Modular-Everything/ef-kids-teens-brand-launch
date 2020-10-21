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
      name: "bodymovin",
      type: "object",
      title: "Bodymovin Object",
      fields: [
        {
          name: "bodymovinJson",
          type: "code",
          title: "JSON",
          options: {
            language: "json",
          },
        },
        {
          name: "scrollPrompt",
          type: "string",
          title: "Show me more label",
        },
      ],
    },

    {
      name: "talkingHeadsCopy",
      type: "titleCopy",
      title: "Talking Heads Copy",
    },

    {
      name: "talkingHeadsVideo",
      type: "array",
      of: [
        {
          name: "talkingHead",
          type: "vimeoCaption",
        },
      ],
      validation: (Rule) => Rule.length(4),
    },

    {
      name: "quizCta",
      type: "object",
      title: "Quiz CTA",
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
        {
          name: "buttonLabel",
          type: "string",
          title: "Button Label",
        },
      ],
    },

    {
      name: "timelineCopy",
      type: "titleCopy",
      title: "Pre-timeline Copy",
    },

    {
      name: "timeline",
      type: "array",
      title: "Timeline",
      of: [
        {
          name: "doubleCard",
          type: "object",
          title: "Double Card",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Timeline Year",
            },
            {
              name: "paragraphTitle",
              type: "string",
              title: "Title",
            },
            {
              name: "paragraph",
              type: "text",
              title: "Paragraph",
            },
          ],
        },
        {
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
        },
        {
          name: "singleCard",
          type: "object",
          title: "Single Card",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Timeline Year",
            },
            {
              name: "paragraphTitle",
              type: "string",
              title: "Title",
            },
            {
              name: "paragraph",
              type: "text",
              title: "Paragraph",
            },
          ],
        },
      ],
    },

    {
      name: "guidelinesCta",
      type: "object",
      title: "Guidelines CTA",
      fields: [
        {
          name: "ctaImage",
          type: "image",
          title: "Image",
        },
        {
          name: "ctaCopy",
          type: "titleCopy",
          title: "CTA Copy",
        },
        {
          name: "ctaLabel",
          type: "string",
          title: "CTA Label",
        },
        {
          name: "ctaLink",
          type: "url",
          title: "CTA Link",
        },
      ],
    },

    {
      name: "uniformInfo",
      type: "object",
      title: "Uniforms",
      fields: [
        {
          name: "uniformCopy",
          type: "titleCopy",
          title: "Uniform Copy",
        },
        {
          name: "uniformVideo",
          type: "vimeo",
          title: "Uniform Video",
        }
      ],
    },

    {
      name: "questionsCopy",
      type: "titleCopy",
      title: "Any Questions Copy",
    }
  ],
};
