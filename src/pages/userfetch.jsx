import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Userfetch = () => {
    const[user,setUser]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:4000/getuser').
        then(response=>setUser(response.data))
        .catch(err=>console.log('error',err))
    })
  return (
    <div>USER DATA FOR THE SHOPKEEPER
     {user.map((user)=(
        <div className="bg-gray-300 border-spacing-1 border-solid to-black " key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.password}</div>
        </div>
     ))}
    </div>
  )
}

export default Userfetch