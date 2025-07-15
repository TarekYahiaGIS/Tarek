import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BsSun, BsMoonStars } from "react-icons/bs";

function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        position: "fixed",
        top: "50%",
        left: "20px",
        transform: "translateY(-50%)",
        background: "none",
        border: "none",
        fontSize: "1.8rem",
        cursor: "pointer",
        zIndex: 1000,
        color: darkMode ? "#fff" : "#000",
        transition: "transform 0.3s ease"
      }}
      title="Toggle Theme"
    >
      {darkMode ? <BsSun /> : <BsMoonStars />}
    </button>
  );
}

export default ThemeToggle;
