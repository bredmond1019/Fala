import { Routes, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navigation from "./components/Utilities/Navigation";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Scss/App.scss";

function App() {
  return (
    <div className="app">
      {/* <Navigation /> */}

      <Routes>
        <Route path="/Fala/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
