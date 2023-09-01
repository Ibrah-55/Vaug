import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Modal from "./Helpers/Modal";
import { NavbarWithMegaMenu } from "./Navabr";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
// eslint-disable-next-line react/prop-types
function Hero({ scrollToContact }) {
  const [open, setOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  return (
    <div>
      <section className="bg-white overflow-hidden dark:bg-purple-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
              Vaug
            </span>{" "}
            <span className="text-sm font-medium transition-transform transform-gpu hover:scale-110">
              Fueling your business growth with creative market strategies.
            </span>
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white transition-transform transform-gpu hover:scale-110">
            Digital Brilliance Ignite Growth
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200 transition-transform transform-gpu hover:scale-110">
            Increase traffic on websites and get conversion. Bridging gap
            between you and your online customers
          </p>
          <p className="mb-8 mt-3  dark:text-gray-200 transition-transform transform-gpu hover:scale-110">
            Connect with us today to schedule a consultation and let us help you
            grow your business.
          </p>

          <button
            onClick={scrollToContact}
            className="text-white bg-primary-700 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 
        font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Contact us now
          </button>

          <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
        </div>

        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody divider>
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </section>
      <div
        className="App img has-hover x md-x lg-x y md-y lg-y"
        id="image_1516690834"
      >
        <div className="bg-blue-900" >
          <img
            width="8000"
            height="888"
            src="https://www.shipyaari.com/wp-content/uploads/2023/07/Wave-01-1.png"
            className="attachment-original size-original"
            alt=""
            decoding="async"
          />
        </div>

        <Dashboard />
      </div>
    </div>
  );
}

export default Hero;
