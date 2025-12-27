import React from 'react'
import Footer from '../components/Footer'
import Feedbackcontainer from '../components/Feedbackcontainer'
import Animation from '../components/Animation'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'

const Homepage = ({ setlight, light }) => {
  return (
    <div className={light ? "bg-white" : "bg-gray-900"}>
       <Navbar/>
      <HeroSection light={light} />
      <div className='flex justify-center items-center text-center mt-20'>
        <h1 className="text-3xl md:text-[45px] mb-6 font-bold text-[#33A491] drop-shadow-lg tracking-wide">
          Hear from Our First-Year Students
        </h1>
      </div>
      <Animation />
      
      <Footer />
    </div>
  )
}

export default Homepage