import Link from "next/link";
import { RichText } from "prismic-reactjs";

const Posts = ({ posts, path }) => {
  return (
    <div class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-12 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          {posts.map((post) => {
            return (
              <div class="py-8 md:flex md:flex-wrap ">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="mt-1 text-gray-500 text-sm">{post.date}</span>
                </div>
                <div class="md:flex-grow">
                  <Link
                    href={{
                      pathname: `${path}/[id]`,
                      query: {
                        id: post.id,
                      },
                    }}
                  >
                    <a className="inline-flex items-center mt-4">
                      <p class="text-xl font-medium text-gray-900 title-font mb-2">
                        <RichText render={post.title} />
                      </p>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
