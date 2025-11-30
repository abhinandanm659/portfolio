"use client";
import React from "react";
import Navbar from "../components/Navbar";
import NetworkBackground from "../components/NetworkBackground";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Blog from "../components/Blog";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 selection:bg-blue-500/30 font-sans overflow-x-hidden">
      <NetworkBackground />
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Blog />
        <Timeline />
        <Footer />
      </main>
    </div>
  );
}
