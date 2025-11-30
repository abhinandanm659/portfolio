"use client";
import React from "react";
import { ChevronDown, Linkedin, Mail } from "lucide-react";
import Section from "./Section";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 md:pt-0 gap-12 scroll-mt-32"
    >
      <Section className="flex-1 order-2 md:order-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">
            Software Engineer
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-[0.9]">
          Abhinandan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 animate-gradient-x">
            Mishra.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-10 mx-auto md:mx-0">
          I build{" "}
          <span className="text-white font-medium">digital ecosystems</span>{" "}
          that defy expectations.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() =>
              document
                .getElementById("work")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="group bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            View Solutions{" "}
            <ChevronDown
              size={16}
              className="group-hover:translate-y-1 transition-transform"
            />
          </button>
          <div className="flex gap-4 items-center justify-center">
            <a
              href="https://linkedin.com/in/abhinandan659"
              target="_blank"
              rel="noreferrer"
              className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all border border-transparent hover:border-white/20"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:abhinandanm659@gmail.com"
              className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all border border-transparent hover:border-white/20"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </Section>

      <Section className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-[500px] md:h-[500px] group">
          <div className="absolute inset-0 border border-dashed border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 border border-dotted border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 z-10 backdrop-blur-sm bg-black/50">
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
            />
          </div>
          <div className="absolute top-0 right-10 bg-[#0a0a0a] border border-white/20 p-4 rounded-xl shadow-2xl z-20 animate-bounce delay-100">
            <svg
              className="text-blue-400 mb-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12h18"
                stroke="#60a5fa"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="h-1 w-8 bg-blue-500/50 rounded-full"></div>
          </div>
        </div>
      </Section>
    </section>
  );
}
