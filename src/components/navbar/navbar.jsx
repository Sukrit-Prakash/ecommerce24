import React,{useState} from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[menu,setMenu]=useState("a");
  //
  //every time it is being rendered it is being reloaded to initial state which is home
  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white font-bold">Logo</a>
        <ul className="flex md:mb-0 space-x-4 ">
          {/* <li onClick={()=>{setMenu("a")}}><a href="/" className="text-white px-4 py-2 hover:bg-blue-500">Home{menu==="a"?<hr/>:<></>}</a></li>
          <li onClick={()=>{setMenu("b")}}><a href="/about" className="text-white px-4 py-2 hover:bg-green-600">About{menu==="b"?<hr/>:<></>}</a></li> */}
          <li onClick={()=>{setMenu("b")}}><a className="text-white px-4 py-2 hover:bg-green-600"><Link to="/about">About</Link>{menu==="b"?<hr/>:<></>}</a></li> 
          <li onClick={()=>{setMenu("a")}}><Link to="/" className="text-white px-4 py-2 hover:bg-blue-500">Home</Link>{menu==="a"?<hr/>:<></>}</li>
          {/* <li onClick={()=>{setMenu("b")}}><Link to="/about" className="text-white px-4 py-2 hover:bg-green-600">About</Link>{menu==="b"?<hr/>:<></>}</li> */}
          <li onClick={()=>{setMenu("c")}}>< Link to="/contact" className="text-white px-4 py-2 hover:bg-blue-500">Contact{menu==="c"?<hr/>:<></>}</Link></li>
          <li onClick={()=>{setMenu("d")}}>< Link to="/login" className="text-white px-4 py-2 hover:bg-blue-500">login{menu==="d"?<hr/>:<></>}</Link></li>
        </ul>
        <button class="inline-flex items-center bg-blue-200 border-0 py-1 px-3 mt-4 md:mt-0 hover:bg-green-600">Cart</button>
      </div>
    </nav>
  )
}

export default Navbar