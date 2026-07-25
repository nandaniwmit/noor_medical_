import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Shield, Scale, Info, Globe } from 'lucide-react';

export default function Footer() {
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid'));
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: any;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Business Branding & Contact */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="p-2 bg-emerald-600/20 text-emerald-400 rounded-lg">
              <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </span>
            <span className="text-xl font-bold text-white tracking-wide">Noor Medical</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Your trusted local medical pharmacy in Gaya, Bihar. Dedicated to providing certified, genuine medicines and high-quality healthcare products with unmatched customer service.
          </p>
          <div className="space-y-3 pt-2 text-sm">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>A P Colony, Gaya, Bihar 823001</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="tel:+919304311038" className="hover:text-emerald-400 transition-colors">+91 9304311038</a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="mailto:noormedicalgaya@gmail.com" className="hover:text-emerald-400 transition-colors">noormedicalgaya@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center">
                <span className="mr-1.5 text-emerald-500">→</span> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center">
                <span className="mr-1.5 text-emerald-500">→</span> About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center">
                <span className="mr-1.5 text-emerald-500">→</span> Medicines & Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center">
                <span className="mr-1.5 text-emerald-500">→</span> Store Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center">
                <span className="mr-1.5 text-emerald-500">→</span> Contact & Location
              </Link>
            </li>
          </ul>
          
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mt-6 mb-3 border-l-2 border-emerald-500 pl-2">
            Legal & Support
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-center space-x-1">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>Privacy Policy</span>
            </li>
            <li className="flex items-center space-x-1">
              <Scale className="w-3.5 h-3.5 text-emerald-500" />
              <span>Terms of Service</span>
            </li>
            <li className="flex items-center space-x-1">
              <Info className="w-3.5 h-3.5 text-emerald-500" />
              <span>Medical Disclaimer</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Operational Hours */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider border-l-2 border-emerald-500 pl-2">
            Store Hours
          </h4>
          <div className="space-y-3 bg-slate-800/50 p-4 rounded-xl border border-slate-800 text-sm">
            <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
              <span className="font-medium text-slate-300 flex items-center">
                <Clock className="w-4 h-4 text-emerald-400 mr-1.5" />
                Mon - Sat
              </span>
              <span className="text-white font-semibold">8:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-300 flex items-center">
                <Clock className="w-4 h-4 text-emerald-400 mr-1.5 animate-pulse" />
                Sunday
              </span>
              <span className="text-emerald-400 font-semibold">8:00 AM - 2:00 PM</span>
            </div>
          </div>
          <div className="text-xs text-slate-400 italic bg-amber-500/5 p-3 rounded-lg border border-amber-500/10 leading-normal">
            <strong>Emergency Note:</strong> Prescriptions and regular dosage medications can be pre-ordered on WhatsApp outside open hours for priority morning collection.
          </div>
        </div>

        {/* Column 4: Quick Map Location */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
            Locate Us
          </h4>
          <div className="rounded-xl overflow-hidden border border-slate-800 h-40 relative">
            <iframe 
              title="Noor Medical Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.123456789!2d84.9994!3d24.7955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f299c5658066f1%3A0xc3b860ab72f88ff2!2sAP%20Colony%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="mt-3 text-center">
            <a 
              href="https://maps.google.com/?q=Noor+Medical+AP+Colony+Gaya+Bihar" 
              target="_blank" 
              referrerPolicy="no-referrer"
              rel="noopener noreferrer" 
              className="inline-flex items-center text-xs text-emerald-400 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5 mr-1" />
              Open in Google Maps
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Disclaimer & Credits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/80 text-xs text-slate-500 space-y-4">
        <p className="leading-relaxed text-justify">
          <strong>Disclaimer:</strong> Information and items shown here are for reference only and do not substitute professional medical advice, diagnosis, or treatment. Always consult a qualified physician for prescriptions and healthcare concerns. Availability information is subject to live updates.
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2 text-slate-400">
          <p>© {new Date().getFullYear()} Noor Medical. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Developed by</span>
            <a 
              href="https://main.webmakerit.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-white transition-colors font-medium hover:underline"
            >
              WMIT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
