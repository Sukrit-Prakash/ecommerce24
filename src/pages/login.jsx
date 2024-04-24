import React, { useState } from 'react';

const Login = () => {
    function redirecttosignup(){
        window.location.href='/login'
    }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
async function loginuser(event){


   event.preventDefault()
   const response = await fetch('http://localhost:4000/api/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email,password
      })
    })
    const data = await response.json();
    console.log(data);
 }   
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl mb-4 font-bold text-center text-gray-800">LOGIN</h2>
        <form onSubmit={loginuser}>
          
          <div className="mb-4">
            <input
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            login
          </button>
        </form>
        <button
            className="w-full bg-gray-400 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={redirecttosignup} // Call redirectToLogin function
          >
            Dont have an account
          </button>
      </div>
    </div>
  );
};

export default Login;
