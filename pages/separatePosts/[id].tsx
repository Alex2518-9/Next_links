import Layout from "../../components/Layout";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/FormatDate";
import utilStyles from "../../styles/utils.module.css";

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
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </>
    </Layout>

  );
}
