import { motion } from 'motion/react';
import { PieChart, TrendingUp, Wallet, Flame, Users, Megaphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Tokenomics() {
  const { t } = useLanguage();

  const stats = [
    { label: t.tokenomics.supply, value: "100.000.000.000", icon: <TrendingUp className="w-5 h-5 text-sky-400" /> },
    { label: t.tokenomics.symbol, value: "$AQLX", icon: <Flame className="w-5 h-5 text-orange-400" /> },
    { label: t.tokenomics.blockchain, value: "BNB Smart Chain", icon: <PieChart className="w-5 h-5 text-yellow-400" /> }
  ];

  const distribution = [
    { label: t.tokenomics.dev, percent: 30, color: "bg-indigo-500", icon: <Wallet className="w-4 h-4" /> },
    { label: t.tokenomics.marketing, percent: 20, color: "bg-sky-500", icon: <Megaphone className="w-4 h-4" /> },
    { label: t.tokenomics.liquidity, percent: 20, color: "bg-emerald-500", icon: <TrendingUp className="w-4 h-4" /> },
    { label: t.tokenomics.rewards, percent: 20, color: "bg-amber-500", icon: <Users className="w-4 h-4" /> },
    { label: t.tokenomics.presale, percent: 10, color: "bg-rose-500", icon: <TrendingUp className="w-4 h-4" /> }
  ];

  return (
    <section id="tokenomics" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card p-12 mb-20 text-center bg-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
            <img 
              src="https://artifact.static-content.com/api/artifacts/a563f45a-c5ee-4467-bc5b-48615b1bd576/image_artifact_0.png" 
              alt="Eagle Watermark" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-sky-600 to-slate-900">{t.tokenomics.title}</h2>
          <p className="text-slate-500 text-lg font-medium">{t.tokenomics.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Stats */}
          <div className="lg:col-span-1 space-y-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 p-6 rounded-[24px] flex items-center gap-4 shadow-sm"
              >
                <div className="p-3 bg-slate-50 rounded-xl">{stat.icon}</div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  <p className="text-xl font-display font-black text-slate-900">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Distribution Chart */}
          <div className="lg:col-span-2 bento-card p-10 relative">
            <h3 className="text-2xl font-display font-black mb-8 text-slate-900 uppercase tracking-tighter">{t.tokenomics.distribution}</h3>
            
            <div className="space-y-8">
              {distribution.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                       <span className={`w-3 h-3 rounded-full ${item.color}`} />
                       <span className="font-bold text-slate-700">{item.label}</span>
                    </div>
                    <span className="font-display font-black text-sky-600">%{item.percent}</span>
                  </div>
                  <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                      className={`h-full ${item.color} shadow-sm`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100">
               <p className="text-slate-600 text-sm leading-relaxed font-medium">
                 {t.tokenomics.note}
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
