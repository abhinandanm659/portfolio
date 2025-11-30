"use client";
import React from "react";
import { BookOpen, ArrowUpRight } from "lucide-react";
import Section from "./Section";

const blogPosts = [
  {
    title: "A Popcorn Order for Next Year",
    subtitle: "How a Small Date Bug Can Create Big Business Problems",
    link: "https://medium.com/@abhinandanm659/a-popcorn-order-for-next-year-how-a-small-date-bug-can-create-big-business-problems-1b69a5e3c181",
    tags: ["Debugging", "System Design", "Engineering"],
    readTime: "5 min read",
    date: "Nov 2024",
  },
  {
    title: "Terraform 101",
    subtitle: "Building Clouds Without a Magic Wand",
    link: "https://awstip.com/terraform-101-building-clouds-without-a-magic-wand-3f659fc93e49",
    tags: ["DevOps", "IaC", "Azure"],
    readTime: "7 min read",
    date: "Oct 2024",
  },
];

export default function Blog() {
  return (
    <section id="writing" className="py-20 scroll-mt-32">
      <Section>
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">System Logs</h2>
              <p className="text-gray-500 text-sm">
                Engineering thoughts and technical deep dives.
              </p>
            </div>
          </div>
          <a
            href="https://medium.com/@abhinandanm659"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            View All Archives <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] block"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase font-bold tracking-wider text-blue-400 bg-blue-500/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-600 font-mono group-hover:text-gray-400 transition-colors">
                  {post.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{post.subtitle}</p>
              <div className="flex items-center gap-2 text-xs text-gray-600 font-mono pt-4 border-t border-white/5">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-blue-500 transition-colors" />
                {post.readTime}
              </div>
            </a>
          ))}
        </div>
      </Section>
    </section>
  );
}