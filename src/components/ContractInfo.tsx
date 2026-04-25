import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, ExternalLink, ShieldCheck, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContractInfo() {
  const { t } = useLanguage();
  const contractAddress = "0x562F23a589773e14bA9D538E43e92EA9d6C271f4";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-xl border border-slate-200 p-4 md:p-6 rounded-[32px] shadow-2xl flex flex-col md:flex-row items-center gap-6"
      >
        <div className="flex-1 w-full">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.contract.verified}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 shrink-0 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm overflow-hidden p-1">
               <img 
                src="https://artifact.static-content.com/api/artifacts/a563f45a-c5ee-4467-bc5b-48615b1bd576/image_artifact_0.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200 group">
              <code className="text-sky-600 font-mono text-sm break-all flex-1 font-bold">
                {contractAddress}
              </code>
              <button 
                onClick={handleCopy}
                className="p-2 hover:bg-white border-transparent hover:border-slate-200 border rounded-xl transition-all relative shadow-sm"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Check className="w-5 h-5 text-emerald-500" />
                    </motion.div>
                  ) : (
                    <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Copy className="w-5 h-5 text-slate-400 group-hover:text-sky-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <a 
            href="https://bscscan.com" 
            target="_blank" 
            rel="no-referrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-sky-500/20"
          >
            BSCScan
            <ExternalLink className="w-4 h-4" />
          </a>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-amber-500/20">
            {t.contract.locked}
            <Lock className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
