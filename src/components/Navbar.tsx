import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone, MessageSquare } from 'lucide-react';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { openModal } = useWhatsAppModal();
  const location = useLocation();

  // Detect scroll to style Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize Dark Mode state
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-md py-3 border-b border-slate-100 dark:border-slate-800'
          : 'bg-white dark:bg-slate-900 md:bg-transparent dark:md:bg-transparent py-5'
      }`}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center space-x-2.5 group" onClick={() => setIsOpen(false)}>
            <div className="p-2.5 bg-emerald-600 dark:bg-emerald-500 text-white rounded-xl shadow-md group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-slate-800 dark:text-white tracking-tight leading-none">
                Noor Medical
              </span>
              <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mt-0.5">
                Pharmacy
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-all"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Quick Consultation Call */}
            <a
              href="tel:+919304311038"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-all"
              title="Call Noor Medical"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* WhatsApp Ordering */}
            <button
              onClick={() => openModal()}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center space-x-1.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order Medicine</span>
            </button>
          </div>

          {/* Mobile Actions: Hamburguer & Dark Mode */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Mobile Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-all"
            >
              {isDarkMode ? <Sun className="w-5.5 h-5.5" /> : <Moon className="w-5.5 h-5.5" />}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-all focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white dark:bg-slate-950 z-40 flex flex-col p-6 space-y-6 animate-fade-in border-t border-slate-100 dark:border-slate-800">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-bold transition-all ${
                  isActive(link.path)
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
            <a
              href="tel:+919304311038"
              className="w-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 py-3 rounded-xl font-bold text-center text-sm flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-emerald-600 fill-current" />
              <span>Call +91 9304311038</span>
            </a>
            
            <button
              onClick={() => {
                setIsOpen(false);
                openModal();
              }}
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/10"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          <div className="text-center pt-8 text-xs text-slate-400">
            <p>A P Colony, Gaya, Bihar 823001</p>
            <p className="mt-1">Mon - Sat: 8 AM - 10 PM | Sun: 8 AM - 2 PM</p>
          </div>
        </div>
      )}
    </nav>
  );
}
