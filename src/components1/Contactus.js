import React from "react";
import { useNavigate } from "react-router-dom";
function Contactus()
{
    const navigate=useNavigate()
    return(
        <div>
 <h1> hello how are you</h1>
 <button className="btn btn-primary" onClick={()=>{navigate("/users")}}>submit</button>
</div>
    );
}
export default Contactus;