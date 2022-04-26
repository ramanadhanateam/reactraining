import React, { useState, useRef, useEffect, useCallback, } from 'react'
import ReactCrop from 'react-image-crop';
import { Button, Card, CardContent } from '@mui/material';
import 'react-image-crop/dist/ReactCrop.css';
import './ImageCrop.scss';

const UpdateProfileImage = ({ handleSubmit }) => {
  const [upImg, setUpImg] = useState();
  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 9 / 9 });
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [completedCrop, setCompletedCrop] = useState(null);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );
  }, [completedCrop]);

  const generateDownload = (image) => {
    const canvas = previewCanvasRef.current;
    if (!crop || !canvas) {
      return;
    }
    return canvas.toDataURL("image/jpeg")
  }

  const handleImageConvert = () => {
    const img = generateDownload(upImg)
    handleSubmit(img)
  }
  return (
    <Card className="cropper-card-content">
        <CardContent>
            <div className="cropper-header">
              <h3>Update Profile Image</h3>
            </div>
          <div className='cropper-container'>
            <div className="cropper-wrapper">
              <div className="input-wrapper">
                {!upImg &&
                  <label htmlFor="selectImage">Click to choose an image</label>
                }
                <input type="file" accept="image/*" id="selectImage" hidden onChange={onSelectFile} />
                <ReactCrop
                  src={upImg}
                  onImageLoaded={onLoad}
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  onComplete={(c) => setCompletedCrop(c)}
                />
                <canvas
                  ref={previewCanvasRef}
                  style={{
                    width: Math.round(completedCrop?.width ?? 0),
                    height: Math.round(completedCrop?.height ?? 0),
                    display: 'none'
                  }}
                />
              </div>
            </div>
            <div className='button-container'>
              <Button variant="contained" color="primary" type="button" onClick={handleImageConvert}>Crop</Button>
            </div>
          </div>
        </CardContent>
    </Card>
  )
}

export default UpdateProfileImage