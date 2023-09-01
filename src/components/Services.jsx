import React from 'react'

function Services() {
  return (

    <div>
        {/* <section className="flex justify-center items-center mx-auto">
            <div className="max-w-4xl px-5 py-24 ">
              <div className="text-center mb-10">
                <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl hover:text-purple-600 transition duration-300 transform hover:scale-110 p-4 rounded-lg">Featured Services</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto hover:text-blue-600 transition duration-300 transform hover:scale-110 p-4 rounded-lg">We’re constantly refining our product. Adding new features. Working to help your business grow.</p>
                <div className="flex mt-6 justify-center ">
                  <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
              </div>
              <div className="container mx-auto md:grid-col md:flex">
                <div className="p-5 md:w-1/3 md:mb-0 mb-6 flex flex-col transform-gpu hover:scale-110  ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded-3xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6  "  >
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2 ">
                        <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>                </div>
                      <div className="flex-grow ">
                        <h2 className=" text-white text-sm title-font font-medium mb-3">Website Development</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 md:w-1/3 md:mb-0 mb-6 flex flex-col transform-gpu hover:scale-110">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded-3xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className=" text-white text-sm title-font font-medium mb-3">Search Engine Ranking</h2>
                        
                      </div>
                    </div>
                  </div>
                </div>
           
                 <div className="p-5 md:w-1/3 md:mb-0 mb-6 flex flex-col transform-gpu hover:scale-110 ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded-3xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                      </div>
                      <div className="flex-grow  text-white">
                        <h2 className=" text-sm title-font font-medium mb-2">Social media <p>Marketting</p></h2>
                     
                      </div>
                    </div>
            </div>
            </div>
            <div className="p-5 md:w-1/3 md:mb-0 mb-6 flex flex-col transform-gpu hover:scale-110 ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded-3xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-purple-100 text-white-500 mb-5 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3 4-8 4s-8-1.79-8-4"></path></svg>
                      </div>
                      <div className="flex-grow  text-white">
                        <h2 className=" text-sm title-font font-medium mb-2">Email Marketing</h2>
                     
                      </div>
                    </div>
            </div>
            </div>
            <div className="p-5 md:w-1/3 md:mb-0 mb-6 flex flex-col transform-gpu hover:scale-110 ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded-3xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-green-500 mb-5 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 "></path></svg>
                      </div>
                      <div className="flex-grow  text-white">
                        <h2 className=" text-sm title-font font-medium mb-2">Android Applications</h2>
                     
                      </div>
                    </div>
            </div>
            </div>
            
            </div>
            </div>
        </section>
         */}
  <div className="text-center ">
                <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none 
                md:text-6xl hover:text-purple-600 transition duration-300 transform hover:scale-110 p-4 rounded-lg">Featured Services</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto hover:text-blue-600 transition duration-300 transform hover:scale-110 p-4 rounded-lg">We’re constantly refining our product. Adding new features. Working to help your business grow.</p>
                <div className="flex mt-6 justify-center ">
                  <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
              </div>
<div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
    <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
            <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>  

            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Website Development 
        </h3>
        <p className="py-4 text-gray-500 text-md dark:text-gray-300">
            Encompassing today’s website design technology to integrated and build solutions relevant to your business.
        </p>
    </div>
    <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Social Media Marketing
        </h3>
        <p className="py-4 text-gray-500 text-md dark:text-gray-300">
            Share relevant, engaging, and inspirational brand messages to create a connection with your audience.
        </p>
    </div>
    <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
        Android Applications
        </h3>
        <p className="py-4 text-gray-500 text-md dark:text-gray-300">
            Let us help you level up your search engine game, explore our solutions for digital marketing for your business.
        </p>
    </div>
    
</div>
<a href="/services" type="button" className="py-2 px-4  focus:ring-indigo-500 focus:ring-offset-indigo-200 text-blue-600 hover:text-xl
 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    More Services
</a>

    </div>
  )
}

export default Services