import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Agents', href: '#agents' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${scrollY > 100 ? 'animate-fadeIn' : ''}`}>
      {/* Adaptive background based on scroll */}
      <div className={`absolute inset-0 transition-all duration-300 ${scrollY > 100
        ? 'bg-[rgba(12,17,32,0.95)] backdrop-blur-xl border-b border-[rgba(199,204,216,0.15)]'
        : 'bg-[rgba(12,17,32,0.8)] backdrop-blur-lg'
        }`} />

      <div className="relative container-landing h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-xl font-semibold text-moonlight">AURELIUM</span>
        </a>

        {/* Center nav - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-moonlight hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => window.location.hash = 'signin'}>
            Sign In
          </Button>
          <Button variant="primary" size="sm" onClick={() => window.location.hash = 'signup'}>
            Try Free
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-moonlight"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-pacific border-b border-[rgba(199,204,216,0.15)] animate-fadeIn">
          <div className="container-landing py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-moonlight hover:text-gold transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <Button
                variant="ghost"
                size="md"
                fullWidth
                onClick={() => {
                  window.location.hash = 'signin';
                  setMobileMenuOpen(false);
                }}
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => {
                  window.location.hash = 'signup';
                  setMobileMenuOpen(false);
                }}
              >
                Try Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
