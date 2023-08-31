import React, {useEffect, useState} from "react";
import { Link } from 'react-scroll';
export function NavbarWithMegaMenu() {
  const [showPopupNavbar, setShowPopupNavbar] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (!hasScrolled) {
      setHasScrolled(true);
    }

    if (!showPopupNavbar && window.scrollY > window.innerHeight) {
      setTimeout(() => {
        setShowPopupNavbar(true);
      }, 1500); 
    }

    if (showPopupNavbar && window.scrollY === 0) {
      setShowPopupNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled, showPopupNavbar]);

  
  return (
    <>
    <nav className={`navbar bg-purple-900 border-gray-200 dark:bg-transparenttext-white p-4 top-0 w-full z-50 transition-transform transform duration-300 ${showPopupNavbar ? 'hidden' : ''}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center text-white">
          <img
            src="images/vaugenl.png"
            className="h- w-20 mr-3 transition-transform transform hover:scale-150  hover:scale-x-[-1] "
            alt="Flowbite Logo"
          />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white italic transform hover:scale-x-[-1] transition-transform">
            Vaug
          </span>
        </a>
        <div className="flex md:order-2">
        <a href="/contacts" 
  type="button"
  className="hidden md:inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium top-right
  rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Contact Us!
</a>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-purple-900 md:dark:bg-purple-900 dark:border-gray-700">
            <li>
           
            <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
           
            <li>
            <Link to="/services" smooth={true} duration={500}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
            <a href="/about" 
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
            <Link to="/contact" smooth={true} duration={500}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </Link>
            </li>
          
          </ul>
        
        </div>
        
      </div>
      
    </nav>

    <nav className={`popup-navbar bg-gray-500 text-white p-4 fixed top-0 w-full z-50 transform duration-300 ${showPopupNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img
            src="images/vaugenl.png"
            className="h-8 mr-3 transform hover:scale-x-[-1] transition-transform"
            alt="Vaug"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white italic transform hover:scale-x-[-1] transition-transform">
            Vaug
          </span>
        </a>
        <div className="flex md:order-2">
        <a href="/contacts" 
  className="hidden md:inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium top-right
  rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"                >
                Contact Us!
              </a>
       
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-blue-900 font-bold rounded md:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
            <Link to="/services" smooth={true} duration={500}
                className="block py-2 pl-3 pr-4 text-blue-900 font-bold rounded md:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                Services
              </Link>
            </li>
            <li>
            <a href="/about" 
                className="block py-2 pl-3 pr-4 text-blue-900 font-bold rounded md:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                About
              </a>
            </li>
            <li>
            <Link to="/articles" smooth={true} duration={500}
                className="block py-2 pl-3 pr-4 text-blue-900 font-bold rounded md:bg-transparent  md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    </>
  );
}