interface SecuritySectionProps {
  language: 'ar' | 'en';
}

export default function SecuritySection({ language }: SecuritySectionProps) {
  const content = {
    ar: {
      title: 'أموالك آمنة ومحمية دائماً',
      description: 'تداول مع وسيط متعدد التنظيم بنى شراكات طويلة الأمد مع أفضل البنوك العالمية لضمان أن أموالك آمنة دائماً.',
    },
    en: {
      title: 'Your Funds Are Always Safe and Secure',
      description: 'Trade with a multi-regulated broker that has built long-standing partnerships with top global banks to ensure your funds are always secure.',
    },
  };

  const t = content[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-blue-700">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-white/10 backdrop-blur rounded-full mx-auto flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
        <p className="text-blue-100 text-lg max-w-3xl mx-auto">{t.description}</p>
      </div>
    </section>
  );
}
