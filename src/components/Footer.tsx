import { Bird, Github, Twitter, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 uppercase tracking-tighter">AQUILIX</span>
            </div>
            <p className="text-slate-400 text-lg max-w-sm mb-8">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/AquilixCoin" target="_blank" className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center hover:bg-sky-500 hover:border-sky-400 hover:text-white transition-all text-slate-400 group relative overflow-hidden">
                <div className="absolute inset-0 bg-sky-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Twitter className="w-6 h-6 relative z-10" />
              </a>
              <a href="https://t.me/AQLXCoinchat" target="_blank" className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center hover:bg-sky-500 hover:border-sky-400 hover:text-white transition-all text-slate-400 group relative overflow-hidden">
                <div className="absolute inset-0 bg-sky-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Send className="w-6 h-6 relative z-10" />
              </a>
              <a href="https://t.me/AQLXCoinchat" target="_blank" className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center hover:bg-sky-500 hover:border-sky-400 hover:text-white transition-all text-slate-400 group relative overflow-hidden">
                <div className="absolute inset-0 bg-sky-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <MessageCircle className="w-6 h-6 relative z-10" />
              </a>
              <a href="#" className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center hover:bg-amber-500 hover:border-amber-400 hover:text-white transition-all text-slate-400 group relative overflow-hidden">
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Github className="w-6 h-6 relative z-10" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white uppercase tracking-widest">{t.footer.quick}</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#whitepaper" className="hover:text-sky-400 transition-colors uppercase text-sm tracking-widest">{t.nav.whitepaper}</a></li>
              <li><a href="#roadmap" className="hover:text-sky-400 transition-colors uppercase text-sm tracking-widest">{t.nav.roadmap}</a></li>
              <li><a href="#tokenomics" className="hover:text-sky-400 transition-colors uppercase text-sm tracking-widest">{t.nav.tokenomics}</a></li>
              <li><a href="#eyrie" className="hover:text-sky-400 transition-colors uppercase text-sm tracking-widest">{t.nav.eyrie}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white uppercase tracking-widest">{t.footer.legal}</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-sky-400 transition-colors uppercase text-sm tracking-widest">{t.footer.terms}</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors uppercase text-sm tracking-widest">{t.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors uppercase text-sm tracking-widest">{t.footer.risk}</a></li>
              <li><a href="https://bscscan.com" target="_blank" rel="no-referrer" className="hover:text-sky-400 transition-colors uppercase text-sm tracking-widest">BSCScan Log</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-bold uppercase tracking-widest">
          <p>© {currentYear} Aquilix Ecosystem. {t.footer.rights}</p>
          <p className="flex items-center gap-2">
            Built for the Sky <Bird className="w-3 h-3" /> on BNB Chain
          </p>
        </div>
      </div>
    </footer>
  );
}
