import { ArrowLeft, Search, BookOpen, BarChart3, FileText, Brain, Shield, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';

export default function RiaxPage() {
  const capabilities = [
    {
      icon: BookOpen,
      title: 'Literature Scholar',
      description: 'Devours entire academic databases in seconds. Identifies contradictions, gaps, and novel connections your professors missed.',
      color: 'skyBlue',
    },
    {
      icon: BarChart3,
      title: 'Data Analyst',
      description: 'Autonomously designs experimental protocols, catches its own mistakes, and generates visualizations worthy of Nature.',
      color: 'emerald',
    },
    {
      icon: FileText,
      title: 'Paper Writer',
      description: 'Matches exact citation styles, tone, and structure by reverse-engineering target journals. No AI slop—just polish.',
      color: 'gold',
    },
  ];

  const features = [
    'End-to-end research papers from idea to publication',
    'Autonomous literature review across databases',
    'Contradiction detection & resolution',
    'Experimental design & protocol generation',
    'Statistical analysis with error detection',
    'Citation style matching (APA, MLA, Chicago, etc.)',
    'Visualization generation (publication-ready)',
    'Flaw identification in arguments',
  ];

  const workflowSteps = [
    {
      step: 'Identify Topic',
      description: 'You provide the research question or topic area',
    },
    {
      step: 'Literature Search',
      description: 'Riax scans databases, identifies key papers, finds contradictions',
    },
    {
      step: 'Data Analysis',
      description: 'Designs experiments, runs analysis, catches errors autonomously',
    },
    {
      step: 'Synthesis',
      description: 'Generates insights, identifies novel connections, highlights gaps',
    },
    {
      step: 'Paper Writing',
      description: 'Matches journal style, perfect citations, publication-ready format',
    },
    {
      step: 'Your Control',
      description: 'You approve critical decisions, remove outliers, resolve contradictions',
    },
  ];

  const controlExamples = [
    {
      icon: AlertTriangle,
      question: '"I found 12 outliers in your dataset—remove or keep?"',
      answer: 'You decide',
    },
    {
      icon: AlertTriangle,
      question: '"Two studies contradict each other—which matters more?"',
      answer: 'You choose',
    },
    {
      icon: AlertTriangle,
      question: '"This methodology has a potential flaw—proceed or revise?"',
      answer: 'You control',
    },
  ];

  return (
    <div className="min-h-screen bg-midnight text-moonlight">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(74,222,128,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(56,189,248,0.03),transparent_50%)]" />

        <div className="relative container-landing">
          {/* Back Button */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-softSky hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to home</span>
          </a>

          <div className="max-w-4xl">
            {/* Icon + Name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(74,222,128,0.15)] flex items-center justify-center">
                <Search className="w-8 h-8 text-emerald" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-moonlight">Riax</h1>
                <p className="text-xl text-emerald font-medium">Research Assistant</p>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-6 leading-tight">
              From flawed ideas to publish-ready papers.
              <br />
              <span className="text-gradient">You stay in control.</span>
            </h2>

            <p className="text-xl text-silver leading-relaxed mb-8 max-w-3xl">
              Your personal{' '}
              <span className="text-emerald font-semibold">Literature Scholar</span> devours academic
              databases. Your <span className="text-skyBlue font-semibold">Data Analyst</span>{' '}
              designs experiments and catches mistakes. Your{' '}
              <span className="text-gold font-semibold">Paper Writer</span> matches journal styles
              perfectly. All working together, all following{' '}
              <span className="text-moonlight font-semibold">your commands</span>.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => (window.location.hash = 'signup')}
                className="group"
              >
                <Sparkles className="w-5 h-5" />
                Start Researching
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => (window.location.hash = 'signup')}
              >
                <BookOpen className="w-5 h-5" />
                View Example Papers
              </Button>
            </div>

            <p className="text-sm text-softSky mt-4">
              Free to start • Full access • Publication-ready output
            </p>
          </div>
        </div>
      </section>

      {/* Three Core Capabilities */}
      <section className="py-20 bg-gradient-to-b from-midnight to-pacific">
        <div className="container-landing">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              Three Specialists, One Mission
            </h2>
            <p className="text-xl text-softSky">
              Each agent is world-class. Together, they're unstoppable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="bg-midnight border border-[rgba(199,204,216,0.1)] rounded-2xl p-8 hover:border-emerald transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-[rgba(74,222,128,0.15)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-emerald" />
                  </div>
                  <h3 className="text-2xl font-bold text-moonlight mb-4">{capability.title}</h3>
                  <p className="text-silver leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* You Stay in Control */}
      <section className="py-20 bg-pacific">
        <div className="container-landing">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[rgba(74,222,128,0.1)] px-4 py-2 rounded-full mb-4">
              <Shield className="w-5 h-5 text-emerald" />
              <span className="text-emerald font-semibold text-sm">Your Control, Your Research</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              AI Works With You, Not Instead of You
            </h2>
            <p className="text-xl text-softSky max-w-3xl mx-auto">
              Every critical decision flows through you. It's the difference between autopilot and a
              fighter jet squadron following your commands.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {controlExamples.map((example, index) => {
              const Icon = example.icon;
              return (
                <div
                  key={index}
                  className="bg-midnight border border-[rgba(199,204,216,0.1)] rounded-xl p-6 hover:border-emerald transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(251,191,36,0.15)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#FBB024]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-moonlight font-medium mb-2">{example.question}</p>
                      <p className="text-emerald font-semibold">→ {example.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-12 bg-[rgba(74,222,128,0.1)] border border-[rgba(74,222,128,0.2)] rounded-xl p-8 text-center">
            <Brain className="w-12 h-12 text-emerald mx-auto mb-4" />
            <p className="text-lg text-moonlight font-medium">
              Riax handles the heavy lifting. You make the critical calls. The result? Research that's
              both intelligent <span className="text-emerald">and yours</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Research Workflow */}
      <section className="py-20 bg-midnight">
        <div className="container-landing">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              From Question to Publication
            </h2>
            <p className="text-xl text-softSky">The complete research workflow, automated</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {workflowSteps.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-pacific border border-[rgba(199,204,216,0.1)] rounded-xl p-6 hover:border-emerald transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(74,222,128,0.15)] flex items-center justify-center text-emerald font-bold group-hover:bg-[rgba(74,222,128,0.25)] transition-colors">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-moonlight mb-2">{item.step}</h3>
                    <p className="text-silver">{item.description}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Capabilities */}
      <section className="py-20 bg-pacific">
        <div className="container-landing max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              Everything You Need for Research Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-midnight border border-[rgba(199,204,216,0.1)] rounded-lg p-4 hover:border-emerald transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald flex-shrink-0" />
                <span className="text-moonlight">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-b from-midnight to-pacific relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.08),transparent_70%)]" />

        <div className="relative container-landing text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-moonlight mb-6">
            Research smarter. Publish faster. Stay in control.
          </h2>
          <p className="text-xl text-silver mb-12 max-w-2xl mx-auto">
            Join researchers producing publication-ready work with Riax
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.hash = 'signup')}
              className="shadow-[0_8px_24px_rgba(74,222,128,0.4)]"
            >
              <Sparkles className="w-5 h-5" />
              Start Your Research
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.hash = 'signup')}
            >
              <BookOpen className="w-5 h-5" />
              See Sample Papers
            </Button>
          </div>

          <p className="text-sm text-softSky mt-6">
            Free to start • No credit card • Full capabilities
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
