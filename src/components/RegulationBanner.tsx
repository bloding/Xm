interface RegulationBannerProps {
  language: 'ar' | 'en';
  onLicenseClick: () => void;
}

export default function RegulationBanner({ language, onLicenseClick }: RegulationBannerProps) {
  const content = {
    ar: {
      title: 'مرخّص وموثوق',
      subtitle: 'هذا الموقع تابع لـ XM Global Limited',
      description: 'XM مرخصة ومنظمة من قبل جهات رقابية عالمية رائدة',
      regulators: [
        { name: 'IFSC', full: 'هيئة الخدمات المالية الدولية - بليز', license: 'IFSC/60/354/TS/19' },
        { name: 'CySEC', full: 'لجنة الأوراق المالية القبرصية', license: '120/10' },
        { name: 'ASIC', full: 'لجنة الأوراق المالية الأسترالية', license: 'AFSL 443670' },
      ],
      viewDetails: 'عرض تفاصيل التراخيص',
    },
    en: {
      title: 'Licensed & Trusted',
      subtitle: 'This website is affiliated with XM Global Limited',
      description: 'XM is licensed and regulated by leading global regulatory authorities',
      regulators: [
        { name: 'IFSC', full: 'International Financial Services Commission - Belize', license: 'IFSC/60/354/TS/19' },
        { name: 'CySEC', full: 'Cyprus Securities and Exchange Commission', license: '120/10' },
        { name: 'ASIC', full: 'Australian Securities and Investments Commission', license: 'AFSL 443670' },
      ],
      viewDetails: 'View License Details',
    },
  };

  const t = content[language];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0e1a] to-[#0f1419] border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-700/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{t.title}</h2>
            </div>
            <p className="text-blue-300 text-lg mb-2">{t.subtitle}</p>
            <p className="text-gray-400 text-sm">{t.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {t.regulators.map((reg, index) => (
              <div key={index} className="bg-[#0a0e1a]/50 border border-gray-700/50 rounded-lg p-4 hover:border-blue-500/50 transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-sm">{reg.name}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">{reg.full}</p>
                  </div>
                </div>
                <div className="bg-blue-900/20 rounded px-3 py-2">
                  <p className="text-blue-300 text-xs font-mono">{reg.license}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={onLicenseClick}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              {t.viewDetails}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
