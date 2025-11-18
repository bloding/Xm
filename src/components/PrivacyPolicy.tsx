interface PrivacyPolicyProps {
  language: 'ar' | 'en';
  onClose: () => void;
}

export default function PrivacyPolicy({ language, onClose }: PrivacyPolicyProps) {
  const content = {
    ar: {
      title: 'سياسة الخصوصية',
      intro: 'آخر تحديث: نوفمبر 2025',
      section1Title: '1. معلومات عامة',
      section1Text: 'هذا الموقع (xmarabia.net) هو موقع تابع لشركة XM Global Limited. نحن نلتزم بحماية خصوصية زوار موقعنا والحفاظ على سرية المعلومات الشخصية.',
      section2Title: '2. المعلومات التي نجمعها',
      section2Text: 'قد نجمع معلومات أساسية مثل عنوان IP، نوع المتصفح، ومدة الزيارة لتحسين تجربة المستخدم وتحليل حركة المرور على الموقع.',
      section3Title: '3. استخدام المعلومات',
      section3Text: 'نستخدم المعلومات التي نجمعها لتحسين محتوى الموقع، وتخصيص تجربة المستخدم، والتواصل مع الزوار الذين يطلبون معلومات.',
      section4Title: '4. الإفصاح للأطراف الثالثة',
      section4Text: 'لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة باستثناء XM Global Limited وشركائها المعتمدين لأغراض تقديم الخدمات.',
      section5Title: '5. الأمان',
      section5Text: 'نتخذ تدابير أمنية معقولة لحماية المعلومات من الوصول غير المصرح به أو التعديل أو الكشف.',
      section6Title: '6. ملفات تعريف الارتباط (Cookies)',
      section6Text: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل استخدام الموقع. يمكنك تعطيل ملفات تعريف الارتباط من إعدادات المتصفح.',
      section7Title: '7. التغييرات على السياسة',
      section7Text: 'قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. ننصح بمراجعة هذه الصفحة بانتظام.',
      section8Title: '8. الاتصال بنا',
      section8Text: 'للأسئلة حول سياسة الخصوصية، يرجى الاتصال بنا عبر قنوات الدعم المتاحة.',
      close: 'إغلاق',
    },
    en: {
      title: 'Privacy Policy',
      intro: 'Last Updated: November 2025',
      section1Title: '1. General Information',
      section1Text: 'This website (xmarabia.net) is affiliated with XM Global Limited. We are committed to protecting the privacy of our website visitors and maintaining the confidentiality of personal information.',
      section2Title: '2. Information We Collect',
      section2Text: 'We may collect basic information such as IP address, browser type, and visit duration to improve user experience and analyze website traffic.',
      section3Title: '3. Use of Information',
      section3Text: 'We use collected information to improve website content, personalize user experience, and communicate with visitors who request information.',
      section4Title: '4. Third-Party Disclosure',
      section4Text: 'We do not sell or share your personal information with third parties except XM Global Limited and its authorized partners for service provision purposes.',
      section5Title: '5. Security',
      section5Text: 'We take reasonable security measures to protect information from unauthorized access, modification, or disclosure.',
      section6Title: '6. Cookies',
      section6Text: 'We use cookies to improve browsing experience and analyze website usage. You can disable cookies through your browser settings.',
      section7Title: '7. Policy Changes',
      section7Text: 'We may update this privacy policy from time to time. We recommend reviewing this page regularly.',
      section8Title: '8. Contact Us',
      section8Text: 'For questions about this privacy policy, please contact us through our support channels.',
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
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.section1Title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.section1Text}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.section2Title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.section2Text}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.section3Title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.section3Text}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.section4Title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.section4Text}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.section5Title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.section5Text}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.section6Title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.section6Text}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.section7Title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.section7Text}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.section8Title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.section8Text}</p>
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
