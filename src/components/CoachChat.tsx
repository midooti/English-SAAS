'use client';

import { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { getAIAnswer, type AIAnswer } from '@/lib/ai';
import { cn } from '@/lib/utils';

const SUGGESTED_PROMPTS = [
  'Analysez mes points faibles',
  'Construisez mon plan d\u2019étude du jour',
  'Expliquez mes dernières erreurs',
  'Donnez-moi un exercice d\u2019expression orale TOEFL',
  'Proposez-moi du vocabulaire universitaire',
];

type Message = {
  role: 'user' | 'assistant';
  text: string;
};

const INITIAL: Message[] = [
  {
    role: 'assistant',
    text: 'Bonjour ! Je suis votre assistant de préparation Prep-Anglais. Posez-moi vos questions sur votre apprentissage — par exemple « Analysez mes points faibles ».',
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
      setMessages((m) => [...m, { role: 'assistant', text: answer.text }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          text: 'L\u2019assistant est momentanément indisponible. Réessayez dans quelques instants.',
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto flex h-[68vh] max-w-2xl flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
      {/* En-tête */}
      <div className="flex items-center gap-3 border-b border-slate-200 p-4 dark:border-slate-800">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700 font-serif text-sm font-semibold tracking-wide text-white">
          PA
        </span>
        <div>
          <p className="font-serif text-lg leading-tight tracking-tight text-ink dark:text-white">
            Assistant de préparation
          </p>
          <p className="text-xs text-ink-faint dark:text-slate-500">
            Conseils, corrigés et plan d&apos;étude.
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-5">
        {messages.map((m, i) => (
          <div
            key={i}
            className={cn(
              'flex w-fit max-w-[85%] flex-col gap-1 rounded-lg px-4 py-3 text-sm leading-relaxed',
              m.role === 'user'
                ? 'ml-auto bg-brand-700 text-white'
                : 'bg-slate-100 text-ink dark:bg-slate-800 dark:text-slate-200'
            )}
          >
            <span className="text-xs font-bold uppercase tracking-wide">
              {m.role === 'user' ? 'Vous' : 'Assistant'}
            </span>
            {m.text}
          </div>
        ))}

        {busy && (
          <div className="flex w-fit items-center gap-2 rounded-lg bg-slate-100 px-4 py-3 text-sm text-ink-faint dark:bg-slate-800 dark:text-slate-400">
            <span className="h-2 w-2 animate-bounce rounded-full bg-brand-400" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-brand-400 [animation-delay:120ms]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-brand-400 [animation-delay:240ms]" />
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Sujets suggérés */}
      <div className="flex gap-2 overflow-x-auto px-5 pb-3">
        {SUGGESTED_PROMPTS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => send(p)}
            className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Champ de saisie */}
      <form
        className="flex items-center gap-2 border-t border-slate-200 p-4 dark:border-slate-800"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Comment améliorer mon expression orale au TOEFL ?"
          className="h-11 flex-1 rounded-lg border border-slate-200 bg-white px-4 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          aria-label="Message à l'assistant de préparation"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-700 text-white transition hover:bg-brand-800 disabled:opacity-50"
          aria-label="Envoyer le message"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}