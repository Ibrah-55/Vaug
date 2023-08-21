import React from "react";
import Carousels from "./Carousel";

function Explore() {
  return (
    <div id="explore">
      <span className="flex justify-center text-blue-600 dark:text-blue-500 font-extrabold text-3xl hover:text-purple-600 transition duration-300 transform hover:scale-110 p-4 rounded-lg">
        EXPLORE RECENT WORKS
      </span>




<p className="flex justify-center text-xl italic font-semibold text-gray-900  hover:text-purple-600 transition duration-300 transform hover:scale-110 p-4 rounded-lg">We’re constantly refining our product. Adding new features. Working to
        help your section business grow.</p>
<div className="inline-flex items-center justify-center w-full transition duration-300 transform hover:scale-110">
    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900 ">
        <svg className="w-4 h-4 text-gray-700 dark:text-gray-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
    </div>
</div>
<Carousels />

    </div>
  );
}

export default Explore;
