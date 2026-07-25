import { useState, useMemo } from 'react';
import medicineData from '../data/medicineStock.json';
import { MedicineItem } from '../types';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';
import { Search, Info, CheckCircle2, AlertTriangle, XCircle, ShoppingBag } from 'lucide-react';

export default function MedicineStockChecker() {
  const { openModal } = useWhatsAppModal();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Parse local stock data cleanly
  const stockItems: MedicineItem[] = useMemo(() => {
    return medicineData as MedicineItem[];
  }, []);

  // Filtered categories lists
  const categories = useMemo(() => {
    const list = new Set(stockItems.map(item => item.category));
    return ['All', ...Array.from(list)];
  }, [stockItems]);

  // Handle live search matching
  const filteredItems = useMemo(() => {
    return stockItems.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [stockItems, searchTerm, selectedCategory]);

  const getStatusBadge = (status: MedicineItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs px-2.5 py-1.5 rounded-lg font-bold border border-emerald-200/50 dark:border-emerald-900/30">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Available</span>
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 text-xs px-2.5 py-1.5 rounded-lg font-bold border border-amber-200/50 dark:border-amber-900/30">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            <span>Limited Stock</span>
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1 bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 text-xs px-2.5 py-1.5 rounded-lg font-bold border border-rose-200/50 dark:border-rose-900/30">
            <XCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Out of Stock</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden p-6 md:p-8 space-y-6" id="medicine-stock-checker">
      
      {/* Intro Context */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-emerald-600" />
          <span>Real-time Medicine Stock Checker</span>
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Check the instant availability, brand details, and maximum retail prices of common medical supplies in our Gaya store. You can place WhatsApp orders directly for any available item.
        </p>
      </div>

      {/* Filters & Search Box */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by Medicine Name, Brand, or Illness (e.g. Calpol, GSK, Fever...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400"
          />
        </div>

        {/* Category Selector */}
        <div className="md:w-64">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'All' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Container */}
      <div className="overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-xs border-b border-slate-100 dark:border-slate-800">
              <th className="p-4">Medicine & Brand</th>
              <th className="p-4">Category</th>
              <th className="p-4 text-center">MRP (INR)</th>
              <th className="p-4 text-center">Expiry</th>
              <th className="p-4 text-center">Availability Status</th>
              <th className="p-4 text-right">Instant Order</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <tr 
                  key={item.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors"
                >
                  <td className="p-4">
                    <div className="font-semibold text-slate-800 dark:text-white">{item.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">Brand: {item.brand}</div>
                  </td>
                  <td className="p-4">
                    <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-md font-medium">
                      {item.category}
                    </span>
                  </td>
                  <td className="p-4 text-center font-bold text-slate-900 dark:text-emerald-400">
                    ₹{item.mrp.toFixed(2)}
                  </td>
                  <td className="p-4 text-center text-xs font-mono text-slate-400">
                    {item.expiry}
                  </td>
                  <td className="p-4 text-center">
                    {getStatusBadge(item.status)}
                  </td>
                  <td className="p-4 text-right">
                    {item.status !== 'Out of Stock' ? (
                      <button
                        onClick={() => openModal(item.name)}
                        className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm transition-all hover:scale-105 active:scale-95"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Order Now</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-400 text-xs font-bold px-3 py-1.5 rounded-lg cursor-not-allowed"
                      >
                        Unavailable
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-10 text-slate-400">
                  <div className="space-y-2">
                    <Search className="w-8 h-8 mx-auto stroke-[1.5]" />
                    <p className="font-medium text-slate-500">No medicines found matching "{searchTerm}"</p>
                    <p className="text-xs">Try searching for alternative names, or contact us directly on WhatsApp to check store catalog.</p>
                    <button
                      onClick={() => openModal()}
                      className="mt-3 inline-flex items-center gap-1.5 border border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 text-xs font-bold px-4 py-2 rounded-xl transition-all"
                    >
                      Ask custom medicine on WhatsApp
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Future API Integration Ready Notice */}
      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start space-x-3 text-xs text-slate-400 leading-normal">
        <Info className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
        <p>
          <strong>Technical Note:</strong> This inventory is driven by a structured JSON schema in `medicineStock.json`. Future database/backend integration is extremely simple — simply swap the direct file import with an asynchronous `fetch()` API call in `useEffect()` or React Query.
        </p>
      </div>

    </div>
  );
}
