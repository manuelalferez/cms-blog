import Link from "next/link";
import data from "../data/header";

const Header = () => {
  let list = [];
  data.links.forEach((item) =>
    list.push(
      <Link href={item.url}>
        <a className="z-10 p-2 md:mr-10 text-mywhite hover:bg-mylightpink hover:text-myblack rounded-xl rounded-tl-3xl rounded-tr-none">
          {item.text}
        </a>
      </Link>
    )
  );

  return (
    <div className="flex justify-center w-screen relative text-base md:text-lg md:pt-4 font-display">
      {list}
      <img
        src={data.bgURL}
        class="absolute top-0 w-screen z-0 h-16 md:h-20 transform rotate-180"
      />
    </div>
  );
};

export default Header;
