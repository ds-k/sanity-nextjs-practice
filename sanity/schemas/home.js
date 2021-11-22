export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "mainPost",
      title: "Main Post",
      type: "reference",
      to: { type: "post" },
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "mainPost.title",
    },
  },
};
