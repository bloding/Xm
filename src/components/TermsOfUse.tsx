import { FileText, AlertCircle, Shield, CheckCircle } from 'lucide-react';

interface TermsOfUseProps {
  language: 'ar' | 'en';
}

export default function TermsOfUse({ language }: TermsOfUseProps) {
  const content = {
    ar: {
      title: 'شروط الاستخدام',
      subtitle: 'يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا',
      intro: 'مرحباً بك في XM. باستخدامك لخدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية. تنطبق هذه الشروط على جميع عملاء XM.',
      sections: [
        {
          icon: FileText,
          title: '1. القبول والموافقة',
          content: 'باستخدام منصة XM، فإنك تقر بأنك قرأت وفهمت ووافقت على جميع الشروط والأحكام الواردة في هذا الاتفاق. إذا كنت لا توافق على أي من هذه الشروط، يجب عليك عدم استخدام خدماتنا.',
        },
        {
          icon: Shield,
          title: '2. التسجيل والحساب',
          content: 'يجب أن يكون عمرك 18 عاماً على الأقل للتسجيل. يجب عليك تقديم معلومات دقيقة وكاملة أثناء التسجيل والحفاظ على سرية بيانات حسابك. أنت مسؤول عن جميع الأنشطة التي تحدث من خلال حسابك.',
        },
        {
          icon: AlertCircle,
          title: '3. تحذير المخاطر',
          content: 'التداول في العملات الأجنبية والعقود مقابل الفروقات ينطوي على مخاطر كبيرة وقد يؤدي إلى خسارة رأس المال بالكامل. لا تستثمر أموالاً لا يمكنك تحمل خسارتها. الأداء السابق لا يشير إلى النتائج المستقبلية.',
        },
        {
          icon: CheckCircle,
          title: '4. شروط التداول',
          content: 'تخضع جميع المعاملات لشروط التداول الخاصة بـ XM، بما في ذلك السبريد، والعمولات، ورسوم التبييت. نحتفظ بالحق في تعديل شروط التداول مع إشعار مسبق. قد تخضع الحسابات غير النشطة لرسوم صيانة.',
        },
      ],
      additionalTerms: 'شروط إضافية',
      terms: [
        'يجب أن تكون مؤهلاً قانونياً للتداول في بلد إقامتك',
        'لا يجوز استخدام الخدمات لأي أنشطة غير قانونية أو احتيالية',
        'نحتفظ بالحق في تعليق أو إنهاء الحسابات التي تنتهك شروطنا',
        'جميع النزاعات تخضع لقوانين السلطة القضائية ذات الصلة',
        'قد تخضع المكافآت والعروض الترويجية لشروط وأحكام إضافية',
      ],
      note: 'ملاحظة هامة',
      noteText: 'هذه نسخة مختصرة من الشروط والأحكام. للحصول على الشروط الكاملة والمحدثة، يرجى زيارة',
      officialWebsite: 'الموقع الرسمي لـ XM',
      lastUpdated: 'آخر تحديث: يناير 2025',
    },
    en: {
      title: 'Terms of Use',
      subtitle: 'Please read these terms carefully before using our services',
      intro: 'Welcome to XM. By using our services, you agree to comply with the following terms and conditions. These terms apply to all XM clients.',
      sections: [
        {
          icon: FileText,
          title: '1. Acceptance and Agreement',
          content: 'By using the XM platform, you acknowledge that you have read, understood, and agree to all terms and conditions contained in this agreement. If you do not agree with any of these terms, you must not use our services.',
        },
        {
          icon: Shield,
          title: '2. Registration and Account',
          content: 'You must be at least 18 years old to register. You must provide accurate and complete information during registration and maintain the confidentiality of your account credentials. You are responsible for all activities that occur through your account.',
        },
        {
          icon: AlertCircle,
          title: '3. Risk Warning',
          content: 'Trading forex and CFDs involves significant risk and may result in the complete loss of capital. Do not invest money you cannot afford to lose. Past performance does not indicate future results.',
        },
        {
          icon: CheckCircle,
          title: '4. Trading Conditions',
          content: 'All transactions are subject to XM\'s trading conditions, including spreads, commissions, and swap fees. We reserve the right to modify trading conditions with prior notice. Inactive accounts may be subject to maintenance fees.',
        },
      ],
      additionalTerms: 'Additional Terms',
      terms: [
        'You must be legally eligible to trade in your country of residence',
        'Services may not be used for any illegal or fraudulent activities',
        'We reserve the right to suspend or terminate accounts that violate our terms',
        'All disputes are subject to the laws of the relevant jurisdiction',
        'Bonuses and promotions may be subject to additional terms and conditions',
      ],
      note: 'Important Note',
      noteText: 'This is an abbreviated version of the terms and conditions. For complete and updated terms, please visit the',
      officialWebsite: 'official XM website',
      lastUpdated: 'Last Updated: January 2025',
    },
  };

  const t = content[language];

  return (
    <section id="terms" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1f2e] to-[#151923]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-xl text-gray-300">{t.subtitle}</p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">{t.intro}</p>
        </div>

        <div className="space-y-8 mb-12">
          {t.sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-900/30 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-xl p-8 border border-blue-700/30 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">{t.additionalTerms}</h3>
          <ul className="space-y-3">
            {t.terms.map((term, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{term}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-6">
          <h4 className="text-yellow-400 font-bold text-lg mb-3">{t.note}</h4>
          <p className="text-gray-300 mb-3">
            {t.noteText}{' '}
            <a
              href="https://www.xm.com/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              {t.officialWebsite}
            </a>
          </p>
          <p className="text-gray-500 text-sm">{t.lastUpdated}</p>
        </div>
      </div>
    </section>
  );
}
