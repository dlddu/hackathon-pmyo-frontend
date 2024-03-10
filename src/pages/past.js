import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "./url";
import "../css/home.css";

export const Past = () => {
  const [resultState, setResult] = useState([]);

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
      <font color={"#9896FF"} style={{ fontSize: "34px", marginTop: 30 }}>
        일분만
      </font>
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
      </div>
    </div>
  );
};
