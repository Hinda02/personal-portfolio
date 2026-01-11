import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 text-center" style={{ backgroundColor: '#FFF9F5' }}>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm md:text-base" style={{ color: 'var(--warm-gray)', fontFamily: 'var(--font-body)' }}>
        <div className="flex items-center gap-2">
          <span>Designed & built by Hinda</span>
          <Heart size={16} fill="var(--pastel-pink)" style={{ color: 'var(--pastel-pink)' }} />
        </div>
        <span>2025</span>
      </div>
    </footer>
  );
}
