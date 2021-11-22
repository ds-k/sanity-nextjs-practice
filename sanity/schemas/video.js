import React from "react";

export default {
  name: "video",
  title: "Video",
  type: "object",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "metadata",
      title: "Metadata",
      type: "urlWithMetadata",
    },
  ],
  preview: {
    select: {
      title: "caption",
      subtitle: "metadata.url",
      media: "metadata.openGraph.image",
    },
    prepare({ media, title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle,
        media: <img src={media} />,
      };
    },
  },
};
