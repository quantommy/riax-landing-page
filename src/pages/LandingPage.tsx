import { Network, BarChart3, FileText, Search, Check, GraduationCap, Code2, Zap, Users, PenTool } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { AgentCard } from '../components/AgentCard';

export default function LandingPage() {
  const agents = [
    {
      icon: Network,
      name: 'Atlas',
      tagline: 'Your intelligent workflow architect.',
      description: 'Converts natural language into executable workflows. Plans, executes, and adapts—orchestrating other agents and real-world actions without code.',
      features: [
        'Multi-step automation with intelligent planning',
        'Coordinates other agents seamlessly',
        'Self-correcting execution with reflection',
      ],
    },
    {
      icon: BarChart3,
      name: 'Data Analyst',
      tagline: 'Upload data. Ask questions. Get real analysis.',
      description: 'Accepts CSVs, Excel, PDFs. Writes Python, runs analysis in a secure sandbox, delivers clean charts and insights—instantly.',
      features: [
        'Python sandbox execution',
        'Interactive visualizations',
        'Statistical testing',
      ],
    },
    {
      icon: FileText,
      name: 'The Scribe',
      tagline: 'Documents that look official, polished, effortless.',
      description: 'Transforms raw content into structured documents—reports, papers, proposals. Match existing formats or create from scratch.',
      features: [
        'PDF/DOCX output',
        'Citation management',
        'Format matching',
      ],
    },
    {
      icon: Search,
      name: 'Researcher',
      tagline: 'Deep research, sources, and synthesis on demand.',
      description: 'Investigates across papers, articles, and datasets. Produces structured findings with evidence maps and verified citations.',
      features: [
        'Source verification',
        'Evidence mapping',
        'Contradiction detection',
      ],
    },
  ];

  const useCases = [
    {
      icon: GraduationCap,
      title: 'Students & Researchers',
      description: 'Accelerate your academic work with intelligent research and writing assistance.',
      tasks: ['Literature reviews', 'Paper writing', 'Data analysis'],
    },
    {
      icon: Code2,
      title: 'Data Analysts & Engineers',
      description: 'Turn questions into insights faster with automated analysis and visualization.',
      tasks: ['Ad-hoc analysis', 'Report automation', 'Visualization'],
    },
    {
      icon: Zap,
      title: 'Founders & Operators',
      description: 'Move faster with automated workflows and intelligent research.',
      tasks: ['Market research', 'Deck creation', 'Process automation'],
    },
    {
      icon: Users,
      title: 'Business Teams',
      description: 'Create professional documents and reports without the manual work.',
      tasks: ['Reporting', 'Documentation', 'Competitive analysis'],
    },
    {
      icon: PenTool,
      title: 'Writers & Creators',
      description: 'Focus on ideas while AI handles structure, research, and formatting.',
      tasks: ['Content structuring', 'Editing', 'Research synthesis'],
    },
  ];

  const features = [
    'Natural language → structured workflows',
    'Real-time preview panel',
    'Secure Python sandbox',
    'Multi-agent coordination',
    'Upload files & reference styles',
    'Auto-correction & reflection',
    'Source citations',
    'Version history',
  ];

  return (
    <div className="min-h-screen bg-midnight text-moonlight">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 bg-midnight">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,206,110,0.03)_0%,rgba(26,35,52,0.6)_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-landing text-center py-20">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-moonlight leading-[1.1] tracking-[-0.02em] mb-6 animate-fadeInUp"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            Work with intelligent agents that
            <br />
            think, analyze, write, and automate.
          </h1>

          <p
            className="text-lg md:text-xl text-softSky leading-relaxed max-w-[700px] mx-auto mb-12 animate-fadeInUp"
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
          >
            All your core workflows—automation, analysis, documents, and research—handled by AI
            assistants that understand you, coordinate together, and deliver results instantly.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
            style={{ animationDelay: '1.0s', animationFillMode: 'both' }}
          >
            <Button variant="primary" size="lg" onClick={() => window.location.hash = 'signup'}>
              Try It Free
            </Button>
            <Button variant="secondary" size="lg" onClick={() => document.getElementById('agents')?.scrollIntoView({ behavior: 'smooth' })}>
              View Agents
            </Button>
          </div>
        </div>
      </section>

      {/* Agent Cards Section */}
      <section id="agents" className="py-20 md:py-32 bg-midnight">
        <div className="container-landing">
          <h2 className="text-3xl md:text-5xl font-semibold text-moonlight text-center mb-12 md:mb-20">
            Four Intelligent Agents. One Unified Workspace.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agents.map((agent, index) => (
              <AgentCard key={index} {...agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Why This Exists Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-pacific to-midnight">
        <div className="container-landing max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-moonlight mb-12">
            Your work deserves more than chat responses.
          </h2>

          <div className="space-y-5 text-xl md:text-2xl text-silver">
            <p>Most AI tools generate answers. Ours generate results.</p>
            <p>Real documents. Real analyses. Real automation. Real workflows.</p>
            <p>Everything previewed. Everything repeatable. Everything intelligent.</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 md:py-24 bg-midnight">
        <div className="container-landing">
          <h2 className="text-3xl md:text-4xl font-semibold text-moonlight text-center mb-16">
            Built for people who ship.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={index}
                  className="bg-[rgba(26,35,52,0.5)] border border-[rgba(199,204,216,0.1)] rounded-xl p-8 backdrop-blur-lg hover:border-[rgba(236,206,110,0.3)] transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-silver mb-4" />
                  <h3 className="text-xl font-semibold text-moonlight mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-softSky leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.tasks.map((task, i) => (
                      <li key={i} className="text-sm text-silver flex items-center gap-2">
                        <span className="w-1 h-1 bg-gold rounded-full" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-20 md:py-24 bg-pacific">
        <div className="container-landing max-w-[1100px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-moonlight text-center mb-14">
            Everything you need. Nothing you don't.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(236,206,110,0.15)] flex items-center justify-center">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-base text-moonlight font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 md:py-40 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,206,110,0.08)_0%,rgba(12,17,32,1)_70%)]" />

        <div className="relative z-10 container-landing text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-moonlight mb-12 tracking-[-0.02em]">
            Work faster. Think deeper. Automate smarter.
          </h2>

          <Button
            variant="primary"
            size="lg"
            onClick={() => window.location.hash = 'signup'}
            className="h-14 px-10 text-lg shadow-gold"
          >
            Get Started Free
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
