import React from "react";
import {Link,Outlet} from "react-router-dom";
function Technology()
{
   return(
    <div>
<h1>Technology</h1>
<ul className="nav justify-content-center">
  
  
  <li className="nav-item">
    < Link className="nav-link" to="Html">Html</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " to="Javascript">Javascript</Link>
  </li>
</ul>


<Outlet/>
        
    </div>
   );
}
export default Technology;