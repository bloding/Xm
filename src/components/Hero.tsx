import { TrendingUp, Award, Shield } from 'lucide-react';

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
      register: 'Register Now',
      years: '15 Years',
    },
  };

  const t = content[language];

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1f2e] via-[#1f2535] to-[#1a1f2e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-4xl px-6 py-3 rounded-lg shadow-lg">XM</div>
            <span className="text-white text-sm font-semibold ml-2 bg-gray-800 px-3 py-1 rounded">{t.years}</span>
          </div>

          <p className="text-gray-400 text-lg mb-2">{t.trusted} <span className="text-white font-bold">{t.traders}</span></p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            {t.title}
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">{t.subtitle}</span>
          </h1>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12">{t.description}</p>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">{t.bonus}</h3>
            <a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg">
              {t.register}
            </a>
            <p className="text-blue-100 mt-4 text-sm">{t.limitedOffer}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition">
              <Award className="text-yellow-500 w-12 h-12 mx-auto mb-4" />
              <h4 className="text-white font-semibold text-lg mb-2">{language === 'ar' ? 'الوسيط الأكثر جوائز' : 'Most Awarded Broker'}</h4>
              <p className="text-gray-400">{language === 'ar' ? 'حاصل على أكثر من 40 جائزة دولية' : 'Winner of 40+ international awards'}</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition">
              <Shield className="text-blue-500 w-12 h-12 mx-auto mb-4" />
              <h4 className="text-white font-semibold text-lg mb-2">{language === 'ar' ? 'موثوق ومرخص' : 'Trusted & Licensed'}</h4>
              <p className="text-gray-400">{language === 'ar' ? 'مرخص وخاضع للرقابة من قبل هيئات دولية' : 'Licensed by international regulatory authorities'}</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition">
              <TrendingUp className="text-green-500 w-12 h-12 mx-auto mb-4" />
              <h4 className="text-white font-semibold text-lg mb-2">{language === 'ar' ? 'أدوات تداول متقدمة' : 'Advanced Trading Tools'}</h4>
              <p className="text-gray-400">{language === 'ar' ? 'الوصول إلى أكثر من 1400 أصل عالمي' : 'Access to 1,400+ global assets'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
