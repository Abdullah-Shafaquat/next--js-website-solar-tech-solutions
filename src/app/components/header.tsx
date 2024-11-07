"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  if (!isMounted) return null;

  return (
    <header className="bg-[#D0E8C5] via-gray-800 to-gray-700 text-black p-4 shadow-lg animate-fadeInTop">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="logo" className="h-20  rounded-full border-2 border-gray-700" />
          <h1 className="text-2xl font-extrabold tracking-wide text-gray-700 font-serif">Solar Tech Solutions</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none "
          aria-label="Toggle Menu"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-sm font-semibold animate-fadeInTop  ">
          <Link href="/" className="hover:text-yellow-400 transition font-serif">Home</Link>
          <Link href="/products" className="hover:text-yellow-400 transition font-serif">Products</Link>
          <Link href="/services" className="hover:text-yellow-400 transition font-serif">Services</Link>
          <Link href="/about" className="hover:text-yellow-400 transition font-serif">About</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition font-serif">Contact</Link>
          <a
            href="tel:+923012229525"
            className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition text-sm "
          >
             +92 301-2229525
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-4 space-y-2 lg:hidden font-serif">
          <Link href="/" className="block py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-center text-white">Home</Link>
          <Link href="/products" className="block py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-center text-white">Products</Link>
          <Link href="/services" className="block py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-center text-white">Services</Link>
          <Link href="/about" className="block py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-center text-white">About</Link>
          <Link href="/contact" className="block py-2 px-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-center text-white">Contact</Link>
          <a
            href="tel:+923012229525"
            className="block py-2 px-4 bg-yellow-400 rounded-lg hover:bg-yellow-500 text-center text-gray-900 font-semibold"
          >
           +92 301-2229525
          </a>
        </div>
      )}
    </header>
  );
}

