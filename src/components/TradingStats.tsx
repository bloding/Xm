interface TradingStatsProps {
  language: 'ar' | 'en';
}

export default function TradingStats({ language }: TradingStatsProps) {
  const content = {
    ar: {
      title: 'نتائجنا مثبتة بالأرقام',
      subtitle: 'لا أحد يفعل المزيد لتزويدك بما تحتاجه لتحقيق أقصى إمكاناتك في التداول.',
      stat1Number: '11.7 مليار',
      stat1Text: 'تم تنفيذ الصفقات على منصات XM',
      stat2Number: 'صفر',
      stat2Text: 'رفض أو إعادة تسعير للصفقات.',
      stat3Number: '99.35%',
      stat3Text: 'من سحوباتنا يتم الموافقة عليها تلقائياً.',
      tightSpreads: 'فروق أسعار ضيقة',
      tightSpreadsDesc: 'تداول بفروق أسعار منخفضة تصل إلى 0.8 نقطة.',
      noHiddenCosts: 'لا توجد تكاليف خفية.',
      noHiddenCostsDesc: 'لا تدفع رسوم مبادلة ولا عمولة.',
      superiorExecution: 'تنفيذ متفوق.',
      superiorExecutionDesc: 'استمتع بأسعار عادلة بدون إعادة تسعير أو رفض.',
      instantWithdrawals: 'سحوبات فورية',
      instantWithdrawalsDesc: 'احصل على أموالك بسهولة ولا تدفع أي رسوم.',
      startTrading: 'ابدأ التداول اليوم',
    },
    en: {
      title: 'Our Results Are Proven in Numbers',
      subtitle: 'Nobody does more to provide you with what you need to maximise your trading potential.',
      stat1Number: '11.7 Billion',
      stat1Text: 'trades have been executed on XM Platforms',
      stat2Number: 'Zero',
      stat2Text: 'rejections or requotes on trades.',
      stat3Number: '99.35%',
      stat3Text: 'of our withdrawals are automatically approved.',
      tightSpreads: 'Tight Spreads',
      tightSpreadsDesc: 'Trade with spreads as low as 0.8 pips.',
      noHiddenCosts: 'No hidden costs.',
      noHiddenCostsDesc: 'Pay no swap fees and zero commission.',
      superiorExecution: 'Superior Execution.',
      superiorExecutionDesc: 'Enjoy fair prices with no requotes or rejections.',
      instantWithdrawals: 'Instant Withdrawals',
      instantWithdrawalsDesc: 'Get your funds easily and pay no fees.',
      startTrading: 'Start Trading Today',
    },
  };

  const t = content[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">{t.stat1Number}</h3>
            <p className="text-gray-400">{t.stat1Text}</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">{t.stat2Number}</h3>
            <p className="text-gray-400">{t.stat2Text}</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">{t.stat3Number}</h3>
            <p className="text-gray-400">{t.stat3Text}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#1a1f2e] rounded-lg p-8 border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t.tightSpreads}</h3>
            <p className="text-gray-400">{t.tightSpreadsDesc}</p>
          </div>

          <div className="bg-[#1a1f2e] rounded-lg p-8 border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t.noHiddenCosts}</h3>
            <p className="text-gray-400">{t.noHiddenCostsDesc}</p>
          </div>

          <div className="bg-[#1a1f2e] rounded-lg p-8 border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t.superiorExecution}</h3>
            <p className="text-gray-400">{t.superiorExecutionDesc}</p>
          </div>

          <div className="bg-[#1a1f2e] rounded-lg p-8 border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t.instantWithdrawals}</h3>
            <p className="text-gray-400">{t.instantWithdrawalsDesc}</p>
          </div>
        </div>

        <div className="text-center">
          <a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
            {t.startTrading}
          </a>
        </div>
      </div>
    </section>
  );
}
