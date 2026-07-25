import { Link } from 'react-router-dom';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';
import { featuredServices, customerReviews, faqData, healthTips } from '../data/mockData';
import SEO from '../components/SEO';
import { 
  ShieldCheck, 
  Pill, 
  Activity, 
  Baby, 
  Apple, 
  HeartHandshake, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Calendar, 
  Plus, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';

export default function Home() {
  const { openModal } = useWhatsAppModal();

  // Helper to resolve icon components dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Pills': return <Pill className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Baby': return <Baby className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Apple': return <Apple className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default: return <Plus className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  // 4 Featured Products to display
  const homeProducts = [
    {
      name: 'Accu-Chek Active Glucometer',
      brand: 'Roche Diagnostics',
      category: 'Diagnostic Devices',
      mrp: 975,
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e55c26?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'Omron Hem 7120 BP Monitor',
      brand: 'Omron',
      category: 'Blood Pressure Monitor',
      mrp: 2440,
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d304f3c6f?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'Pampers Sensitive Baby Wipes',
      brand: 'Procter & Gamble',
      category: 'Baby Care',
      mrp: 185,
      image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'Volini Instant Pain Relief Gel',
      brand: 'Sun Pharma',
      category: 'OTC Care',
      mrp: 245,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300',
    }
  ];

  return (
    <div className="space-y-24 pb-16" id="home-page-container">
      <SEO 
        title="Your Trusted Medical Store" 
        description="Noor Medical in AP Colony, Gaya is your most trusted pharmacy. We provide genuine medicines, surgical supplies, child nutrition, and health monitoring kits." 
        path="/"
      />

      {/* Hero Banner Section */}
      <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center bg-slate-50 dark:bg-slate-950 pt-24 pb-12 overflow-hidden" id="hero-section">
        {/* Decorative subtle abstract background circles */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-600/5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Information */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>100% Genuine Medicines Guaranteed</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Your Trusted Pharmacy in <br className="hidden sm:inline" />
              <span className="text-emerald-600 dark:text-emerald-400">
                A P Colony, Gaya
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices. Experience quick pickup and dedicated customer support.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => openModal()}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-xl transition-all hover:scale-102 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href="tel:+919304311038"
                className="w-full sm:w-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-100 font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/40"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>Call Now</span>
              </a>

              <a
                href="https://maps.google.com/?q=Noor+Medical+AP+Colony+Gaya+Bihar"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-bold flex items-center justify-center gap-1 py-3 group"
              >
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Fast Stats trust signals */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="text-2xl font-bold text-slate-800 dark:text-white">100%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Genuine drugs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800 dark:text-white">5 Star</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Service review</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800 dark:text-white">AP Colony</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Gaya Location</div>
              </div>
            </div>
          </div>

          {/* Hero Banner Image Graphic */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-square md:max-w-md">
              {/* Decorative green accent square under card */}
              <div className="absolute -inset-2 bg-emerald-600/10 rounded-[2rem] transform rotate-3"></div>
              
              <div className="absolute inset-0 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] shadow-2xl overflow-hidden p-3 transform -rotate-1 transition-transform hover:rotate-0 duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800" 
                  alt="Noor Medical Storefront and Pharmacy Racks"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-[1.6rem]"
                />
                
                {/* Floating pill badge card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 dark:border-slate-800 flex items-center space-x-3">
                  <div className="p-3 bg-emerald-500/20 text-emerald-600 rounded-xl">
                    <Clock className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Fast Response</div>
                    <div className="text-sm font-bold text-slate-800 dark:text-white">Prescription Ready in 30 Mins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Short About Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about-preview">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual element */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Pharmacist organizing genuine medicines"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Embedded Mini Stat Badge */}
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-2xl max-w-xs border border-emerald-500 hidden sm:block">
              <div className="text-3xl font-extrabold">AP Colony</div>
              <p className="text-xs text-emerald-100 mt-1 leading-relaxed">
                Serving hundreds of households across Gaya with prescription delivery and surgical kits.
              </p>
            </div>
          </div>

          {/* Copy content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest pl-2 border-l-2 border-emerald-500">
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                About Noor Medical Store
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Noor Medical is a standard healthcare pharmacy situated in the prime residential locality of A P Colony, Gaya. Built on the core values of safety, professional integrity, and customer trust, we provide local residents with seamless access to genuine lifesaving therapeutic drugs and diagnostics.
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              We specialize in temperature-sensitive medicine storage (insulin, specialty vaccines) and stock a comprehensive inventory of baby foods, maternal nutrition, and orthopedic braces.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 font-bold text-sm transition-colors group"
              >
                <span>Read Our Full Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Services Section (Max 6) */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16" id="services-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest pl-2 border-l-2 border-emerald-500">
                Healthcare Solutions
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Our Featured Services
              </h2>
            </div>
            <div>
              <Link
                to="/services"
                className="inline-flex items-center space-x-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm px-5 py-3 rounded-xl transition-all hover:scale-102 shadow-sm"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="p-3 bg-emerald-50 dark:bg-slate-800 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-[10px] font-extrabold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50 dark:border-slate-800/50 mt-4 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">Noor Certified Store</span>
                  <button
                    onClick={() => openModal(service.title)}
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-bold flex items-center gap-1"
                  >
                    <span>Order Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="why-choose-us">
        {/* Left column (copy) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest pl-2 border-l-2 border-emerald-500">
              Pharmacy Standard
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Why Gaya Chooses Noor Medical
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Unlike standard general medical shops, we are heavily committed to safe medical practices. Every medicine dispatched is carefully checked against the physical prescription to prevent dosage error or side effect hazards.
          </p>

          {/* Bullet points */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start space-x-3.5">
              <div className="p-1.5 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 rounded-lg shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white">Strict Cold-Chain Maintenance</h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">Continuous refrigeration keeps critical diabetic insulins, vaccines, and biologics highly active.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="p-1.5 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 rounded-lg shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white">Verified Batch-Level Billing</h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">Proper GST printed bills with batch numbers and expiry dates guarantee 100% genuine source validation.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="p-1.5 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 rounded-lg shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white">Same-Day AP Colony Delivery</h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">Priority home delivery for our elderly and bedridden neighbors with medicine lists.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column (Visual banner / badges grid) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-2 hover:-translate-y-1 transition-all">
            <span className="text-2xl font-bold text-emerald-600">100%</span>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white">Direct Sourcing</h4>
            <p className="text-xs text-slate-400 leading-normal">Straight from authorized depots to keep prices highly genuine.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-2 hover:-translate-y-1 transition-all">
            <span className="text-2xl font-bold text-emerald-600">Verified</span>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white">Pharmacist</h4>
            <p className="text-xs text-slate-400 leading-normal">Certified healthcare executive supervising every prescription review.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-2 hover:-translate-y-1 transition-all">
            <span className="text-2xl font-bold text-emerald-600">2 Hour</span>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white">Fast Turnaround</h4>
            <p className="text-xs text-slate-400 leading-normal">Prompt delivery within AP Colony on request.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-2 hover:-translate-y-1 transition-all">
            <span className="text-2xl font-bold text-emerald-600">Secure</span>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white">Prescription File</h4>
            <p className="text-xs text-slate-400 leading-normal">Directly upload prescriptions safely on WhatsApp.</p>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16" id="featured-products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="space-y-2 text-center">
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Available Store Items
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Popular Healthcare Products
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Explore some of our highly requested healthcare monitors, baby formulas, and fast relief gels available at best prices.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeProducts.map((prod, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="h-44 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md text-[10px] font-bold text-slate-600 dark:text-slate-300 px-2 py-1 rounded-md">
                      {prod.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-1.5">
                    <div className="text-xs text-slate-400 font-semibold">{prod.brand}</div>
                    <h3 className="text-sm font-bold text-slate-800 dark:text-white line-clamp-1">
                      {prod.name}
                    </h3>
                    <div className="flex items-baseline gap-1 pt-1.5">
                      <span className="text-xs text-slate-400 font-medium">MRP:</span>
                      <span className="text-base font-extrabold text-slate-900 dark:text-emerald-400">₹{prod.mrp.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Footer action button */}
                <div className="p-5 pt-0 border-t border-slate-50 dark:border-slate-800/40">
                  <button
                    onClick={() => openModal(prod.name)}
                    className="w-full mt-4 bg-emerald-600/10 hover:bg-emerald-600 text-emerald-700 dark:text-emerald-400 hover:text-white border border-emerald-500/10 hover:border-transparent text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center space-x-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp Pre-Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/services"
              className="inline-flex items-center space-x-1.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <span>Use Medicine Stock Search Engine</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Customer Reviews Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="reviews-preview">
        {/* Header */}
        <div className="space-y-2 text-center">
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            Verified Testimonials
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-50 dark:border-slate-800/40 mt-6 flex justify-between items-center text-xs">
                <div>
                  <div className="font-bold text-slate-800 dark:text-white">{rev.author}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{rev.source}</div>
                </div>
                <span className="text-slate-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Redirection Button */}
        <div className="text-center pt-2">
          <div className="inline-flex items-center space-x-2 bg-amber-500/5 border border-amber-500/10 px-4 py-2 rounded-xl text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold text-amber-600">4.9 / 5.0 Rating</span>
            <span>on Google Maps & local patient records in Gaya.</span>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16" id="faq-preview">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="space-y-2 text-center">
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqData.slice(0, 3).map((faq, index) => (
              <details
                key={index}
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex justify-between items-center p-5 font-semibold text-sm text-slate-800 dark:text-white cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors select-none focus:outline-none">
                  <span>{faq.question}</span>
                  <span className="p-1 rounded-lg bg-emerald-50 dark:bg-slate-800 text-emerald-600 group-open:rotate-180 transition-transform">
                    <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="p-5 pt-0 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-50 dark:border-slate-800/50 leading-relaxed bg-slate-50/30 dark:bg-transparent">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <span>View All Store FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Dynamic CTA Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="quick-action-banner">
        <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl shadow-emerald-900/10">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-2xl"></div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full">
              Emergency & Fast Supplies
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Need Urgent Medicines? Pre-order on WhatsApp for Instant Pickup
            </h2>
            <p className="text-sm sm:text-base text-emerald-100 max-w-lg leading-relaxed">
              Skip queue delays! Upload prescription, let our qualified staff review, bag items safely, and walk in for a hassle-free, secure medical collection.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => openModal()}
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-800 font-bold px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-102 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4.5 h-4.5 text-emerald-600 fill-current" />
                <span>Upload & Order Now</span>
              </button>

              <a
                href="tel:+919304311038"
                className="w-full sm:w-auto border border-white/30 hover:bg-white/10 text-white font-bold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4.5 h-4.5 fill-current" />
                <span>Call +91 9304311038</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Health Tips Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="health-tips-preview">
        {/* Header */}
        <div className="space-y-2 text-center">
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            Healthcare Wisdom
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Latest Health Tips & Guidance
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm">
            Read medical care guides curated by health experts on safe medicine storage and home testing.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthTips.map((tip) => (
            <article
              key={tip.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/20 px-2 py-1 rounded">
                    {tip.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {tip.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-800 dark:text-white leading-snug line-clamp-2">
                  {tip.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                  {tip.snippet}
                </p>
              </div>

              {/* Read button */}
              <div className="p-6 pt-0 border-t border-slate-50 dark:border-slate-800/40 mt-4 flex justify-between items-center text-xs">
                <span className="text-slate-400">{tip.readTime}</span>
                <Link
                  to="/about"
                  className="text-emerald-600 dark:text-emerald-400 hover:underline font-bold flex items-center gap-0.5"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Styled Newsletter Section */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-16" id="newsletter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-12 rounded-3xl shadow-md text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Subscribe to Health Alerts & stock availability
            </h2>
            <p className="text-slate-500 max-w-md mx-auto text-xs leading-relaxed">
              Stay updated on high demand vaccines, lifesaving medicine supplies, and emergency health tip alerts in Gaya, Bihar.
            </p>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to Noor Medical notifications!');
              (e.target as HTMLFormElement).reset();
            }} 
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md shadow-emerald-600/10 hover:scale-102"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-[10px] text-slate-400">
            No spam. Unsubscribe at any time. Your personal data is never shared.
          </p>
        </div>
      </section>

    </div>
  );
}
