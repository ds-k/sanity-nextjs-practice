export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug", //url을 표현할 때  사용
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "subtitle",
      title: "Sub Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (rule) => rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
      validation: (rule) => rule.required(),
    },
    {
      name: "createdAt",
      title: "Created at",
      type: "datetime",
      validation: (rule) => rule.required(),
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          options: {
            isHighlighted: true,
          },
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "reference",
      to: { type: "tag" },
      validation: (rule) => rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "thumbnail",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
