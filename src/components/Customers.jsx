import React from 'react'

function Customers() {
  return (
<>
<div className="">
    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-2xl font-extrabold text-black dark:text-white sm:text-3xl">
           
            <span className="block text-purple-600 transition-transform transform-gpu hover:scale-125 hover:text-blue-700">
            Trusted by Many
                        </span>
                        <p className='mt-2 text-black text-sm'>We’re constantly refining our product. Adding new features. Working to help your business grow.</p>
        </h2>
      <p className='mt-3 text-2xl font-bold text-blue-700 transition-transform transform-gpu hover:scale-125 hover:text-purple-600'>AWARDS & PRIZES
</p>
    </div>
</div>

<section className="bg-gray-800">
    
    <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-5">
        <div className='transition-transform transform-gpu hover:scale-125'>
            <h5 className="text-3xl font-bold text-white">
                <span className="inline text-white">
                    100
                </span>
                <span className="text-indigo-200">
                    +
                </span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                Clients Served
            </p>
            <p className='text-white italic text-sm'>Helping Scale Businesses</p>
        </div>
        <div className='transition-transform transform-gpu hover:scale-125'>
            <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    45
                </span>
                <span className="text-indigo-200">
                    +
                </span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Ranked First
            </p>
            <p className='text-white italic text-sm'>Websites Optimized</p>

        </div>
        <div className='transition-transform transform-gpu hover:scale-125'>
            <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    76
                </span>
                <span className="text-indigo-200">
                    +
                </span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Websites Developed
            </p>
            <p className='text-white italic text-sm'>Digitizing Economy</p>

        </div>
        <div className='transition-transform transform-gpu hover:scale-125'>
            <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    10
                </span>
                <span className="text-indigo-200">
                    +
                </span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Global Partners
            </p>
            <p className='text-white italic text-sm'>B2B Partners Wordwide</p>

        </div>
        <div className='transition-transform transform-gpu hover:scale-125'>
            <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    3
                </span>
                <span className="text-indigo-200">
                    +
                </span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
            Locations
            </p>
            <p className='text-white italic text-sm'>All Across India</p>

        </div>
    </div>
    <div className="flex p-4 mx-auto mt-4 w-52">
        <button type="button" className="py-2 px-4  bg-white hover:bg-gray-400 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Join
        </button>
    </div>
</section>
</>
  )
}

export default Customers