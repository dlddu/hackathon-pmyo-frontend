import React from "react";
import "../css/profile.css";

const Profile = () => {
  return (
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
  );
};

export default Profile;
