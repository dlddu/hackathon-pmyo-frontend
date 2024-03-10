import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "./url";
import "../css/home.css";
import image1 from "../img/past_icon.png";
import image2 from "../img/chart_icon.png";
import image3 from "../img/camera_icon.png";
import image4 from "../img/profile_icon.png";
import { useNavigate } from "react-router-dom";

export const Past = () => {
  const [resultState, setResult] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BaseUrl}/server/imgList`).then((it) => {
      if (it !== null && it !== undefined) setResult(it.data);
    });
  }, [resultState]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        justifyItems: "center",
      }}
    >
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            justifyItems: "left",
            width: "100%",
          }}
        >
          <b
            style={{ fontSize: "34px", marginTop: 20, justifyContent: "left" }}
          >
            5월
          </b>
          <font
            color={"#6C6D6E"}
            style={{ marginTop: "15px", marginBottom: "15px" }}
          >
            분리배출 스냅샷
          </font>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            columnGap: "10px",
            rowGap: "10px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {resultState.map((it) => (
            <div
              style={{
                height: 100,
                width: 100,
                borderStyle: "solid",
                borderColor: it.score === 100 ? "#5DF15D" : "#FF3131",
                borderWidth: 5,
                boxSizing: "border-box",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={it.url} alt={"없다"} width={90} height={90} />
            </div>
          ))}
        </div>
        <div
          className="navigation"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            width: "105%",
            marginTop: "10px",
          }}
        >
          <button
            onClick={() => navigate("/past")}
            style={{
              height: "70px",
              width: "70px",
              background: "transparent",
              borderWidth: 0,
            }}
          >
            <img src={image1} alt="과거" />
          </button>
          <button
            onClick={() => navigate("/chart")}
            style={{
              height: "70px",
              width: "70px",
              background: "transparent",
              borderWidth: 0,
            }}
          >
            <img src={image2} alt="차트" />
          </button>
          <button
            onClick={() => navigate("/camera")}
            style={{
              height: "70px",
              width: "70px",
              background: "transparent",
              borderWidth: 0,
            }}
          >
            <img src={image3} alt="카메라" />
          </button>
          <button
            onClick={() => navigate("/profile")}
            style={{
              height: "70px",
              width: "70px",
              background: "transparent",
              borderWidth: 0,
            }}
          >
            <img src={image4} alt="프로필" />
          </button>
        </div>
      </div>
    </div>
  );
};
