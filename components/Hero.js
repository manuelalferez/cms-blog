import { RichText } from "prismic-reactjs";

const About = ({ about }) => {
  return (
    <div class="hero min-h-screen bg-[url('https://ik.imagekit.io/manuelalferez/blog/bg/Colored_Patterns_dyCFt9RXd.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649340261697')] ">
      <div class="hero-overlay bg-opacity-50"></div>
      <div class="hero-content text-center text-neutral-content prose">
        <div class="max-w-md">
          <img
            class="mask mask-hexagon mx-auto mb-10 w-40"
            src="https://ik.imagekit.io/manuelalferez/blog/me_nxt8c9ULn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1638454523371"
          />
          <h1 class="mb-5 text-5xl font-bold text-white">Manuel Alférez</h1>
          <p class="mb-5">
            <RichText render={about} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
