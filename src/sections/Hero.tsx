import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="hero"
      className="relative h-screen flex items-center bg-gradient-to-r from-blue-900 to-indigo-800 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500 rounded-full opacity-10"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-indigo-500 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-40 w-40 h-40 bg-teal-500 rounded-full opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#portfolio" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 dark:bg-blue-600 dark:text-white font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-700 transition-all duration-300"
            >
              {t('hero.cta.portfolio')}
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {t('hero.cta.services')}
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;