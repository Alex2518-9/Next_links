import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData, File } from "../lib/files";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";

interface AllPostDataProps {
  allPostsData: File[];
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home = ({ allPostsData }: AllPostDataProps) => {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.grid_container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>Your files</h1>
            <input type="text" placeholder="Search" />
          </div>

          <div className={styles.container_body}>
            <ul className={styles.list}>
              {allPostsData.map((file) => (
                <Card key={file.id} {...file}/>
              ))}
            </ul>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Home;
