'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-green-950 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMenuOpen(false)}
          >
            {/* Star-and-crescent icon */}
            <span className="text-gold-500 text-2xl leading-none select-none">☪</span>
            <span className="font-playfair text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-gold-500 transition-colors duration-200">
              Muslim Academia
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 text-sm font-medium font-inter tracking-wide transition-colors duration-200 rounded-sm
                  ${
                    pathname === href
                      ? 'text-gold-500 bg-white/10'
                      : 'text-gray-200 hover:text-gold-500 hover:bg-white/10'
                  }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 btn-primary text-sm !px-5 !py-2"
            >
              Enroll Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden border-t border-white/10 pb-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium font-inter transition-colors duration-200
                  ${
                    pathname === href
                      ? 'text-gold-500 bg-white/10'
                      : 'text-gray-200 hover:text-gold-500 hover:bg-white/10'
                  }`}
              >
                {label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary text-sm block text-center !px-5 !py-2"
              >
                Enroll Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
