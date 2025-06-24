"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-background text-foreground border-t border-border py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-indigo-500 opacity-20 dark:opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-pink-500 opacity-20 dark:opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-purple-500 opacity-10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              SnapCollab ⚡
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Real-time collaborative slides with lightning-fast performance,
              playful UX, and a human-first approach.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-base sm:text-lg">
              Explore
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-base sm:text-lg">
              Company
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-foreground text-base sm:text-lg">
              Get Updates
            </h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-background border border-border text-sm sm:text-base text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-indigo-500"
              />
              <Button className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white text-sm sm:text-base">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="h-px bg-border my-8 sm:my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SnapCollab. Built with ⚡</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@snapcollab.ai"
              className="hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
