import { BrainCircuit, Send, X, Bot, User, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

const SUGGESTIONS = [
  "Top Home Loan prospects today?",
  "Generate a working capital campaign",
  "Any portfolio risks detected?",
  "Analyze repayment capacity for Priya Shah"
];

const DEMO_RESPONSES: Record<string, string> = {
  'default': 'I analyze transaction patterns and behavioral data to provide insights. Try asking me about top prospects, campaign generation, or specific customers.',
  'home loan': 'I found 12 high-intent customers for Home Loans today. They all have verified repayment capacity exceeding the EMI requirements and have shown strong behavioral signals like visiting real estate portals.',
  'campaign': 'I have drafted a campaign targeting 45 SME customers with elevated working capital needs based on GST and POS data. Expected conversion rate is 18%. Shall I deploy it?',
  'risk': 'Yes, I am monitoring a slight dip in UPI velocity in the Andheri East cluster. This may be due to recent local holidays, but I advise reviewing short-term credit exposures.',
  'priya': 'Priya Shah has a declared income of ₹60,000, but my analysis of her account aggregator data reveals consistent savings and undeclared gig income, making her actual assessed income closer to ₹1.2L. Her true repayment capacity is extremely healthy for a Home Loan.',
};

export default function Copilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: 'Hello! I am your IntentIQ Copilot. How can I assist you with your portfolio today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent, customInput?: string) => {
    e?.preventDefault();
    const messageText = customInput || input;
    if (!messageText.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let responseContent = DEMO_RESPONSES['default'];
      const lower = userMessage.content.toLowerCase();
      if (lower.includes('priya') || lower.includes('shah') || lower.includes('capacity')) responseContent = DEMO_RESPONSES['priya'];
      else if (lower.includes('campaign') || lower.includes('generate')) responseContent = DEMO_RESPONSES['campaign'];
      else if (lower.includes('risk') || lower.includes('portfolio')) responseContent = DEMO_RESPONSES['risk'];
      else if (lower.includes('home loan') || lower.includes('prospects')) responseContent = DEMO_RESPONSES['home loan'];

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: responseContent }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* FAB */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-12 h-12 bg-accent text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-accent/90 transition-colors"
          >
            <BrainCircuit className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-6 right-6 w-[360px] h-[480px] bg-surface border border-outline-variant rounded-2xl shadow-xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3.5 bg-accent flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-white" />
                <span className="text-[14px] font-semibold text-white">IntentIQ Copilot</span>
                <span className="flex items-center gap-1 px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-[0.06em]">
                  <Sparkles className="w-2.5 h-2.5" /> AI
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-background">
              {messages.map((msg) => (
                <div key={msg.id} className={cn('flex gap-2.5', msg.role === 'user' ? 'flex-row-reverse' : '')}>
                  <div className={cn(
                    'w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
                    msg.role === 'user' ? 'bg-accent text-white' : 'bg-surface border border-outline-variant text-accent'
                  )}>
                    {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div className={cn(
                    'max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed',
                    msg.role === 'user'
                      ? 'bg-accent text-white rounded-tr-sm'
                      : 'bg-surface border border-outline-variant text-on-surface rounded-tl-sm shadow-card'
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-surface border border-outline-variant text-accent flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-3.5 py-3 rounded-2xl rounded-tl-sm bg-surface border border-outline-variant flex items-center gap-1 shadow-card">
                    {[0, 150, 300].map(delay => (
                      <span key={delay} className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: `${delay}ms` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input & Suggestions */}
            <div className="border-t border-outline-variant bg-surface flex flex-col">
              {/* Suggestion Chips */}
              {SUGGESTIONS.filter(s => !messages.some(m => m.role === 'user' && m.content === s)).length > 0 && (
                <div className="px-4 py-3 flex gap-2 overflow-x-auto no-scrollbar border-b border-outline-variant/40 bg-surface-container/30">
                  {SUGGESTIONS.filter(s => !messages.some(m => m.role === 'user' && m.content === s)).map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => handleSubmit(e, suggestion)}
                      className="whitespace-nowrap px-3 py-1.5 bg-surface border border-outline-variant rounded-lg text-[12px] font-medium text-on-surface hover:bg-surface-container hover:text-accent transition-colors shadow-sm"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              
              <div className="px-4 py-3">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about clients, risks, campaigns..."
                    className="flex-1 bg-surface-container border border-outline-variant rounded-xl px-3 py-2 text-[13px] text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="w-9 h-9 bg-accent text-white rounded-xl flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors flex-shrink-0"
                  >
                    <Send className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
