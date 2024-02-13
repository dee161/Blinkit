import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes instead of Route
import Signup from "./components/Signup";
import Login from "./components/Login";
import UploadImage from "./components/UploadImage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<div><h1>HEllo</h1></div>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<UploadImage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
