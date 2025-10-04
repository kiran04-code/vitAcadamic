import React from 'react';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { setfeedbackon } = useAuth();
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#cfeee9] text-gray-700">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-12 border-b border-gray-300/40">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">

          {/* Left Section */}
          <div className="max-w-md">
            <img src="/VIT2.png" alt="Edunation Logo" className="h-14 mb-4" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Edunation is your digital learning space connecting students, teachers, 
              and innovators. Empower your education with knowledge and technology.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-5">
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                  <path d="M19.167 2.5a9.1 9.1 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.88 8.88 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.833a9.7 9.7 0 0 1-5.834 1.667C8.333 20 17.5 15.833 17.5 6.25q0-.35-.067-.692A6.43 6.43 0 0 0 19.167 2.5"
                    stroke="#33A491" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15.833c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5v-3.225a2.8 2.8 0 0 0-.783-2.175c2.616-.292 5.366-1.283 5.366-5.833a4.53 4.53 0 0 0-1.25-3.125 4.22 4.22 0 0 0-.075-3.142s-.983-.292-3.258 1.233a11.15 11.15 0 0 0-5.833 0C5.225.541 4.242.833 4.242.833a4.22 4.22 0 0 0-.075 3.142 4.53 4.53 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.8 2.8 0 0 0-.783 2.15v3.225"
                    stroke="#33A491" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                  <path d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.667 1.667 0 0 0-3.334 0V17.5H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333"
                    stroke="#33A491" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-10 md:gap-16">
            <div>
              <h2 className="font-semibold text-gray-900 mb-4 text-lg">RESOURCES</h2>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-[#33A491] transition">Documentation</a></li>
                <li><a href="#" className="hover:text-[#33A491] transition">Tutorials</a></li>
                <li><a href="#" className="hover:text-[#33A491] transition">Blog</a></li>
                <li><a href="#" className="hover:text-[#33A491] transition">Community</a></li>
              </ul>
              <button
                onClick={() => navigate("/contact")}
                className="mt-5 bg-[#33A491] hover:bg-[#2a8a79] text-white px-4 py-2 rounded-md text-sm transition"
              >
                Contact Us
              </button>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 mb-4 text-lg">COMPANY</h2>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-[#33A491] transition">About</a></li>
                <li><a href="#" className="hover:text-[#33A491] transition">Careers</a></li>
                <li><a href="#" className="hover:text-[#33A491] transition">Privacy</a></li>
                <li><a href="#" className="hover:text-[#33A491] transition">Terms</a></li>
              </ul>
              <button
                onClick={() => setfeedbackon(true)}
                className="mt-5 bg-[#33A491] hover:bg-[#2a8a79] text-white px-4 py-2 rounded-md text-sm transition"
              >
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 bg-[#33A491] text-white text-center text-xs md:text-sm">
        © 2025 <span className="font-semibold">Kiran.dev & Team</span> | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
