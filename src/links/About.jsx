import React from 'react'
import { NavbarWithMegaMenu } from '../components/Navabr'
import Footer from '../components/Footer'
import Customers from '../components/Customers'
import Community from '../components/Community'

function About() {
  return (
    <div className=''>
    < NavbarWithMegaMenu />


    <span className="mt-10 flex items-center justify-center text-3xl text-purple-600 transition-transform transform-gpu hover:scale-125 hover:text-blue-700">
    About Vaug
                        </span>
    <p className="flex items-center justify-center text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto hover:text-blue-600 transition duration-300 transform  p-4 rounded-lg">
    "Transform your digital presence with our expert marketing solutions."

    </p>
<p className='  text-xl mr-10 ml-10 items-center justify-center'>
At VAUG, we believe in providing customized digital solutions that help businesses transform their online presence and stay ahead in the competitive market. Our team of experts work closely with clients to understand their unique needs and challenges, and provide tailor-made strategies that drive measurable results and growth.
<br/>
VAUG is a digital solutions agency that specializes in helping businesses transform their online presence. Our team is comprised of experts in various fields such as SEO, web development, social media management, and digital marketing. Our mission is to help businesses achieve their goals by providing them with customized digital solutions that fit their unique needs and requirements.
<p className='mt-3 '>
At VAUG, we believe in staying up-to-date with the latest trends and technologies in the digital world. Our team is constantly learning and adapting to the ever-changing landscape of the industry, which allows us to provide our clients with the best possible solutions. We are dedicated to delivering high-quality services and
 ensuring that our clients receive the best value for their investment. Our goal is to help businesses of all sizes and industries succeed in the digital world and reach their full potential.
</p>
</p>
<Community />
<Customers/>
< Footer />

<div>

</div>
    </div>
  )
}

export default About