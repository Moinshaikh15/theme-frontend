import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function ThemeSelector() {
  let [socket, setSocket] = useState(null);

  let handleClick = async (bg_col, text_col) => {
    let savedUserId = JSON.parse(localStorage.getItem("user")).id;
    let body = {
      userId: savedUserId,
      primaryColor: bg_col,
      secondaryColor: "White",
      textColor: text_col,
      fontSize: "16",
      font: "Inter",
    };

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
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //connect socket
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    newSocket?.emit("theme_check", {
      id: Number(JSON.parse(localStorage.getItem("user")).id),
    });

    // when theme-updated message received
    newSocket?.on("theme-updated", (theme_preference) => {
      let savedUserId = JSON.parse(localStorage.getItem("user")).id;

      if (theme_preference !== null && theme_preference !== undefined) {
        let { primary_colour, text_colour, user_id } = theme_preference;

        // check if message for the same user by checking userID
        if (savedUserId === user_id) {
          // Update the root variable to change theme
          const root = document.documentElement;
          root?.style.setProperty("--bgCol", primary_colour);
          root?.style.setProperty("--textCol", text_colour);
        }
      }
    });
  }, []);

  return (
    <div className="theme-selector">
      <span>Change Theme</span>

      <div className="themes">
        <div
          className="circle theme-one"
          onClick={() => handleClick("#0098fe", "white")}
        ></div>
        <div
          className="circle theme-two"
          onClick={() => handleClick("#164e63", "white")}
        ></div>
        <div
          className="circle theme-three"
          onClick={() => handleClick("#ffd60a", "black")}
        ></div>
      </div>
    </div>
  );
}
