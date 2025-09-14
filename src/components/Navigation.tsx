import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import aisocTransparentLogo from '@/assets/AISOC_transparent.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Projects', href: '/projects' },
    { name: 'Learning', href: '/learning' },
    { name: 'Team', href: '/team' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/80 border-b border-purple-700/30">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={aisocTransparentLogo}
                alt="AISOC Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-6 text-sm">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium relative transition-all duration-300 
                      ${
                        isActive
                          ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-purple-700"
                          : "text-white/80 hover:text-white hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-400 p-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden border-t border-purple-700/40 bg-black/90 
        ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pt-3 pb-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-2 rounded-xl font-medium transition-all duration-300
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-purple-500/40 to-purple-700/40 border border-purple-600/50"
                      : "text-white/80 hover:text-white hover:bg-purple-600/10"
                  }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
