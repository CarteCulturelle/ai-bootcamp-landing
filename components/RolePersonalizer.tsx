import React, { useState } from 'react';
import { generatePersonalizedInsight } from '../services/geminiService';
import { Sparkles, Loader2, Send } from 'lucide-react';

export const RolePersonalizer: React.FC = () => {
  const [role, setRole] = useState('');
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role.trim()) return;

    setLoading(true);
    const result = await generatePersonalizedInsight(role);
    setInsight(result);
    setLoading(false);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-brand-dark to-slate-900 border-y border-slate-800">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block mb-4 p-3 bg-brand-accent/10 rounded-full">
           <Sparkles className="text-brand-glow w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Is this right for you?</h2>
        <p className="text-slate-400 mb-8">
          Not sure how this applies to your specific career? Enter your job title, and our AI will explain the exact value for your role.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-10">
          <input
            type="text"
            placeholder="e.g. Marketing Manager, HR Director, Sales Lead"
            className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent placeholder-slate-500"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading || !role}
            className="px-6 py-3 bg-brand-accent text-white font-semibold rounded-lg hover:bg-brand-glow transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
            {loading ? 'Analyzing...' : 'Tell Me'}
          </button>
        </form>

        {insight && (
          <div className="animate-fade-in text-left bg-gradient-to-br from-indigo-900/50 to-slate-800/50 border border-brand-accent/30 p-8 rounded-2xl relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/20 blur-2xl rounded-full -mr-10 -mt-10"></div>
             <h3 className="text-brand-glow font-bold text-lg mb-2 flex items-center gap-2">
               <Sparkles size={16} />
               For a {role}:
             </h3>
             <p className="text-white text-lg leading-relaxed font-medium">
               "{insight}"
             </p>
          </div>
        )}
      </div>
    </section>
  );
};