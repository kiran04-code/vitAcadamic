  import React from 'react'
 
  import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { useEffect } from 'react';
import Looder from '../../lib/Looder';
  const ProtectesRoutes = ({children}) => {
   const { userdata } = useAuth();
  useEffect(() => {
    console.log("Admin Check:", userdata);
  }, [userdata]);
  if (userdata === undefined) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-50">
        <Looder />
      </div>
    );
  }
 if (!userdata) {
    return <NonAuthUser />;
  }
    if(userdata?.email =="kiran.rathod24@vit.edu"){
      return children
    }
    return <Navigate to={"/404"} />
  }

  export default ProtectesRoutes
