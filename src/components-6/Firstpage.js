import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import x from "../Images/1.png";
import './Firstpage.css'
function Firstpage() {
  return (
    <div class="container ">
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"><img src={x} alt=""/></a>
    <form class="d-flex input-group w-auto">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span class="input-group-text border-0" id="search-addon">
        <i class="fas fa-search"></i>
        <FontAwesomeIcon icon=  {faMagnifyingGlass} className="text-danger"/>
      </span>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Firstpage