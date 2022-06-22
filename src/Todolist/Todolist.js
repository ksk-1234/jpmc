import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowDown, faTasks, faThermometer4 } from "@fortawesome/free-solid-svg-icons";
import todoimage from '../Images1/user.png';
function Todolist({todos})
{
    return(
        <div>
<h1>
<FontAwesomeIcon icon=  {faArrowDown} className="text-danger"/>
<img src={todoimage} className="w-100" alt=""/>

 
    Todolist</h1>
{
 todos.map((task,index)=>
 
 <h3 key={index}>{task}</h3>


 )
}
        </div>
    );
}
export default Todolist