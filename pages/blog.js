import Posts from "../components/Posts";
import { client } from "../config/prismic-configuration";
import Prismic from "prismic-javascript";
import Layout from "../components/Layout";

const Blog = ({ postList }) => {
  return (
    <div data-theme="emerald" className="blog">
      <Layout>
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0 mt-10 p-8">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-0 text-gray-900">
            Blog
          </h1>
          <div class="h-1 w-20 bg-mygreen rounded"></div>
        </div>
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
