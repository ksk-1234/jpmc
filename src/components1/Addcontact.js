
import React, { useState } from "react";
import './Addcontact.css';
function Addcontact()
{
    const [counter,setuser]= useState(0)
 const incrementcounter=()=>
 {
    setuser(counter+1);
 }
    return(
        <div className="container">
<button className="btn btn-dark" onClick={incrementcounter}>+</button>
<span className="display-3">counter</span>

        </div>
    );

    }

export default Addcontact;