
import React from "react"
import Addtodo from "./Component-5/Addtodo";
import Todocount from "./Component-5/Todocount";
import Todolist from "./Component-5/Todolist";
import { useForm } from "react-hook-form";
import {useState} from "react";
function App()
{
  const [todos,setTodo]= useState([])
  const onFormSubmit=(todoObj)=>
  {
      console.log(todoObj)
      setTodo([...todos,todoObj.todo])

  }
  return (
    <div className=" container mt-5">
      <div className="row">
    <div className="col-4">
<Addtodo onFormSubmit={onFormSubmit}/>
    </div>
   < div className="col-4">
    <Todolist todos={todos}/>
        </div>
       < div className="col-4">
        <Todocount todos={todos}/>
            </div>
            </div>
            </div>
  );
}
export default App