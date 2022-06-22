
import { useState } from "react";
function Contactcard( )
{
    let [user,setuser]=useState('vijitha')
    const handle=()=>
    {
     setuser('punyavathi')
    }
    return(
        <div className="container">
            <h1>{user}</h1>
            <button className="btn btn-primary" onClick={handle}> onClick</button>
            <p>lorem vhvygyguhuhu</p>
        </div>
    );



}
export default Contactcard;