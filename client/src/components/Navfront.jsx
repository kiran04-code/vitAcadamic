import React, { useState } from 'react';
import { FaPhotoVideo } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa6";
import { WiDayLightWind } from "react-icons/wi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { User, Mail, IdCard } from 'lucide-react';
import { useAuth } from '../context/auth';
const Navfront = ({ setlight, light }) => {
  const [showModules, setShowModules] = useState(false); // Mobile menu toggle
  
  const [showmodule2, setshowmodule2] = useState(false)
  const navi = useNavigate()
  const {showUserLogin,setshowUserLogin,menuOpen,setMenuOpen,userdata,logout} = useAuth()
  return (
    <div >
      <header className="border-b border-gray-300" >
        <nav className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between py-4 md:py-5 relative">
          <a href="#">
            <img src="/VIT2.png" alt="Logo" className="w-24 md:w-32" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div>
            </div>
          </div>
           
          {/* Main Menu */}
          <ul
            className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:space-x-10 text-gray-600 text-sm font-medium px-6 py-4 md:p-0 z-20 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}
          >
           
           <div className='md:flex md:gap-5'> <li>
              <a href="#" className="block py-2 hover:text-gray-900 transition">Home</a>
            </li><li>
              <a onClick={() => setShowModules(!showModules)} href="#" className="block py-2 hover:text-gray-900 transition">
                Lectures
              </a>
              {/* Show Modules Dropdown */}
              {showModules && (
                <div className="mt-7 bg-[#33A491] rounded-xl shadow-lg p-4 lg:ml-120 space-y-3 w-52 md:absolute md:left-40 md:top-14 z-30">
                  <h1 className="text-white text-lg border-b border-white pb-2">
                    <NavLink to="/module1">Module 1</NavLink>
                  </h1>
                  <h1 className="text-white text-lg border-b border-white pb-2">
                    <NavLink to="/module2">Module 2</NavLink>
                  </h1>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-gray-900 transition" onClick={()=>setshowmodule2(!showmodule2)}>PYQs</a>
                 {showmodule2 && (
                <div className="mt-7 bg-[#33A491] rounded-xl shadow-lg p-4 lg:ml-160 space-y-3 w-52 md:absolute md:left-40 md:top-14 z-30">
                  <h1 className="text-white text-lg border-b border-white pb-2">
                    <NavLink to="/pyq/module1">Module 1</NavLink>
                  </h1>
                  <h1 className="text-white text-lg border-b border-white pb-2">
                    <NavLink to="/pyq/module2">Module 2</NavLink>
                  </h1>
                </div>
              )}
              
            </li></div>
            
            <li className="md:hidden mt-3">
            {
              userdata ? <div className='flex flex-col gap-5'><Link className="bg-[#33A491] hover:bg-[#31524c] text-white text-sm font-semibold px-4 py-2 rounded-md transition" to="#" onClick={()=>{logout(),setMenuOpen(false)}} >
                Logout
            </Link>
            <Link className="bg-[#33A491] hover:bg-[#31524c] text-white text-sm font-semibold px-4 py-2 rounded-md transition" to="/profile"  >
                Profile
            </Link>
            </div>:<div>
              <a href="#" className="bg-[#33A491] hover:bg-[#559288] text-white text-sm font-semibold block text-center px-4 py-2 rounded-md transition mt-2 " onClick={()=>setshowUserLogin(true)} >
                Login for Free Study material
              </a></div>
            }
            </li>
          </ul>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-6">
    
            {
              userdata ? <div className='flex justify-center items-center gap-5'><a className="bg-[#33A491] hover:bg-[#31524c] text-white text-sm font-semibold px-4 py-2 rounded-md transition" href="#" onClick={()=>{logout(),setMenuOpen(false)}}  >
                Logout
            </a>
             <div className='bg-[#33A491] p-1.5 rounded-4xl justify-center items-center flex ' onClick={()=>navi("/profile")}>
              <User className='text-3xl   text-[#ffffff]'/>
              </div>
            </div> :<div className=''><a className="bg-[#33A491] hover:bg-[#31524c] text-white text-sm font-semibold px-4 py-2 rounded-md transition" href="#" onClick={()=>setshowUserLogin(true)}>
                Login for Free Study material
            </a></div>
            }
            {/* <div className="bg-[#33A491] px-3 py-2 rounded-full">
              <WiDayLightWind onClick={() => setlight(!light)} className="text-white w-5" />
            </div> */}
          </div>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="relative mx-auto px-6 sm:px-8 lg:px-12 mt-8 pb-16">
        <section className="mt-8 md:mt-28 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-6xl mx-auto">
          <img className="w-24 md:w-40 rounded-full" src="/istockphoto-1475102488-612x612.jpg" />
          <div className="text-center md:text-center max-w-3xl">
            <h1 className={light ? `text-3xl sm:text-4xl md:text-5xl text-black` : `text-3xl sm:text-4xl md:text-5xl text-white`}>
              Organized. Simplified.Ready.
              <span className="block font-bold text-[#33A491] mt-1 relative">
                Anytime. Exam!
              </span>
            </h1>
          </div>
          <img src="/studio 2.png" alt="" className="w-32 md:w-44" />
        </section>

        <p className="mt-8 text-center text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
          One-stop platform for VIT Pune: notes, PYQs, cheat sheets,
          <br />
          and video lectures — all in one place.
        </p>

        <div className="mt-6 flex flex-col items-center">
          {
            userdata? null:<div><a className="bg-[#33A491] hover:bg-[#2f423f] text-white text-sm font-semibold px-6 py-2 rounded-md transition" onClick={()=>setshowUserLogin(true)} href="#">
            Login for Free Study material
          </a></div>
          }
        </div>

        {/* Features Section */}
        <section className="mt-8 md:mt-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center text-gray-600 text-xs md:text-sm">
          <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-300">
            <CgNotes className='w-8 h-8 text-[#33A491]' />
            <p>Access all lecture notes in one place.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-300">
            <FaPhotoVideo className='w-8 h-8 text-[#33A491]' />
            <p>Unit-wise YouTube video links for all key concepts.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-3">
            <FaRegNewspaper className='w-8 h-8 text-[#33A491]' />
            <p>Previous year papers in one place.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Navfront;
