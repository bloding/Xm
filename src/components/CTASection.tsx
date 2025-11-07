import { Download, Wallet, Handshake, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  language: 'ar' | 'en';
}

export default function CTASection({ language }: CTASectionProps) {
  const content = {
    ar: {
      title: 'ابدأ رحلتك اليوم',
      steps: [
        { icon: ArrowRight, title: 'سجل الآن', description: 'افتح حساب تداول', link: 'https://affs.click/8918d', buttonText: 'سجل الآن' },
        { icon: Wallet, title: 'قم بالإيداع', description: 'احصل على مكافأة 100%', link: 'https://affs.click/Ap5Ri', buttonText: 'قم بالإيداع' },
        { icon: Download, title: 'حمل البرنامج', description: 'ابدأ التداول الآن', link: 'https://affs.click/9Weaq', buttonText: 'تحميل' },
        { icon: Handshake, title: 'كن شريك', description: 'اكسب عمولات', link: 'https://affs.click/d4QV6', buttonText: 'انضم' },
      ],
    },
    en: {
      title: 'Start Your Trading Journey',
      steps: [
        { icon: ArrowRight, title: 'Register Now', description: 'Open a trading account', link: 'https://affs.click/8918d', buttonText: 'Register' },
        { icon: Wallet, title: 'Deposit Now', description: 'Get 100% bonus', link: 'https://affs.click/Ap5Ri', buttonText: 'Deposit' },
        { icon: Download, title: 'Download App', description: 'Start trading now', link: 'https://affs.click/9Weaq', buttonText: 'Download' },
        { icon: Handshake, title: 'Become Partner', description: 'Earn commissions', link: 'https://affs.click/d4QV6', buttonText: 'Join' },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1f2e]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition group">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{step.description}</p>
                <a href={step.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition w-full text-center">
                  {step.buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
