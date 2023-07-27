import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn({ setIsLoggedIn }) {
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;

    try {
      const response = await fetch("https://theme-backend.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ user_name: username, password }),
      });

      // if login successful then add the user object to localStorage
      if (response.status === 200) {
        let result = await response.json();
        localStorage.setItem("user", JSON.stringify(result.userInfo));

        navigate("/");
        setIsLoggedIn(true);
      } 
      else {
        console.log(response)
      }
    } catch (error) {
      alert(error.message);
    }
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
          <input type="submit" name="submit" id="submit" value="Log In" />
        </form>

        <span>
          Don't have Account? <Link to="/signup">Signup here</Link>{" "}
        </span>
        <div className="credentials">
          <span>Or Use these Demo account</span>
          <span>
            Username: <b>test_user</b>, Password: <b>123456</b>
          </span>
          <span>
            Username: <b>test_user2</b>, Password: <b>123456</b>
          </span>
        </div>
      </div>
    </div>
  );
}
