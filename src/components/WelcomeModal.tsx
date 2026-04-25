import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { X, Gift, Sparkles, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('aquilix_welcome_modal_seen');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('aquilix_welcome_modal_seen', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-12 text-center border border-slate-100"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner relative group">
              <div className="absolute inset-0 bg-amber-400/20 blur-xl group-hover:bg-amber-400/30 transition-all rounded-full" />
              <Gift className="w-12 h-12 text-amber-500 relative z-10" />
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-center gap-2 text-sky-500 font-black uppercase tracking-widest text-xs">
                <Sparkles className="w-4 h-4" />
                SURPRISE REWARD
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="text-4xl font-display font-black text-slate-900 tracking-tighter uppercase leading-tight">
                {t.modal.title}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">{t.modal.subtitle}</span>
              </h2>
              <p className="text-slate-500 font-bold text-lg">
                {t.modal.desc}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a 
                href="#airdrop"
                onClick={() => setIsOpen(false)}
                className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-sky-500/30 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
                {t.modal.btn}
                <Rocket className="w-6 h-6" />
              </a>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 font-bold hover:text-slate-600 transition-colors text-sm"
              >
                {t.modal.later}
              </button>
            </div>

            {/* Decorative Eagle Logo Background */}
            <div className="absolute -bottom-10 -right-10 opacity-5 rotate-12 pointer-events-none">
              <img 
                src="https://artifact.static-content.com/api/artifacts/a563f45a-c5ee-4467-bc5b-48615b1bd576/image_artifact_0.png" 
                alt="Eagle Watermark" 
                className="w-48 h-48"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
