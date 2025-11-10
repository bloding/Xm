interface BannerProps {
  className?: string;
}

export default function Banner({ className = '' }: BannerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <iframe
        src="https://images.pipaffiliates.com/f/b?g=1020&c=1104591"
        width="120"
        height="600"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: '0px' }}
        title="XM Banner"
        loading="lazy"
      />
    </div>
  );
}
