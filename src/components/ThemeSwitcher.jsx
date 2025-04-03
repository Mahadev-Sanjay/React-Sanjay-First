import React, { useState, useEffect } from "react";
import "./ThemeSwitcher.css";

const themes = {
  light: "light-mode",
  dark: "dark-mode",
  blue: "blue-mode",
  green: "green-mode",
  orange: "orange-mode",
  lightblue: "lightblue-mode"
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light-mode");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="theme-switcher">
      <span className="theme-icon" onClick={() => setMenuOpen(!menuOpen)}>
        🎨
      </span>
      {menuOpen && (
        <div className="theme-menu">
          {Object.entries(themes).map(([key, value]) => (
            <button key={key} className={`theme-btn ${value}`} onClick={() => { setTheme(value); setMenuOpen(false); }}>
              {key.charAt(0).toUpperCase() + key.slice(1)} {key === "light" ? "☀️" : key === "dark" ? "🌙" : key === "blue" ? "🔵" : key === "green" ? "🟢" : key === "orange" ? "🟠" : "🔵"}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
