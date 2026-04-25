import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, ExternalLink, Rocket, MousePointer2 } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const targetRef = useRef(null);
  const [holderCount, setHolderCount] = useState(12432); // Initial simulated count

  useEffect(() => {
    const interval = setInterval(() => {
      setHolderCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 5000); // Increases every few seconds
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const position = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section 
      ref={targetRef} 
      className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <motion.div 
        style={{ y: position }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />
        
        {/* Floating "Feathers" / Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 + "%",
              rotate: 0,
              opacity: 0.1 
            }}
            animate={{ 
              y: ["-10%", "110%"],
              rotate: [0, 360],
              x: [(Math.random() * 100) + "%", (Math.random() * 100) + "%"]
            }}
            transition={{ 
              duration: 20 + Math.random() * 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 2
            }}
            className="absolute w-4 h-4 text-sky-400/20 pointer-events-none"
          >
            🪶
          </motion.div>
        ))}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="bento-card p-8 md:p-16 mb-20 bg-white/40 backdrop-blur-md"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="pill-sky">
              <Rocket className="w-4 h-4" />
              {t.hero.launch}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-bold shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              {t.hero.holders}: {holderCount.toLocaleString()} / 50,000
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12 uppercase relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-amber-500 to-indigo-600 animate-gradient-x">
              {t.hero.slogan}
            </span>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-sky-500 via-amber-500 to-indigo-600 rounded-full"
            />
          </h1>
          
          <div className="flex flex-col items-center justify-center gap-16 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              <div className="bento-card p-6 bg-slate-50/50 flex flex-col items-center gap-2 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                 <div className="flex gap-4 text-4xl">🐕 🐈 🐸</div>
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.hero.tired}</p>
              </div>
              
              <div className="relative flex items-center justify-center">
                {/* Extravagant Background Rings */}
                <div className="absolute inset-0 flex items-center justify-center -z-0">
                  <motion.div 
                    animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] border-2 border-sky-400/20 rounded-full border-dashed"
                  />
                  <motion.div 
                    animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] border border-amber-400/10 rounded-full"
                  />
                  <div className="absolute w-full h-full bg-sky-500/5 blur-[100px] animate-pulse rounded-full" />
                </div>

                <motion.div 
                  className="relative z-10"
                  animate={{ 
                    y: [0, -25, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-sky-500/40 blur-3xl rounded-full scale-110" />
                  <img 
                    src="https://artifact.static-content.com/api/artifacts/a563f45a-c5ee-4467-bc5b-48615b1bd576/image_artifact_0.png" 
                    alt="Aquilix Eagle" 
                    className="w-64 md:w-96 h-auto relative z-10 drop-shadow-[0_35px_60px_rgba(14,165,233,0.4)] transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
  
              <div className="bento-card p-6 bg-amber-50/50 flex flex-col items-center gap-2">
                 <motion.div 
                   whileHover={{ scale: 1.2, rotate: 5 }}
                   className="text-6xl cursor-default"
                 >
                   🦅
                 </motion.div>
                 <p className="text-xs font-black text-amber-600 uppercase tracking-widest">{t.hero.soar}</p>
              </div>
            </div>

            {/* Buttons directly under the Eagle */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl px-4">
              <motion.a
                href="https://pancakeswap.finance/swap?outputCurrency=0x562F23a589773e14bA9D538E43e92EA9d6C271f4"
                target="_blank"
                rel="no-referrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white rounded-[32px] font-black text-2xl flex items-center justify-center gap-4 transition-all shadow-[0_20px_50px_rgba(2,132,199,0.3)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
                {t.hero.start}
                <MousePointer2 className="w-8 h-8" />
              </motion.a>
              
              <motion.a
                href="#airdrop"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-white/90 backdrop-blur-md hover:bg-white text-slate-900 rounded-[24px] font-bold text-xl border-2 border-slate-100/50 shadow-xl shadow-slate-200/20 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                {t.hero.earn}
                <ExternalLink className="w-5 h-5 text-amber-500" />
              </motion.a>
            </div>
          </div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 text-slate-500 font-medium"
        >
          <a href="https://bscscan.com/token/0x562F23a589773e14bA9D538E43e92EA9d6C271f4" target="_blank" rel="no-referrer" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
            <ExternalLink className="w-4 h-4" />
            BSCScan
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
            <ExternalLink className="w-4 h-4" />
            Audit Report
          </a>
          <a href="https://pancakeswap.finance/swap?outputCurrency=0x562F23a589773e14bA9D538E43e92EA9d6C271f4" target="_blank" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
            <ExternalLink className="w-4 h-4" />
            PancakeSwap
          </a>
        </motion.div>
      </div>
    </section>
  );
}

