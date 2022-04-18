import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

const AppPagination=({setPage,page})=>{
    const handleChange= (e, page) =>{
          setPage(page)
    }
    return(
        <div className="pagination-style">
            <Pagination onChange={handleChange} count={10}  color="primary"/>
        </div>
    )
}
export default AppPagination;