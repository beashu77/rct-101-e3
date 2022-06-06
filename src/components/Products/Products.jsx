import React, { useState,useEffect } from "react";
import axios from 'axios';

const Products = () => {
  const [products,setProducts] = useState([]);


useEffect (()=>{
  const getInfo = async ()=>{
    let res = await fetch(`http://localhost:8080/products`);
    let data = await res.json();
    setProducts(data);
    console.log(data);
  };
  getInfo();
},[])

  return <div>
    {/* Code here */} 
  <h1>Products</h1>
  {console.log(products)}
  {products.map((p)=>{
   return (
     <>
     <div style={{border:"1px solid ",
                  width:"300px",
                  margin:"auto",
                  display:'grid',
                  gridTemplateColumns:"repeat(4,1fr)",
                  gap:"20px"}}>
     <h2>{p.name}</h2>
     <p>{p.description}</p>
    <div>
    <button>+</button>
    
     <button>-</button>
     <button>Add to cart</button>
    </div>
     </div></>
   )
  })}
   
  </div>;
};

export default Products;
