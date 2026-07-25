import React, { useState } from 'react';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';
import SEO from '../components/SEO';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Globe, 
  PhoneCall, 
  Navigation,
  ChevronRight
} from 'lucide-react';

export default function Contact() {
  const { openModal } = useWhatsAppModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill out Name, Phone, and your Message.');
      return;
    }
    // Perform simulated submission cleanly
    setSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Inquiry',
      message: '',
    });
  };

  return (
    <div className="space-y-24 pb-20 pt-28" id="contact-page-container">
      <SEO 
        title="Contact Us & Store Location - Gaya, Bihar" 
        description="Get in touch with Noor Medical in Gaya. Find our working hours, contact phone, direct WhatsApp order link, and interactive Google Map coordinates." 
        path="/contact"
      />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 rounded-full">
          Get in Touch Instantly
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Contact Noor Medical
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Have an inquiry about medicine availability, home delivery, or diagnostic device setups? Reach us via phone, WhatsApp, or stop by our Gaya store.
        </p>
      </section>

      {/* Business Info, Hours, Map & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Columns: Contact info & Hours */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact details */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-3">
                Store Information
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5.5 h-5.5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white">Store Address</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      A P Colony, Gaya, Bihar 823001
                    </p>
                    <p className="text-xs text-slate-400 mt-1 italic">
                      Landmark: Near Main AP Colony Park / Resident Association Road
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white">Phone Support</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      <a href="tel:+919304311038" className="hover:text-emerald-600 font-medium transition-colors">
                        +91 9304311038
                      </a>
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">Available for live calls during store hours.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white">Email Address</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      <a href="mailto:noormedicalgaya@gmail.com" className="hover:text-emerald-600 font-medium transition-colors">
                        noormedicalgaya@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="bg-slate-900 text-slate-300 p-8 rounded-3xl shadow-md space-y-6">
              <h3 className="text-lg font-bold text-white border-l-4 border-emerald-500 pl-3">
                Working Hours
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-800">
                  <span className="font-semibold text-slate-300 flex items-center">
                    <Clock className="w-4 h-4 text-emerald-400 mr-2" />
                    Monday - Saturday
                  </span>
                  <span className="text-white font-bold">8:00 AM - 10:00 PM</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-300 flex items-center">
                    <Clock className="w-4 h-4 text-emerald-400 mr-2" />
                    Sunday (Half Day)
                  </span>
                  <span className="text-emerald-400 font-bold">8:00 AM - 2:00 PM</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 leading-relaxed italic bg-white/5 p-4 rounded-xl border border-white/5">
                <strong>Pre-orders:</strong> Submitting a WhatsApp list is available 24/7. Orders are boxed by our pharmacist starting 7:30 AM daily.
              </div>
            </div>
          </div>

          {/* Right Columns: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-emerald-500 pl-3">
              Quick Inquiry / Message Form
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 p-6 rounded-2xl space-y-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <div className="space-y-1.5">
                  <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out. Our customer health coordinator has received your message and will review it. If urgent, please call us directly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-emerald-600 text-white font-bold py-2 px-5 rounded-xl text-xs hover:bg-emerald-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Amit Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. amit@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Subject Selector */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Inquiry Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-600 dark:text-slate-300"
                  >
                    <option value="General Inquiry">General Health Inquiry</option>
                    <option value="Medicine Availability">Check Medicine Availability</option>
                    <option value="Home Delivery Setup">Set Up Recurring Delivery</option>
                    <option value="Surgical/Devices Procurement">Surgical/Device Procurement</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Your Message / Requirement <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Please type your message in detail here. Mention specific brands or dosage forms if checking availability..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/15 hover:scale-[1.01] transition-transform"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry Form</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Embedded Google Maps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" id="google-maps-integration">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Location in Gaya</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Find us situated on the main residential avenue in AP Colony.
          </p>
        </div>

        {/* Map Frame and instant routing cards */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-[2rem] shadow-md">
          <div className="rounded-[1.6rem] overflow-hidden h-96 relative border border-slate-100 dark:border-slate-800">
            <iframe
              title="Noor Medical Store Gaya Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.123456789!2d84.9994!3d24.7955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f299c5658066f1%3A0xc3b860ab72f88ff2!2sAP%20Colony%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Quick Route Cards below map */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <a
              href="tel:+919304311038"
              className="bg-slate-50 dark:bg-slate-800/35 border border-slate-100 dark:border-slate-800 p-4 rounded-xl flex items-center justify-between group hover:border-emerald-500/25 transition-all"
            >
              <div className="flex items-center space-x-3">
                <span className="p-2.5 bg-emerald-100 dark:bg-emerald-950/20 text-emerald-600 rounded-lg">
                  <PhoneCall className="w-4 h-4" />
                </span>
                <span className="text-xs font-extrabold text-slate-800 dark:text-white">Call +91 9304311038</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => openModal()}
              className="bg-slate-50 dark:bg-slate-800/35 border border-slate-100 dark:border-slate-800 p-4 rounded-xl flex items-center justify-between group hover:border-emerald-500/25 transition-all"
            >
              <div className="flex items-center space-x-3">
                <span className="p-2.5 bg-emerald-100 dark:bg-emerald-950/20 text-emerald-600 rounded-lg">
                  <MessageSquare className="w-4 h-4" />
                </span>
                <span className="text-xs font-extrabold text-slate-800 dark:text-white">Prescription Order</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://maps.google.com/?q=Noor+Medical+AP+Colony+Gaya+Bihar"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="bg-slate-50 dark:bg-slate-800/35 border border-slate-100 dark:border-slate-800 p-4 rounded-xl flex items-center justify-between group hover:border-emerald-500/25 transition-all"
            >
              <div className="flex items-center space-x-3">
                <span className="p-2.5 bg-emerald-100 dark:bg-emerald-950/20 text-emerald-600 rounded-lg">
                  <Navigation className="w-4 h-4" />
                </span>
                <span className="text-xs font-extrabold text-slate-800 dark:text-white">Get Directions GPS</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
