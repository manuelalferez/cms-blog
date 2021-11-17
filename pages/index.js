import Layout from "../components/Layout.js";
import Link from "next/link";
import { client } from "../config/prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";

const Index = ({ postList, about }) => {
  return (
    <div>
      <Layout>
        <div className="flex justify-center pt-2">
          <div className="about max-w-xl p-2">
            <RichText render={about} />
          </div>
        </div>
        <ul className="space-y-4 grid grid-cols-8 gap-4 pt-9">
          {postList.map((post) => {
            return (
              <li
                key={post.id}
                className="flex 2xl:col-start-4 md:col-start-3 sm:col-start-2 col-span-4 "
              >
                <span className="pr-10 text-gray-600 py-2 font-light sm:w-2/4 xl:w-1/4">
                  {post.date}
                </span>
                <Link
                  href={{
                    pathname: "post/[id]",
                    query: {
                      id: post.id,
                    },
                  }}
                >
                  <a className="text-blue-800 hover:bg-gray-100 p-2 font-medium">
                    <RichText render={post.title} />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const about = await client.getSingle("about");
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
      about: about.data.description,
    },
  };
};

export default Index;
