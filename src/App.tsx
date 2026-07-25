import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { WhatsAppModalProvider } from './context/WhatsAppModalContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppOrderModal from './components/WhatsAppOrderModal';
import FloatingActions from './components/FloatingActions';
import { Activity } from 'lucide-react';

// Lazy loading each independent page as requested
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Full page loading spinner
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-full animate-pulse relative">
        <Activity className="w-8 h-8 text-emerald-600 dark:text-emerald-400 animate-spin-slow" />
      </div>
      <div className="text-center">
        <p className="font-extrabold text-sm text-slate-800 dark:text-white uppercase tracking-wider">Noor Medical</p>
        <p className="text-xs text-slate-400 mt-1">Preparing Genuine Healthcare Essentials...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <WhatsAppModalProvider>
        <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950 bg-dot-pattern text-slate-800 dark:text-slate-200 antialiased transition-colors duration-300">
          {/* Scroll position synchronizer */}
          <ScrollToTop />

          {/* Sticky header controls */}
          <Navbar />

          {/* Core Page Stage */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Fallback routing */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>

          {/* Dynamic Order Form Modal (mounted globally, opened from any page context) */}
          <WhatsAppOrderModal />

          {/* Corner Call, WhatsApp Order & Back-to-Top buttons */}
          <FloatingActions />

          {/* Global Footer (includes the tracking codes) */}
          <Footer />
        </div>
      </WhatsAppModalProvider>
    </BrowserRouter>
  );
}
