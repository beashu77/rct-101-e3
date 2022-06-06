import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = (e) => {
  const [LoginCreds,setLoginCreds]=useState();

  const {login}=useContext(AuthContext);


  const handleOnChange=(e)=>{
    const {name,value} = e.target;
    setLoginCreds({
      ...LoginCreds,
      [name]:value,
    })
  }


  const handleOnSubmit=()=>{
    login();
  }
  return (
    <div style={{maxWidth:"200px" , marginLeft:"45%"}}>
      Login
      <input data-cy="login-email" 
             placeholder="Enter Email"
              onChange={handleOnChange}/>
      
      <input data-cy="login-password" 
             placeholder="Enter Password"
             onChange={handleOnChange}/>
      <button data-cy="login-submit" onClick={handleOnSubmit}>Login</button>
    </div>
  );
};

export default Login;
