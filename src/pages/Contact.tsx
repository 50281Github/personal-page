import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message 
          }
        ]);

      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Although I'm not currently looking for any new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 group-hover:border-blue-500/50 transition-colors">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-medium mb-1">Email</p>
                <a href="mailto:hello@example.com" className="text-lg font-medium">hello@example.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 group-hover:border-blue-500/50 transition-colors">
                <MessageSquare className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-medium mb-1">Social</p>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-lg font-medium">@username</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder="John Doe"
                disabled={status === 'loading'}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder="john@example.com"
                disabled={status === 'loading'}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
                placeholder="Hello, I'd like to talk about..."
                disabled={status === 'loading'}
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white rounded-xl px-8 py-4 font-medium transition-all flex items-center justify-center gap-2 group"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Message Sent!
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle className="w-5 h-5" />
                  Failed to Send
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}