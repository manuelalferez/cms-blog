import Link from "next/link";
import { RichText } from "prismic-reactjs";

const Posts = ({ posts, path }) => {
  return (
    <div className="posts flex justify-center p-8 font-serif text-base md:text-lg md:mb-24">
      <ul className="max-w-xl">
        {posts.map((post) => {
          return (
            <li key={post.id} className="flex flex-col md:flex-row px-4 pb-4">
              <span className="pr-10 md:w-40 text-mylightpink">
                {post.date}
              </span>
              <Link
                href={{
                  pathname: `${path}/[id]`,
                  query: {
                    id: post.id,
                  },
                }}
              >
                <a className="overflow-x-hidden md:max-w-screen-sm">
                  <RichText render={post.title} />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Posts;
