import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/platform', label: t('nav.platform') },
    { path: '/products', label: t('nav.products') },
    { path: '/partnerships', label: t('nav.partnerships') },
    { path: '/team', label: t('nav.team') },
    { path: '/facilities', label: t('nav.facilities') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            data-testid="logo-link"
            className="flex items-center space-x-3 group"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_22fe3f13-7547-4b99-be0c-1c48285a619d/artifacts/kkg75uhc_Takumi_logo.png"
              alt="Takumi Logo"
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className={`font-manrope font-bold text-xl tracking-tight ${
                isScrolled ? 'text-industrial-slate' : 'text-white'
              }`}>
                TAKUMI
              </span>
              <span className={`block text-xs tracking-widest uppercase ${
                isScrolled ? 'text-gray-500' : 'text-white/70'
              }`}>
                Motion Controls
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.path.replace('/', '') || 'home'}`}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-sm ${
                  isActive(link.path)
                    ? 'text-takumi-red'
                    : isScrolled
                    ? 'text-industrial-slate hover:text-takumi-red'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              data-testid="language-toggle"
              className={`flex items-center space-x-2 px-3 py-2 rounded-sm border transition-all duration-300 ${
                isScrolled
                  ? 'border-gray-200 text-industrial-slate hover:border-takumi-red hover:text-takumi-red'
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
              className={`lg:hidden p-2 rounded-sm transition-colors ${
                isScrolled
                  ? 'text-industrial-slate hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-testid={`mobile-nav-link-${link.path.replace('/', '') || 'home'}`}
              className={`block px-4 py-3 text-base font-medium rounded-sm transition-colors ${
                isActive(link.path)
                  ? 'text-takumi-red bg-red-50'
                  : 'text-industrial-slate hover:text-takumi-red hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
