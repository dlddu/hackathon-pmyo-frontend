import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/camera.css";

const Camera = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [analysisText, setAnalysisText] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);

    // 이미지 분석 로직을 추가하세요.
    // 예: ChatGPT에 의한 이미지 분석을 진행하고 결과를 setAnalysisText에 저장합니다.

    // 5초 후에 '/chatgpt' 페이지로 이동하며 이미지와 분석 텍스트를 전달합니다.
    setTimeout(() => {
      navigate("/chatgpt", {
        state: { image: previewUrl, text: analysisText },
      });
    }, 5000);
  };

  // navigate로 페이지 이동시 state에서 이미지와 분석 텍스트를 받아옵니다.
  useEffect(() => {
    if (navigate && navigate.state) {
      const { image, text } = navigate.state;
      setImagePreview(image);
      setAnalysisText(text);
    }
  }, [navigate]);

  return (
    <div className="image-upload-container">
      <input type="file" onChange={handleImageChange} />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="image-preview"
          style={{ maxWidth: "50%" }}
        />
      )}
    </div>
  );
};

export default Camera;
