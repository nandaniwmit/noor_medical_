import React, { useState } from 'react';
import { galleryItems } from '../data/mockData';
import { GalleryItem } from '../types';
import SEO from '../components/SEO';
import { X, ChevronLeft, ChevronRight, ZoomIn, Info } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'All' | GalleryItem['category']>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filters items dynamically based on selection
  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const categories: { label: string; value: 'All' | GalleryItem['category'] }[] = [
    { label: 'All Images', value: 'All' },
    { label: 'Store Front', value: 'store' },
    { label: 'Medicines & Shelves', value: 'medicines' },
    { label: 'Healthcare Products', value: 'products' },
    { label: 'Medical Equipment', value: 'equipment' },
  ];

  const openLightbox = (id: string) => {
    const idx = galleryItems.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? galleryItems.length - 1 : prev! - 1));
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === galleryItems.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <div className="space-y-20 pb-20 pt-28" id="gallery-page-container">
      <SEO 
        title="Store Gallery & Product Shelves" 
        description="View photos of Noor Medical in Gaya, Bihar. Browse our clean shelves, diagnostic counters, medicine refrigeration facilities, and clinical equipment." 
        path="/gallery"
      />

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 rounded-full">
          Hygienic Clinical Environment
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Pharmacy Tour & Displays
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Take a virtual look inside Noor Medical. We maintain strict hygiene protocols, dust-proof storage, and continuous cold-chain management to protect medicine integrity.
        </p>
      </section>

      {/* Category Filter Toggles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2.5 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.value
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Zoom Icon */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 bg-white/25 backdrop-blur-md rounded-full text-white hover:scale-110 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>

                <span className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-[10px] font-extrabold text-emerald-700 dark:text-emerald-400 px-2.5 py-1.5 rounded-lg uppercase tracking-wider">
                  {item.category === 'store' ? 'Store' : item.category}
                </span>
              </div>

              {/* Caption */}
              <div className="p-5 space-y-1">
                <h3 className="font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 transition-colors text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signal Standard Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-start space-x-3 text-xs text-slate-500 dark:text-slate-400 leading-normal max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <p className="text-justify">
            <strong>Cleanliness Standards:</strong> In accordance with state health guidelines, Noor Medical maintains dust-free air-locked partitions, proper cleaning of chemical storage units twice daily, and strict humidity monitors. All high-accuracy medical diagnostic equipment on display is verified for batch-level compliance weekly.
          </p>
        </div>
      </section>

      {/* LIGHTBOX POPUP MODAL */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-[99999] bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 animate-fade-in"
        >
          {/* Header Action bar */}
          <div className="flex justify-between items-center text-white px-4 py-2 relative z-55 shrink-0">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-widest">Noor Medical Gaya</span>
              <h4 className="font-bold text-sm sm:text-base">{galleryItems[lightboxIndex].title}</h4>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
              title="Close Gallery Zoom"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Visual Stage */}
          <div className="flex-1 flex items-center justify-center relative z-50 py-4">
            {/* Left Control */}
            <button
              onClick={showPrev}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-105 active:scale-95"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Target Image */}
            <img
              src={galleryItems[lightboxIndex].url}
              alt={galleryItems[lightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[70vh] object-contain rounded-xl select-none"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Right Control */}
            <button
              onClick={showNext}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-105 active:scale-95"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Footer Details bar */}
          <div className="text-center text-slate-300 px-4 py-3 max-w-xl mx-auto relative z-55 shrink-0">
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed bg-black/45 p-4 rounded-2xl border border-slate-800">
              {galleryItems[lightboxIndex].description}
            </p>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-3">
              Photo {lightboxIndex + 1} of {galleryItems.length}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
