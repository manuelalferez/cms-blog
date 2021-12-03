import Link from "next/link";
import { RichText } from "prismic-reactjs";

const FeaturedPosts = ({ featuredPosts }) => {
  let posts = [];
  featuredPosts.map((post) => {
    posts.push(
      <div className="font-serif mb-10 md:mr-10 md:w-1/3 xl:w-2/12">
        <p className="text-sm text-mylightpink">{post.data.date}</p>
        <h2 className="">{post.data.title[0].text}</h2>
        <span className="text-justify">
          <RichText render={post.data.summary} />
        </span>
        <Link href={post.data.url[0].text}>
          <a>Read more</a>
        </Link>
      </div>
    );
  });
  return (
    <div className="featured-posts mt-4">
      <img
        src="https://ik.imagekit.io/manuelalferez/blog/bg/delimiter_6rFqnmuRhuS.svg"
        className="w-screen"
      />
      <div className="p-8 ">
        <h1 className="">Featured Posts</h1>
        <div className="md:flex md:justify-evenly md:flex-wrap mb-10">
          {posts}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
