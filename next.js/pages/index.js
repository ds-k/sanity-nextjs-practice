import styles from "../styles/Home.module.css";
import SanityServices from "../services/SanityServices";

export default function Home({ home, posts }) {
  console.log(home, posts);
  return (
    <div className={styles.container}>
      <h1> Blog {home.mainPostUrl}</h1>
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
