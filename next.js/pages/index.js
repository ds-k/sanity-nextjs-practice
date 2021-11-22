import styles from "../styles/Home.module.css";
import SanityServices from "../services/SanityServices";

import Header from "../components/Header";
import BlogHeadLine from "../components/BlogHeadline";

export default function Home({ home, posts }) {
  const mainPost = posts.find((p) => p.slug === home.mainPostUrl);
  const otherPost = posts.filter((p) => p.slug !== home.mainPostUrl);
  console.log(`mainPost, otherPost`, mainPost, otherPost);
  return (
    <div className={styles.container}>
      <Header />
      <BlogHeadLine />
    </div>
  );
}

export async function getStaticProps() {
  // sanity에서 데이터를 가져온다.
  const sanityService = new SanityServices();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();

  return {
    props: {
      home,
      posts,
    },
  };
}
