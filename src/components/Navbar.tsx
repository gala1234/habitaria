"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon, ShoppingBag, ChevronDown, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Lang } from '../context/AppContext';

interface LanguageSelectorProps {
  mobile?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ mobile = false }) => {
    const { language, setLanguage, theme } = useApp();
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);
  
    const toggleLangMenu = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsLangMenuOpen(!isLangMenuOpen);
    };
  
    useEffect(() => {
      const closeMenu = () => setIsLangMenuOpen(false);
      window.addEventListener('click', closeMenu);
      return () => window.removeEventListener('click', closeMenu);
    }, []);

  return (
    <div className="relative" ref={langMenuRef}>
      <button
        onClick={toggleLangMenu}
        className={`flex items-center gap-1 p-2 rounded-lg transition-all group ${
          theme === 'light'
            ? 'text-gray-900 dark:text-white hover:text-orange-500'
            : 'text-white hover:text-orange-300'
        }`}
      >
        <span className={`text-xs font-bold uppercase tracking-wider ${mobile ? 'text-sm' : ''}`}>
          {language}
        </span>
        <ChevronDown size={mobile ? 16 : 14} className={`transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''} opacity-70 group-hover:opacity-100`} />
      </button>

      {isLangMenuOpen && (
        <div className={`absolute top-full mt-2 w-40 bg-white dark:bg-[#1a1a1a]/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden py-2 z-[60] animate-in fade-in zoom-in-95 duration-200 ${mobile ? 'right-auto left-0' : 'right-0'}`}>
          {[
            { code: 'es', label: 'Español' },
            { code: 'en', label: 'English' },
            { code: 'ru', label: 'Русский' },
            { code: 'zh', label: '中文' }
          ].map((l) => (
            <button
              key={l.code}
              onClick={(e) => { e.stopPropagation(); setLanguage(l.code as Lang); setIsLangMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center justify-between ${language === l.code ? 'text-orange-500 font-bold' : 'text-gray-700 dark:text-gray-300'}`}
            >
              {l.label}
              {language === l.code && <Check size={14} className="text-orange-500" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const { theme, toggleTheme, t } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl py-4 border-b border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 cursor-pointer relative z-[60]">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-purple-600 rounded flex items-center justify-center transform rotate-45 shadow-lg">
              <div className="w-4 h-4 bg-white dark:bg-[#050505] transition-colors duration-500" />
            </div>
            <span className={`text-2xl font-bold tracking-widest uppercase transition-colors duration-500 ${
              isMenuOpen || isScrolled || theme === 'light'
                ? 'text-gray-900 dark:text-white'
                : 'text-white'
            }`}>
              Habitaria
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <div className={`flex items-center gap-6 text-sm font-semibold tracking-widest uppercase transition-colors duration-500 ${
              isScrolled || theme === 'light' ? 'text-gray-600 dark:text-neutral-400' : 'text-neutral-200'
            }`}>
              <Link href="/modelos" className="hover:text-orange-500 dark:hover:text-white transition-colors duration-300 relative group text-orange-500 dark:text-orange-400 font-bold">
                {t('nav.models')}
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 transition-all duration-300"></span>
              </Link>
              <Link href="/filosofia" className="hover:text-orange-500 dark:hover:text-white transition-colors">{t('nav.phil')}</Link>
              <Link href="/proyectos" className="hover:text-orange-500 dark:hover:text-white transition-colors">{t('nav.proj')}</Link>
              <Link href="/servicios" className="hover:text-orange-500 dark:hover:text-white transition-colors">{t('nav.serv')}</Link>
            </div>

            <div className="flex items-center gap-3">
              <LanguageSelector />
              <div className={`w-px h-6 bg-current opacity-20 mx-1 ${isScrolled || theme === 'light' ? 'text-gray-900 dark:text-white' : 'text-white'}`}></div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all ${
                  isScrolled || theme === 'light'
                  ? 'hover:bg-gray-100 text-gray-800 dark:hover:bg-white/10 dark:text-white'
                  : 'hover:bg-white/10 text-white'
                }`}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link href="/modelos" className={`hidden lg:flex px-5 py-2 border rounded-full font-semibold uppercase text-xs tracking-wider transition-all items-center gap-2 ${
                  isScrolled || theme === 'light'
                  ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black'
                  : 'border-white/30 text-white hover:bg-white hover:text-black'
                }`}>
                <ShoppingBag size={14} /> {t('nav.store')}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden relative z-[60]">
            <LanguageSelector mobile={true} />
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${isMenuOpen || isScrolled || theme === 'light' ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`${isMenuOpen || isScrolled || theme === 'light' ? 'text-gray-900 dark:text-white' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white dark:bg-[#050505] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Link href="/modelos" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-orange-500 transition-colors">{t('nav.models')}</Link>
        <Link href="/filosofia" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-orange-500 transition-colors">{t('nav.phil')}</Link>
        <Link href="/proyectos" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-orange-500 transition-colors">{t('nav.proj')}</Link>
        <Link href="/servicios" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-orange-500 transition-colors">{t('nav.serv')}</Link>
        <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-orange-500 transition-colors">{t('nav.contact')}</Link>
      </div>
    </>
  );
};

export default Navbar;