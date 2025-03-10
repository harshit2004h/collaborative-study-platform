"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Video, Sun, Moon, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted to avoid hydration errors
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created",
        description:
          "Welcome to MeetHub! Your account has been created successfully.",
      });
      router.push("/dashboard");
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div
      className={`flex min-h-screen flex-col transition-all duration-500 ${darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Header */}
      <header
        className={`flex h-16 items-center justify-between border-b px-6 backdrop-blur-md transition-all duration-500 ${darkMode ? "bg-gray-900/60 border-gray-800" : "bg-white/70 border-gray-300"} shadow-md`}
      >
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Video className="h-6 w-6 text-blue-500" />
          <span>MeetHub</span>
        </Link>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-colors duration-300"
        >
          {darkMode ? (
            <Moon className="h-6 w-6 text-yellow-300 transition-all duration-300" />
          ) : (
            <Sun className="h-6 w-6 text-yellow-500 transition-all duration-300" />
          )}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center p-6">
        <div
          className={`w-full max-w-md rounded-lg p-8 shadow-xl backdrop-blur-md transition-all duration-500 transform ${darkMode ? "bg-gray-900/50 border border-gray-800" : "bg-white/50 border border-gray-300"}`}
        >
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold">Create an Account</h1>
            <p className="opacity-80">Enter your details to sign up</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input
                  id="first-name"
                  placeholder="John"
                  required
                  className={`w-full bg-opacity-20 border-opacity-30 focus:ring-2 focus:ring-blue-500 transition-all duration-500 ${darkMode ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500"}`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input
                  id="last-name"
                  placeholder="Doe"
                  required
                  className={`w-full bg-opacity-20 border-opacity-30 focus:ring-2 focus:ring-blue-500 transition-all duration-500 ${darkMode ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500"}`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className={`w-full bg-opacity-20 border-opacity-30 focus:ring-2 focus:ring-blue-500 transition-all duration-500 ${darkMode ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500"}`}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                className={`w-full bg-opacity-20 border-opacity-30 focus:ring-2 focus:ring-blue-500 transition-all duration-500 ${darkMode ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500"}`}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                required
                className={`w-full bg-opacity-20 border-opacity-30 focus:ring-2 focus:ring-blue-500 transition-all duration-500 ${darkMode ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500"}`}
              />
            </div>

            {/* Signup Button */}
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white flex justify-center items-center transition-all duration-500"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="text-center text-sm opacity-80 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
