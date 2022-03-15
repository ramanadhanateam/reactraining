import React, {useEffect, useState} from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppPagination from './AppPagination'

const DashBoard = () => {

    const [page,
        setPage] = useState(1);

    const [data,
        setData] = useState([])

    useEffect(() => {

        axios
            .get(`https://jsonplaceholder.typicode.com/users?_start=0&_limit=2_&_page=${page}`)
            .then(res => {
                console.log("getting from::", res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))

    }, [page])

    return (
        <div>

            <h1>DASHBOARD</h1>
            <TableContainer
                component={Paper}
                sx={{
                border: "px solid rgba(0,0,0,0,2)",
                marginLeft: "auto",
                marginRight: "auto",
                width: 'max-Width'
            }}>
                <Table
                    sx={{
                    minWidth: 350,
                    layout: "auto"
                }}
                    aria-label="simple table"
                    fixedHeader={false}
                    pagination='true'>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell >NAME</TableCell>
                            <TableCell>ADDRESS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.length > 0 && data.map((data, index) => (
                            <TableRow
                                key={data.id}
                                sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0
                                }
                            }}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{
                                    padding: '0px 0px'
                                }}
                                    align="center">{data.id}</TableCell>
                                <TableCell component="th" scope="row">
                                    {data.name}
                                </TableCell>

                                <TableCell align="left">{data.address.street}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <AppPagination setPage={setPage} page={page} align="center"/>

            </TableContainer>

        </div>
    );
}
export default DashBoard;