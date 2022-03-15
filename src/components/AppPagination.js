import React from 'react'
import Pagination from '@mui/material/Pagination'

const AppPagination = ({setPage, page}) => {

    const handleChange = page => {
        setPage(page)

    }

    return (<Pagination
        count={5}
        variant="outlined"
        shape="rounded"
        defaultPage={page}
        onChange={(e) => handleChange(e.target.textContent)}/>)
}
export default AppPagination;
