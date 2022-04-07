import { RichText } from "prismic-reactjs";

const About = ({ about }) => {
  return (
    <div class="hero min-h-screen bg-[url('https://images.unsplash.com/photo-1638985718869-76a0159c4491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')] ">
      <div class="hero-overlay bg-opacity-70"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <img
            class="mask mask-hexagon mx-auto mb-10 w-40"
            src="https://ik.imagekit.io/manuelalferez/blog/me_nxt8c9ULn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1638454523371"
          />
          <h1 class="mb-5 text-5xl font-bold">Manuel Alférez</h1>
          <p class="mb-5">
            <RichText render={about} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
