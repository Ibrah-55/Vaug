import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    const emailInput = form.current.elements.reply_to;
    const emailValue = emailInput.value;

    if (!validateEmail(emailValue)) {

        return;
    }

    setIsSubmitting(true);

    try {
      // Your email sending logic here
      await emailjs
        .sendForm(
          "service_yh7c099",
          "template_wqsyndc",
          form.current,
          "3PdYZLge12rcQ1sXx"
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        );
      console.log("Email sent successfully");

    } catch (error) {
      console.error("Email sending error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <>
      <form
        className="w-full mb-10 font-sans bg-cover bg-landscape  transform hover:scale-110"
        id="form"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="w-full ml-3 mr-3  px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contact us !
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <label htmlFor="from_name" className=" relative ">
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Name"
                />
              </label>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label htmlFor="reply_to" className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                </span>
                <input
                  type="text"
                  name="reply_to"
                  id="reply_to"
                  className={`rounded-r-lg flex-1 appearance-none border ${
                    !validateEmail(form.current?.elements.reply_to.value)
                      ? "border-red-500"
                      : "border-gray-300"
                  } w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 ${
                    !validateEmail(form.current?.elements.reply_to.value)
                      ? "focus:ring-red-500"
                      : "focus:ring-purple-600"
                  } focus:border-transparent`}
                  placeholder="Your email"
                  required
                />
              </label>
            </div>
            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="message">
                <textarea
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Enter your comment"
                  name="message"
                  id="message"
                  rows="5"
                  cols="40"
                ></textarea>
              </label>
            </div>

            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </form>

    </>
  );
}

export default Contact;
