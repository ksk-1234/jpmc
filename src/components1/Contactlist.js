
import  {useEffect,useState} from "react";
function Contactlist( )
{
    let [user,setuser]= useState([])
console.log(user)
 useEffect(()=>{
       
 fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>response.json())
.then(apidata=>setuser(apidata))
.catch(err=>console.log(err))
 },[])
  
 

 return(
   <div className="container ml-5">
    <table className="text-center">
        <thead>
            <tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
            </tr>
        </thead>
        <tbody>
            {
            user.map((userobj)=><tr key={userobj.id}>
                <td>{userobj.userId}</td>
                <td>{userobj.id}</td>
                <td>{userobj.title}</td>
                </tr>)
}
        </tbody>
            
    </table>
            
   </div>
 ) ;  
}
export  default Contactlist;