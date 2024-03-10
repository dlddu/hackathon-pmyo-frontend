import React from "react";
import image1 from "../img/past_icon.png";
import image2 from "../img/chart_icon.png";
import image3 from "../img/camera_icon.png";
import image4 from "../img/profile_icon.png";
import { useNavigate } from "react-router-dom";

const Chart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={"/chart.png"}
        alt="Chart"
        style={{ maxWidth: "50%", alignContent: "center" }}
      />
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

export default Chart;
