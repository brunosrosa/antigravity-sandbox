import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0f172a]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="w-full max-w-sm rounded-2xl bg-[#1e293b] shadow-2xl overflow-hidden border border-slate-700/50"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 text-xs font-semibold tracking-wide text-blue-400 bg-blue-500/10 rounded-full uppercase">
              In Progress
            </span>
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 leading-tight">
            Design Vibe Coding UI
          </h3>

          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Criar animações fluidas e estilizar com Tailwind V4 para provar capacidade de design system avançado do Antigravity.
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-700">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-[#1e293b]" src="https://i.pravatar.cc/100?img=11" alt="Avatar User 1" />
              <img className="w-8 h-8 rounded-full border-2 border-[#1e293b]" src="https://i.pravatar.cc/100?img=12" alt="Avatar User 2" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-500/30 transition-colors"
            >
              Completar
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
