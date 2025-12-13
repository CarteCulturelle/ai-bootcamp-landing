import React from 'react';
import { Bot, Workflow, Cpu, Zap, Layers, MessageSquare } from 'lucide-react';

export const TechStack: React.FC = () => {
  const tools = [
    { name: "ChatGPT & Custom GPTs", icon: MessageSquare, desc: "Advanced Prompting" },
    { name: "Claude & Projects", icon: Bot, desc: "Long-context Analysis" },
    { name: "Make.com", icon: Workflow, desc: "No-Code Automation" },
    { name: "Google AI Studio", icon: Cpu, desc: "Prototyping" },
    { name: "n8n", icon: Layers, desc: "Workflow Orchestration" },
    { name: "Nebius", icon: Zap, desc: "High-Performance Inference" },
  ];

  return (
    <section className="py-16 border-b border-white/5 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-8">
          Master the Industry Standard Toolset
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
              <div className="text-brand-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                <tool.icon size={32} />
              </div>
              <h4 className="font-bold text-slate-200 text-sm">{tool.name}</h4>
              <p className="text-xs text-slate-500 mt-1">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};