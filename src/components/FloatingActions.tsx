import { useState, useEffect } from 'react';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';
import { Phone, ArrowUp, ShoppingBag } from 'lucide-react';

export default function FloatingActions() {
  const { openModal } = useWhatsAppModal();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Floating Action Buttons (Desktop and Mobile) */}
      <div className="fixed bottom-20 md:bottom-8 right-6 z-40 flex flex-col items-center space-y-3">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-1"
            title="Back to Top"
            id="back-to-top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href="tel:+919304311038"
          className="p-4 bg-emerald-600 text-white rounded-full shadow-xl hover:bg-emerald-700 transition-all hover:-translate-y-1 flex items-center justify-center animate-bounce-slow"
          title="Call Noor Medical"
          id="floating-call-btn"
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={() => openModal()}
          className="p-4 bg-emerald-500 text-white rounded-full shadow-xl hover:bg-emerald-600 transition-all hover:-translate-y-1 flex items-center justify-center relative group"
          title="WhatsApp Order"
          id="floating-whatsapp-btn"
        >
          {/* Animated rings around the WhatsApp button to attract attention */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25"></span>
          
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.01 14.067.986 11.5.986c-5.439 0-9.863 4.373-9.867 9.802-.001 1.73.473 3.41 1.37 4.908l-.946 3.454 3.54-.914zM17.56 14.94c-.284-.144-1.684-.813-1.946-.906-.262-.093-.453-.14-.644.144-.191.284-.74.906-.906 1.093-.166.188-.332.211-.616.068-1.025-.515-1.722-.88-2.404-2.016-.258-.431-.258-.748-.041-.954.195-.187.431-.502.646-.753.11-.129.183-.218.256-.299.075-.083.125-.139.182-.249.083-.16.04-.3-.021-.42-.061-.121-.527-1.243-.722-1.699-.191-.447-.38-.386-.527-.393-.135-.007-.291-.008-.447-.008-.156 0-.411.057-.626.284-.216.227-.825.79-.825 1.926 0 1.135.842 2.232.955 2.38.113.149 1.657 2.484 4.016 3.475.561.236 1.001.378 1.343.483.565.176 1.079.151 1.485.093.453-.065 1.401-.559 1.597-1.098.195-.539.195-1.001.137-1.098-.058-.097-.216-.156-.5-.3z" />
          </svg>

          {/* Label tooltip */}
          <span className="absolute right-14 bg-slate-900 text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md border border-slate-800">
            Order Medicines
          </span>
        </button>
      </div>

      {/* Mobile Sticky CTA Bar (Locks to bottom of screen only on mobile viewports) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 px-4 py-3 flex gap-3 shadow-lg">
        <a
          href="tel:+919304311038"
          className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 py-2.5 rounded-xl font-bold text-center text-sm flex items-center justify-center space-x-1.5 active:scale-95 transition-transform"
          id="sticky-mobile-call"
        >
          <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Call Now</span>
        </a>
        <button
          onClick={() => openModal()}
          className="flex-[1.5] bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-1.5 shadow-md shadow-emerald-600/25 active:scale-95 transition-transform"
          id="sticky-mobile-whatsapp"
        >
          <ShoppingBag className="w-4 h-4 shrink-0" />
          <span>WhatsApp Order</span>
        </button>
      </div>
    </>
  );
}
