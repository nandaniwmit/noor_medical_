import { ReviewItem, FAQItem, HealthTip, GalleryItem } from '../types';

export const featuredServices = [
  {
    id: 's-1',
    title: 'Genuine Prescription Medicines',
    description: '100% certified, temperature-controlled storage for critical cardiac, diabetic, and respiratory prescription therapies.',
    icon: 'ShieldCheck',
    badge: 'Certified Only',
  },
  {
    id: 's-2',
    title: 'Over-The-Counter (OTC) Drugs',
    description: 'Instant pain relievers, allergy tablets, cough syrups, cold medicines, and first-aid essentials readily available.',
    icon: 'Pills',
    badge: 'Popular',
  },
  {
    id: 's-3',
    title: 'Home Healthcare Devices',
    description: 'Modern digital blood pressure monitors, blood glucose checkers, nebulizers, pulse oximeters, and steam inhalers.',
    icon: 'Activity',
    badge: 'Top Brands',
  },
  {
    id: 's-4',
    title: 'Baby Care & Nutrition Essentials',
    description: 'Premium baby formula, baby food, sensitive baby wipes, diapers, pediatric lotions, and baby toiletries.',
    icon: 'Baby',
    badge: 'Safe & Pure',
  },
  {
    id: 's-5',
    title: 'Daily Vitamins & Health Supplements',
    description: 'Multi-vitamins, calcium supplements, protein powders, energy boosters, herbal tonics, and wellness capsules.',
    icon: 'Apple',
    badge: 'Wellness',
  },
  {
    id: 's-6',
    title: 'Surgical & Wound Care Supplies',
    description: 'Sterile cotton roll, medical tapes, gauzes, bandages, antiseptic dressings, and surgical gloves.',
    icon: 'HeartHandshake',
    badge: 'Sterilized',
  },
];

export const allServicesCategories = [
  {
    title: 'Prescription Medicines',
    description: 'Standard therapeutic drugs for chronic conditions. Requires a valid doctor prescription.',
    items: ['Cardiac Care (Heart)', 'Anti-Diabetic Medications', 'Hypertension Control', 'Asthma & Respiratory Inhalers', 'Neurology & Psychotropic Drugs', 'Antibiotics & Anti-virals'],
  },
  {
    title: 'OTC (Over-The-Counter) Medicines',
    description: 'Everyday wellness medications that can be purchased safely without a direct prescription.',
    items: ['Fever & Pain Relief', 'Acidity & Antacids', 'Cold, Cough & Sore Throat', 'Allergy & Antihistamines', 'Digestive Health & Laxatives', 'Ointments & Creams'],
  },
  {
    title: 'Baby & Maternal Care',
    description: 'Specially researched products to support newborn baby health and maternal nutritional requirements.',
    items: ['Infant Formulas & Nestum', 'Baby Diapers & Wet Wipes', 'Baby Soaps & Powders', 'Anti-Rash Creams', 'Nursing & Feeding Bottles', 'Maternal Vitamins'],
  },
  {
    title: 'Health Devices & Diagnostics',
    description: 'Advanced measurement kits for home tracking of critical vitals.',
    items: ['Digital BP Monitors', 'Glucometers & Test Strips', 'Infrared Thermometers', 'Pulse Oximeters', 'Compressor Nebulizers', 'Weighing Scales'],
  },
];

export const customerReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Aman Verma',
    rating: 5,
    text: 'Extremely professional medical store in Gaya. They always have genuine medicines which are sometimes hard to find elsewhere. Staff is well-behaved and verifies prescriptions carefully.',
    date: '2026-06-12',
    source: 'Google Maps Review',
  },
  {
    id: 'rev-2',
    author: 'Dr. S. K. Pathak',
    rating: 5,
    text: 'Highly reliable pharmacy in A P Colony. They maintain appropriate refrigeration for cold-storage injections and insulin vials. Recommended for genuine chronic disease medicines.',
    date: '2026-05-30',
    source: 'Practo Verified Patient',
  },
  {
    id: 'rev-3',
    author: 'Neha Kumari',
    rating: 5,
    text: 'The WhatsApp ordering feature is a lifesaver. I uploaded my dad\'s diabetes medicine prescription and they delivered it safely to our home in AP Colony within 2 hours. Very satisfied!',
    date: '2026-07-10',
    source: 'Google Local Review',
  },
];

