import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/utils/cn';

const navLinks = [
  { name: '首页', path: '/' },
  { name: '项目', path: '/projects' },
  { name: '关于', path: '/about' },
  { name: '联系', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold tracking-tighter text-white">
              DEV<span className="text-blue-500">.</span>PORTFOLIO
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    location.pathname === link.path
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Socials */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === link.path
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="px-5 pb-4 flex space-x-4">
            <a href="https://github.com" className="text-zinc-400 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-zinc-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}