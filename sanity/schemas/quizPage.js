export default {
  name: "quizPage",
  type: "document",
  title: "Quiz",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Page Title",
    },

    {
      name: "quizStartCopy",
      type: "titleCopy",
      title: "Quiz Intro",
    },

    {
      name: "quizResults",
      type: "array",
      title: "Quiz Results",
      of: [
        {
          type: "quizResult",
        },
      ],
      validation: (Rule) => Rule.required().min(4).max(4),
    },
  ],
};
