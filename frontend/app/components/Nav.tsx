"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

const Saber = ({ isDark }: { isDark: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    className="transition-colors duration-300"
  >
    {/* Hilt */}
    <rect x="2" y="10" width="6" height="4" rx="1" className="fill-text" />
    <rect x="8" y="11" width="2" height="2" rx="1" className="fill-textMuted" />

    {/* Blade */}
    <rect
      x="10"
      y="11"
      width="12"
      height="2"
      rx="1"
      className={`${isDark ? "fill-red-500" : "fill-blue-500"} transition-[width] duration-300`}
    />
  </svg>
);

export default function Nav() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load saved theme or system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else if (saved === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      // System preference fallback
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="w-full bg-bg border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">Home</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>

        <button
          onClick={toggleTheme}
          className="px-0 py-0 rounded-full rotate-[-45deg] bg-surfaceAlt border border-border hover:bg-surface transition-colors text-text "
          title="Choose a side"
        >
          {theme === "light" ? (
            <Saber isDark={false} />
          ) : (
            <Saber isDark={true} />
          )}
        </button>
      </div>
    </nav>
  );
}
