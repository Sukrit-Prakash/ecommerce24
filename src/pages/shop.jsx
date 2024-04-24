import {React,useEffect,useState}from 'react'
// import Products from '../components/Assets/allproduct.js/3dmodel/allproduct'
import './Shop.css';
import axios from 'axios'

import{useDispatch, useSelector} from "react-redux";
import cartSlice, { add } from './state/cartslice';


const Shop = () => {

  const[products,setProducts]=useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/getproduct')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

// .catch(err)(
//   console.log('error',SyntaxError)
// )
//if you access response before initailisatin it shows err cant access
const dispatch=useDispatch();
const globalstate = useSelector((state)=>state.cartState);
// const {add}=cartSlice.actions;
//this is imported from cart slice instead of creting it here
console.log(globalstate);

  return (
    <div className="container">
      {products.map((pro)=>(
          <div className="card" key={pro.id}>
        <h3>{pro.name}</h3>
        <p>{pro.price}</p>
        <button>viewin 3d</button>
        <button onClick={()=>dispatch(add({...pro,quantity:1}))}>add</button>
      
     
        
       </div>
      ))}
    </div>
  )
}

export default Shop