import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Kiran Rathod",
    email: "kr551344@gmail.com",
    role: "Developer",
    image: "/kiran01.jpg",
    github: "https://github.com/kiran04-code",
    linkedin: "https://www.linkedin.com/in/kiran-rathod-66b009331/",
  },
  {
    name: "Shruti Ramteke",
    email: "shrutiramteke028@gmail.com",
    role: "Content Curator",
    image: "/shruti002.jpg",
    github: "https://github.com/shrutiramteke028",
    linkedin: "https://www.linkedin.com/in/shruti-ramteke-735383332",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-6 bg-gray-50">
      <div className="w-full max-w-7xl bg-gradient-to-tr from-[#33A491] to-[#47c99ed5] rounded-[30px] shadow-lg p-8 md:p-12">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-white mb-10 tracking-wide">
          Meet Our Team 
        </h1>

        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md w-full sm:w-72 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                className="w-full h-52 object-cover object-top"
                src={member.image}
                alt={member.name}
              />
              <div className="flex flex-col items-center p-5">
                <p className="font-semibold text-lg text-gray-800">{member.name}</p>
                <p className="text-gray-500 text-sm mb-1">{member.email}</p>
                <p className="text-[#0d8b7b] text-[17px] font-medium">{member.role}</p>

                <div className="flex gap-5 text-[22px] mt-3 text-gray-600">
                  <Link
                    to={member.github}
                    target="_blank"
                    className="hover:text-[#33A491] transition-colors duration-200"
                  >
                    <FaGithub />
                  </Link>
                  <Link
                    to={member.linkedin}
                    target="_blank"
                    className="hover:text-[#33A491] transition-colors duration-200"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white text-sm opacity-90">
            Want to collaborate with us? Reach out at{" "}
            <span className="font-semibold underline underline-offset-2">contact@kiran.dev1@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
