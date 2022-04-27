import axios from "axios";
import React,{useState,useEffect} from "react";
import InfiniteScroller from "../InfiniteScroller/InfiniteScroller";
import"./GalleryView.scss"

function GalleryView(){
    const[page,setPage]=useState(0)
    const [data,setData]=useState([])
    const[has,setHas]=useState(true)
    const getGallery=(_page)=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${_page?(_page *10) :0}&_limit=10`)
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
    <div className="container">
{data.map((item)=>(
    <div key={item.id}>
    <img src={item.url} height="150px"width="200px" />
    </div>
))}
</div>
</InfiniteScroller>
    )
}
export default GalleryView;