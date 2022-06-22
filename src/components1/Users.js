
import {useState ,useEffect} from "react"
function Users()
{
    let [prop,setuser]= useState([])
    useEffect(()=>
    {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(apidata=> setuser(apidata))
        .catch(err=>console.log(err))
    },[])
    return(
        <div className="container">
<h1>users</h1>
<table>
    <thead>
        <tr>
            <th>USERID</th>
            <th>ID</th>
            <th>tittle</th>
        </tr>
    </thead>
    <tbody>
        {
            prop.map((propobj)=><tr>
                <td>{propobj.userId}</td>
                <td>{propobj.id}</td>
                <td>{propobj.title}</td>
            </tr>)
        }
    </tbody>
</table>

        </div>
    );
}
export default Users;