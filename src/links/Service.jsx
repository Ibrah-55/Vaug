import React from 'react'
import Services from '../components/Services'
import { NavbarWithMegaMenu } from '../components/Navabr'
import Footer from '../components/Footer'

function Service() {
  return (
    <div>
      <NavbarWithMegaMenu />
      <Services />
      <h1 className="flex justify-center title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl text-blue-900 hover:text-purple-600 
      transition duration-300 transform hover:scale-110 p-4 rounded-lg">Our Services</h1>

      <Footer/>

    </div>
  )
}

export default Service