import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/home.css"; // CSS 파일 경로가 맞는지 확인하세요.
import image1 from "./img/past_icon.png";
import image2 from "./img/chart_icon.png";
import image3 from "./img/camera_icon.png";
import image4 from "./img/profile_icon.png";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="hello-screen">
      <div className="header">
        <h1>일분만</h1>
      </div>
      <div className="welcome-message">
        <h2>안녕하세요</h2>
        <h3>홍길동님</h3>
        <h2>이번 달 </h2>
        <h5> 3,612원 </h5>
        <h4> 환급 예정입니다!</h4>
      </div>
      {/* 네비게이션 바와 버튼들을 추가합니다. */}
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
