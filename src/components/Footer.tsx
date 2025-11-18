interface FooterProps {
  language: 'ar' | 'en';
  onPrivacyClick: () => void;
  onLicenseClick: () => void;
}

export default function Footer({ language, onPrivacyClick, onLicenseClick }: FooterProps) {
  const content = {
    ar: {
      whyTrade: 'لماذا تتداول معنا',
      advantages: 'مميزاتنا الرئيسية',
      bonus: 'المكافآت',
      executionPolicy: 'سياسة التنفيذ',
      accounts: 'الحسابات',
      accountTypes: 'أنواع الحسابات',
      ourOffering: 'عروضنا',
      copyTrading: 'نسخ التداول XM',
      competitions: 'مسابقات XM',
      tradersClub: 'نادي متداولي XM',
      referFriend: 'أحل صديق',
      platforms: 'المنصات',
      mt4Platform: 'منصة MT4',
      mt5Platform: 'منصة MT5',
      xmApp: 'تطبيق XM',
      company: 'الشركة',
      whoIsXM: 'من هي XM؟',
      careers: 'الوظائف',
      regulation: 'التنظيم',
      legalDocs: 'المستندات القانونية',
      awards: 'جوائز XM',
      csr: 'المسؤولية الاجتماعية',
      contactUs: 'اتصل بنا',
      helpCenter: 'مركز المساعدة',
      privacyPolicy: 'سياسة الخصوصية',
      licenses: 'التراخيص والتنظيم',
      riskWarning: 'تحذير المخاطر',
      riskText: 'رأس مالك في خطر. المنتجات ذات الرافعة المالية قد لا تكون مناسبة للجميع. يرجى الاطلاع على',
      riskDisclosure: 'الإفصاح عن المخاطر',
      copyright: '© 2025 XM. جميع الحقوق محفوظة.',
      affiliate: 'هذا الموقع تابع لـ',
      restrictedRegions: 'المناطق المحظورة:',
      restrictedText: 'لا نقدم خدماتنا لمواطني الولايات المتحدة الأمريكية وكندا وإسرائيل وجمهورية إيران الإسلامية (وأي دولة أو إقليم محظور آخر).',
    },
    en: {
      whyTrade: 'WHY TRADE WITH US',
      advantages: 'Our Key Advantages',
      bonus: 'Bonus',
      executionPolicy: 'Execution Policy',
      accounts: 'ACCOUNTS',
      accountTypes: 'Account Types',
      ourOffering: 'OUR OFFERING',
      copyTrading: 'XM Copy Trading',
      competitions: 'XM Competitions',
      tradersClub: 'XM Traders Club',
      referFriend: 'Refer a Friend',
      platforms: 'PLATFORMS',
      mt4Platform: 'MT4 Platform',
      mt5Platform: 'MT5 Platform',
      xmApp: 'XM App',
      company: 'COMPANY',
      whoIsXM: 'Who is XM Group?',
      careers: 'Careers',
      regulation: 'Regulation',
      legalDocs: 'Legal Documents',
      awards: 'XM Awards',
      csr: 'CSR',
      contactUs: 'Contact Us',
      helpCenter: 'Help Center',
      privacyPolicy: 'Privacy Policy',
      licenses: 'Licenses & Regulation',
      riskWarning: 'Risk Warning',
      riskText: 'Our services involve a significant risk and can result in the loss of your invested capital. Please read and ensure you fully understand our',
      riskDisclosure: 'Risk Disclosure',
      copyright: '© 2025 XM. All rights reserved.',
      affiliate: 'This website is affiliated with',
      restrictedRegions: 'Restricted Regions:',
      restrictedText: 'We do not direct our website and services to citizens of the United States of America, Canada, Israel and the Islamic Republic of Iran (and other restricted countries).',
    },
  };

  const t = content[language];

  return (
    <footer className="bg-[#0a0e1a] border-t border-gray-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="text-gray-400 font-bold text-xs mb-4 uppercase tracking-wider">{t.whyTrade}</h3>
            <ul className="space-y-3">
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.advantages}</a></li>
              <li><a href="https://affs.click/Ap5Ri" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.bonus}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.executionPolicy}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-bold text-xs mb-4 uppercase tracking-wider">{t.accounts}</h3>
            <ul className="space-y-3">
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.accountTypes}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-bold text-xs mb-4 uppercase tracking-wider">{t.ourOffering}</h3>
            <ul className="space-y-3">
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.copyTrading}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.competitions}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.tradersClub}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.referFriend}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-bold text-xs mb-4 uppercase tracking-wider">{t.platforms}</h3>
            <ul className="space-y-3">
              <li><a href="https://affs.click/9Weaq" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.mt4Platform}</a></li>
              <li><a href="https://affs.click/9Weaq" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.mt5Platform}</a></li>
              <li><a href="https://affs.click/9Weaq" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.xmApp}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-bold text-xs mb-4 uppercase tracking-wider">{t.company}</h3>
            <ul className="space-y-3">
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.whoIsXM}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.careers}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.regulation}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.legalDocs}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.awards}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.csr}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.contactUs}</a></li>
              <li><a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition text-sm">{t.helpCenter}</a></li>
              <li><button onClick={onPrivacyClick} className="text-gray-500 hover:text-white transition text-sm text-left">{t.privacyPolicy}</button></li>
              <li><button onClick={onLicenseClick} className="text-gray-500 hover:text-white transition text-sm text-left">{t.licenses}</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 mb-8">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <a href="https://t.me/+TDwpuV2ZzWU3NzY8" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/ehtcrypto" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-gray-900 px-3 py-1 rounded text-xs text-gray-500">MetaTrader 4</div>
              <div className="bg-gray-900 px-3 py-1 rounded text-xs text-gray-500">MetaTrader 5</div>
              <div className="bg-gray-900 px-3 py-1 rounded text-xs text-gray-500">VeriSign</div>
            </div>
          </div>

          <div className="bg-yellow-900/10 border border-yellow-600/20 rounded-lg p-6 mb-8">
            <h4 className="text-yellow-400 font-bold text-sm mb-2">{t.riskWarning}</h4>
            <p className="text-gray-500 text-xs mb-2">
              {t.riskText} <a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{t.riskDisclosure}</a>.
            </p>
            <p className="text-gray-500 text-xs mb-3">
              <strong>{t.restrictedRegions}</strong> {t.restrictedText}
            </p>
            <p className="text-gray-600 text-xs">
              {t.affiliate} <a href="https://www.xmarabia.net/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">xmarabia.net</a>
            </p>
          </div>

          <p className="text-gray-600 text-xs text-center">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
