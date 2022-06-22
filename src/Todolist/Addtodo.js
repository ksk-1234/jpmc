import  {useState} from "react"
import {useForm} from "react-hook-form";
function Addtodo({onFormSubmit})
{
    const {register,handleSubmit,formState:{errors}}=useForm()
    
    return(
        <div>
            <h1>Addtodo</h1>
            <form onSubmit={handleSubmit(onFormSubmit)} >
                <div className="mb-3">
                <label htmlFor="todo">Enter a todo</label>
                <input type="text" id="todo" className="form-control" {...register("todo",{required:true})}/>
                {errors.todo ?. type==="required" && <p className="text-danger">*todo is required</p>}
                
               <button className="btn btn-primary">submit</button>
                </div>
            </form>


           
        </div>
    );
}
export default Addtodo