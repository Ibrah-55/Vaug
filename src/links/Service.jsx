import React from 'react'
import Services from '../components/Services'
import { NavbarWithMegaMenu } from '../components/Navabr'
import Footer from '../components/Footer'
import Community from '../components/Community'

function Service() {
  return (
    <div>
      <NavbarWithMegaMenu />
      <h1 className="flex justify-center title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl text-blue-900 hover:text-purple-600 
      transition duration-300 transform hover:scale-110 p-4 rounded-lg">Our Services</h1>
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
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
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
         
            </div>
            <div className="container mx-auto md:grid-col md:flex">
                <div className="p-5 md:w-1/3 md:mb-0 mb-6 flex flex-col transform-gpu hover:scale-110  ">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded-3xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6  "  >
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2 ">
                        <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>                </div>
                      <div className="flex-grow ">
                        <h2 className=" text-white text-sm title-font font-medium mb-3">Pay Per Click</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 md:w-1/3 md:mb-0 mb-6 flex flex-col transform-gpu hover:scale-110">
                  <div className="pattern-dots-md gray-light">
                    <div className="rounded-3xl bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className=" text-white text-sm title-font font-medium mb-3">Local SEO</h2>
                        
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
                        <h2 className=" text-sm title-font font-medium mb-2">E-Commerce</h2>
                     
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
   <Community/>
      <Footer/>

    </div>
  )
}

export default Service