
import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Lectures from "./pages/Lectures"
import DasbordPage from "./pages/DasbordPage"
import { Routes ,Route } from 'react-router-dom'
import Pyq from './pages/Pyq'
import PYQDashBord from './pages/PYQDashBord'
import { useAuth } from './context/auth'
import Login from './components/Login'
import Feedbackfrom from './components/Feedbackfrom'
import SuggestionForm from './components/FeedBackData'
import {Toaster} from "react-hot-toast"
import Admin from './components/admin/Amin'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Profile from './pages/Profile'
function App() {
  const [light,setlight] = useState(true)
  const {showUserLogin,feedbackon} = useAuth()
  return (
    
   <div className={  light ?`bg-white text-black`:`bg-black text-white`}>
    <Toaster/>
    <Routes>
      <Route path='/' element={<Homepage setlight={setlight} light={light}/>}/>
      <Route path='/:modules' element={<Lectures/>}/>
      <Route path='/:modules/:sub' element={<DasbordPage/>}/>
       <Route path='/contact' element={<Contact/>}/>
      <Route path='/pyq/:modulespyq' element={<Pyq/>}/>
      <Route path='/pyqs/:subs' element={<PYQDashBord/>}/>
      <Route path='/:siggFeed/datafromuser' element={<SuggestionForm/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/profile' element={<Profile/>}/>
     
    </Routes>
    {
    showUserLogin ? <Login/>:null
    }
    {
    feedbackon ? <Feedbackfrom/>:null
    }

   </div>
  )
}

export default App
