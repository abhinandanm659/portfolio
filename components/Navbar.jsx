"use client";
import React from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto">
      <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 px-6 py-4 md:py-3 rounded-full shadow-2xl flex items-center justify-between md:justify-center gap-4 md:gap-8">
        <div className="flex gap-1 md:gap-6">
          <a
            href="#home"
            className="text-xs md:text-sm font-medium text-white hover:text-blue-400 transition-colors px-3 py-1 rounded-full hover:bg-white/5"
          >
            Home
          </a>
          <a
            href="#work"
            className="text-xs md:text-sm font-medium text-gray-400 hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-white/5"
          >
            Work
          </a>
          <a
            href="#skills"
            className="text-xs md:text-sm font-medium text-gray-400 hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-white/5"
          >
            Stack
          </a>
          <a
            href="#writing"
            className="text-xs md:text-sm font-medium text-gray-400 hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-white/5"
          >
            Writing
          </a>
          <a
            href="#experience"
            className="text-xs md:text-sm font-medium text-gray-400 hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-white/5"
          >
            History
          </a>
        </div>
        <a
          href="mailto:abhinandanm659@gmail.com"
          className="bg-white text-black hover:bg-blue-500 hover:text-white px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
        >
          Connect
        </a>
      </div>
    </nav>
  );
}
