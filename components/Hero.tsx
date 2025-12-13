import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24 px-6 text-center">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[120px] -z-10 opacity-50 animate-pulse-slow"></div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-glow text-sm font-medium mb-6 animate-fade-in">
        <Sparkles size={14} />
        <span>3-Month Professional Accelerator</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 animate-slide-up">
        AI Confidence & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-glow to-brand-success">
          Automation Bootcamp
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        From <span className="text-red-400 line-through decoration-red-400/50">“I’m falling behind”</span> <span className="text-slate-500 px-2">→</span> <span className="text-white font-semibold">“I’m confidently building real AI solutions at work.”</span>
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <button onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth'})} className="px-8 py-4 bg-white text-brand-dark font-bold rounded-lg hover:bg-slate-200 transition-all transform hover:scale-105 shadow-lg shadow-white/10 flex items-center gap-2">
          Secure Your Spot
          <ArrowRight size={20} />
        </button>
        <div className="text-slate-400 text-sm font-medium">
          No coding required. No hype.
        </div>
      </div>
    </div>
  );
};