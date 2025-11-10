import { Building2, Users, Globe, Award } from 'lucide-react';

interface AboutUsProps {
  language: 'ar' | 'en';
}

export default function AboutUs({ language }: AboutUsProps) {
  const content = {
    ar: {
      title: 'من نحن',
      subtitle: 'تعرف على XM - شريكك الموثوق في عالم التداول',
      intro: 'XM هي مجموعة خدمات استثمارية عالمية مرموقة، تأسست في عام 2009. نحن نخدم أكثر من 15 مليون عميل في أكثر من 196 دولة حول العالم.',
      mission: 'مهمتنا',
      missionText: 'نسعى لتقديم أفضل تجربة تداول ممكنة من خلال الجمع بين التكنولوجيا المتقدمة والخدمة الاستثنائية وشروط التداول التنافسية.',
      stats: [
        { icon: Users, number: '15M+', label: 'متداول نشط' },
        { icon: Globe, number: '196+', label: 'دولة' },
        { icon: Award, number: '40+', label: 'جائزة دولية' },
        { icon: Building2, number: '15+', label: 'سنة من الخبرة' },
      ],
      values: 'قيمنا',
      valuesList: [
        { title: 'الشفافية', desc: 'نحن ملتزمون بالشفافية الكاملة في جميع معاملاتنا وعملياتنا' },
        { title: 'الابتكار', desc: 'نستثمر باستمرار في التكنولوجيا والأدوات لتحسين تجربة التداول' },
        { title: 'الموثوقية', desc: 'مرخصون وخاضعون للرقابة من قبل أبرز الهيئات التنظيمية العالمية' },
        { title: 'دعم العملاء', desc: 'فريق دعم متعدد اللغات متاح 24/5 لمساعدتك' },
      ],
    },
    en: {
      title: 'About Us',
      subtitle: 'Get to know XM - Your trusted partner in trading',
      intro: 'XM is a prestigious global investment services group, established in 2009. We serve over 15 million clients in more than 196 countries worldwide.',
      mission: 'Our Mission',
      missionText: 'We strive to provide the best possible trading experience by combining advanced technology, exceptional service, and competitive trading conditions.',
      stats: [
        { icon: Users, number: '15M+', label: 'Active Traders' },
        { icon: Globe, number: '196+', label: 'Countries' },
        { icon: Award, number: '40+', label: 'International Awards' },
        { icon: Building2, number: '15+', label: 'Years of Experience' },
      ],
      values: 'Our Values',
      valuesList: [
        { title: 'Transparency', desc: 'We are committed to full transparency in all our transactions and operations' },
        { title: 'Innovation', desc: 'We continuously invest in technology and tools to enhance the trading experience' },
        { title: 'Reliability', desc: 'Licensed and regulated by leading global regulatory authorities' },
        { title: 'Customer Support', desc: 'Multilingual support team available 24/5 to assist you' },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1f2e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-700 mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">{t.intro}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {t.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl p-6 border border-blue-700/30 text-center hover:border-blue-500/50 transition">
                <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">{t.mission}</h3>
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-xl p-8 border border-blue-700/30">
            <p className="text-lg text-gray-300 text-center leading-relaxed">{t.missionText}</p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">{t.values}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {t.valuesList.map((value, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition">
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
