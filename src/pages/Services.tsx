import MedicineStockChecker from '../components/MedicineStockChecker';
import { allServicesCategories } from '../data/mockData';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';
import SEO from '../components/SEO';
import { ShieldAlert, CheckCircle2, ChevronRight, MessageSquare, PhoneCall, HelpCircle } from 'lucide-react';

export default function Services() {
  const { openModal } = useWhatsAppModal();

  return (
    <div className="space-y-24 pb-20 pt-28" id="services-page-container">
      <SEO 
        title="Medicines, Health Devices & Stock Search" 
        description="Search medicine availability in Gaya. Explore our specialized prescription drugs, baby care, surgical products, and OTC medicines catalog." 
        path="/services"
      />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 rounded-full">
          Search Live Pharmacy Stock
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Medicines & Healthcare Catalog
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Search for prescription drugs, OTC medicines, and surgical gear instantly below, or explore our category breakdowns for safe healthcare solutions in Gaya.
        </p>
      </section>

      {/* CENTERPIECE FEATURE: Medicine Stock Checker */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-1.5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <MedicineStockChecker />
        </div>
      </section>

      {/* Prescription Safety Notice banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-600 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-md">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 mt-0.5">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold">Important Prescription Notice</h3>
              <p className="text-xs text-emerald-100 max-w-xl leading-relaxed">
                As per Drugs and Cosmetics Act regulations, scheduling H, H1, and X drugs require a physical stamp and prescription signature by a registered medical practitioner before dispensing.
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto text-center">
            <button
              onClick={() => openModal()}
              className="w-full md:w-auto bg-white text-emerald-700 font-extrabold text-xs px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors shadow-sm"
            >
              Upload Prescription on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="service-categories">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Our Complete Product Ranges</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            We store a massive catalogue of medical solutions classified under strict hygienic conditions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allServicesCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-3">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {cat.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      className="flex items-center space-x-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-slate-50 dark:border-slate-800/60 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">Available at Noor Medical Gaya</span>
                <button
                  onClick={() => openModal(cat.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-white hover:bg-emerald-600 px-4 py-2 rounded-xl border border-emerald-500/20 hover:border-transparent transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Pre-order Category</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diagnostics Guidelines */}
      <section className="bg-slate-50 dark:bg-slate-900/40 py-16" id="equipment-usage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest pl-2 border-l-2 border-emerald-500">
                Safe Device Usage
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                How to Get Accurate Blood Pressure Readings
              </h3>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-justify">
              Many patients receive false high blood pressure alarms at home due to incorrect cuff posture. We advise these steps for accuracy:
            </p>

            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start space-x-2">
                <span className="font-bold text-emerald-600 shrink-0 mt-0.5">1.</span>
                <span>Rest quietly for at least 5 minutes before placing the arm cuff.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-emerald-600 shrink-0 mt-0.5">2.</span>
                <span>Sit in a straight chair, place feet flat on the floor, and keep the upper arm level with your heart.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold text-emerald-600 shrink-0 mt-0.5">3.</span>
                <span>Do not talk, eat, or drink cold coffee/tea within 30 minutes of measuring.</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="tel:+919304311038"
                className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 font-bold text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call our pharmacist for custom device recommendations</span>
              </a>
            </div>
          </div>

          {/* Visual card */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-md space-y-6">
            <div className="flex items-center space-x-3 text-emerald-600">
              <HelpCircle className="w-8 h-8" />
              <h4 className="font-bold text-slate-800 dark:text-white">Quick Device Inquiries</h4>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Have specific questions about Accu-Chek glucometer strip compatibilities, thermometer calibrations, or nebulizer masks? Submit a fast WhatsApp inquiry and our pharmacist will reply within 30 minutes.
            </p>
            <button
              onClick={() => openModal('Device Compatibility Inquiry')}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md shadow-emerald-600/10"
            >
              Ask Our Pharmacist Now
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
