import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/camera.css";
import axios from "axios";
import { BaseUrl } from "./url";

const Camera = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    const formData = new FormData();
    formData.append("file", file);
    const apiResult = await axios.post(`${BaseUrl}/gpts`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      transformRequest: [
        function () {
          return formData;
        },
      ],
    });
    navigate("/chatgpt", {
      state: {
        image: previewUrl,
        text: JSON.parse(apiResult.data.conversation).choices[0].message
          .content,
      },
    });
  };

  // navigate로 페이지 이동시 state에서 이미지와 분석 텍스트를 받아옵니다.
  useEffect(() => {
    if (navigate && navigate.state) {
      const { image, text } = navigate.state;
      setImagePreview(image);
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
