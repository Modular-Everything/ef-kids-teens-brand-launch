export default {
  name: "talkingHeads",
  type: "array",
  title: "Talking Heads",
  of: [
    {
      type: "talkingHead",
    },
  ],
  validation: (Rule) => Rule.length(4),
};
