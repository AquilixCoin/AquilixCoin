import { motion } from 'motion/react';
import { Shield, Target, Users, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Whitepaper() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t.whitepaper.vision_title,
      desc: t.whitepaper.vision_desc
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t.whitepaper.bsc_title,
      desc: t.whitepaper.bsc_desc
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t.whitepaper.security_title,
      desc: t.whitepaper.security_desc
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t.whitepaper.ecosystem_title,
      desc: t.whitepaper.ecosystem_desc
    }
  ];

  return (
    <section id="whitepaper" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black mb-4 tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-sky-600 to-slate-900"
          >
            {t.whitepaper.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto font-medium"
          >
            {t.whitepaper.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bento-card p-8 group border border-slate-100 bg-white"
            >
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-black text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm"
        >
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-3xl font-display font-black text-slate-900 mb-2">{t.whitepaper.litepaper_title}</h4>
            <p className="text-slate-600 font-medium text-lg">{t.whitepaper.litepaper_desc}</p>
          </div>
          <a 
            href="/whitepaper.pdf" 
            target="_blank"
            className="group relative px-10 py-5 bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white rounded-[24px] font-black whitespace-nowrap transition-all shadow-xl shadow-slate-900/10 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
            <span className="relative z-10">{t.whitepaper.btn}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
