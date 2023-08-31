import React from 'react'
import Contact from '../components/Contact'
import { NavbarWithMegaMenu } from '../components/Navabr'
import Footer from '../components/Footer'
function Contacts() {
  return (
    <div>
      <NavbarWithMegaMenu />
      <div>
      <h2 className="flex justify-center mt-6 text-sm font-semibold text-gray-900 uppercase dark:text-blue-800 ">
Contact US Now 
            </h2>
        <Contact />
      </div>
        < Footer/>
    </div>
  )
}

export default Contacts