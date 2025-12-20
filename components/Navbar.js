"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Services", href: "/services", active: false },
    { name: "About Us", href: "/about", active: false },
    { name: "Contact Us", href: "/contact", active: false },
  ];

  return (
    <nav className="bg-black/95 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="size-20 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#FF9000] ${
                  link.active ? "text-[#FF9000]" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Book Now Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/book"
              className="flex items-center gap-2 px-6 py-2.5 border-2 border-white/50 rounded-full text-xs font-medium transition-all duration-300 hover:bg-[#FF9000] hover:text-white group"
            >
              Book Now
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block py-2 text-base font-medium transition-colors duration-200 hover:text-[#FF9000] ${
                  link.active ? "text-[#FF9000]" : "text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 mt-4 border border-white/20 rounded-full text-sm font-medium transition-all duration-300 hover:[#FF9000] hover:text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
