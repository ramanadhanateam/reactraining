import { Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import UpdateProfileImage from "./ImageCrop";
import CardMedia from '@mui/material/CardMedia';
import './index.scss';
function ImageCrop() {
const [imageSrc,setImageSrc]=useState()
const handleSubmit=(e)=>{
setImageSrc(e)
}
  return (
    <div className="image-cropper-container">
     <UpdateProfileImage handleSubmit={handleSubmit} />
     <div className="preview-container">
         <Card>
             <CardContent>
                 <h3 className="preview-style">preview</h3>    
                 {imageSrc && (
                     <CardMedia
                     component="img"
                     height="150px"
                     image={imageSrc}
                     alt="Paella dish"
                     />
                )}            
             </CardContent>
         </Card>
     </div>
    </div>
  );
}

export default ImageCrop;
