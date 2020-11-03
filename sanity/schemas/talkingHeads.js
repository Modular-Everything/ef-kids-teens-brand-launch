export default {
  name: "talkingHeads",
  type: "array",
  title: "Talking Heads",
  of: [
    {
      type: "talkingHead",
    },
  ],
  validation: (Rule) => Rule.min(1).max(4),
};
