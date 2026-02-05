'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function LandingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 left-0 z-50 transition-all duration-30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 rounded-xl h-9 w-9 flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="font-bold text-lg sm:text-xl text-gray-900">
            RecruiterAI
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-sm lg:text-base font-medium text-gray-600">
           <li><Link href="#features" className="hover:text-gray-900 transition">Features</Link></li>
           <li><Link href="#how-it-works" className="hover:text-gray-900 transition">How It Works</Link></li>
           <li><Link href="#results" className="hover:text-gray-900 transition">Results</Link></li>
           <li><Link href="#testimonials" className="hover:text-gray-900 transition">Testimonials</Link></li>
           <li><Link href="#faq" className="hover:text-gray-900 transition">FAQ</Link></li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#login" className="text-gray-900 text-sm lg:text-base font-medium">
            Log In
          </Link>
<Link
  href="#start-trial"
  className="bg-blue-500 !text-white font-semibold text-sm px-5 py-2 rounded-xl shadow-md hover:bg-blue-600 transition"
>
  Start Free Trial
</Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col px-6 py-6 gap-4 text-base font-medium text-gray-700">
            <li><Link onClick={() => setOpen(false)} href="#features">Features</Link></li>
            <li><Link onClick={() => setOpen(false)} href="#how-it-works">How It Works</Link></li>
            <li><Link onClick={() => setOpen(false)} href="#pricing">Pricing</Link></li>
            <li><Link onClick={() => setOpen(false)} href="#faq">FAQ</Link></li>

            <div className="pt-4 mt-4 border-t border-gray-200 flex flex-col gap-3">
              <Link
                onClick={() => setOpen(false)}
                href="#login"
                className="text-gray-900 font-medium"
              >
                Log In
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="#start-trial"
                className="bg-blue-500 !text-white font-semibold px-4 py-2 rounded-xl text-center"
              >
                Start Free Trial
              </Link>

            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
