"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "../data";

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imageSrc = `${basePath}${project.image}`;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group overflow-hidden rounded-lg bg-[#fafafa] border border-[#eeeeee] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] text-left w-full"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          <h3 className="font-[var(--font-noto-serif-jp)] text-[#333333] font-bold text-lg mb-1.5">
            {project.title}
          </h3>
          <p className="text-[#888888] text-sm leading-relaxed line-clamp-2 mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-semibold rounded-full bg-[#fff0f3] text-[#e8a4b8]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white/95 shadow-[0_30px_80px_rgba(0,0,0,0.1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white border border-[#eeeeee] text-[#888888] flex items-center justify-center hover:border-[#e8a4b8] hover:text-[#e8a4b8] transition-colors shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full">
              <Image
                src={imageSrc}
                alt={project.title}
                width={1200}
                height={750}
                className="w-full h-auto rounded-t-2xl"
              />
            </div>

            <div className="p-8 md:p-10">
              <h2 className="font-[var(--font-noto-serif-jp)] text-2xl md:text-3xl font-bold text-[#333333] mb-3 tracking-wide">
                {project.title}
              </h2>
              <p className="text-[#888888] text-base leading-[1.8] mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-xs font-semibold rounded-full bg-[#fff0f3] text-[#e8a4b8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
