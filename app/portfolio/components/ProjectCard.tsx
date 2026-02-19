"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import type { Project } from "../data";

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imageSrc = `${basePath}${project.image}`;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
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
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${project.id}`}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white/95 shadow-[0_30px_80px_rgba(0,0,0,0.1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              onClick={() => setIsOpen(false)}
              aria-label="モーダルを閉じる"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white border border-[#eeeeee] text-[#888888] flex items-center justify-center hover:border-[#e8a4b8] hover:text-[#e8a4b8] transition-colors shadow-sm"
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>

            <div className="p-8 md:p-10">
              <h2
                id={`modal-title-${project.id}`}
                className="font-[var(--font-noto-serif-jp)] text-2xl md:text-3xl font-bold text-[#333333] mb-3 tracking-wide"
              >
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
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-2.5 rounded-full bg-[#e8a4b8] text-white text-sm font-medium hover:bg-[#d48fa3] transition-colors"
                >
                  プロジェクトを見る
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
