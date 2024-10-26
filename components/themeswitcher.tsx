"use client";
import applyTheme from "@/utils/applyTheme";
import { useEffect, useState } from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitcher() {
  const themes = [
    { theme: "light", icon: <FiSun /> },
    { theme: "system", icon: <FiMonitor /> },
    { theme: "dark", icon: <FiMoon /> },
  ];

  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "system"
  );

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  return (
    <div className="theme-switcher">
      {themes.map(({ theme, icon }) => (
        <button
          className={`${
            currentTheme === theme &&
            "bg-laurel-900 dark:bg-laurel-700 text-laurel-50"
          }`}
          key={theme}
          onClick={() => {
            setCurrentTheme(theme);
            localStorage.setItem("theme", theme);
          }}>
          {icon}
        </button>
      ))}
    </div>
  );
}
