import React ,{useState}from "react";
import SideBar from "./components/SideBar";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import MainChapter from "./components/MainChapter";

import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Pass the callback function as a prop to SideBar */}
        <SideBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/teach" element={<MainPage />} />
          <Route path="/teach/:chapterName/:id" element={<MainChapter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
