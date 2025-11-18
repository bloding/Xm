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
      bonus: 'احصل على مكافأة 100٪ تصل إلى 500$',
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
      bonus: 'Get a 100% Bonus up to $500',
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

          <div className="flex flex-wrap justify-center gap-8 items-center mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                <span className="text-white text-sm font-medium">EURUSD</span>
              </div>
              <p className="text-gray-400 text-xs">{language === 'ar' ? 'يورو مقابل دولار' : 'Euro vs U.S. Dollar'}</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                <span className="text-white text-sm font-medium">US500</span>
              </div>
              <p className="text-gray-400 text-xs">{language === 'ar' ? 'إس آند بي 500' : 'S&P 500 (US500)'}</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                <span className="text-white text-sm font-medium">GOLD</span>
              </div>
              <p className="text-gray-400 text-xs">{language === 'ar' ? 'ذهب' : 'Gold'}</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                <span className="text-white text-sm font-medium">COFFEE</span>
              </div>
              <p className="text-gray-400 text-xs">{language === 'ar' ? 'قهوة أمريكية' : 'US Coffee'}</p>
            </div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur rounded-lg py-8 px-6">
          <p className="text-center text-gray-400 text-sm mb-4">{language === 'ar' ? 'حاصل على لقب أفضل وسيط عاماً بعد عام' : 'Awarded Best Broker Year After Year'}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-500 text-xs text-center">
              <div className="w-16 h-16 bg-gray-700 rounded mb-2 mx-auto"></div>
              <p>Award 1</p>
            </div>
            <div className="text-gray-500 text-xs text-center">
              <div className="w-16 h-16 bg-gray-700 rounded mb-2 mx-auto"></div>
              <p>Award 2</p>
            </div>
            <div className="text-gray-500 text-xs text-center">
              <div className="w-16 h-16 bg-gray-700 rounded mb-2 mx-auto"></div>
              <p>Award 3</p>
            </div>
            <div className="text-gray-500 text-xs text-center">
              <div className="w-16 h-16 bg-gray-700 rounded mb-2 mx-auto"></div>
              <p>Award 4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
