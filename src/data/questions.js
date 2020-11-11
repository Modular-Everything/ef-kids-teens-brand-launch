export default {
  nodes: [
    {
      question:
        "Another question here. There's an asterisk* next to the correct answer for testing purposes.",
      answers: ['Answer one', 'Answer two', 'Answer three*', 'Answer four'],
      correctAnswer: 3,
    },
    {
      question: 'Testing another question',
      answers: [
        'Here is a sample answer',
        'This is another sample*',
        'Another answer',
        'and another',
      ],
      correctAnswer: 2,
    },
    {
      question: 'This is the space for a question',
      answers: [
        'The first answer option*',
        'Answer 2, which is a bit longer',
        'The third answer is even longer, here it is  going onto two lines',
        'Answer number four',
      ],
      correctAnswer: 1,
    },
  ],
};
