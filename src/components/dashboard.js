import React, {useEffect,useState} from "react";
import  Axios  from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DashBoard() {    

    const [data,setData]=useState([])
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
        console.log("getting from::",res.data)
        setData(res.data)
        })
        .catch(err=>console.log(err))

    },[])
    return(
<div>
        <h1>DASHBOARD</h1>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                   <TableHead>
                       <TableRow>
                           <TableCell>ID</TableCell>
                           <TableCell >NAME</TableCell> 
                           <TableCell align="left">ADDRESS</TableCell>
                       </TableRow>
                    </TableHead>
              <TableBody>
              {data.length>0 && data.map((data,index)=> (
              <TableRow
                 key={data.id}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell >{data.id}</TableCell>
                  <TableCell component="th" scope="row">
                       {data.name}
                  </TableCell>
              
              <TableCell align="left">{data.address.street}</TableCell>

              </TableRow>
                     ))}
          </TableBody>
         </Table>
    </TableContainer>
</div>
    )
}
export default DashBoard;