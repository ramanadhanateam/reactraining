import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Axios from 'axios';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 230 },
    {
        field: 'address', headerName: 'Address', width: 330, valueGetter: (params) => (
            `  street:${params.row.address.street || ''} 
        city:${params.row.address.city || ''} `
        )
    }
]
function UserList() {
    const [data, setData] = useState([])
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div style={{ height: 500, width: '80%' }} >
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    )
}
export default UserList;