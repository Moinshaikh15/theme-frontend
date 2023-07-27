import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ setIsLoggedIn }) {
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    let confirm_password = e.target.confirm_password.value;

    if (password !== confirm_password) {
      alert("passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ user_name: username, password }),
      });

      if (response.status === 200) {
        let result = await response.json();
        localStorage.setItem("user", JSON.stringify(result.userInfo));
        navigate("/");
        setIsLoggedIn(true);

      } else {
        console.log(response);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="SignUp-page">

      <div className="auth-card">
        <h3>Sign Up</h3>
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
          <div className="input-box">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="*******"
            />
          </div>
          <input type="submit" name="submit" id="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}
