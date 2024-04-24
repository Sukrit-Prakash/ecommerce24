import Navbar from "./components/navbar/navbar";
import { useState,Suspense } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shop from "./pages/shop";
import LoginSignup from "./pages/LoginSignup";
import ShopCategory from "./pages/ShopCategory";
import Login from "./pages/login";
import Cart from "./pages/Cart";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls} from "@react-three/drei";
// import Model from "./components/Assets/allproduct.js/3dmodel/Laptop";
// import { AmbientLight } from "three";
// import { AmbientLight } from "three";
//this is for context api
// import Counter from "./pages/counter";
// import { useContext } from "react";
// import { CounterContext } from "./pages/context";
import Addproduct from "./pages/shopkeeper";
import Userfetch from "./pages/userfetch";
function App() {
  // const counterState=useContext(CounterContext);
  return (
   <div>
    
    <BrowserRouter>
    <Navbar/>
    {/* <Counter/>
    <Counter/>
    <Counter/> */}
    <Routes>
    <Route path="/" element={<Shop/>}/>
    <Route path="/login" element={<LoginSignup/>}/>
    <Route path="/Shopcategory" element={<ShopCategory/>}/>
    <Route path="/loginx" element={<Login/>}/>
    <Route path="/addproduct" element={<Addproduct/>}/>
    <Route path="/userdata" element={<Userfetch/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Canvas> */} 
    {/* const light = new AmbientLight(); // Correct */}
    {/* <AmbientLight intensity={0.5} /> Define ambient light */}
      {/* <OrbitControls/>
      <Suspense fallback={null}>
            <Model/>
      </Suspense>

    </Canvas> */}
   
   </div>
  );
}

export default App;
