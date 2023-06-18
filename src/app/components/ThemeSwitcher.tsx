"use client";
// Stateful component that allows the user to switch between light and dark mode.
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { IconSun, IconMoon } from '@tabler/icons-react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const selectedTheme = theme === "light" ? "dark" : "light"
    refreshNav(selectedTheme)
    setTheme(selectedTheme);
  };

  const refreshNav = (selectedTheme: string) => {
    if (selectedTheme === 'dark') {
      window.scrollBy(0, -1);
    } else {
      window.scrollBy(0, -1);
    }
  }

  return (
    <div>
      {/* The current theme is: {theme} */}
      <button>
        {theme === "light" ? (
          <IconMoon onClick={toggleTheme} size={24} />
        ) : (
          <IconSun onClick={toggleTheme} size={24} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;