'use client';

import { useEffect, useRef, useState } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getAIAnswer, SUGGESTED_PROMPTS, type AIAnswer } from '@/lib/ai';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'assistant';
  text: string;
  demo?: boolean;
};

const INITIAL: Message[] = [
  {
    role: 'assistant',
    text: "Hi! I'm your AI Coach. Ask me anything about your English preparation — even 'Analyze my weakest skill'.",
    demo: true,
  },
];

export default function CoachChat() {
  const [messages, setMessages] = useState<Message[]>(INITIAL);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, busy]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;

    setMessages((m) => [...m, { role: 'user', text: trimmed }]);
    setInput('');
    setBusy(true);

    try {
      const answer: AIAnswer = await getAIAnswer(trimmed);
      setMessages((m) => [...m, { role: 'assistant', text: answer.text, demo: answer.demo }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', text: 'Sorry, the coach is unavailable right now.', demo: true },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto flex h-[68vh] max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 p-4 dark:border-slate-800">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white">
          <Bot className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-bold text-slate-900 dark:text-white">AI Coach</p>
          <p className="flex items-center gap-1.5 text-xs text-slate-400">
            Demo assistant
            <Badge variant="accent">demo</Badge>
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-5">
        {messages.map((m, i) => (
          <div
            key={i}
            className={cn(
              'flex w-fit max-w-[85%] flex-col gap-1 rounded-2xl px-4 py-3 text-sm leading-relaxed',
              m.role === 'user'
                ? 'ml-auto bg-brand-600 text-white'
                : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'
            )}
          >
            <span className="flex items-center gap-1.5 text-xs font-bold">
              {m.role === 'user' ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
              {m.role === 'user' ? 'You' : 'Coach'}
            </span>
            {m.text}
          </div>
        ))}

        {busy && (
          <div className="flex w-fit items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-400 dark:bg-slate-800">
            <span className="h-2 w-2 animate-bounce rounded-full bg-brand-400" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-brand-400 [animation-delay:120ms]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-brand-400 [animation-delay:240ms]" />
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Suggested prompts */}
      <div className="flex gap-2 overflow-x-auto px-5 pb-3">
        {SUGGESTED_PROMPTS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => send(p)}
            className="shrink-0 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 transition hover:bg-brand-100 dark:border-slate-700 dark:bg-slate-800 dark:text-brand-300"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input */}
      <form
        className="flex items-center gap-2 border-t border-slate-100 p-4 dark:border-slate-800"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="How can I improve my TOEFL speaking?"
          className="h-11 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          aria-label="Message au coach"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white transition hover:bg-brand-700 disabled:opacity-50"
          aria-label="Envoyer"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}