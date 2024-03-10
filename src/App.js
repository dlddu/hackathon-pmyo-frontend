import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header"; // 공통 해더 컴포넌트
import { Home } from "./Home";
import { Past } from "./pages/past";
import Camera from "./pages/camera";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Chatgpt from "./pages/chatgpt";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> {/* 공통 해더 */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/past" element={<Past />}></Route>
          <Route path="/camera" element={<Camera />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/chatgpt" element={<Chatgpt />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
