import sanityClient from "@sanity/client";

export default class SanityServices {
  _client = sanityClient({
    dataset: "production",
    projectId: "p2n8abpc",
    useCdn: true,
  });

  async getHome() {
    return await this._client.fetch(
      `*[_type == "home"][0]{"mainPostUrl": mainPost -> slug.current}`
    );
  }

  async getPosts() {
    return await this._client.fetch(
      `
            *[_type == "post"]{
              title,
              subtitle,
              createdAt,
              "content": content[]{
                 ...,
                 ...select(_type == "imageGallery" => {"images" : images[]{
                 ..., "url" : asset -> url}
                })
              },
              "slug" : slug.current,
              "thumbnail" : {
                "alt" : thumbnail.alt,
                "imageUrl" : thumbnail.asset -> url
              },
              "author" : author -> {
                name,
                role,
                'image' : image.asset -> url
              },
              "tag" : tags -> {
                title,
                "slug" : slug.current
              }
            }`
    );
  }
}
