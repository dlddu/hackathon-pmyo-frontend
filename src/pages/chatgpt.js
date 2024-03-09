import React, { useState } from "react";
import "../css/camera.css";

const Chatgpt = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  return (
    <div className="image-upload-container">
      <input type="file" onChange={handleImageChange} />
      {imagePreview && (
        <img src={imagePreview} alt="Preview" className="image-preview" />
      )}
    </div>
  );
};

export default Chatgpt;
