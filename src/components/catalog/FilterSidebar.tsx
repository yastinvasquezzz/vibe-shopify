import React from 'react';
import { useStore } from '../../store/useStore';
import { X, SlidersHorizontal, RotateCcw } from 'lucide-react';

export const FilterSidebar: React.FC = () => {
  const {
    filters,
    setFilterCategory,
    setPriceRange,
    toggleColorFilter,
    toggleSizeFilter,
    setSortBy,
    toggleStockFilter,
    resetFilters,
    isFilterSidebarOpen,
    setFilterSidebarOpen,
    products
  } = useStore();

  const categories = ['Todos', 'Audio', 'Moda', 'Accesorios'];
  
  const allSizes = Array.from(
    new Set(products.flatMap((p) => p.sizes))
  );

  const uniqueColorsMap = new Map<string, string>();
  products.forEach((p) => {
    p.colors.forEach((c) => {
      uniqueColorsMap.set(c.name, c.hex);
    });
  });
  const allColors = Array.from(uniqueColorsMap.entries()).map(([name, hex]) => ({ name, hex }));

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-80 bg-zinc-950 border-r border-zinc-900 p-6 transition-transform duration-300 transform md:relative md:transform-none md:z-0 md:bg-transparent md:border-r-0 md:p-0 ${
        isFilterSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      <div className="flex items-center justify-between mb-6 md:hidden">
        <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
          <SlidersHorizontal size={16} className="text-accent-500" />
          Filtros
        </div>
        <button
          onClick={() => setFilterSidebarOpen(false)}
          className="p-1.5 text-zinc-400 hover:text-white"
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-8">
        <div>
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Ordenar Por</h4>
          <select
            value={filters.sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-accent-500"
          >
            <option value="relevance">Relevancia</option>
            <option value="price-asc">Precio: Bajo a Alto</option>
            <option value="price-desc">Precio: Alto a Bajo</option>
            <option value="rating">Calificación</option>
          </select>
        </div>

        <div>
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Categorías</h4>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`text-left text-sm py-1.5 px-3 rounded-lg transition-all ${
                  filters.category === cat
                    ? 'bg-zinc-900 text-white font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Precio Máximo</h4>
            <span className="text-sm font-bold text-accent-400">S/. {filters.maxPrice}</span>
          </div>
          <input
            type="range"
            min="0"
            max="300"
            step="10"
            value={filters.maxPrice}
            onChange={(e) => setPriceRange(filters.minPrice, parseInt(e.target.value))}
            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-accent-500"
          />
          <div className="flex justify-between text-[10px] text-zinc-500 font-bold mt-2">
            <span>S/. 0</span>
            <span>S/. 300</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Colores</h4>
          <div className="flex flex-wrap gap-2.5">
            {allColors.map((color) => {
              const isSelected = filters.selectedColors.includes(color.name);
              return (
                <button
                  key={color.name}
                  onClick={() => toggleColorFilter(color.name)}
                  className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                    isSelected ? 'border-accent-500 scale-110 shadow-lg shadow-accent-500/20' : 'border-white/10 hover:scale-105'
                  }`}
                  title={color.name}
                  aria-label={`Filter by color ${color.name}`}
                >
                  <span
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Tallas / Tamaños</h4>
          <div className="flex flex-wrap gap-2">
            {allSizes.map((size) => {
              const isSelected = filters.selectedSizes.includes(size);
              return (
                <button
                  key={size}
                  onClick={() => toggleSizeFilter(size)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${
                    isSelected
                      ? 'border-accent-500 bg-accent-500/10 text-accent-400'
                      : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-white'
                  }`}
                  aria-label={`Filter by size ${size}`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Disponibilidad</h4>
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <div className="relative">
              <input
                type="checkbox"
                checked={filters.onlyInStock}
                onChange={toggleStockFilter}
                className="sr-only"
              />
              <div
                className={`w-10 h-6 rounded-full transition-colors ${
                  filters.onlyInStock ? 'bg-accent-600' : 'bg-zinc-800'
                }`}
              />
              <div
                className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${
                  filters.onlyInStock ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </div>
            <span className="text-sm font-semibold text-zinc-300">Solo en Stock</span>
          </label>
        </div>

        <button
          onClick={resetFilters}
          className="flex items-center justify-center gap-2 w-full border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 py-2.5 rounded-xl text-xs font-bold text-zinc-400 hover:text-white transition-all"
        >
          <RotateCcw size={14} />
          Restablecer Filtros
        </button>
      </div>
    </div>
  );
};
