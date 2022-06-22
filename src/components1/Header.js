
import React from 'react';
import {useState} from "react";
function Header()
{
    const [user,setname]= useState({
      name:"punyavathi",
    })
  const handleEvent=()=>
  {
   setname( {...user,name:"vijitha"})
  }
    
    return(
        <div className='container'>

               <h1>hello {user.name}</h1>
               <button type='button' onClick={handleEvent}>submit</button> 
            </div>

        
    );
}
export default Header;