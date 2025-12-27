import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { User, ChevronDown, Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../context/auth';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { setshowUserLogin, menuOpen, setMenuOpen, userdata, logout } = useAuth();
  const navi = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/VIT2.png" alt="Logo" className="w-28 md:w-36 transition-transform hover:scale-105" />
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          <li><NavLink to="/" className="text-sm font-semibold text-gray-700 hover:text-[#33A491] transition">Home</NavLink></li>
          
          <li className="relative group" onMouseEnter={() => setActiveDropdown('lectures')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-[#33A491]">
              Lectures <ChevronDown size={14} />
            </button>
            {activeDropdown === 'lectures' && (
              <div className="absolute top-full -left-4 w-48 bg-white shadow-xl rounded-2xl p-2 border border-gray-100 animate-in fade-in slide-in-from-top-2">
                <NavLink to="/module1" className="block px-4 py-3 text-sm rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#33A491]">Module 1</NavLink>
                <NavLink to="/module2" className="block px-4 py-3 text-sm rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#33A491]">Module 2</NavLink>
              </div>
            )}
          </li>

          <li className="relative group" onMouseEnter={() => setActiveDropdown('pyqs')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-[#33A491]">
              PYQs <ChevronDown size={14} />
            </button>
            {activeDropdown === 'pyqs' && (
              <div className="absolute top-full -left-4 w-48 bg-white shadow-xl rounded-2xl p-2 border border-gray-100 animate-in fade-in slide-in-from-top-2">
                <NavLink to="/pyq/module1" className="block px-4 py-3 text-sm rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#33A491]">Module 1</NavLink>
                <NavLink to="/pyq/module2" className="block px-4 py-3 text-sm rounded-xl hover:bg-gray-50 text-gray-700 hover:text-[#33A491]">Module 2</NavLink>
              </div>
            )}
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {userdata ? (
            <div className="flex items-center gap-3 bg-gray-50 p-1.5 pl-4 rounded-full border border-gray-200">
              <span className="text-xs font-bold text-gray-600 hidden lg:block">Welcome, {userdata.name?.split(' ')[0]}</span>
              <button onClick={() => navi("/profile")} className="bg-[#33A491] p-2 rounded-full hover:shadow-lg hover:shadow-[#33a49144] transition">
                <User size={18} className="text-white" />
              </button>
              <button onClick={logout} className="p-2 text-gray-400 hover:text-red-500 transition">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setshowUserLogin(true)}
              className="bg-[#33A491] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#2a8a7a] hover:shadow-lg transition-all active:scale-95"
            >
              Get Started
            </button>
          )}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;