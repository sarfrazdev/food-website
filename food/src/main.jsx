
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/home/Home.jsx';
import "./index.css";

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  </Router>
)