export const faqData: FAQItem[] = [
  {
    question: 'How do I order medicines via WhatsApp?',
    answer: 'Simply click on "Order Medicine" anywhere on our site, fill out your name, contact, list of required medicines, and upload a clear photo of your doctor\'s prescription. Click "Send" and it will open WhatsApp with your prefilled details, sending it directly to us.',
    category: 'ordering',
  },
  {
    question: 'Are there any delivery charges within Gaya?',
    answer: 'We provide completely FREE home delivery of medicines for orders above Rs. 500 within AP Colony and nearby landmarks in Gaya. For smaller values, a minimal convenience fee of Rs. 20-30 is charged depending on exact distance.',
    category: 'delivery',
  },
  {
    question: 'Is a doctor prescription mandatory to buy medicines?',
    answer: 'For Scheduled Drugs, critical antibiotics, psychiatric medications, and specialized therapies, a valid medical doctor prescription is strictly mandatory. OTC items like vitamins, basic fever reducers, bandages, and baby care do not require prescriptions.',
    category: 'products',
  },
  {
    question: 'What are the store working hours?',
    answer: 'We are open Monday through Saturday from 8:00 AM to 10:00 PM. On Sundays, we operate on half-day from 8:00 AM to 2:00 PM. WhatsApp orders can be submitted 24/7 and are prioritized for fulfillment as soon as the store opens.',
    category: 'general',
  },
  {
    question: 'Are all medicines from Noor Medical genuine?',
    answer: 'Absolutely. We source 100% of our products directly from certified pharmaceutical distributors and authorized company depots. Every purchase comes with a proper batch-number bill guaranteeing authenticity.',
    category: 'general',
  },
];

export const healthTips: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'Understanding Diabetes Management at Home',
    category: 'Chronic Illness',
    snippet: 'Keep your blood glucose in check. Learn how to accurately measure your sugar levels using a digital glucometer...',
    content: 'Monitoring blood glucose at home is vital for diabetes control. Always wash hands before testing, insert a fresh test strip, prick the side of the finger (less painful than the tip), and record your fasting and post-meal values. Regular home testing helps your doctor fine-tune insulin or metformin dosages safely.',
    readTime: '3 min read',
    date: 'July 18, 2026',
  },
  {
    id: 'tip-2',
    title: 'Importance of Completing Antibiotic Courses',
    category: 'General Health',
    snippet: 'Feeling better doesn\'t mean the bacteria are gone. Discover why stopping antibiotics early creates dangerous drug resistance...',
    content: 'When prescribed antibiotics, complete the entire course exactly as directed by your physician—even if you feel completely recovered within 2 days. Stopping early allows the strongest, most resilient bacteria to survive, mutate, and cause a stronger rebound infection that is resistant to common medications.',
    readTime: '4 min read',
    date: 'July 05, 2026',
  },
  {
    id: 'tip-3',
    title: 'How to Store Your Medicines Safely',
    category: 'Medicine Care',
    snippet: 'Did you know moisture and heat can degrade tablets? Avoid storing medicines in bathroom cabinets and learn the proper ways...',
    content: 'Moisture and high temperatures degrade medicines quickly, reducing their efficacy. Never store capsules or tablets in the humid bathroom cabinet or near a hot kitchen stove. Keep them in a cool, dry place away from direct sunlight. Refrigerate critical drugs like insulin and certain eye drops under 2-8°C only (never freeze).',
    readTime: '3 min read',
    date: 'June 22, 2026',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800',
    title: 'Noor Medical Front View',
    category: 'store',
    description: 'Our beautifully lit, highly accessible storefront located in the heart of AP Colony, Gaya.',
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    title: 'Organized Medicine Racks',
    category: 'medicines',
    description: 'Systematically cataloged medications stored strictly by therapeutic classification for error-free dispensing.',
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1607619056574-7b8d304f3c6f?auto=format&fit=crop&q=80&w=800',
    title: 'Diagnostic Devices Counter',
    category: 'products',
    description: 'Dedicated counter showing fully tested digital BP cuffs, blood glucose meters, and oximeters.',
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=800',
    title: 'Refrigerated Cold Storage Unit',
    category: 'equipment',
    description: 'Specialized deep-refrigeration unit keeping vaccines, insulin, and biologics active at strict 2-8°C.',
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1631549916768-4119b2e55c26?auto=format&fit=crop&q=80&w=800',
    title: 'Over-the-Counter Section',
    category: 'products',
    description: 'Spacious aisles containing multi-vitamins, baby foods, maternal care, and first-aid dressings.',
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    title: 'Surgical & Bandage Displays',
    category: 'medicines',
    description: 'Fully stocked surgical supplies, sterile swabs, disposable syringes, and orthopedic supports.',
  }
];
