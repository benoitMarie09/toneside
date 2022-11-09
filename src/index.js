import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Home from "./pages/Home/Home";
import Music from "./pages/Music/Music";
import Video from "./pages/Videos/Videos";
import NoPage from "./pages/NoPage/NoPage";

export default function App() {
  const [currentSlide, updateSlide] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <BurgerMenu currentSlide={currentSlide} updateSlide={updateSlide} />
          }
        >
          <Route
            index
            element={
              <Home currentSlide={currentSlide} updateSlide={updateSlide} />
            }
          />
          <Route path="music" element={<Music />} />
          <Route path="video" element={<Video />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
