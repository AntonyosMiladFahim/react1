import React from 'react'
import { useRef } from 'react';


function Login() {
    const ref1=useRef(null);
    const ref2=useRef(null);
    function handleLogin(e){
        e.preventDefault();
        console.log(ref1.current.value);
        console.log(ref2.current.value);
      localStorage.setItem("user",JSON.stringify({
        username:ref1.current.value,
        password:ref2.current.value,
        role:"admin"
        
      }));

    }
    
  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <input type="text" placeholder="Username" ref={ref1} />
        <input type="password" placeholder="Password" ref={ref2} />
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login
