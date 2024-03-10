import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/camera.css";
import axios from "axios";
import { BaseUrl } from "./url";
import image1 from "../img/past_icon.png";
import image2 from "../img/chart_icon.png";
import image3 from "../img/camera_icon.png";
import image4 from "../img/profile_icon.png";

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
        text: JSON.parse(apiResult.data.conversation.replaceAll("\n", "\\n"))
          .choices[0].message.content,
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
    <div>
      <div className="image-upload-container">
        <h2> 이미지를 선택하세요.</h2>
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
      <div className="navigation">
        <button onClick={() => navigate("/past")}>
          <img src={image1} alt="과거" />
        </button>
        <button onClick={() => navigate("/chart")}>
          <img src={image2} alt="차트" />
        </button>
        <button onClick={() => navigate("/camera")}>
          <img src={image3} alt="카메라" />
        </button>
        <button onClick={() => navigate("/profile")}>
          <img src={image4} alt="프로필" />
        </button>
      </div>
    </div>
  );
};

export default Camera;
