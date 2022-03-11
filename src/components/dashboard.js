import React, {useEffect,useState} from "react";
import  Axios  from "axios";


function Dash() {
    const [data,setDate]=useState([])
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
        console.log("getting from::",res.data)
        setDate(res.data)
        })
        .catch(err=>console.log(err))

    },[])
    
    const array= data.length>0 && data.map((data,index)=>{
        return(
            
            <tr>
                
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.address.street}</td>
               
   
   
   
  </tr>
  

        )
    })    

        
   
    return(
<div  >
        <h1>DASHBOARD</h1>
        
<table>
  <tr>
   
    <th>id</th>
    <th>name</th>
    <th>address</th>
  
    
  </tr>
  
  {array}
  
</table>
        
      
                 
              
            
              </div>


    )
}
export default Dash;