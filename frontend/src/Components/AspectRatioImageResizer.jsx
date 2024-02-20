import React, { useState, useEffect } from 'react';

const AspectRatioImageResizer = () => {
  const [image, setImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (upload) => {
      const img = new Image();
      img.src = upload.target.result;
      console.log(img)

      img.onload = () => {
        setImage(img);
        setResizedImage(upload.target.result);
        setAspectRatio(null); // Reset aspect ratio when a new image is loaded
      };
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (image && aspectRatio) {
      resizeImage(aspectRatio);
    }
  }, [aspectRatio]); // Resize image when aspect ratio changes

  const resizeImage = (aspectRatio) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let newWidth, newHeight;

    if (aspectRatio === 'original') {
      newWidth = image.width;
      newHeight = image.height;
    } else if (aspectRatio === '1:1') {
      const minSize = Math.min(image.width, image.height);
      newWidth = minSize;
      newHeight = minSize;
    } else if (aspectRatio === '16:9') {
      newWidth = Math.min(image.width, image.height * (16 / 9));
      newHeight = newWidth / (16 / 9);
    } else if (aspectRatio === '4:5') {
      newHeight = Math.min(image.height, image.width * (4 / 5));
      newWidth = newHeight * (4 / 5);
    }

    canvas.width = newWidth;
    canvas.height = newHeight;

    ctx.drawImage(image, 0, 0, newWidth, newHeight);

    const resizedImgDataUrl = canvas.toDataURL('image/jpeg');
    setResizedImage(resizedImgDataUrl);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <div>
        <button onClick={() => setAspectRatio('original')}>Original Size</button>
        <button onClick={() => setAspectRatio('1:1')}>1:1</button>
        <button onClick={() => setAspectRatio('16:9')}>16:9</button>
        <button onClick={() => setAspectRatio('4:5')}>4:5</button>
      </div>
      <div className='max-w-[600px]'>
      {resizedImage && <img src={resizedImage} alt="Resized" />}

      </div>
    </div>
  );
};

export default AspectRatioImageResizer;
