import React from 'react';
import {NavLink } from 'react-router-dom';
import './Login.css';
function Login() {
    const myStyle = {    
        backgroundColor: "lightpink",
        padding: "10px",
        fontFamily: "Sans-Serif",
        height:"900px",
        width:"100%",
         
        
      };

  return (
    <div style={myStyle}>
    <div className='container w-25 border h-50 bg-white mt-5 shadow-lg px-auto py-auto rounded-end'>
        
      <h1 className='mt-5'>Login</h1>  

      <label htmlFor='un'>username</label>
      <input type="text" id='un' className='form-control' placeholder='eg:john' />
      
      <label htmlFor='ps' className='mt-4'>password</label>
      <input type="password" id='ps' className='form-control' placeholder='password' />
      
      <NavLink className="nav-link  text-center mt-2" to="forget">Forgetpassword ?</NavLink>
<button type='btn btn-primary' style={{marginLeft:"40%",marginTop:"10%",padding:"8px",}} > Login</button>
     </div>
     </div>
  )
}

export default Login
