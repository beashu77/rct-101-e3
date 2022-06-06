import "./App.css";
import Home from  "./pages/Home";
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import Products from './components/Products/Products';
import Product from './components/Products/Product/Product';
import {Routes,Route} from "react-router-dom";
import RequiredAuth from "./hoc/RequiredAuth";


function App() {
  return (
    <div className="App">
     
    <Navbar />
     <Routes>
     <Route path="/login" element={<Login/>}/>
     <Route path="/" element={<RequiredAuth><Home/></RequiredAuth>}/>
     <Route path="/products" element={<RequiredAuth><Products/></RequiredAuth>}>
       <Route path={":id"} element={<Product/>}/>
     </Route>
     </Routes>
     
    </div>
  );
}

export default App;
