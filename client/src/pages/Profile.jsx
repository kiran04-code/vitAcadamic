import React from 'react';
import { useAuth } from '../context/auth';
import { User, Mail, IdCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { userdata,logout } = useAuth();
  const navi = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center border-t-4 border-[#33A491]">
        
        {/* Profile Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#33A491] p-4 rounded-full">
            <User size={50} className="text-white" />
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          {userdata?.name || 'Guest User'}
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Welcome to your Edunation profile 👋
        </p>

        {/* User Info */}
        <div className="bg-gray-100 p-4 rounded-xl text-left">
          <div className="flex items-center mb-3">
            <IdCard className="text-[#33A491] mr-3" />
            <span className="text-gray-800 font-medium">ID:</span>
            <span className="ml-2 text-gray-600">{userdata?._id}</span>
          </div>

          <div className="flex items-center mb-3">
            <Mail className="text-[#33A491] mr-3" />
            <span className="text-gray-800 font-medium">Email:</span>
            <span className="ml-2 text-gray-600">{userdata?.email}</span>
          </div>

          <div className="flex items-center">
            <User className="text-[#33A491] mr-3" />
            <span className="text-gray-800 font-medium">Username:</span>
            <span className="ml-2 text-gray-600">{userdata?.name}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#33A491] hover:bg-[#2d8d7e] text-white px-5 py-2 rounded-lg font-medium transition">
            Edit Profile
          </button>
          <button className="border border-[#33A491] text-[#33A491] hover:bg-[#33A491] hover:text-white px-5 py-2 rounded-lg font-medium transition"  onClick={()=>{logout(),navi("/")}}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
