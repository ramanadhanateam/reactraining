import axios from "axios";
import React,{useState,useEffect} from "react";
import InfiniteScroller from "./InfiniteScroller";
import"../Style.css"
function GalleryView(){
    const[page,setPage]=useState(0)
    const [data,setData]=useState([])
    const[has,setHas]=useState(true)
    const getGallery=(_page)=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${_page}&_limit=10`)
        .then(res=>{
            const result=[...data,...res.data]
           setData(result)
           setHas(result.length!==100)
        })
    }
const handleLoadmore=()=>{
    getGallery(page+1)
    setPage(page+1)
}
useEffect(()=>{
    getGallery(page)
},[])
    return(
<InfiniteScroller
items={data}
hasmore={has}
loadmore={handleLoadmore}
>
{data.map((item)=>(
    <img src={item.url} height="100px"width="150px" />
))}

</InfiniteScroller>
    )
}
export default GalleryView;