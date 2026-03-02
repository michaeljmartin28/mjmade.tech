"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

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
        <Link href="/agent">AI Agent</Link>
        <Link href="/mfa">MFA Demo</Link>

        <button
          onClick={toggleTheme}
          className="px-3 py-2 rounded-full bg-surfaceAlt border border-border hover:bg-surface transition-colors text-text"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
