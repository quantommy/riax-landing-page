import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
  streaming?: boolean;
}

export function ChatMessage({
  role,
  content,
  timestamp,
  streaming = false,
}: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar (only for assistant) */}
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(236,206,110,0.15)] flex items-center justify-center">
          <Bot className="w-5 h-5 text-gold" />
        </div>
      )}

      {/* Message content */}
      <div className={`max-w-[85%] ${isUser ? 'max-w-[80%]' : 'max-w-[90%]'}`}>
        <div className={`rounded-xl px-4 py-3 ${isUser
          ? 'bg-[rgba(236,206,110,0.1)] border border-[rgba(236,206,110,0.2)]'
          : 'bg-[rgba(26,35,52,0.8)] border border-[rgba(199,204,216,0.15)]'
          }`}>
          <p className="text-[15px] text-moonlight leading-relaxed whitespace-pre-wrap">
            {content}
            {streaming && <span className="inline-block w-1 h-4 bg-gold animate-pulse ml-1" />}
          </p>
        </div>

        {/* Timestamp */}
        {timestamp && (
          <span className="text-xs text-softSky mt-1 inline-block">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        )}
      </div>

      {/* Avatar (only for user) */}
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(199,204,216,0.2)] flex items-center justify-center">
          <User className="w-5 h-5 text-silver" />
        </div>
      )}
    </div>
  );
}
