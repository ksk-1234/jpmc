import {useEffect,useState} from 'react'
import axios from 'axios'

function Useeffectdemo()
{
    let [users,setUser]=useState([])
  

        useEffect(()=>{
                //fetch("https://jsonplaceholder.typicode.com/posts")
               // .then(response=>response.json())
                //.then(apiData=>setUser(apiData))
               // .catch(err=>console.log(err))
                axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(response=>setUser(response.data))
                .catch(err=>console.log(err))
            },[])

            console.log("users data is",users)

            return(
            <div className='container'>
                {
                    users.length===0 && <p className='display-1 text-danger'>no user</p>
                }
                {users.length !==0 &&
               <table className='text-center'>
                   <thead>
                       <tr>
                           <th>userid</th>
                           <th>id</th>
                           <th>title</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                      users.map((userObj)=><tr>
                           <td>{userObj.userId}</td>
                           <td>{userObj.id}</td>
                           <td>{userObj.title}</td>
                       </tr>)
                       }
                   </tbody>

               </table>
}
        
            </div>
    )

}
export default Useeffectdemo