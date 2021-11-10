import Layout from "../components/Layout.js";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { client } from "../config/prismic-configuration";
import Prismic from "prismic-javascript";

const Index = ({ postList, about }) => {
  return (
    <div>
      <Layout>
        <div className="flex justify-center pt-2">
          <div className="max-w-xl p-2">{about}</div>
        </div>
        <ul className="space-y-4 grid grid-cols-8 gap-4 pt-9">
          {postList.map((post) => {
            return (
              <li
                key={post.title}
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
                    {post.title}
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
  const path = process.cwd() + "/posts/";
  const fileNames = fs.readdirSync(path);
  const about = await client.getSingle("about");
  console.log(about.data.description[0].text);

  const postList = fileNames.map((fileName) => {
    const filePath = path + fileName;
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const result = matter(fileContent);
    return {
      id: fileName.replace(".md", "").trim(),
      title: result.data.title,
      date: result.data.date,
    };
  });

  return {
    props: {
      postList: postList.sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return aDate < bDate ? 1 : -1;
      }),
      about: about.data.description[0].text,
    },
  };
};

export default Index;
