import React from "react";
import {useForm } from "react-hook-form"
function Register()
{
    const {register,handleSubmit,formState:{errors}}=useForm()
    const OnFormSubmit=(useData)=>
    {
        console.log(useData)
    }
    return(
        <div className="row mt-3">
            <p className="display text-success text-center">User registration</p>
            <div className="col-11 ">
                <form OnSubmit={handleSubmit(OnFormSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="un" >username</label>
                        <input type="text" id="un" className="form-control" {...register ("username",{required:true,minLength:4,maxLength:6})}/>
                        {errors.username ?. type==="required" && <p className="text-danger">*username is required</p>}
                    </div>


                    <div className="mb-3">
                        <label htmlFor="em" >email</label>
                        <input type="email" id="em" className="form-control"{...register ("email",{required:true,minLength:4,maxLength:6})} />
                        {errors.email ?. type==="required" && <p className="text-danger">*email is required</p>}
                    </div>



                    <div className="mb-3">
                        <label htmlFor="dob" >date of birth</label>
                        <input type="date" id="dob" className="form-control"{...register ("date of birth",{required:true,minLength:4,maxLength:6})}/>
                       </div>


                        <div className="mb-3">
                <label htmlFor="branch">Branch</label>
                <select id="branch" className="form-select" {...register ("branch",{required:true})}
                defaultvalue={'Cse'}>
                    <option value="cse">Cse</option>
                    <option value="it">it</option>
                    <option value="ece">ece</option>
                </select>
                {errors.branch ?.type==='required' && <p className="text-danger">* branch is required</p>}
            </div>
        



<div className="mb-3">
    <label>choose a gender</label>
    <div className="form-check">
        <input type="radio" id="male" className="form-check-input" {...register("gender",{required:true})} value="male"/>
        <label htmlFor="male" className="form-check-label">male</label>
    </div>
    <div className="form-check">
        <input type="radio" id="femal" className="form-check-input" {...register("gender",{required:true})} value="male"/>
        <label htmlFor="female" className="form-check-label">female</label>
    </div>
 
 {errors.gender?.type==="required" && <p className="text-danger">*gender required</p>}
 </div>

 <div className="mb-3">
    <label htmlFor="feedback">feedback</label>
    <textarea id="feedback" rows="5" className="form-control" {...register ("feedback",{required:true})}></textarea>
 
 {errors.feedback ?.type==='required ' && <p className="text-danger">* feedback is required</p>}
 </div>


 <button className="btn btn-primary">submit</button>

 
 </form>
</div>
</div>
    )

}
export default Register;