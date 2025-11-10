interface FooterProps {
  language: 'ar' | 'en';
}

export default function Footer({ language }: FooterProps) {
  const content = {
    ar: {
      about: 'حول XM',
      aboutText: 'XM وسيط رائد في التداول عبر الإنترنت، يخدم أكثر من 15 مليون عميل حول العالم.',
      quickLinks: 'روابط سريعة',
      home: 'الرئيسية',
      features: 'المميزات',
      bonuses: 'المكافآت',
      about: 'من نحن',
      register: 'سجل الآن',
      trading: 'التداول',
      platforms: 'المنصات',
      accounts: 'الحسابات',
      instruments: 'الأدوات',
      education: 'التعليم',
      legal: 'قانوني',
      terms: 'الشروط والأحكام',
      privacy: 'سياسة الخصوصية',
      riskWarning: 'تحذير المخاطر',
      riskText: 'التداول في العملات الأجنبية والعقود مقابل الفروقات ينطوي على مخاطر كبيرة وقد يؤدي إلى خسارة رأس المال.',
      copyright: '© 2025 XM Arabic. جميع الحقوق محفوظة.',
      affiliate: 'هذا الموقع تابع لـ',
    },
    en: {
      about: 'About XM',
      aboutText: 'XM is a leading online trading brokerage serving over 15 million clients worldwide.',
      quickLinks: 'Quick Links',
      home: 'Home',
      features: 'Features',
      bonuses: 'Bonuses',
      about: 'About Us',
      register: 'Register Now',
      trading: 'Trading',
      platforms: 'Platforms',
      accounts: 'Accounts',
      instruments: 'Instruments',
      education: 'Education',
      legal: 'Legal',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      riskWarning: 'Risk Warning',
      riskText: 'Trading forex and CFDs involves significant risk and may result in loss of invested capital.',
      copyright: '© 2025 XM Arabic. All rights reserved.',
      affiliate: 'This website is affiliated with',
    },
  };

  const t = content[language];

  return (
    <footer className="bg-[#0f1419] border-t border-gray-800 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-2xl px-4 py-2 rounded">
                XM
              </div>
              <span className="text-white font-semibold text-xl">Arabic</span>
            </div>
            <p className="text-gray-400 mb-6">{t.aboutText}</p>
            <div className="flex items-center gap-4 mb-4">
              <a href="https://t.me/+TDwpuV2ZzWU3NzY8" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                Telegram
              </a>
            </div>
            <div className="text-sm text-gray-500">
              {t.affiliate} <a href="https://www.xmarabia.net/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">xmarabia.net</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.quickLinks}</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">{t.home}</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition">{t.features}</a></li>
              <li><a href="#bonuses" className="text-gray-400 hover:text-white transition">{t.bonuses}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">{t.about}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold">{t.register}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.trading}</h3>
            <ul className="space-y-3">
              <li><a href="#terms" className="text-gray-400 hover:text-white transition">{t.terms}</a></li>
              <li><a href="https://affs.click/9Weaq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">{t.platforms}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">{t.accounts}</a></li>
              <li><a href="https://affs.click/d4QV6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">{t.education}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6 mb-8">
            <h4 className="text-yellow-400 font-bold mb-2">{t.riskWarning}</h4>
            <p className="text-gray-400 text-sm">{t.riskText}</p>
          </div>
          <p className="text-gray-500 text-sm text-center">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
