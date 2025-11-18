interface HeroProps {
  language: 'ar' | 'en';
}

export default function Hero({ language }: HeroProps) {
  const content = {
    ar: {
      trusted: 'موثوق من قبل أكثر من',
      traders: '15 مليون متداول',
      title: 'الوسيط الأكثر تميزاً',
      subtitle: 'لأسباب وجيهة',
      description: 'نحن نقدم بيئة تداول متفوقة تضع المتداولين في أفضل وضع لتحقيق الأرباح.',
      bonus: 'احصل على مكافأة 100٪ تصل إلى 500,000$',
      limitedOffer: '*عرض لفترة محدودة',
      deposit1000: 'احصل على 1000$ عند أول إيداع 25$',
      access: 'وصول سهل إلى أكثر من',
      globalAssets: '1,400+ أصل عالمي',
      register: 'سجل الآن',
      years: '15 سنة',
    },
    en: {
      trusted: 'Trusted by over',
      traders: '15 Million Traders',
      title: 'The Most Awarded Broker',
      subtitle: 'for a Reason',
      description: 'We offer a superior trading environment that puts traders in the best position to profit.',
      bonus: 'Get a 100% Bonus up to $500,000',
      limitedOffer: '*Limited-Time Offer',
      deposit1000: 'Get $1000 on your first $25 deposit',
      access: 'Easy Access to',
      globalAssets: '1,400+ Global Assets',
      register: 'Register Now',
      years: '15 Years',
    },
  };

  const t = content[language];

  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0a0e1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm mb-6">{t.trusted} <span className="text-white font-semibold">{t.traders}</span></p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {t.title}
            <br />
            <span className="text-white">{t.subtitle}</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">{t.description}</p>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg py-3 px-6 max-w-xl mx-auto mb-6">
            <a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg hover:text-gray-100 transition">
              {t.bonus}
            </a>
          </div>

          <p className="text-gray-400 text-sm mb-8">{t.limitedOffer}</p>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg py-4 px-6 max-w-xl mx-auto mb-10">
            <p className="text-yellow-400 font-bold text-xl">{t.deposit1000}</p>
          </div>

          <p className="text-gray-400 text-sm mb-4">{t.access}</p>
          <p className="text-white font-bold text-2xl mb-10">{t.globalAssets}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-4 hover:border-blue-500/50 transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-lg font-bold">EURUSD</span>
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-400 text-xs">{language === 'ar' ? 'يورو مقابل دولار' : 'Euro vs U.S. Dollar'}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-xl p-4 hover:border-blue-500/50 transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-lg font-bold">US500</span>
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-400 text-xs">{language === 'ar' ? 'إس آند بي 500' : 'S&P 500 (US500)'}</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border border-yellow-700/30 rounded-xl p-4 hover:border-yellow-500/50 transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-lg font-bold">GOLD</span>
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-400 text-xs">{language === 'ar' ? 'ذهب' : 'Gold'}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-700/30 rounded-xl p-4 hover:border-orange-500/50 transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-lg font-bold">COFFEE</span>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-400 text-xs">{language === 'ar' ? 'قهوة أمريكية' : 'US Coffee'}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-black/50 to-gray-900/30 backdrop-blur rounded-2xl py-10 px-6 border border-gray-800">
          <p className="text-center text-gray-300 text-base font-semibold mb-8">{language === 'ar' ? 'حاصل على لقب أفضل وسيط عاماً بعد عام' : 'Awarded Best Broker Year After Year'}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 border-2 border-yellow-600/40 rounded-lg mb-3 mx-auto flex items-center justify-center group-hover:border-yellow-500 transition">
                <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <p className="text-gray-400 text-xs">{language === 'ar' ? 'أفضل وسيط فوركس' : 'Best Forex Broker'}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-2 border-blue-600/40 rounded-lg mb-3 mx-auto flex items-center justify-center group-hover:border-blue-500 transition">
                <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <p className="text-gray-400 text-xs">{language === 'ar' ? 'أفضل تنفيذ' : 'Best Execution'}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600/20 to-green-800/20 border-2 border-green-600/40 rounded-lg mb-3 mx-auto flex items-center justify-center group-hover:border-green-500 transition">
                <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <p className="text-gray-400 text-xs">{language === 'ar' ? 'أفضل دعم' : 'Best Support'}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-2 border-purple-600/40 rounded-lg mb-3 mx-auto flex items-center justify-center group-hover:border-purple-500 transition">
                <svg className="w-10 h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <p className="text-gray-400 text-xs">{language === 'ar' ? 'أفضل أمان' : 'Best Security'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
