import React from 'react';
import { Briefcase, Clock, TrendingUp } from 'lucide-react';

export const AudienceGrid: React.FC = () => {
  const personas = [
    {
      icon: <Clock className="text-blue-400" size={32} />,
      title: "The Efficiency Seeker",
      desc: "You want to reduce your workload, automate boring tasks, and save hours every week using simple AI assistants."
    },
    {
      icon: <TrendingUp className="text-brand-success" size={32} />,
      title: "The Career Future-Proofer",
      desc: "You want to stay relevant. You need to verify your skills and position yourself as an indispensable contributor."
    },
    {
      icon: <Briefcase className="text-purple-400" size={32} />,
      title: "The Team Anchor",
      desc: "You want to become the 'go-to AI person' in your organization, helping integrate AI safely and ethically."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Who This Program Is <span className="text-brand-glow">Built For</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl hover:border-brand-accent/30 transition-all duration-300">
              <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                {persona.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{persona.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {persona.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};