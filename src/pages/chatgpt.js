import React from "react";
import "../css/chatgpt.css";
import { useLocation } from "react-router-dom";

// 분석 이미지 및 글 넘겨서 보여주기
const Chatgpt = () => {
  const location = useLocation();
  return (
    <div className="gpt-screen-container">
      <img
        src={location.state.image}
        alt="Uploaded"
        className="uploaded-image"
      />
      <div className="analysis-text" style={{ whiteSpaceCollapse: "preserve" }}>
        {location.state.text}
      </div>
    </div>
  );
};

export default Chatgpt;
