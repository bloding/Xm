import { Gift, DollarSign, Trophy, TrendingUp } from 'lucide-react';

interface BonusesProps {
  language: 'ar' | 'en';
}

export default function Bonuses({ language }: BonusesProps) {
  const content = {
    ar: {
      title: 'مكافآت حصرية',
      bonusTitle: 'مكافأة 100%',
      bonusDescription: 'استخدم أموالنا للتداول وعزز عوائدك. احصل على مكافأة 100% تصل إلى 500,000$',
      claimBonus: 'احصل على المكافأة',
      competitions: 'مسابقات XM',
      competitionsDesc: 'اربح حصتك من أكثر من 100,000$ جوائز نقدية',
      loyaltyPoints: 'نقاط الولاء',
      loyaltyPointsDesc: 'اكسب نقاط XMP مع كل صفقة',
      promotions: 'عروض ترويجية',
      promotionsDesc: 'استفد من العروض المتجددة على مدار العام',
    },
    en: {
      title: 'Exclusive Bonuses',
      bonusTitle: '100% Bonus',
      bonusDescription: 'Use our funds to trade more and boost returns. Get 100% Bonus up to $500,000',
      claimBonus: 'Claim Your Bonus',
      competitions: 'XM Competitions',
      competitionsDesc: 'Win your share of $100,000+ in cash prizes',
      loyaltyPoints: 'Loyalty Points',
      loyaltyPointsDesc: 'Earn XMP points with every trade',
      promotions: 'Regular Promotions',
      promotionsDesc: 'Benefit from ongoing promotions throughout the year',
    },
  };

  const t = content[language];

  return (
    <section id="bonuses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1f2e] to-[#1f2535]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">{t.title}</h2>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-8 md:mb-0">
              <h3 className="text-4xl font-bold text-white mb-4">{t.bonusTitle}</h3>
              <p className="text-blue-100 text-lg mb-6">{t.bonusDescription}</p>
              <a href="https://affs.click/Ap5Ri" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">
                {t.claimBonus}
              </a>
            </div>
            <DollarSign className="text-yellow-400 w-32 h-32" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500 transition">
            <Trophy className="text-yellow-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">{t.competitions}</h3>
            <p className="text-gray-400 mb-6">{t.competitionsDesc}</p>
            <a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 font-semibold">
              {language === 'ar' ? 'ابدأ الآن' : 'Start Now'} →
            </a>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition">
            <TrendingUp className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">{t.loyaltyPoints}</h3>
            <p className="text-gray-400 mb-6">{t.loyaltyPointsDesc}</p>
            <a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 font-semibold">
              {language === 'ar' ? 'تعرف على المزيد' : 'Learn More'} →
            </a>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition">
            <Gift className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">{t.promotions}</h3>
            <p className="text-gray-400 mb-6">{t.promotionsDesc}</p>
            <a href="https://affs.click/8918d" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold">
              {language === 'ar' ? 'اطلع على العروض' : 'View Offers'} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
