"use client";
import React from "react";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-20 text-center relative z-10 bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">
          Ready to architect the future?
        </h2>
        <p className="text-gray-500 mb-10">
          Let's build something that doesn't just work, but inspires.
        </p>
        <a
          href="mailto:abhinandanm659@gmail.com"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
        >
          <Mail size={18} /> Initiate Contact
        </a>
        <p className="mt-16 text-gray-800 text-xs font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Abhinandan Mishra. Designed in the Void.
        </p>
      </div>
    </footer>
  );
}
