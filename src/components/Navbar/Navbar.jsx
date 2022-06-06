import React,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
 

const Navbar = () => {


  const {isAuth,logout}=useContext(AuthContext);
  const navigate = useNavigate();
  const handleLoginClick=()=>{
    //console.log("hi")

    if(isAuth)
    {
      logout();
    }else{
      navigate("/login");
    }
  };


  return (
    <div data-cy="navbar" style={{display:"flex" ,justifyContent:"space-around"}}>
      
      <Link data-cy="navbar-home-link" to="">Logo</Link>
      <Link to="/products">Products</Link>
      <span data-cy="navbar-cart-items-count">Cart:</span>
      <button 
      data-cy="navbar-login-logout-button"
      onClick={handleLoginClick}
      >{isAuth?"Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
