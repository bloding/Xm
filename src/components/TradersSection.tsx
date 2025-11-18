interface TradersSectionProps {
  language: 'ar' | 'en';
}

export default function TradersSection({ language }: TradersSectionProps) {
  const content = {
    ar: {
      title: 'كل متداول يمكنه النجاح مع XM',
      subtitle: 'نحن نزيل العقبات التي تقف في طريق نجاحك.',
      feature1: 'مكافآت سخية',
      feature1Desc: 'عزز رأس مالك بمكافآت تداول سخية',
      feature2: 'دعم متعدد اللغات',
      feature3: 'تعليم شامل',
      feature3Desc: 'وصول غير محدود إلى ندوات وموارد تعليمية',
      contactUs: 'اتصل بنا',
    },
    en: {
      title: 'Every Trader Can Succeed With XM',
      subtitle: 'We eliminate obstacles that stand in the way of your success.',
      feature1: 'Generous Bonuses',
      feature1Desc: 'Boost your capital with generous trading bonuses',
      feature2: 'Multilingual Support',
      feature3: 'Comprehensive Education',
      feature3Desc: 'Unlimited access to webinars and educational resources',
      contactUs: 'Contact Us',
    },
  };

  const t = content[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0e1a] to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur rounded-lg p-8 text-center border border-gray-800 hover:border-blue-500 transition">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t.feature1}</h3>
            <p className="text-gray-400">{t.feature1Desc}</p>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-lg p-8 text-center border border-gray-800 hover:border-blue-500 transition">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t.feature2}</h3>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-lg p-8 text-center border border-gray-800 hover:border-blue-500 transition">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t.feature3}</h3>
            <p className="text-gray-400">{t.feature3Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
