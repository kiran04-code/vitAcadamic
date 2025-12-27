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
      
      <Animation />
      
      <Footer />
    </div>
  )
}

export default Homepage