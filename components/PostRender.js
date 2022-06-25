import { RichText } from "prismic-reactjs";

const Post = ({ content, title, date, backPath }) => {
  return (
    <div
      data-theme="emerald"
      className="w-screen flex-none md:flex pb-24 md:justify-center"
    >
      <div className="post prose mt-20 p-8 md:p-0">
        <div className="flex flex-col items-center mb-10">
          <span className="title">
            <RichText render={title} />
          </span>
          <div class="badge badge-primary">{date}</div>
        </div>
        <div className="content">
          <RichText render={content} />
        </div>
      </div>
    </div>
  );
};

export default Post;
