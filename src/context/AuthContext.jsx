import React, { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [isAuth,setIsAuth]=useState(false);
   const navigation = useNavigate();
   const {state} = useLocation();

   const login= ()=>{
     setIsAuth(true);

     if(state.form){
      navigation(state.form,{replace:true});
     }
     else{
      navigation("/");
     }
   }


   const logout=()=>{
     setIsAuth(false);
     navigation("/");
   }

  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
