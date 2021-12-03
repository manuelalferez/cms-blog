import Link from "next/link";
import { RichText } from "prismic-reactjs";

const Post = ({ content, title, date }) => {
  return (
    <div className="w-screen flex-none md:flex pb-24 md:justify-center">
      <div className="post">
        <div className="flex flex-col items-center mb-10">
          <span className="title">
            <RichText render={title} />
          </span>
          <span className="date">{date}</span>
        </div>
        <div className="content">
          <RichText render={content} />
        </div>
        <Link href="/newsletter">
          <a className="back-button">
            <img src="https://ik.imagekit.io/manuelalferez/blog/backbutton_FD5MxYnnmQY.svg?updatedAt=1638528249452" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Post;
