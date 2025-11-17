import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Settings, Bell, User, Network, BarChart3, FileText, Search, ChevronLeft, Send, Paperclip } from 'lucide-react';
import { ChatMessage } from '../components/ChatMessage';

export default function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chatOpen, setChatOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [currentAgent, setCurrentAgent] = useState('atlas');
  const [message, setMessage] = useState('');

  const agents = [
    { id: 'atlas', name: 'Atlas', icon: Network },
    { id: 'analyst', name: 'Data Analyst', icon: BarChart3 },
    { id: 'scribe', name: 'Scribe', icon: FileText },
    { id: 'researcher', name: 'Researcher', icon: Search },
  ];

  const sampleMessages = [
    {
      role: 'assistant' as const,
      content: 'Hello! I\'m Atlas, your workflow architect. How can I help you automate something today?',
      timestamp: new Date(),
    },
  ];

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
        setChatOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending:', message);
      setMessage('');
    }
  };

  return (
    <div className="h-screen flex flex-col bg-midnight">
      {/* Top Bar */}
      <div className="h-16 bg-pacific border-b border-[rgba(199,204,216,0.1)] flex items-center px-4 md:px-6 z-20">
        <div className="flex items-center gap-4 flex-1">
          {/* Menu toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-moonlight hover:text-gold transition-colors"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <ChevronLeft size={24} /> : <Menu size={24} />}
          </button>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-softSky">
            <span className="hidden sm:inline">Workspace</span>
            <span className="hidden sm:inline">→</span>
            <span className="text-moonlight capitalize">{currentAgent}</span>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="text-softSky hover:text-moonlight transition-colors" aria-label="Notifications">
            <Bell size={20} />
          </button>
          <button className="text-softSky hover:text-moonlight transition-colors" aria-label="Settings">
            <Settings size={20} />
          </button>
          <button className="w-8 h-8 rounded-full bg-[rgba(236,206,110,0.15)] flex items-center justify-center text-gold">
            <User size={18} />
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div
          className={`${sidebarOpen ? 'w-60' : 'w-0'
            } bg-midnight border-r border-[rgba(199,204,216,0.1)] transition-all duration-300 overflow-hidden flex flex-col`}
        >
          {/* Logo */}
          <div className="p-6">
            <span className="text-xl font-semibold text-moonlight">AURELIUM</span>
          </div>

          {/* Agent List */}
          <div className="flex-1 px-4 space-y-2">
            <div className="text-xs uppercase text-softSky font-semibold mb-3 px-3">Agents</div>
            {agents.map((agent) => {
              const Icon = agent.icon;
              const isActive = currentAgent === agent.id;
              return (
                <button
                  key={agent.id}
                  onClick={() => setCurrentAgent(agent.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${isActive
                    ? 'bg-[rgba(236,206,110,0.1)] border-l-2 border-gold text-gold'
                    : 'text-silver hover:bg-[rgba(199,204,216,0.05)] border-l-2 border-transparent'
                    }`}
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{agent.name}</span>
                </button>
              );
            })}
          </div>

          {/* Recent Tasks */}
          <div className="px-4 pb-6">
            <div className="text-xs uppercase text-softSky font-semibold mb-3 px-3">Recent</div>
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-softSky hover:bg-[rgba(199,204,216,0.05)] transition-all text-left">
                <Network size={16} />
                <span className="truncate">Email workflow</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-softSky hover:bg-[rgba(199,204,216,0.05)] transition-all text-left">
                <BarChart3 size={16} />
                <span className="truncate">Sales analysis</span>
              </button>
            </div>
          </div>
        </div>

        {/* Preview Pane */}
        <main className={`flex-1 overflow-auto bg-midnight transition-all duration-300`}>
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-moonlight mb-2 capitalize">{currentAgent}</h1>
                <p className="text-softSky">
                  {currentAgent === 'atlas' && 'Plan and execute complex workflows automatically'}
                  {currentAgent === 'analyst' && 'Analyze data and generate insights'}
                  {currentAgent === 'scribe' && 'Create professional documents'}
                  {currentAgent === 'researcher' && 'Research and synthesize information'}
                </p>
              </div>

              {/* Content area - placeholder */}
              <div className="bg-pacific border border-[rgba(199,204,216,0.15)] rounded-xl p-8">
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-[rgba(236,206,110,0.1)] flex items-center justify-center mx-auto mb-4">
                    {currentAgent === 'atlas' && <Network className="w-8 h-8 text-gold" />}
                    {currentAgent === 'analyst' && <BarChart3 className="w-8 h-8 text-gold" />}
                    {currentAgent === 'scribe' && <FileText className="w-8 h-8 text-gold" />}
                    {currentAgent === 'researcher' && <Search className="w-8 h-8 text-gold" />}
                  </div>
                  <h3 className="text-xl font-semibold text-moonlight mb-2">
                    Start a conversation
                  </h3>
                  <p className="text-softSky max-w-md mx-auto">
                    Describe what you need in the chat panel, and I'll help you get it done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Chat Panel */}
        {!isMobile && (
          <div
            className={`${chatOpen ? 'w-96' : 'w-0'
              } bg-pacific border-l border-[rgba(199,204,216,0.1)] transition-all duration-300 overflow-hidden flex flex-col`}
          >
            {/* Chat header */}
            <div className="h-14 px-4 flex items-center gap-3 border-b border-[rgba(199,204,216,0.1)]">
              <div className="w-10 h-10 rounded-full bg-[rgba(236,206,110,0.15)] flex items-center justify-center">
                {currentAgent === 'atlas' && <Network className="w-5 h-5 text-gold" />}
                {currentAgent === 'analyst' && <BarChart3 className="w-5 h-5 text-gold" />}
                {currentAgent === 'scribe' && <FileText className="w-5 h-5 text-gold" />}
                {currentAgent === 'researcher' && <Search className="w-5 h-5 text-gold" />}
              </div>
              <span className="font-semibold text-moonlight capitalize">{currentAgent}</span>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {sampleMessages.map((msg, i) => (
                <ChatMessage key={i} {...msg} />
              ))}
            </div>

            {/* Input area */}
            <div className="p-4 border-t border-[rgba(199,204,216,0.1)]">
              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder={`Ask ${currentAgent}...`}
                  className="w-full min-h-[48px] max-h-[200px] px-4 py-3 pr-24 bg-midnight border border-[rgba(199,204,216,0.2)] rounded-lg text-[15px] text-moonlight placeholder:text-softSky resize-none focus:border-gold focus:outline-none transition-colors"
                  rows={1}
                />

                <div className="absolute right-2 bottom-2 flex items-center gap-2">
                  <button
                    className="text-softSky hover:text-moonlight transition-colors"
                    aria-label="Attach file"
                  >
                    <Paperclip size={18} />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="w-8 h-8 rounded-full bg-gold text-midnight flex items-center justify-center hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile chat FAB */}
      {isMobile && !chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gold text-midnight shadow-gold flex items-center justify-center z-50 hover:scale-110 transition-transform"
          aria-label="Open chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Mobile chat overlay */}
      {isMobile && chatOpen && (
        <div className="fixed inset-0 z-50 bg-pacific flex flex-col">
          <div className="h-14 px-4 flex items-center justify-between border-b border-[rgba(199,204,216,0.1)]">
            <h2 className="font-semibold text-moonlight">Chat</h2>
            <button onClick={() => setChatOpen(false)} className="text-softSky hover:text-moonlight">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {sampleMessages.map((msg, i) => (
              <ChatMessage key={i} {...msg} />
            ))}
          </div>
          <div className="p-4 border-t border-[rgba(199,204,216,0.1)]">
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask..."
                className="w-full min-h-[48px] px-4 py-3 pr-12 bg-midnight border border-[rgba(199,204,216,0.2)] rounded-lg text-[15px] text-moonlight placeholder:text-softSky resize-none focus:border-gold focus:outline-none"
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="absolute right-2 bottom-2 w-8 h-8 rounded-full bg-gold text-midnight flex items-center justify-center disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
