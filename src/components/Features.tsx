import { Smartphone, Gift, Users, TrendingUp, Wallet, BarChart3 } from 'lucide-react';

interface FeaturesProps {
  language: 'ar' | 'en';
}

export default function Features({ language }: FeaturesProps) {
  const content = {
    ar: {
      title: 'لماذا تختار XM؟',
      features: [
        { icon: Gift, title: 'مكافآت سخية', description: 'مكافأة إيداع 100٪ تصل إلى 500,000$' },
        { icon: Wallet, title: 'إيداع آمن', description: 'طرق إيداع متعددة بدون عمولات' },
        { icon: TrendingUp, title: 'تنفيذ فوري', description: 'سرعة تنفيذ عالية' },
        { icon: BarChart3, title: 'أدوات تحليلية', description: 'رسوم بيانية احترافية' },
        { icon: Smartphone, title: 'تطبيق متقدم', description: 'متاح على iOS و Android' },
        { icon: Users, title: 'دعم 24/7', description: 'فريق دعم متعدد اللغات' },
      ],
    },
    en: {
      title: 'Why Choose XM?',
      features: [
        { icon: Gift, title: 'Generous Bonuses', description: '100% deposit bonus up to $500,000' },
        { icon: Wallet, title: 'Fast Deposits', description: 'Multiple methods with no fees' },
        { icon: TrendingUp, title: 'Instant Execution', description: 'High-speed execution' },
        { icon: BarChart3, title: 'Analysis Tools', description: 'Professional charts' },
        { icon: Smartphone, title: 'Award-Winning App', description: 'Available on iOS & Android' },
        { icon: Users, title: '24/7 Support', description: 'Multilingual support team' },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1f2e]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition group hover:transform hover:scale-105">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition">
                  <Icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
