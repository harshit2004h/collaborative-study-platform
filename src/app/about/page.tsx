"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Video, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

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
      className={`flex min-h-screen flex-col transition-all duration-500 ${darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-all duration-500 ${darkMode ? "bg-gray-900/60 border-gray-800" : "bg-white/70 border-gray-300"} shadow-lg`}
      >
        <div className="container flex h-16 items-center justify-between px-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Video className="h-6 w-6 text-blue-500" />
            <span>MeetHub</span>
          </Link>
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
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all duration-300"
            >
              {darkMode ? (
                <Moon className="h-6 w-6 text-yellow-300" />
              ) : (
                <Sun className="h-6 w-6 text-yellow-500" />
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
          className={`relative w-full py-24 transition-all duration-500 ${darkMode ? "bg-gray-900" : "bg-gradient-to-r from-blue-400 to-blue-600"} text-white text-center`}
        >
          <div className="container px-6 space-y-6">
            <h1 className="text-4xl font-extrabold sm:text-6xl">
              About MeetHub
            </h1>
            <p className="max-w-2xl mx-auto md:text-lg opacity-90">
              We were on a mission to make virtual meetings more productive and
              accessible for everyone.
            </p>
          </div>
        </section>

        {/* Our Story & Our Mission (Side-by-Side) */}
        <section className="w-full py-20">
          <div className="container px-8 grid gap-12 md:grid-cols-2 items-center">
            {/* Our Story */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="opacity-80">
                MeetHub was founded in 2023 to create a meeting platform that’s
                intuitive, reliable, and feature-rich. We saw existing solutions
                were either too complex or lacked essential features, so we
                built something better.
              </p>
              <p className="opacity-80">
                Today, MeetHub is trusted by thousands of teams and individuals
                worldwide to connect, collaborate, and communicate effectively.
              </p>
            </div>
            {/* Image for Our Story */}
            <div className="flex justify-center">
              <Image
                src="https://via.placeholder.com/400x300"
                alt="Our Story"
                className="rounded-lg shadow-lg"
                width={96}
                height={50}
              ></Image>
            </div>

            {/* Our Mission */}
            <div className="flex justify-center">
              <Image
                src="https://via.placeholder.com/400x300"
                alt="Our Mission"
                className="rounded-lg shadow-lg"
                width={96}
                height={50}
              ></Image>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="opacity-80">
                We believe that effective communication should be accessible to
                everyone. Our mission is to break down barriers to virtual
                collaboration and create tools that enhance productivity and
                connection.
              </p>
              <p className="opacity-80">
                We’re committed to continuous improvement, listening to our
                users, and adapting to the evolving needs of remote and hybrid
                teams.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm">
        <p>© 2025 MeetHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
