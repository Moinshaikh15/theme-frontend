import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ selectedTheme }) {
  let navigate = useNavigate();
  return (
    <div className={`header `}>
      <h2 className="logo">LOGO</h2>

      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/info")}>Info</li>
      </ul>
    </div>
  );
}
