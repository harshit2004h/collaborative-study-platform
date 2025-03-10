"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Video, Mail, Phone, MapPin, Sun, Moon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
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
    setDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message sent",
        description:
          "We've received your message and will get back to you soon.",
      });

      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
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
        <div className="container flex h-14 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <Video className="h-5 w-5 text-blue-500" />
            <span>MeetHub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
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
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-1 rounded-full transition-all duration-300"
            >
              {darkMode ? (
                <Moon className="h-5 w-5 text-yellow-300" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-500" />
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
        <section className="w-full py-12 text-center px-6">
          <div className="container">
            <h1 className="text-3xl font-extrabold sm:text-5xl">Contact Us</h1>
            <p className="max-w-lg mx-auto mt-2 text-sm opacity-80">
              We would love to hear from you. Get in touch with our team.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="w-full py-10 px-6">
          <div className="container grid gap-8 md:grid-cols-2 items-start">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="text-sm opacity-80">
                Have questions about our platform? Want to schedule a demo? Fill
                out the form, and we will get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <div>
                    <h3 className="text-sm font-semibold">Email</h3>
                    <p className="text-sm opacity-80">info@meethub.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <div>
                    <h3 className="text-sm font-semibold">Phone</h3>
                    <p className="text-sm opacity-80">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <div>
                    <h3 className="text-sm font-semibold">Address</h3>
                    <p className="text-sm opacity-80">
                      123 Meeting Street, San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="first-name" className="text-sm">
                      First Name
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      required
                      className="text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="last-name" className="text-sm">
                      Last Name
                    </Label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      required
                      className="text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="subject" className="text-sm">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    required
                    className="text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message" className="text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Let us know how we can help..."
                    className="min-h-[100px] text-sm"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-4 text-center text-xs">
        <p>© 2025 MeetHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
