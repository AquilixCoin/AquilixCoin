import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../lib/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.whitepaper, href: '#whitepaper' },
    { name: t.nav.roadmap, href: '#roadmap' },
    { name: t.nav.tokenomics, href: '#tokenomics' },
    { name: t.nav.eyrie, href: '#eyrie' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_1px_20px_rgba(14,165,233,0.05)]">
      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-50 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 uppercase">AQUILIX</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link, idx) => {
              const bgColors = [
                'from-sky-500/10 to-sky-600/10 hover:bg-sky-500 hover:text-white border-sky-100 text-sky-700 hover:shadow-sky-200',
                'from-amber-500/10 to-amber-600/10 hover:bg-amber-500 hover:text-white border-amber-100 text-amber-700 hover:shadow-amber-200',
                'from-indigo-500/10 to-indigo-600/10 hover:bg-indigo-500 hover:text-white border-indigo-100 text-indigo-700 hover:shadow-indigo-200',
                'from-emerald-500/10 to-emerald-600/10 hover:bg-emerald-500 hover:text-white border-emerald-100 text-emerald-700 hover:shadow-emerald-200'
              ];
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className={`bg-gradient-to-br ${bgColors[idx % bgColors.length]} px-4 py-2 rounded-xl border font-black text-[10px] uppercase tracking-widest transition-all shadow-sm hover:shadow-md h-10 flex items-center justify-center`}
                >
                  {link.name}
                </motion.a>
              );
            })}

            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-all text-xs font-bold text-slate-600"
              >
                <Globe className="w-4 h-4 text-sky-500" />
                {languages.find(l => l.code === language)?.flag}
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-36 bg-white border border-slate-200 rounded-2xl shadow-xl p-1 z-[60]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors text-xs font-semibold ${language === lang.code ? 'bg-sky-50 text-sky-600' : 'text-slate-600 hover:bg-slate-50'}`}
                      >
                        <span>{lang.label}</span>
                        <span>{lang.flag}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://pancakeswap.finance/swap?outputCurrency=0x562F23a589773e14bA9D538E43e92EA9d6C271f4"
              target="_blank"
              rel="no-referrer"
              className="bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white px-8 py-3 rounded-full font-black transition-all shadow-xl shadow-sky-500/25 text-sm uppercase tracking-wider"
            >
              {t.nav.buy}
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="p-2 bg-slate-50 rounded-xl"
              >
                <Globe className="w-5 h-5 text-sky-500" />
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-3 pb-4">
              {navLinks.map((link, idx) => {
                const bgs = [
                  'bg-sky-50 text-sky-600 border-sky-100',
                  'bg-amber-50 text-amber-600 border-amber-100',
                  'bg-indigo-50 text-indigo-600 border-indigo-100',
                  'bg-emerald-50 text-emerald-600 border-emerald-100'
                ];
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-2xl border ${bgs[idx % bgs.length]} font-black text-xs uppercase tracking-widest text-center shadow-sm`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x562F23a589773e14bA9D538E43e92EA9d6C271f4"
              target="_blank"
              rel="no-referrer"
              className="block w-full text-center bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-5 rounded-2xl font-black mt-4 shadow-xl shadow-sky-500/20 uppercase tracking-widest"
            >
              {t.nav.buy}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Lang Grid */}
      <AnimatePresence>
        {isLangOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-[70] bg-white p-6"
          >
            <div className="flex justify-between items-center mb-8">
               <h3 className="text-2xl font-black">LANGUAGE</h3>
               <button onClick={() => setIsLangOpen(false)} className="p-3 bg-slate-100 rounded-2xl"><X /></button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsLangOpen(false);
                  }}
                  className={`flex flex-col items-center gap-2 p-6 rounded-3xl border-2 transition-all ${language === lang.code ? 'bg-sky-50 border-sky-500 text-sky-600' : 'bg-slate-50 border-slate-100 text-slate-600'}`}
                >
                  <span className="text-4xl">{lang.flag}</span>
                  <span className="font-bold">{lang.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
