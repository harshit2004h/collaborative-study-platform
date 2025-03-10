"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Video, Sun, Moon, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
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

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful",
        description: "Welcome back to MeetHub!",
      });
      router.push("/dashboard");
    }, 1500);
  };

  // Prevent SSR issues by rendering only when mounted
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
            <h1 className="text-3xl font-extrabold">Welcome Back</h1>
            <p className="opacity-80">Enter your credentials to sign in</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                className={`w-full bg-opacity-20 border-opacity-30 focus:ring-2 focus:ring-blue-500 transition-all duration-500 ${darkMode ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-gray-200 border-gray-300 text-gray-900 placeholder-gray-500"}`}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="bg-white/20 border-white/50" />
              <Label htmlFor="remember" className="opacity-80">
                Remember me
              </Label>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white flex justify-center items-center transition-all duration-500"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center text-sm opacity-80 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
