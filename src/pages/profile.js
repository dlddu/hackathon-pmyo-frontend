import React from "react";
import "../css/profile.css";
import image1 from "../img/past_icon.png";
import image2 from "../img/chart_icon.png";
import image3 from "../img/camera_icon.png";
import image4 from "../img/profile_icon.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="profile-container">
        <div className="profile-content">
          <h1>Profile</h1>
          <img src={"/profile.png"} alt="" />

          <h2>이름 : 장아현</h2>
          <p>아파트명 : 공덕 푸르지오 아파트 </p>
          <p>동 : 101동 </p>
          <p>호수 : 1801호 </p>
          <p>이번 달 분리수거 횟수 : 3회</p>
          <h2>잘 하고 계세요!</h2>
        </div>
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

export default Profile;
