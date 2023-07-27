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
  const navigate = useNavigate();
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userDataString = localStorage.getItem("user");

    if (userDataString) {

      const user = JSON.parse(userDataString);
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
    <div className="app">
      {isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn} />}

      <Routes>
        <Route
          path="/login"
          element={<LogIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
      </Routes>

      {isLoggedIn && <ThemeSelector />}

      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
