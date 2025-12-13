import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      {/* Before/After Card */}
      <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-red-500/50 relative overflow-hidden">
        <h3 className="text-2xl font-bold text-slate-200 mb-6">Before the Bootcamp</h3>
        <ul className="space-y-4">
          {[
            "Overwhelmed by new tools launching daily",
            "Worried about privacy and 'doing it wrong'",
            "Using AI just for basic emails or summaries",
            "Feeling like you're falling behind colleagues"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-400">
              <XCircle className="text-red-500/70 shrink-0 mt-1" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-brand-success relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-brand-success/10 blur-3xl rounded-full"></div>
        <h3 className="text-2xl font-bold text-white mb-6">After 3 Months</h3>
        <ul className="space-y-4">
          {[
            "Build genuine AI confidence & strategy",
            "Save hours per week with custom automations",
            "Create custom GPTs/Projects for specific tasks",
            "Become the 'go-to AI person' in your team"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-brand-success">
              <CheckCircle2 className="shrink-0 mt-1" size={18} />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};