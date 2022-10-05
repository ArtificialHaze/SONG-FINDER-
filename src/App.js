import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Ind from "./Ind";
import Lyrics from "./Lyrics";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Ind />} />
          <Route exact path="/lyrics/track/:id" element={<Lyrics />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
