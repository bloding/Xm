interface LicenseDisclosureProps {
  language: 'ar' | 'en';
  onClose: () => void;
}

export default function LicenseDisclosure({ language, onClose }: LicenseDisclosureProps) {
  const content = {
    ar: {
      title: 'الإفصاح عن التراخيص والتنظيم',
      intro: 'معلومات مهمة حول الجهات التنظيمية لشركة XM',
      xmGlobal: 'XM Global Limited',
      xmGlobalText: 'مرخصة وخاضعة للرقابة من قبل هيئة الخدمات المالية الدولية (IFSC) في بليز، رقم الترخيص IFSC/60/354/TS/19.',
      tradingPoint: 'Trading Point of Financial Instruments Ltd',
      tradingPointText: 'مرخصة وخاضعة للرقابة من قبل لجنة الأوراق المالية والبورصات القبرصية (CySEC)، رقم الترخيص 120/10.',
      xmAustralia: 'XM Australia Pty Ltd',
      xmAustraliaText: 'مرخصة وخاضعة للرقابة من قبل لجنة الأوراق المالية والاستثمارات الأسترالية (ASIC)، رقم AFSL 443670.',
      riskWarning: 'تحذير المخاطر',
      riskText: 'تداول المنتجات المالية ذات الرافعة المالية يحمل درجة عالية من المخاطر وقد لا يكون مناسباً لجميع المستثمرين. يجب ألا تخاطر بأكثر مما أنت مستعد لخسارته.',
      affiliate: 'إفصاح التبعية',
      affiliateText: 'هذا الموقع (xmarabia.net) هو موقع تابع وشريك تسويقي لـ XM Global Limited. نحن نحصل على عمولة من الإحالات إلى XM.',
      responsibility: 'المسؤولية',
      responsibilityText: 'المحتوى على هذا الموقع هو لأغراض إعلامية فقط ولا يشكل نصيحة استثمارية. قرارات التداول تقع على مسؤوليتك الخاصة.',
      close: 'إغلاق',
    },
    en: {
      title: 'License and Regulation Disclosure',
      intro: 'Important information about XM regulatory entities',
      xmGlobal: 'XM Global Limited',
      xmGlobalText: 'Licensed and regulated by the International Financial Services Commission (IFSC) in Belize, license number IFSC/60/354/TS/19.',
      tradingPoint: 'Trading Point of Financial Instruments Ltd',
      tradingPointText: 'Licensed and regulated by the Cyprus Securities and Exchange Commission (CySEC), license number 120/10.',
      xmAustralia: 'XM Australia Pty Ltd',
      xmAustraliaText: 'Licensed and regulated by the Australian Securities and Investments Commission (ASIC), AFSL number 443670.',
      riskWarning: 'Risk Warning',
      riskText: 'Trading leveraged financial products carries a high level of risk and may not be suitable for all investors. You should not risk more than you are prepared to lose.',
      affiliate: 'Affiliate Disclosure',
      affiliateText: 'This website (xmarabia.net) is an affiliate and marketing partner of XM Global Limited. We receive commissions from referrals to XM.',
      responsibility: 'Responsibility',
      responsibilityText: 'Content on this website is for informational purposes only and does not constitute investment advice. Trading decisions are your own responsibility.',
      close: 'Close',
    },
  };

  const t = content[language];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[#0a0e1a] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-[#0a0e1a] border-b border-gray-800 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{t.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-gray-400 text-sm">{t.intro}</p>

          <div className="space-y-4">
            <div className="bg-blue-900/10 border border-blue-700/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">{t.xmGlobal}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.xmGlobalText}</p>
            </div>

            <div className="bg-blue-900/10 border border-blue-700/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">{t.tradingPoint}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.tradingPointText}</p>
            </div>

            <div className="bg-blue-900/10 border border-blue-700/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">{t.xmAustralia}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.xmAustraliaText}</p>
            </div>

            <div className="bg-yellow-900/10 border border-yellow-600/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">{t.riskWarning}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.riskText}</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">{t.affiliate}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.affiliateText}</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">{t.responsibility}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.responsibilityText}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800">
            <button onClick={onClose} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
              {t.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
