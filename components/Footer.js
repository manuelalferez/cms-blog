import data from "../data/footer";
const Footer = () => {
  return (
    <footer
      data-theme="emerald"
      class="footer items-center p-4 bg-neutral text-neutral-content"
    >
      <div class="items-center grid-flow-col">
        <p>Made with</p> <img src={data.heartURL} />
        <p>by Manuel</p>
      </div>
      <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {data.social.map((item) => (
          <a href={item.url} className="mr-4 z-10" target="_blank">
            <img
              src={item.imageURL}
              class="h-6 w-6 md:h-8 md:w-8 fill-mywhite"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
