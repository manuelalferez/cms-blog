import Layout from "../components/Layout.js";
import Link from "next/link";
import { client } from "../config/prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";

const Newsletter = ({ postList, newsletterAbout }) => {
  return (
    <div>
      <Layout>
        <div className="flex justify-center pt-2">
          <div className="about max-w-xl p-4 mb-10">
            <RichText render={newsletterAbout} />
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="max-w-xl">
            {postList.map((post) => {
              return (
                <li
                  key={post.id}
                  className="flex flex-col md:flex-row px-4 pb-4 "
                >
                  <span className="pr-10 md:pr-0 md:w-32 text-gray-600 font-light">
                    {post.date}
                  </span>
                  <Link
                    href={{
                      pathname: "newsletter/[id]",
                      query: {
                        id: post.id,
                      },
                    }}
                  >
                    <a className="text-blue-800 overflow-x-hidden max-w-max hover:bg-gray-100 font-medium">
                      <RichText render={post.title} />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link href="/">
          <a className="back-button">
            <img src="https://ik.imagekit.io/manuelalferez/blog/back_Q03GWjg1x.svg" />
          </a>
        </Link>
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
