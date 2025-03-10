"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Video,
  Sun,
  Moon,
  Calendar,
  PlayCircle,
  Users,
  Rocket,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure proper hydration
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle Theme Function
  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <div
      className={`flex min-h-screen flex-col transition-all duration-500 ${
        darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-all duration-500 ${
          darkMode
            ? "bg-gray-900/60 border-gray-800"
            : "bg-white/70 border-gray-300"
        } shadow-lg`}
      >
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Video className="h-6 w-6 text-blue-500" />
            <span className="text-blue-500">MeetHub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-blue-500 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-blue-500 transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-blue-500 transition-all duration-300"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all duration-300"
            >
              {darkMode ? (
                <Moon className="h-6 w-6 text-yellow-300 transition-all duration-300" />
              ) : (
                <Sun className="h-6 w-6 text-yellow-500 transition-all duration-300" />
              )}
            </button>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section
          className={`relative w-full py-24 transition-all duration-500 ${
            darkMode
              ? "bg-gray-900"
              : "bg-gradient-to-r from-blue-400 to-blue-600"
          } text-white`}
        >
          <div className="container px-6 text-center space-y-6">
            <h1 className="text-4xl font-extrabold sm:text-6xl drop-shadow-lg">
              Connect, Collaborate, and Meet with Ease
            </h1>
            <p className="max-w-xl mx-auto md:text-lg opacity-90">
              MeetHub provides a seamless platform for scheduling, joining, and
              managing your meetings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-200 shadow-md"
                >
                  Get Started <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 shadow-md"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className={`w-full py-20 transition-all duration-500 ${
            darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-900"
          }`}
        >
          <div className="container px-6">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold sm:text-5xl">
                🚀 Powerful Features
              </h2>
              <p className="max-w-2xl mx-auto text-lg opacity-80">
                Everything you need to manage your meetings in one place.
              </p>
            </div>
            <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Calendar,
                  title: "📅 Schedule Meetings",
                  color: "text-blue-500",
                },
                {
                  icon: Rocket,
                  title: "🚀 Instant Join",
                  color: "text-green-500",
                },
                {
                  icon: PlayCircle,
                  title: "🎥 Record Sessions",
                  color: "text-red-500",
                },
                {
                  icon: Users,
                  title: "🤝 Team Collaboration",
                  color: "text-yellow-500",
                },
              ].map(({ icon: Icon, title, color }, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 hover:shadow-xl ${
                    darkMode ? "bg-gray-900" : "bg-white"
                  }`}
                >
                  <Icon className={`h-10 w-10 ${color} mb-4`} />
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    Plan, join, record, and collaborate seamlessly.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm backdrop-blur-md border-gray-300/30">
        <p>© 2025 MeetHub. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/terms" className="hover:underline mx-2">
            Terms
          </Link>
          <Link href="/privacy" className="hover:underline mx-2">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}
