import React from "react";
import { Link } from "react-router-dom";
import "../components/Sidebar.css"; // 사이드바 전용 스타일

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">농산물 품질<br />표시방법<br />코드화 표준 개발</h2>
      <nav className="sidebar-menu">
        <Link to="/" className="sidebar-link">Home</Link>
        <Link to="/apple" className="sidebar-link">Apple</Link>
        <Link to="/pear" className="sidebar-link">Pear</Link>
        <Link to="/peach" className="sidebar-link">Peach</Link>
        <Link to="/melon" className="sidebar-link">Melon</Link>
        <Link to="/mandarine" className="sidebar-link">Mandarine</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
