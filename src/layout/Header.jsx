import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ selectedTheme, setIsLoggedIn }) {
  let navigate = useNavigate();

  let handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
    setIsLoggedIn(false);
  };
  return (
    <div className={`header `}>
      <h2 className="logo">LOGO</h2>

      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/info")}>Info</li>
        <li onClick={handleLogOut}> Log out</li>
      </ul>
    </div>
  );
}
