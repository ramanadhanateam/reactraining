import React, { useEffect, useState } from "react";
import Axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppPagination from './AppPagination'
import AlertDialog from "./AlertDialog";
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 230 },
    {
        field: 'email', headerName: 'Email', width: 330
    }
]
function UserList() {
    const [data, setData] = useState([])
    const [page,setPage]=useState()
    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/comments?_start=0_&_page=${page}_limit=10`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    },[page])
    const handleDelete = (id)=>{
      const updatedData = data.filter(user => (user.id !== id));
      // Axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
      //       .then(res => {
      //           console.log(res.data)
      //       })
      //       .catch(err => console.log(err))
      setData(updatedData)
    }
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left"></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left"><AlertDialog handleDelete={()=> handleDelete(row.id)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AppPagination setPage={setPage} page={page} />
    </TableContainer>
    )
}
export default UserList;