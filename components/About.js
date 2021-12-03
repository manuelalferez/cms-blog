import { RichText } from "prismic-reactjs";

const About = ({ about }) => {
  return (
    <div className="flex justify-center">
      <div className="about flex flex-col md:flex-row items-center max-w-x md:max-w-2xl p-8">
        <img
          src="https://ik.imagekit.io/manuelalferez/blog/me_no_bg__kfxM3VPu.png"
          class="rounded-full h-28 w-28 shadow-md	mb-4 lg:mb-0 md:mr-8"
        />
        <span className="text-serif">
          <RichText render={about} />
        </span>
      </div>
    </div>
  );
};

export default About;
