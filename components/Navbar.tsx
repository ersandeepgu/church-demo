"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Cross, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
            <div className="p-2 bg-indigo-600/20 border border-indigo-500/30 rounded-xl">
              <Cross className="w-5 h-5 text-indigo-400" />
            </div>
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Grace Church
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="#about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#events" className="hover:text-white transition-colors">
              Events
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#donate"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-500/25"
            >
              <Heart className="w-4 h-4" />
              <span>Support Us</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white"
          >
            About Us
          </Link>
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white"
          >
            Services
          </Link>
          <Link
            href="#events"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white"
          >
            Events
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="#donate"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl"
          >
            <Heart className="w-4 h-4" />
            <span>Support Us</span>
          </Link>
        </div>
      )}
    </nav>
  );
}