"use client";

import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

export default function FaqItem({ question, children }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        bg-white
        rounded-xl
        border border-gray-200
        transition
        overflow-hidden
      "
    >
      {/* Question */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="
          w-full
          flex items-start sm:items-center justify-between
          gap-4
          px-4 sm:px-6
          py-4 sm:py-5
          text-left
          focus:outline-none
          focus-visible:ring-2 focus-visible:ring-blue-500
        "
      >
        <span
          className="
            text-base sm:text-lg
            font-semibold
            text-gray-900
            leading-snug
          "
        >
          {question}
        </span>

        <svg
          className={`
            w-5 h-5 sm:w-6 sm:h-6
            text-gray-400
            transition-transform duration-200
            flex-shrink-0
            ${open ? "rotate-180" : ""}
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Answer */}
      <div
        className={`
          grid transition-all duration-300 ease-in-out
          ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              px-4 sm:px-6
              pb-4 sm:pb-5
              text-sm sm:text-base
              text-gray-600
              leading-relaxed
            "
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
