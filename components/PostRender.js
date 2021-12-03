import Link from "next/link";
import { RichText } from "prismic-reactjs";

const Post = ({ content, title, date }) => {
  return (
    <div className="w-screen flex-none md:flex md:justify-center">
      <div className="post">
        <RichText render={title} />
        <span>{date}</span>
        <div className="content">
          <RichText render={content} />
        </div>
        <Link href="/newsletter">
          <a className="back-button">
            <img src="https://ik.imagekit.io/manuelalferez/blog/back_Q03GWjg1x.svg" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Post;
