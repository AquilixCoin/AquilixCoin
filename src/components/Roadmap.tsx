import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { CheckCircle2, Circle, Plane as FlightIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useRef } from 'react';

export default function Roadmap() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const eagleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const eagleRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0]);

  const steps = [
    {
      id: "01",
      title: t.roadmap.step1_title,
      desc: t.roadmap.step1_desc,
      status: "complete",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      id: "02",
      title: t.roadmap.step2_title,
      desc: t.roadmap.step2_desc,
      status: "active",
      color: "from-sky-400 to-sky-600"
    },
    {
      id: "03",
      title: t.roadmap.step3_title,
      desc: t.roadmap.step3_desc,
      status: "upcoming",
      color: "from-amber-400 to-amber-600"
    },
    {
      id: "04",
      title: t.roadmap.step4_title,
      desc: t.roadmap.step4_desc,
      status: "upcoming",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  return (
    <section id="roadmap" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-10 w-64 h-64 bg-sky-100/50 blur-[100px] rounded-full" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-amber-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-xs font-black uppercase tracking-widest">
            <FlightIcon className="w-4 h-4" />
            FLIGHT PATH
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-amber-500 to-indigo-600">
            {t.roadmap.title}
          </h2>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
            {t.roadmap.subtitle}
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Central Path Track */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-2 bg-slate-200/50 rounded-full overflow-hidden">
             <motion.div 
               style={{ height: "100%", originY: 0, scaleY: pathLength }}
               className="w-full bg-gradient-to-b from-sky-400 via-amber-400 to-indigo-400"
             />
          </div>

          {/* Floating Eagle Following Scroll */}
          <motion.div 
            style={{ 
              top: eagleY,
              rotate: eagleRotate,
            }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 -ml-[1px] w-12 h-12 z-20 items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 blur-xl opacity-50 animate-pulse" />
              <img 
                src="https://artifact.static-content.com/api/artifacts/a563f45a-c5ee-4467-bc5b-48615b1bd576/image_artifact_0.png" 
                alt="Flight Icon" 
                className="w-12 h-12 relative z-10 drop-shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <div className="space-y-32">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-start md:items-center justify-between gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Placeholder for balance */}
                <div className="hidden md:block w-1/2" />
                
                {/* Milestone Point */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center z-10 shadow-xl group transition-all hover:scale-110">
                  {step.status === 'complete' ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  ) : step.status === 'active' ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-sky-500 rounded-full blur-sm opacity-50 animate-ping" />
                      <div className="w-4 h-4 bg-sky-500 rounded-full relative z-10" />
                    </div>
                  ) : (
                    <Circle className="w-4 h-4 text-slate-300" />
                  )}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`relative p-8 rounded-[32px] border border-slate-200 bg-white/80 backdrop-blur-md shadow-2xl overflow-hidden group ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                  >
                    {/* Decorative Corner Accent */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.color} opacity-[0.03] transition-opacity group-hover:opacity-[0.08] rounded-bl-[100px]`} />
                    
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${step.color} text-white font-black text-sm italic uppercase tracking-tighter`}>
                        {step.id} — PHASE
                      </span>
                      {step.status === 'active' && (
                        <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 mb-4 uppercase tracking-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-500 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                    
                    {step.status === 'active' && (
                      <div className="mt-8 space-y-2">
                        <div className="flex justify-between text-xs font-black text-sky-600 uppercase tracking-widest">
                          <span>Progress</span>
                          <span>65%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '65%' }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
