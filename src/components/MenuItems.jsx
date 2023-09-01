import { Close } from "@mui/icons-material";
import React from "react";

// eslint-disable-next-line react/prop-types
const MenuItems = ({ showMenus, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center  w-full md:flex md:w-auto md:order-1 finset-0 uppercase text-white   backdrop-blur-lg gap-8 justify-center p-8 md:hidde"
          : "hidden"
      }
    >
      <li>
        <a href="/">
          <a>Home</a>
        </a>
      </li>
      <li>
        <a href="/services">
          <a>Services</a>
        </a>
      </li>

      <li>
        <a href="/about">
          <a>About</a>
        </a>
      </li>
      <li>
        <a href="/blog">
          <a>Contact</a>
        </a>
      </li>
      <li>
        <a href="/blog">
          <a>Blogs</a>
        </a>
      </li>
    </ul>
  );
};

export default MenuItems;