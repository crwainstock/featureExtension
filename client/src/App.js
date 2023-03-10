import "./App.css";
import React from "react";

import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Action from "./pages/Action";
import ErrorPage from "./pages/ErrorPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/look" element={<Action />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
