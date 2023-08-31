import React from 'react'
import Articles from '../components/Articles'
import { NavbarWithMegaMenu } from '../components/Navabr'
import Footer from '../components/Footer'
import Community from '../components/Community'

function Blog() {
  return (
    <div>
        <NavbarWithMegaMenu />
        <Articles />
        <Community/>
        <Footer/>
    </div>
  )
}

export default Blog