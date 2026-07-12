import React, { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProductGrid: React.FC = () => {
  const { products, filters, setFilterSidebarOpen, resetFilters } = useStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(timer);
  }, [filters]);

  const filteredProducts = products.filter((product) => {
    if (filters.category !== 'Todos' && product.category !== filters.category) {
      return false;
    }

    if (filters.searchQuery.trim() !== '') {
      const query = filters.searchQuery.toLowerCase();
      const matchesName = product.name.toLowerCase().includes(query);
      const matchesCategory = product.category.toLowerCase().includes(query);
      if (!matchesName && !matchesCategory) return false;
    }

    if (product.price > filters.maxPrice) {
      return false;
    }

    if (filters.selectedColors.length > 0) {
      const productHasColor = product.colors.some((color) =>
        filters.selectedColors.includes(color.name)
      );
      if (!productHasColor) return false;
    }

    if (filters.selectedSizes.length > 0) {
      const productHasSize = product.sizes.some((size) =>
        filters.selectedSizes.includes(size)
      );
      if (!productHasSize) return false;
    }

    if (filters.onlyInStock) {
      const hasStock = Object.values(product.stock).some((qty) => qty > 0);
      if (!hasStock) return false;
    }

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'relevance':
      default:
        return 0;
    }
  });

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            Catálogo
          </h2>
          <p className="text-xs text-zinc-500 font-medium mt-1">
            Mostrando {sortedProducts.length} productos
          </p>
        </div>

        <button
          onClick={() => setFilterSidebarOpen(true)}
          className="flex items-center gap-2 md:hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-4 py-2 rounded-xl text-xs font-bold text-zinc-300 hover:text-white transition-all"
        >
          <SlidersHorizontal size={14} className="text-accent-500" />
          Filtros
        </button>
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="glass border border-white/5 rounded-2xl p-4 space-y-4 h-[390px] flex flex-col justify-between overflow-hidden relative">
                <div className="space-y-4 flex-1">
                  <div className="aspect-square w-full rounded-xl shimmer-bg" />
                  <div className="h-3.5 w-1/4 rounded shimmer-bg" />
                  <div className="h-4.5 w-3/4 rounded shimmer-bg" />
                  <div className="h-4 w-1/2 rounded shimmer-bg" />
                </div>
                <div className="h-9 w-full rounded-xl shimmer-bg" />
              </div>
            ))}
          </motion.div>
        ) : sortedProducts.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="flex flex-col items-center justify-center text-center py-20 px-4 border border-zinc-900 rounded-3xl bg-zinc-950/40"
          >
            <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 mb-6 border border-zinc-800">
              <Search size={24} />
            </div>
            <h3 className="text-lg font-bold text-zinc-200 mb-2">No se encontraron productos</h3>
            <p className="text-sm text-zinc-500 max-w-sm mb-8 leading-relaxed">
              Intenta ajustar tus criterios de búsqueda o limpia los filtros para explorar el catálogo completo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              >
                Limpiar Filtros
              </button>
              <button
                onClick={() => {
                  resetFilters();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl bg-accent-600 hover:bg-accent-500 text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-lg shadow-accent-600/10 transition-all"
              >
                <span>Ver Todos los Productos</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
