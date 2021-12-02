import data from "../data/footer";
const Footer = () => {
  return (
    <div className="flex flex-col items-center relative font-display text-base md:text-lg">
      <div className="z-10 text-mywhite pb-10 flex justify-center w-screen ">
        <p>Made with</p> <img src={data.heartURL} class="px-2" />{" "}
        <p>by Manuel</p>
      </div>
      <div className="flex justify-center flex-wrap fixed z-10 relative pb-4 lg:pb-8">
        {data.social.map((item) => (
          <a href={item.url} className="mr-4 z-10" target="_blank">
            <img src={item.imageURL} class="h-8 w-8 fill-mywhite" />
          </a>
        ))}
      </div>
      <img src={data.bgURL} class="absolute bottom-0 h-40 w-screen z-0" />
    </div>
  );
};

export default Footer;
