import Posts from "../components/Posts";
import { client } from "../config/prismic-configuration";
import Prismic from "prismic-javascript";
import Layout from "../components/Layout";

const Blog = ({ postList }) => {
  return (
    <div className="blog">
      <Layout>
        <h1 className="title">Blog</h1>
        <Posts posts={postList} path={"post"} />
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post")
  );

  const postList = posts.results.map((post) => {
    return {
      id: post.slugs[0],
      title: post.data.title,
      date: post.data.date,
    };
  });

  return {
    props: {
      postList: postList.sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return aDate < bDate ? 1 : -1;
      }),
    },
  };
};

export default Blog;
