import "./sass/main.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import LogIn from "./pages/LogIn";
import { useEffect, useState } from "react";
import ThemeSelector from "./components/ThemeSelector";
import SignUp from "./pages/SignUp";

function App() {
  let [selectedTheme, setSelectedTheme] = useState("theme_one");
  let [notificationMsg, setNotificationMsg] = useState("Logged In");
  let [showNotification, setShowNotification] = useState(false);
  let [notificationBg, setNotificationBg] = useState("");

  const navigate = useNavigate();
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userDataString = localStorage.getItem("user");

    if (userDataString) {
      const user = JSON.parse(userDataString);
      console.log;
      if (user && typeof user === "object" && Object.keys(user).length > 0) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }

    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [isLoggedIn, history]);

  return (
    <div className={`app ${selectedTheme}`}>
      <div
        className="notification"
        style={{
          display: showNotification ? "flex" : "none",
          backgroundColor: notificationBg,
        }}
      >
        <p>{notificationMsg}</p>
      </div>

      {isLoggedIn && <Header selectedTheme={selectedTheme} />}

      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home selectedTheme={selectedTheme} />} />
        <Route
          path="/about"
          element={<About selectedTheme={selectedTheme} />}
        />
        <Route path="/info" element={<Info selectedTheme={selectedTheme} />} />
      </Routes>

      {isLoggedIn && <ThemeSelector setSelectedTheme={setSelectedTheme} />}

      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
