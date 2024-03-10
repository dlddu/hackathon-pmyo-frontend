import React from "react";
import "../css/chatgpt.css";

// 분석 이미지 및 글 넘겨서 보여주기
const Chatgpt = ({ image, analysisText }) => {
  return (
    <div className="gpt-screen-container">
      {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
      {analysisText && <div className="analysis-text">{analysisText}</div>}{" "}
    </div>
  );
};

export default Chatgpt;
