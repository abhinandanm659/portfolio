"use client";
import React from "react";
import Section from "./Section";

const techStack = {
  frontend: [
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Three.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  backend: [
    {
      name: ".NET Core",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Spring",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
    },
    {
      name: "GraphQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
  ],
  database: [
    {
      name: "Postgres",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    {
      name: "MSSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
    },
  ],
  cloud: [
    {
      name: "Azure",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Terraform",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    },
    {
      name: "Kafka",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
    },
  ],
};

function TechCategory({ title, tools }) {
  return (
    <div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] h-full">
      <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6 border-b border-white/5 pb-2 flex items-center justify-between">
        {title}
      </h3>
      <div className="grid grid-cols-4 gap-6">
        {tools.map((tool, idx) => (
          <div key={idx} className="group flex flex-col items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/5 group-hover:bg-white/10 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-6 h-6 z-10 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              />
            </div>
            <span className="text-[10px] text-gray-500 font-mono group-hover:text-blue-400 transition-colors text-center leading-tight">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-32">
      <Section>
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Tech <span className="text-blue-500">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A comprehensive suite of high-performance tools and languages
            tailored for scalable, enterprise-grade development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechCategory title="Frontend Core" tools={techStack.frontend} />
          <TechCategory title="Backend Systems" tools={techStack.backend} />
          <TechCategory title="Data Persistence" tools={techStack.database} />
          <TechCategory title="Cloud Architecture" tools={techStack.cloud} />
        </div>
      </Section>
    </section>
  );
}
