import { motion } from 'motion/react';
import { Bird, ExternalLink, Lock, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function TheEyrie() {
  const { t } = useLanguage();
  const [rewardPool, setRewardPool] = useState(5000000000); // 5 Billion

  useEffect(() => {
    const interval = setInterval(() => {
      setRewardPool(prev => Math.max(0, prev - Math.floor(Math.random() * 1000) - 500));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="eyrie" className="py-24 bg-gradient-to-b from-slate-50 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden bg-white border border-slate-200 rounded-[40px] p-8 md:p-16 shadow-xl">
          {/* Decorative backdrop */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="pill-gold mb-6 lowercase">
                <Lock className="w-4 h-4" />
                {t.eyrie.low_risk}
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 uppercase">
                THE EYRIE <br />
                <span className="text-amber-500 underline decoration-sky-500/30">{t.eyrie.title}</span>
              </h2>
              
              <div className="mb-8 p-6 bg-slate-50 border border-slate-200 rounded-3xl">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase mb-1">{t.eyrie.reward_pool}</p>
                    <p className="text-3xl font-display font-black text-amber-500">{rewardPool.toLocaleString()} $AQLX</p>
                  </div>
                  <p className="text-xs text-slate-400 font-bold uppercase">{t.eyrie.pool_capacity}</p>
                </div>
                <div className="h-3 w-full bg-white rounded-full overflow-hidden border border-slate-100">
                  <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: `${(rewardPool / 5000000000) * 100}%` }}
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                  />
                </div>
              </div>

              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                {t.eyrie.desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-8 mb-10">
                <div>
                   <p className="text-5xl font-display font-black text-slate-900 mb-2">20%</p>
                   <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{t.eyrie.fixed_apy}</p>
                </div>
                <div className="w-px h-16 bg-slate-200 hidden sm:block" />
                <div>
                   <p className="text-5xl font-display font-black text-slate-900 mb-2">0%</p>
                   <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{t.eyrie.fee}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-5 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-sky-500/20 transition-all"
                >
                  {t.eyrie.connect}
                  <TrendingUp className="w-5 h-5" />
                </motion.button>
                <motion.a
                  href="#airdrop"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-5 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-black flex items-center gap-2 border-2 border-slate-100 shadow-xl shadow-slate-200/20 transition-all"
                >
                  {t.eyrie.form}
                  <ExternalLink className="w-5 h-5 text-amber-500" />
                </motion.a>
              </div>
            </div>

            <motion.div
              initial={{ rotate: -5 }}
              whileInView={{ rotate: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-8 rounded-[32px] shadow-2xl relative"
            >
              <div className="absolute -top-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-xl font-black text-sm rotate-12 shadow-lg">
                LIVE
              </div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm overflow-hidden p-1">
                    <img 
                      src="https://artifact.static-content.com/api/artifacts/a563f45a-c5ee-4467-bc5b-48615b1bd576/image_artifact_0.png" 
                      alt="Aquilix Eagle" 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="font-black text-slate-900">{t.eyrie.card_portfolio}</p>
                    <p className="text-[10px] text-slate-400 font-mono tracking-tight font-bold">0x000...000</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 mb-1 font-bold">{t.eyrie.active_rewards}</p>
                  <p className="text-sky-600 font-mono font-black">+0.00 $AQLX</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <p className="text-[10px] text-slate-400 mb-1 font-bold">{t.eyrie.staked}</p>
                    <p className="font-black text-slate-900">0.00</p>
                 </div>
                 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <p className="text-[10px] text-slate-400 mb-1 font-bold">{t.eyrie.unclaimed}</p>
                    <p className="font-black text-amber-500">0.00</p>
                 </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-slate-400">{t.eyrie.lock}</span>
                  <span className="text-slate-900">{t.eyrie.days}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-slate-400">{t.eyrie.capacity}</span>
                  <span className="text-emerald-500">{t.eyrie.open}</span>
                </div>
                <div className="w-full h-2 bg-slate-50 rounded-full mt-2 border border-slate-100 overflow-hidden">
                  <div className="w-1/3 h-full bg-sky-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
