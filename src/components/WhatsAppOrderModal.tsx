import React, { useState, useEffect, useRef } from 'react';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';
import { X, Send, Phone, Upload, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

export default function WhatsAppOrderModal() {
  const { isOpen, closeModal, prefilledMedicine } = useWhatsAppModal();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    medicine: '',
    hasPrescription: 'No',
    prescriptionName: '',
    message: '',
    preferredTime: 'Anytime (08:00 AM - 10:00 PM)',
  });

  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update form if prefilledMedicine changes
  useEffect(() => {
    if (prefilledMedicine) {
      setFormData((prev) => ({ ...prev, medicine: prefilledMedicine }));
    } else {
      setFormData((prev) => ({ ...prev, medicine: '' }));
    }
  }, [prefilledMedicine, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData((prev) => ({
        ...prev,
        hasPrescription: 'Yes',
        prescriptionName: file.name,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        hasPrescription: 'Yes',
        prescriptionName: file.name,
      }));
    }
  };

  const removePrescription = () => {
    setFormData((prev) => ({
      ...prev,
      hasPrescription: 'No',
      prescriptionName: '',
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verification
    if (!formData.name || !formData.phone || !formData.medicine || !formData.address) {
      alert('Please fill in Name, Phone, Medicine Required, and Delivery Address.');
      return;
    }

    // Prefilled formatted message format as requested
    const businessName = 'Noor Medical';
    const text = `Hello ${businessName},
Medicine Order

Customer Name: ${formData.name}
Phone: ${formData.phone}
Medicine Required: ${formData.medicine}
Address: ${formData.address}
Prescription: ${formData.hasPrescription}${formData.prescriptionName ? ` (${formData.prescriptionName})` : ''}
Email: ${formData.email || 'N/A'}
Preferred Time: ${formData.preferredTime}
Message: ${formData.message || 'N/A'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919304311038?text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] transition-all"
        id="whatsapp-order-modal"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-4 flex justify-between items-center text-white shrink-0">
          <div>
            <h3 className="text-lg font-bold">WhatsApp Medicine Order</h3>
            <p className="text-xs text-emerald-100">Send prescription or list to place your order</p>
          </div>
          <button 
            onClick={closeModal}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white hover:scale-105 transition-all"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content (Scrollable) */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-slate-700 dark:text-slate-300">
          
          {/* Warning Banner */}
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 p-3 rounded-xl flex items-start space-x-2 text-xs text-amber-800 dark:text-amber-300">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <p>
              <strong>Note:</strong> Valid prescription is strictly required for schedule drugs and prescription-only medications upon delivery/collection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Rahul Kumar"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                WhatsApp Phone <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Email (Optional) */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g. rahul@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Medicine Name / Requirement */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Medicine Required <span className="text-rose-500">*</span>
            </label>
            <textarea
              name="medicine"
              rows={2}
              required
              placeholder="List medicine names and quantities (e.g. Calpol 650mg - 2 strips, Volini Gel - 1 tube)"
              value={formData.medicine}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Delivery Address <span className="text-rose-500">*</span>
            </label>
            <textarea
              name="address"
              rows={2}
              required
              placeholder="Enter full address (e.g. House No. 42, Road 3, A P Colony, Gaya, Bihar 823001)"
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400"
            />
          </div>

          {/* Preferred Delivery Time */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-600" /> Preferred Delivery Window
            </label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-600 dark:text-slate-300"
            >
              <option value="Anytime (08:00 AM - 10:00 PM)">Anytime (08:00 AM - 10:00 PM)</option>
              <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
              <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
              <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
              <option value="Night (08:00 PM - 10:00 PM)">Night (08:00 PM - 10:00 PM)</option>
            </select>
          </div>

          {/* Prescription Upload Area */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Upload Prescription (Optional but highly recommended)
            </label>
            
            {formData.hasPrescription === 'Yes' ? (
              <div className="border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium truncate max-w-[250px]">{formData.prescriptionName}</span>
                </div>
                <button
                  type="button"
                  onClick={removePrescription}
                  className="text-xs text-rose-500 hover:underline font-semibold"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                  dragActive
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20'
                    : 'border-slate-300 dark:border-slate-700 hover:border-emerald-500 hover:bg-slate-50/50 dark:hover:bg-slate-800/50'
                }`}
              >
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-1" />
                <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Drag & Drop Prescription Photo or <span className="text-emerald-600 underline">Browse File</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-1">Supports JPG, PNG, PDF up to 5MB</p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="hidden"
                />
              </div>
            )}
          </div>

          {/* Special Instructions (Optional) */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              Special Instructions / Notes
            </label>
            <textarea
              name="message"
              rows={2}
              placeholder="e.g. Please bring changes for Rs. 500, ring bell upon reaching, etc."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400"
            />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 shrink-0">
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl py-3 px-4 flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] shadow-md shadow-emerald-600/10"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
            <a
              href="tel:+919304311038"
              className="w-full border border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-700 dark:text-slate-200 font-semibold rounded-xl py-3 px-4 flex items-center justify-center space-x-2 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Noor Medical</span>
            </a>
          </div>

        </form>
      </div>
    </div>
  );
}
