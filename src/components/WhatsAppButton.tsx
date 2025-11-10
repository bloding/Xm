import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  language: 'ar' | 'en';
}

export default function WhatsAppButton({ language }: WhatsAppButtonProps) {
  const content = {
    ar: {
      text: 'اتصل بنا على واتساب',
      subtitle: 'للدعم والمساعدة',
    },
    en: {
      text: 'Contact us on WhatsApp',
      subtitle: 'For support and assistance',
    },
  };

  const t = content[language];
  const phoneNumber = '+212663112291';
  const message = language === 'ar'
    ? 'مرحباً، أرغب في معرفة المزيد عن XM'
    : 'Hello, I would like to know more about XM';

  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
      aria-label={t.text}
    >
      <MessageCircle className="w-6 h-6 animate-bounce group-hover:animate-none" />
      <div className="hidden md:block">
        <div className="font-bold text-sm">{t.text}</div>
        <div className="text-xs text-green-100">{t.subtitle}</div>
      </div>
    </a>
  );
}
