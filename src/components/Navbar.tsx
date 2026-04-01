'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, Menu, X, Shield } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/vergelijken', label: 'Vergelijk' },
    { href: '/software', label: 'Pakketten' },
    { href: '/kennisbank', label: 'Kennisbank' },
    { href: '/gratis-proberen', label: 'Gratis Proberen' },
    { href: '/tips', label: 'Tips' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-md border-b border-border'
        : 'bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${isScrolled ? 'bg-primary' : 'bg-white/10 backdrop-blur-sm'}`}>
            <CheckCircle className={`h-5 w-5 ${isScrolled ? 'text-white' : 'text-white'}`} />
          </div>
          <span className={`text-[20px] font-extrabold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            Boekhoudpakket<span className={isScrolled ? 'text-primary' : 'text-blue-400'}>keuze</span>.nl
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isScrolled
                  ? 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  : 'text-stone-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
            isScrolled
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-emerald-500/20 text-emerald-300'
          }`}>
            <Shield size={12} />
            <span>Onafhankelijk vergelijken</span>
          </div>
          <Link
            href="/software?wizard=true"
            className="bg-white text-stone-900 px-5 py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all"
          >
            Gratis Keuzehulp
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen
            ? <X className={`h-6 w-6 ${isScrolled ? 'text-stone-900' : 'text-white'}`} />
            : <Menu className={`h-6 w-6 ${isScrolled ? 'text-stone-900' : 'text-white'}`} />
          }
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 rounded-b-2xl shadow-xl">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-4 text-base font-medium text-stone-900 hover:bg-stone-100 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <Link
                href="/software?wizard=true"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
              >
                Gratis Keuzehulp
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
