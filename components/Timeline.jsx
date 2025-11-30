"use client";
import React from "react";
import Section from "./Section";

function TimelineItem({ title, company, date, points, active }) {
  return (
    <div className="relative pl-8 pb-12 border-l border-white/10 last:pb-0">
      <div
        className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full ${
          active
            ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            : "bg-gray-700"
        }`}
      />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <span className="text-blue-400 font-medium">{company}</span>
        </div>
        <span className="text-xs font-mono text-gray-500 mt-2 sm:mt-0 bg-white/5 px-2 py-1 rounded border border-white/10">
          {date}
        </span>
      </div>
      <ul className="space-y-3">
        {points.map((point, i) => (
          <li
            key={i}
            className="text-gray-400 text-sm leading-relaxed flex items-start gap-2"
          >
            <span className="mt-1.5 w-1 h-1 bg-gray-600 rounded-full shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="py-20 pb-40 scroll-mt-32">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-white mb-6 sticky top-32">
              Timeline
            </h2>
            <div className="sticky top-48 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-gray-400 text-sm leading-relaxed">
                Proven track record of delivering critical infrastructure
                updates and scalable software solutions in enterprise
                environments.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <TimelineItem
              title="Software Developer"
              company="Fastenal"
              date="July 2023 - Present"
              active={true}
              points={[
                "Led greenfield development of a new platform on Azure using Terraform for IaC.",
                "Designed Angular 18 UI with Material UI & NgRx, and .NET 8 backend services.",
                "Engineered CI/CD pipelines in Azure DevOps, automating deployments and testing.",
                "Reduced manual errors by 99% via an Azure Function App for automated file validation.",
              ]}
            />

            <TimelineItem
              title="Software Developer Intern"
              company="Fastenal"
              date="Jan 2023 - June 2023"
              active={false}
              points={[
                "Developed a customer data management system (Angular 14 / .NET 6) handling 1000+ records.",
                "Implemented real-time dashboard with Google Maps API integration.",
              ]}
            />

            <TimelineItem
              title="Education"
              company="Manipal & Amity"
              date="2018 - 2023"
              active={false}
              points={[
                "Masters of Computer Applications (Manipal Institute of Technology)",
                "Bachelor of Computer Applications (Amity University)",
              ]}
            />
          </div>
        </div>
      </Section>
    </section>
  );
}
