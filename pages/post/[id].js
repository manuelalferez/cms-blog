import Layout from "../../components/Layout";
import { client } from "../../config/prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";

const Post = ({ content, title, date }) => {
  return (
    <Layout>
      <div className="space-y-2 text-justify max-w-xl mx-auto p-2 py-10">
        <h1 className="text-2xl px-2">
          <RichText render={title} />
        </h1>
        <span className="text-sm text-gray-600 px-2">{date}</span>
        <RichText render={content} />
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post")
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
    Prismic.Predicates.at("document.type", "post")
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

export default Post;
