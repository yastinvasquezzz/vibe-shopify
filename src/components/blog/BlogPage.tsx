import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import type { Article } from '../../types/store';
import { BookOpen, Calendar, Clock, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BlogPage: React.FC = () => {
  const { articles } = useStore();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-12">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Vibe Editorial</h1>
        <p className="text-xs text-zinc-500 font-medium mt-1">Explora artículos sobre diseño, tecnología y estilo de vida urbano.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((art) => (
          <div
            key={art.id}
            onClick={() => setSelectedArticle(art)}
            className="group border border-white/5 bg-zinc-950/20 rounded-3xl overflow-hidden cursor-pointer hover:border-white/10 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-900">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {art.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {art.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {art.excerpt}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <span className="text-xs font-bold text-accent-400 group-hover:text-accent-300 transition-colors flex items-center gap-1">
                Leer artículo <BookOpen size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden max-w-2xl w-full relative z-10 shadow-2xl flex flex-col max-h-[85vh]"
            >
              <div className="p-4 border-b border-zinc-900 flex justify-between items-center bg-zinc-950/80 backdrop-blur sticky top-0 z-10">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 hover:text-white uppercase tracking-wider transition-colors"
                >
                  <ArrowLeft size={12} /> Volver
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1 rounded-full bg-zinc-900 border border-zinc-855 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="overflow-y-auto flex-1">
                <div className="aspect-[16/9] w-full bg-zinc-900">
                  <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {selectedArticle.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {selectedArticle.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-tight">
                    {selectedArticle.title}
                  </h2>
                  <p className="text-sm text-zinc-350 leading-relaxed whitespace-pre-line pt-2">
                    {selectedArticle.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default BlogPage;
