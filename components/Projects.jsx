"use client";
import React from "react";
import { Layout, Share2, Cpu, ExternalLink } from "lucide-react";
import Section from "./Section";

const projects = [
  {
    title: "Collaborative Whiteboard",
    tech: ["React", "WebSockets", "Node.js", "Redis"],
    desc: "Real-time visual collaboration engine handling concurrent connections with sub-50ms latency.",
    stats: "Live Sync",
    icon: Layout,
    color: "text-purple-400",
  },
  {
    title: "Nebula Stream",
    tech: ["Next.js", "WebRTC", "Go", "Cassandra"],
    desc: "High-fidelity p2p video streaming architecture designed for zero-buffer interactions.",
    stats: "4k Ready",
    icon: Share2,
    color: "text-blue-400",
  },
  {
    title: "Cortex Neural Dashboard",
    tech: ["Three.js", "Python", "TensorFlow", "React"],
    desc: "Futuristic data visualization interface for neural network training metrics.",
    stats: "WebGL 2.0",
    icon: Cpu,
    color: "text-emerald-400",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-32 scroll-mt-32">
      <Section>
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Selected <span className="text-gray-600">Works</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Deploying concepts that push the boundaries of current web
              capabilities.
            </p>
          </div>
          <div className="h-px bg-white/10 flex-1 ml-10 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#0f0f0f] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer z-20 pointer-events-none" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-3xl transition-colors z-20 pointer-events-none" />

              <div className="p-8 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div
                    className={`p-4 rounded-2xl bg-[#0a0a0a] border border-white/5 ${project.color} shadow-lg`}
                  >
                    <project.icon size={28} />
                  </div>
                  <ExternalLink
                    className="text-gray-600 group-hover:text-white transition-colors"
                    size={20}
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold uppercase tracking-wider text-gray-500 border border-white/5 px-3 py-1.5 rounded-full bg-[#050505]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-white/70">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    {project.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}
