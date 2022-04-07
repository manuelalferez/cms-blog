import Link from "next/link";
import { RichText } from "prismic-reactjs";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function pad2(n) {
  return (n < 10 ? "0" : "") + n;
}

const FeaturedPosts = ({ featuredPosts }) => {
  let posts = [];
  featuredPosts.map((post) => {
    const dateFormatted = post.data.date.replace(
      /(\d{4})-(\d{2})-(\d{2})/,
      "$2/$3/$1"
    );
    const date = new Date(dateFormatted);
    const day = pad2(date.getDate()); //day (1-31)
    posts.push(
      <div class="py-8 px-4 lg:w-1/4">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
              {monthNames[date.getMonth()]}
            </span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">
              {day}
            </span>
          </div>
          <div class="flex-grow pl-6">
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
              {post.data.title[0].text}
            </h1>
            <p class="leading-relaxed mb-5">
              {" "}
              <RichText render={post.data.summary} />
            </p>
            <a class="btn btn-primary" href={post.data.url[0].text}>
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="featured-posts mt-4">
      <div className="p-8 ">
        <div class="flex flex-col w-full border-opacity-50">
          <div class="flex flex-wrap w-full mb-10">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Featured Posts
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-evenly md:flex-wrap mb-24">
          {posts}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
