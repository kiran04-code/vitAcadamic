import React, { useState } from "react";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import Looder from "../../lib/Looder";
const Login = () => {
  const { setshowUserLogin, axios, setMenuOpen, setuserData } = useAuth();
  const [state, setState] = useState("login"); // or "signup"
  const [formData, setFormData] = useState({});
  const [loder, setLoder] = useState(false)
  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoder(true)
    try {
      console.log(formData.email)
      if (!formData.email.toLowerCase().endsWith('@vit.edu')) {
        setLoder(false);
        return toast.error("Use your official VIT college email ID");
      }
      else {
        const { data } = await axios.post(`/api/${state}`, formData);
        if (data.success) {
          console.log("error")
          toast.success(data.message)
          setuserData(data.userData)
          setshowUserLogin(false);
          setMenuOpen(false)
          setLoder(false)
        }
        else {
          toast.error(data.message)
          setshowUserLogin(true)
          setLoder(false)
        }
      }
    } catch (error) {
      console.error("Auth error:", error)

    }
  };

  return (
    <div onClick={() => setshowUserLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50 w-full h-screen lg:p-5'>
      <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
        <p className="text-2xl font-medium m-auto">
          <span className="text-[#33A491]">User</span> {state === "login" ? "Login" : "Sign Up"}
        </p>
        {state === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input id="name" onChange={handleChange} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="text" required />
          </div>
        )}
        <div className="w-full ">
          <p className="text-black md:text-sm  text-[13px] mt-1">
            Please use your official VIT college email ID
          </p>
          <input id="email" onChange={handleChange} placeholder="Exmaple@vit.edu" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input id="password" onChange={handleChange} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
        </div>
        {state === "register" ? (
          <p>
            Already have account? <span onClick={() => setState("login")} className="text-indigo-500 cursor-pointer">click here</span>
          </p>
        ) : (
          <p>
            Create an account? <span onClick={() => setState("register")} className="text-indigo-500 cursor-pointer">click here</span>
          </p>
        )}
        <button className="bg-[#33A491] hover:bg-[#314e49] transition-all text-white w-full py-2 rounded-md cursor-pointer">
          {
            loder ? <Looder /> : <p> {state === "register" ? "Create Account" : "Login"}</p>
          }
        </button>
      </form>
    </div>
  );
};


export default Login