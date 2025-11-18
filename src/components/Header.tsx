import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    ar: { home: 'الرئيسية', features: 'المميزات', bonuses: 'المكافآت', register: 'سجل الآن' },
    en: { home: 'Home', features: 'Features', bonuses: 'Bonuses', register: 'Register Now' },
  };

  const t = content[language];

  return (
    <header className="bg-[#0a0e1a] border-b border-gray-900 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.xm.com/wp-content/themes/xm/images/logo/xm-logo-color.svg"
                alt="XM Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition">{t.home}</a>
            <a href="#features" className="text-gray-300 hover:text-white transition">{t.features}</a>
            <a href="#bonuses" className="text-gray-300 hover:text-white transition">{t.bonuses}</a>
            <button onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')} className="flex items-center space-x-1 text-gray-300 hover:text-white transition">
              <Globe size={20} />
              <span>{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition">
              {t.register}
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#232936] border-t border-gray-800 px-4 py-4 space-y-4">
          <a href="#home" className="block text-gray-300 hover:text-white transition">{t.home}</a>
          <a href="#features" className="block text-gray-300 hover:text-white transition">{t.features}</a>
          <a href="#bonuses" className="block text-gray-300 hover:text-white transition">{t.bonuses}</a>
          <button onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')} className="flex items-center space-x-1 text-gray-300 hover:text-white transition">
            <Globe size={20} />
            <span>{language === 'ar' ? 'EN' : 'AR'}</span>
          </button>
          <a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition">
            {t.register}
          </a>
        </div>
      )}
    </header>
  );
}
