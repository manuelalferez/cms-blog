import Layout from "../../components/Layout";
import { client } from "../../config/prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import Link from "next/link";

const Newsletter = ({ content, title, date }) => {
  return (
    <Layout>
      <div className="w-screen flex-none md:flex md:justify-center">
        <div className="post">
          <RichText render={title} />
          <span>{date}</span>
          <div className="content">
            <RichText render={content} />
          </div>
          <Link href="/newsletter">
            <a className="back-button">
              <img src="https://ik.imagekit.io/manuelalferez/blog/back_Q03GWjg1x.svg" />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "newsletter")
  );
  const pathNames = posts.results.map((post) => {
    return {
      params: {
        id: post.slugs[0],
      },
    };
  });

  return {
    paths: [...pathNames],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "newsletter")
  );

  const currentPost = posts.results.filter(
    (post) => post.slugs[0] == context.params?.id
  )[0];
  return {
    props: {
      content: currentPost.data.content,
      title: currentPost.data.title,
      date: currentPost.data.date,
    },
  };
};

export default Newsletter;
