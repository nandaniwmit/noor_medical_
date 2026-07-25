export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  category: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'store' | 'medicines' | 'products' | 'equipment';
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'ordering' | 'delivery' | 'products' | 'general';
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  snippet: string;
  content: string;
  readTime: string;
  date: string;
}
