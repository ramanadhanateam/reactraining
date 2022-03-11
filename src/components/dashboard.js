import React, {useEffect} from "react";
import  Axios  from "axios";


function Dash(){
    
    useEffect=(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>
          
            console.log(res.data)).catch(err=>console.log(err))
    
      },[])

        
   
    return(
<div >
        <h1>DASHBOARD</h1>
        
      
                 
              
            
              </div>


    )
}
export default Dash;