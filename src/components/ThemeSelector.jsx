import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
export default function ThemeSelector({ setSelectedTheme }) {
  let [socket, setSocket] = useState(null);
  let handleClick = async (bg_col, text_col, theme_num) => {
    let userId = JSON.parse(localStorage.getItem("user")).id;
    let body = {
      userId: userId,
      primaryColor: bg_col,
      secondaryColor: "White",
      textColor: text_col,
      fontSize: "16",
      font: "Inter",
    };
    console.log(body);
    try {
      const response = await fetch("http://localhost:5000/theme/update-theme", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.status === 200) {
        let result = await response.json();
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);
    socket?.on("theme-updated", (theme_preference) => {
      console.log("theme-updated");
      let { primaryColor, textColor } = theme_preference;
      const root = document.documentElement;
      root?.style.setProperty("--bgCol", primaryColor);
      root?.style.setProperty("--textCol", textColor);
    });
  }, []);

  return (
    <div className="theme-selector">
      <span>Change Theme</span>

      <div className="themes">
        <div
          className="circle theme-one"
          onClick={() => handleClick("#0098fe", "white", "theme_one")}
        ></div>
        <div
          className="circle theme-two"
          onClick={() => handleClick("#164e63", "white", "theme_two")}
        ></div>
        <div
          className="circle theme-three"
          onClick={() => handleClick("#ffd60a", "black", "theme_three")}
        ></div>
      </div>
    </div>
  );
}
