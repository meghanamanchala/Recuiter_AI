"use client";

import React, { useState } from 'react';
  export default function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
      <div className="bg-white rounded-xl shadow flex flex-col transition-all border border-gray-200">
        <button
          className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-gray-900 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <span>{question}</span>
          <svg
            className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="px-6 pb-5 text-gray-600 text-base animate-fade-in">
            {children}
          </div>
        )}
      </div>
    );
  }
