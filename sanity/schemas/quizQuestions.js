export default {
  name: 'quizQuestions',
  type: 'document',
  title: 'Quiz Questions',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answers',
      type: 'array',
      title: 'Answers',
      of: [
        {
          type: 'string',
        },
      ],
      validation: (Rule) =>
        Rule.required().length(4).error('Please include 4 answers.'),
    },
    {
      name: 'correctAnswer',
      type: 'number',
      title: 'Correct Answer',
      options: {
        list: [
          { value: 1, title: 'Answer A' },
          { value: 2, title: 'Answer B' },
          { value: 3, title: 'Answer C' },
          { value: 4, title: 'Answer D' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
