import "./App.css";
import "./Components/Products/Products.css"
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Products } from "./Components/Products/Products";
import  {Login } from "./Components/login/Login";
import { Register } from "./Components/login/Register";
function App() {
   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/account/login" element={<Login />}></Route>
            <Route path="/account/register" element = {<Register />}></Route>
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
