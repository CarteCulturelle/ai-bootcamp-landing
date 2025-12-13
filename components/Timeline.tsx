import React from 'react';
import { ShieldCheck, Cpu, GitBranch, Settings, Trophy } from 'lucide-react';
import { Module } from '../types';

const modules: Module[] = [
  {
    id: 1,
    title: "AI Foundations & Safety",
    subtitle: "Weeks 1-2",
    description: "Build confidence by understanding how AI works, privacy risks, hallucinations, and avoiding 'shadow AI'.",
    icon: "shield",
    color: "text-blue-400"
  },
  {
    id: 2,
    title: "Intermediate AI Skills",
    subtitle: "Weeks 3-5",
    description: "Master structured prompting, multimodal uploads, research workflows, and build simple custom assistants.",
    icon: "cpu",
    color: "text-purple-400"
  },
  {
    id: 3,
    title: "AI Automation",
    subtitle: "Weeks 6-8",
    description: "Move beyond chat. Learn the AI Builder's Playbook, decision trees, and no-code tools like Make.com & n8n.",
    icon: "branch",
    color: "text-emerald-400"
  },
  {
    id: 4,
    title: "Systems, Governance & Integration",
    subtitle: "Weeks 9-10",
    description: "Map high-value use cases, measure ROI, implement governance, and document best-practice SOPs.",
    icon: "settings",
    color: "text-orange-400"
  },
  {
    id: 5,
    title: "Innovation Lab / Capstone",
    subtitle: "Weeks 11-12",
    description: "Design, build, test, and present a full business case + demo. Your portfolio-ready evidence of competence.",
    icon: "trophy",
    color: "text-yellow-400"
  }
];

const IconMap: Record<string, React.ReactNode> = {
  shield: <ShieldCheck size={24} />,
  cpu: <Cpu size={24} />,
  branch: <GitBranch size={24} />,
  settings: <Settings size={24} />,
  trophy: <Trophy size={24} />,
};

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Your 3-Month <span className="text-brand-glow">Transformation</span>
      </h2>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
        {modules.map((mod, index) => (
          <div key={mod.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            {/* Icon Bubble */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-dark bg-slate-800 ${mod.color} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative left-0 md:left-auto`}>
              {IconMap[mod.icon]}
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-xl hover:bg-slate-800/80 transition-colors duration-300 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className={`font-bold ${mod.color} text-sm uppercase tracking-wider`}>Module {mod.id}</span>
                <span className="text-slate-400 text-xs font-mono border border-slate-700 px-2 py-0.5 rounded">{mod.subtitle}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{mod.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};