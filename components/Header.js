import Link from "next/link";
import data from "../data/header";

const Header = () => {
  return (
    <div
      data-theme="emerald"
      class="navbar sm:flex sm:flex-wrap bg-base-100 fixed z-20"
    >
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/">
          manuelalferez.com
        </a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          {data.links.map((item) => (
            <li tabindex="0">
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
