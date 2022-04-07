import Layout from "../components/Layout.js";
import Link from "next/link";
import { client } from "../config/prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import Posts from "../components/Posts.js";

const Newsletter = ({ postList, newsletterAbout }) => {
  return (
    <div data-theme="emerald" className="newsletter">
      <Layout>
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0 mt-10 p-8">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-0 text-gray-900">
            Newsletter
          </h1>
          <div class="h-1 w-20 bg-mygreen rounded"></div>
        </div>
        <div className="flex justify-center px-8 py-4">
          <div className="max-w-xl p-4">
            <RichText render={newsletterAbout} />
          </div>
        </div>
        <Posts posts={postList} path="newsletter" />
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const newsletterAbout = await client.getSingle("newsletter-about");
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "newsletter")
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
      newsletterAbout: newsletterAbout.data.description,
    },
  };
};

export default Newsletter;
