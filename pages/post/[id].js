import { GetStaticPaths } from "next";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Post = ({ content, title, date }) => {
  return (
    <Layout>
      <div className="space-y-2 text-justify max-w-xl mx-auto p-2 py-10">
        <h1 className="text-2xl px-2">{title}</h1>
        <span className="text-sm text-gray-600 px-2">{date}</span>
        <ReactMarkdown
          className="space-y-7 p-2"
          rehypePlugins={[rehypeRaw]}
          components={{
            a: ({ node, ...props }) => (
              <a className="text-blue-800 hover:underline" {...props} />
            ),
            h1: ({ node, ...props }) => <h1 className="text-2xl" {...props} />,
            h2: ({ node, ...props }) => (
              <h2 className="text-xl font-semibold" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h2 className="text-lg font-semibold" {...props} />
            ),
            code: ({ node, ...props }) => (
              <code
                className="font-mono bg-black p-2 text-white rounded-md"
                {...props}
              />
            ),
            iframe: ({ node, ...props }) => (
              <iframe className="w-4/5" {...props} />
            ),
            b: ({ node, ...props }) => <b className="font-bold" {...props} />,
            ul: ({ node, ...props }) => (
              <ul className="pl-4 list-disc" {...props} />
            ),
            p: ({ node, ...props }) => <p {...props} />,
            img: ({ node, ...props }) => (
              <div className="flex justify-center">
                <img {...props} />
              </div>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const path = process.cwd() + "/posts/";
  const fileNames = fs.readdirSync(path);

  const pathNames = fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(".md", "").trim(),
      },
    };
  });

  return {
    paths: [...pathNames],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const path = process.cwd() + "/posts/";
  const filePath = path + context.params?.id + ".md";

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const result = matter(fileContent);

  return {
    props: {
      content: result.content,
      title: result.data.title,
      date: result.data.date,
    },
  };
};

export default Post;
