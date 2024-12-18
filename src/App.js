import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Sidebar from "./components/Sidebar";
import Apple from "./pages/Apple";
import "./components/Global.css"

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
