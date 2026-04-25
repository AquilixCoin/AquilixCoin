import { motion, AnimatePresence } from 'motion/react';
import { Twitter, MessageCircle, Send, CheckCircle2, Gift, AlertCircle, Rocket } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AirdropSection() {
  const { t } = useLanguage();
  const [submitted] = useState(false);

  if (submitted) {
    return (
      <section id="airdrop" className="py-24 max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bento-card p-12 text-center bg-white"
        >
          <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-sky-500/20">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">{t.airdrop.success_title}</h2>
          <p className="text-slate-600 text-lg mb-8 font-medium">
            {t.airdrop.success_desc}
          </p>
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl inline-flex items-center gap-3 text-slate-500 font-black">
            <Rocket className="w-5 h-5 text-sky-400" />
            {t.airdrop.success_footer}
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="airdrop" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Intro Side */}
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-10 bg-gradient-to-br from-sky-100/50 to-indigo-50/30 blur-3xl -z-10 rounded-full" />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/40 backdrop-blur-sm p-8 rounded-[40px] border border-white/50 shadow-xl"
            >
              <div className="relative mb-6">
                <div className="pill-sky lowercase">
                  <Gift className="w-4 h-4" />
                  {t.airdrop.reservation}
                </div>
                <motion.img 
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="https://artifact.static-content.com/api/artifacts/a563f45a-c5ee-4467-bc5b-48615b1bd576/image_artifact_0.png" 
                  alt="Floating Eagle" 
                  className="absolute -top-12 -right-4 w-20 h-20 opacity-20 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-sky-600 to-slate-900 uppercase">
                EAGLES DON'T WALK!
              </h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <img 
                  src="https://artifact.static-content.com/api/artifacts/a563f45a-c5ee-4467-bc5b-48615b1bd576/image_artifact_0.png"
                  alt="Aquilix Eagle"
                  className="w-full max-w-md mx-auto rounded-[32px] shadow-2xl shadow-sky-500/10 border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-bold uppercase tracking-tight">
                {t.airdrop.welcome}
              </p>
              
              <div className="space-y-4">
                 <div className="flex items-start gap-4">
                   <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center shrink-0 text-white font-black shadow-sm">1</div>
                   <div className="flex flex-col gap-2">
                     <p className="text-slate-600 font-bold">{t.airdrop.step1}</p>
                     <a href="https://x.com/AquilixCoin" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-xl hover:scale-105 hover:shadow-lg transition-all text-xs font-black uppercase tracking-widest w-fit shadow-md">
                       X (Twitter)
                       <Twitter className="w-4 h-4" />
                     </a>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center shrink-0 text-white font-black shadow-sm">2</div>
                   <div className="flex flex-col gap-2">
                     <p className="text-slate-600 font-bold">{t.airdrop.step2}</p>
                     <a href="https://t.me/AQLXCoinchat" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded-xl hover:scale-105 hover:shadow-lg transition-all text-xs font-black uppercase tracking-widest w-fit shadow-md">
                       Telegram Chat
                       <Send className="w-4 h-4" />
                     </a>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center shrink-0 text-white font-black shadow-sm">3</div>
                   <p className="text-slate-600 font-bold">{t.airdrop.step3}</p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side - Simplified to a button */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-8 md:p-12 rounded-[40px] shadow-2xl flex flex-col items-center text-center justify-center space-y-8 min-h-[400px]"
            >
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <Gift className="w-10 h-10 text-sky-500" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-black text-sky-600 uppercase tracking-tighter">
                  {t.airdrop.reservation}
                </h3>
                <p className="text-slate-500 font-medium max-w-sm mx-auto">
                  {t.airdrop.welcome}
                </p>
              </div>

              <a 
                href="https://forms.gle/S2h1n3AQLXFormExample" // Placeholder, user mentioned Google Form
                target="_blank"
                rel="no-referrer"
                className="w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500 bg-[length:200%_auto] animate-gradient-x hover:scale-[1.02] text-white py-6 rounded-[32px] font-black text-2xl flex items-center justify-center gap-4 transition-all shadow-[0_20px_50px_rgba(2,132,199,0.3)] group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
                {t.airdrop.btn}
                <Rocket className="w-8 h-8" />
              </a>
              
              <div className="flex items-center gap-2 text-xs text-amber-600 font-black">
                <AlertCircle className="w-4 h-4" />
                MetaMask / Trust Wallet BEP-20
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
