import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn(
  setNotificationMsg,
  setShowNotification,
  setNotificationBg
) {
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;

    let notificationBg = "";
    let notificationMsg = "";

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ user_name: username, password }),
      });

      if (response.status === 200) {
        let result = await response.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result.userInfo));
        notificationBg = "#38b000";
        navigate("/");
      } else {
        // Handle other response statuses (e.g., display error message)
        notificationBg = "#d62828";
      }
      let result = await response.json();

      notificationMsg = result.message;
    } catch (error) {
      // Handle error if API request fails
      notificationBg = "#d62828";
      notificationMsg = error.message;
    }

    setNotificationBg(notificationBg);
    setNotificationMsg(notificationMsg);
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className="Login-page">
      <div className="auth-card">
        <h3>Log In</h3>
        <form action="" onSubmit={handleLogin}>
          <div className="input-box">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*******"
            />
          </div>
          <input type="submit" name="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}
