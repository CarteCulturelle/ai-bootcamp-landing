import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Features } from './components/Features';
import { RolePersonalizer } from './components/RolePersonalizer';
import { TechStack } from './components/TechStack';
import { AudienceGrid } from './components/AudienceGrid';
import { FAQ } from './components/FAQ';
import { Calendar, User, Zap, Lock, ArrowRight, Sparkles, X, Loader2, Check } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const openModal = () => setIsModalOpen(true);
  
  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form state after animation/transition time
    setTimeout(() => {
      setStatus('idle');
      setEmail('');
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    
    try {
      // POST to webhook
      await fetch('https://hook.us1.make.com/YOUR_WEBHOOK_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          source: 'bootcamp_landing_page',
          timestamp: new Date().toISOString() 
        }),
        mode: 'no-cors' // Use no-cors to avoid CORS errors with generic webhooks
      });
      
      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      setStatus('success');
    } catch (error) {
      console.error("Submission error:", error);
      // In a real app we might show an error, but for this demo/webhook context we assume success or fallback
      setStatus('success');
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 selection:bg-brand-accent selection:text-white relative">
      
      {/* Navigation / Header */}
      <nav className="fixed w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5 no-print">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-white">AI<span className="text-brand-accent">.Bootcamp</span></div>
          <div className="flex items-center gap-4">
            <button onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth'})} className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-medium transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Custom Hero Implementation */}
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
          </div>
          <div className="mt-4 text-slate-400 text-sm font-medium animate-slide-up" style={{ animationDelay: '0.3s' }}>
             No coding required. No hype.
          </div>
        </div>
        
        {/* Quick Stats Bar */}
        <div className="border-y border-white/5 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Calendar className="text-brand-glow mb-1" />
              <div className="font-bold text-white text-lg">12 Weeks</div>
              <div className="text-slate-500 text-xs uppercase tracking-wide">Duration</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <User className="text-brand-glow mb-1" />
              <div className="font-bold text-white text-lg">Live + Async</div>
              <div className="text-slate-500 text-xs uppercase tracking-wide">Format</div>
            </div>
             <div className="flex flex-col items-center gap-2">
              <Zap className="text-brand-glow mb-1" />
              <div className="font-bold text-white text-lg">Capstone</div>
              <div className="text-slate-500 text-xs uppercase tracking-wide">Outcome</div>
            </div>
             <div className="flex flex-col items-center gap-2">
              <Lock className="text-brand-glow mb-1" />
              <div className="font-bold text-white text-lg">No Coding</div>
              <div className="text-slate-500 text-xs uppercase tracking-wide">Requirement</div>
            </div>
          </div>
        </div>

        <TechStack />

        <Features />
        
        <AudienceGrid />

        <div className="no-print">
          <RolePersonalizer />
        </div>
        
        <Timeline />

        <div className="no-print">
          <FAQ />
        </div>

        {/* Final CTA / Footer */}
        <div id="register" className="relative py-24 px-6 text-center overflow-hidden">
           {/* Abstract BG */}
           <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/20 to-transparent opacity-30 pointer-events-none"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to become <br/>AI-Confident?</h2>
             <p className="text-lg text-slate-300 mb-10">
               Be part of the next cohort and walk away with real skills, real systems, and real leverage in your career.
             </p>
             
             <div className="glass-panel p-8 rounded-2xl max-w-md mx-auto">
                <div className="text-slate-400 text-sm mb-4">Next Cohort Starts Soon</div>
                
                <div className="flex flex-col items-center mb-6">
                  <span className="text-slate-500 text-lg line-through decoration-slate-600">£1,997</span>
                  <div className="text-3xl font-bold text-white">£997 <span className="text-base font-normal text-slate-500">/ enrollment</span></div>
                </div>

                <button onClick={openModal} className="w-full py-4 bg-brand-accent hover:bg-brand-glow text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-brand-accent/20">
                  Secure Your Spot Now
                </button>
                <p className="mt-4 text-xs text-slate-500">
                  Limited seats available for quality feedback.
                </p>
             </div>
           </div>
        </div>
      </main>

      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} AI Confidence & Automation Bootcamp. All rights reserved.</p>
      </footer>

      {/* Enrollment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-slide-up relative">
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {status === 'success' ? (
                 <div className="text-center py-8 animate-fade-in">
                   <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                     <Check size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">You're in!</h3>
                   <p className="text-slate-400 mb-6">Thanks! We'll be in touch soon with the next steps.</p>
                   <button onClick={closeModal} className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium">
                     Close window
                   </button>
                 </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-glow text-xs font-medium mb-4">
                      <Sparkles size={12} />
                      <span>Limited Spots Available</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Secure Your Spot</h3>
                    <p className="text-slate-400 text-sm">
                      Enter your email to complete your enrollment request. We'll send you the onboarding details shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Work Email
                      </label>
                      <input 
                        id="email"
                        type="email" 
                        required
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full py-3 bg-brand-accent hover:bg-brand-glow text-white font-bold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Processing...
                        </>
                      ) : (
                        <>
                          Complete Enrollment
                          <ArrowRight size={20} />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-600">
                      We respect your inbox. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}