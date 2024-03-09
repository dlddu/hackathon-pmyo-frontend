import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useHistory 대신 useNavigate 사용
import "../css/camera.css";

const Camera = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      alert("이미지 파일을 선택해주세요.");
      return;
    }
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);

    setTimeout(() => {
      navigate("/chatgpt"); // useNavigate 사용
    }, 5000);
  };

  return (
    <div className="image-upload-container">
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {imagePreview && (
        <img src={imagePreview} alt="Preview" className="image-preview" />
      )}
    </div>
  );
};

export default Camera;
