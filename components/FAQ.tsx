import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "Absolutely not. This is a 'No Code' accelerator. We focus on natural language prompting, logic, and visual automation tools like Make.com that use drag-and-drop interfaces."
  },
  {
    q: "What is the time commitment?",
    a: "The program is designed for working professionals. Expect to spend about 3-5 hours per week attending live sessions (or watching recordings) and building your practical assignments."
  },
  {
    q: "What if I miss a live session?",
    a: "All sessions are recorded and uploaded to the student portal immediately. You also have access to office hours and community support to catch up."
  },
  {
    q: "Will I really build something useful?",
    a: "Yes. The Capstone Project (Module 5) requires you to design, build, and demo a real workflow that solves a problem in your actual job."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-slate-800/50 border-slate-700' : 'bg-transparent'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className="font-semibold text-slate-200">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="text-brand-accent" /> : <ChevronDown className="text-slate-500" />}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-slate-400 leading-relaxed border-t border-dashed border-slate-700/50 mt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};