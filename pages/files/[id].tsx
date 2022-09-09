import Layout from "../../components/Layout";
import { getAllPostIds, getPostData, PostData } from "../../lib/files";
import Head from "next/head";
import Date from "../../components/FormatDate";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/Card.module.css";
import Link from "next/link";

interface PageProps {
  params: { id: string };
}

interface PostProps {
  postData: PostData;
}

export async function getStaticProps({ params }: PageProps) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }: PostProps) {
  return (
    <Layout home>
      <>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <div className={utilStyles.article_container}>
          <article className={utilStyles.article}>
            <h1>{postData.title}</h1>
            <div className={styles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>

          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </>
    </Layout>
  );
}
