import Layout from "../components/Layout.js";
import Link from "next/link";
import { client } from "../config/prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import Posts from "../components/Posts.js";

const Newsletter = ({ postList, newsletterAbout }) => {
  return (
    <div className="newsletter">
      <Layout>
        <h1 className="title">Newsletter</h1>
        <div className="flex justify-center px-8 py-4">
          <div className="about max-w-xl p-4">
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
