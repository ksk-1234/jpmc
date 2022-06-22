import {Routes,Route,NavLink,Link,Navigate}  from "react-router-dom"
import Home from "./components1/Home"
import Users from "./components1/Users"
import Contactus from "./components1/Contactus";
import Technology from "./components1/Technology";
import Html from "./components1/Html";
import Javascript from "./components1/Javascript";
import Register from "./components1/Register";

function App() {
   
    return(
<div className="container">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link " to=" ">Home</NavLink>
        </li>
        <li className="nav-item">
          < NavLink className="nav-link" to="users">Users</NavLink>
        </li>
        <li className="nav-item">
          < NavLink className="nav-link"  to="Technology">Technology</NavLink>
        </li>
        <li class="nav-item">
          < Link class="nav-link " to="Contactus">Contactus</Link>
        </li>
        <li class="nav-item">
          < Link class="nav-link " to="Register">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>  
       <Routes>
        <Route path="/Home" element ={<Home/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/Register" element={<Register/>}/>


        <Route path ="/Technology" element={<Technology/>}>
        <Route path="Html" element={<Html/>}/>
        <Route path="" element={< Navigate replace to ="Html"/>}/>
        <Route path="Javascript" element={<Javascript/>}/>
      </Route>
      
</Routes>

</div>
    );

    }

export default App

