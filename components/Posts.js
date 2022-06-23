import Link from "next/link";
import { RichText } from "prismic-reactjs";

const Posts = ({ posts, path }) => {
  return (
    <div class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-12 mx-auto">
        <div class="-my-16 divide-y-2 divide-gray-100 md:w-3/6 xl:w-2/6 md:mx-auto">
          {posts.map((post) => {
            return (
              <div class="py-6">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col md:justify-center">
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
                    <a className="inline-flex items-center">
                      <p class="text-lg font-medium text-gray-900 title-font mb-2 md:mt-2 lg:text-xl">
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
