import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from '../components/Link';
import { Logo } from './Logo';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Logo color={isScrolled ? 'text-blue-600 dark:text-white' : 'text-white'} />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" color={isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}>{t('nav.services')}</Link>
            <Link href="#portfolio" color={isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}>{t('nav.portfolio')}</Link>
            <Link href="#about" color={isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}>{t('nav.about')}</Link>
            <Link href="#contact" isButton={true}>{t('nav.contact')}</Link>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSelector />
            <button 
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className={isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'} size={24} />
              ) : (
                <Menu className={isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'} size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-5">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="#services" 
              color="text-gray-800 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700"
            >
              {t('nav.services')}
              <ChevronRight size={18} />
            </Link>
            <Link 
              href="#portfolio" 
              color="text-gray-800 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700"
            >
              {t('nav.portfolio')}
              <ChevronRight size={18} />
            </Link>
            <Link 
              href="#about" 
              color="text-gray-800 dark:text-white"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700"
            >
              {t('nav.about')}
              <ChevronRight size={18} />
            </Link>
            <Link 
              href="#contact" 
              isButton={true}
              onClick={() => setIsMenuOpen(false)}
              className="mt-4"
            >
              {t('nav.contact')}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;