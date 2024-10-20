"use client";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitcher() {
  const themes = [
    { name: "light", icon: <FiSun /> },
    { name: "system", icon: <FiMonitor /> },
    { name: "dark", icon: <FiMoon /> },
  ];

  return (
    <div className="theme-switcher">
      {themes.map(({ name, icon }) => (
        <button onClick={() => {}}>{icon}</button>
      ))}
    </div>
  );
}
