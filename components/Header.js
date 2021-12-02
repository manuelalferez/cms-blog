import Link from "next/link";
import data from "../data/header";

const Header = () => {
  let list = [];
  data.links.forEach((item) =>
    list.push(
      <Link href={item.url}>
        <a className="z-10 p-2 mr-10 text-mywhite hover:bg-mylightpink">
          {item.text}
        </a>
      </Link>
    )
  );

  return (
    <div className="flex justify-center w-screen relative text-base md:text-lg md:pt-4 lg:pt-8 xl:pt-10 font-display">
      {list}
      <img
        src={data.bgURL}
        class="absolute top-0 w-screen z-0 transform rotate-180	"
      />
    </div>
  );
};

export default Header;
