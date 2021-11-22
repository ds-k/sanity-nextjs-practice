import SanityServices from "../../services/SanityServices";

export default function PostAll({ slug, post }) {
  console.log(post);
  return (
    <div>
      <h1>post: {slug}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await new SanityServices.getPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = await new SanityServices().getPosts();
  const post = posts.find((p) => p.slug === slug);

  return {
    props: {
      slug,
      post,
    },
  };
}
