import React from 'react'
import Articles from '../components/Articles'
import { NavbarWithMegaMenu } from '../components/Navabr'
import Footer from '../components/Footer'

function Blog() {
  return (
    <div>
        <NavbarWithMegaMenu />
        <Articles />
        <Footer/>
    </div>
  )
}

export default Blog