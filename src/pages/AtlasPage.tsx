import { useState } from 'react';
import { ArrowLeft, Network, Zap, Brain, TrendingUp, Workflow, Sparkles, GitBranch, Shield } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ComingSoonModal } from '../components/ComingSoonModal';

export default function AtlasPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const features = [
    {
      icon: Brain,
      title: 'Natural Language → Workflows',
      description: 'Just describe what you want. Atlas understands, plans, and builds the workflow automatically. No drag-and-drop needed.',
    },
    {
      icon: GitBranch,
      title: 'Self-Improving Intelligence',
      description: 'Learns from every task. Remembers your preferences, successful patterns, and failure modes. Gets smarter with use.',
    },
    {
      icon: Zap,
      title: 'Parallel Execution',
      description: 'Async DAG engine executes tasks in parallel with automatic retries, error handling, and real-time feedback.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Permission controls, approval gates, audit trails, and secure credential management built-in.',
    },
  ];

  const capabilities = [
    'Hierarchical task planning with reflection',
    'Template matching & auto-generation',
    'LLM batching (30-50% cost reduction)',
    'Visual workflow editor & debugger',
    'Multi-domain support (Marketing, Ops, Dev, etc.)',
    'Pluggable tool ecosystem',
    'Real-time execution monitoring',
    'Distributed tracing & observability',
  ];

  const useCases = [
    {
      title: 'Support Operations',
      example: '"Summarize new support emails, create Notion report, message team"',
    },
    {
      title: 'Content & Marketing',
      example: '"Monitor competitors, draft responses, schedule social posts"',
    },
    {
      title: 'Engineering Automation',
      example: '"Deploy to staging, run tests, notify on Slack if failures"',
    },
    {
      title: 'Finance Workflows',
      example: '"Extract invoices from email, validate, update spreadsheet, send summary"',
    },
  ];

  return (
    <div className="min-h-screen bg-midnight text-moonlight">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(236,206,110,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(74,222,128,0.03),transparent_50%)]" />

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
              <div className="w-16 h-16 rounded-2xl bg-[rgba(236,206,110,0.15)] flex items-center justify-center">
                <Network className="w-8 h-8 text-gold" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-moonlight">Atlas</h1>
                <p className="text-xl text-gold font-medium">Workflow Automation Agent</p>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-6 leading-tight">
              If n8n and AI had a baby,
              <br />
              <span className="text-gradient">this would be it.</span>
            </h2>

            <p className="text-xl text-silver leading-relaxed mb-8 max-w-3xl">
              Atlas is your intelligent automation manager. Describe any workflow in plain English,
              watch it auto-generate a visual workflow, approve it, and let it run. It learns, adapts,
              and gets{' '}
              <span className="text-gold font-semibold">smarter with every task</span>.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setShowComingSoon(true)}
                className="group"
              >
                <Sparkles className="w-5 h-5" />
                Get Early Access
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setShowComingSoon(true)}
              >
                <Workflow className="w-5 h-5" />
                View Demo
              </Button>
            </div>

            <p className="text-sm text-softSky mt-4">
              Coming soon • Join the waitlist • Be the first to automate
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Visual Placeholder */}
      <section className="py-20 bg-pacific">
        <div className="container-landing">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              From Words to Workflows in Seconds
            </h2>
            <p className="text-xl text-softSky">
              Watch Atlas transform your description into an executable workflow
            </p>
          </div>

          {/* Workflow Placeholder */}
          <div className="max-w-5xl mx-auto bg-midnight border border-[rgba(236,206,110,0.2)] rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(236,206,110,0.05),transparent_60%)]" />

            <div className="relative">
              {/* Example Input */}
              <div className="bg-pacific border border-[rgba(236,206,110,0.2)] rounded-xl p-6 mb-8">
                <p className="text-sm text-gold font-semibold mb-2">You type:</p>
                <p className="text-lg text-moonlight font-mono">
                  "Every morning at 9am, summarize new support emails, create a Notion report with
                  key issues, and send a Slack message to the team with the summary."
                </p>
              </div>

              {/* Workflow Visualization Placeholder */}
              <div className="space-y-4">
                <p className="text-sm text-softSky font-semibold mb-4">Atlas generates:</p>

                {/* Simple workflow representation */}
                <div className="flex flex-col gap-4">
                  {[
                    { icon: '🕐', label: 'Schedule: Daily 9am', color: 'emerald' },
                    { icon: '📧', label: 'Fetch Support Emails', color: 'skyBlue' },
                    { icon: '🤖', label: 'Summarize with AI', color: 'gold' },
                    { icon: '📝', label: 'Create Notion Report', color: 'skyBlue' },
                    { icon: '💬', label: 'Send Slack Message', color: 'emerald' },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-midnight border border-[rgba(199,204,216,0.1)] rounded-lg p-4 hover:border-gold transition-colors group"
                    >
                      <div className="text-3xl">{step.icon}</div>
                      <div className="flex-1">
                        <p className="text-moonlight font-medium">{step.label}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full bg-${step.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-[rgba(236,206,110,0.1)] flex items-center justify-between">
                  <p className="text-silver">Auto-generated workflow • Ready to run</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-[rgba(74,222,128,0.15)] text-emerald text-sm rounded-full">
                      ✓ Approved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-midnight">
        <div className="container-landing">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              Built for Scale, Designed for Simplicity
            </h2>
            <p className="text-xl text-softSky">
              Enterprise automation with zero-code complexity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-pacific border border-[rgba(199,204,216,0.1)] rounded-xl p-8 hover:border-gold transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[rgba(236,206,110,0.15)] flex items-center justify-center mb-4 group-hover:bg-[rgba(236,206,110,0.25)] transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-moonlight mb-3">{feature.title}</h3>
                  <p className="text-silver leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-pacific">
        <div className="container-landing max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              One Platform, Infinite Workflows
            </h2>
            <p className="text-xl text-softSky">Real examples from real teams</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-midnight border border-[rgba(199,204,216,0.1)] rounded-xl p-6 hover:border-gold transition-colors"
              >
                <h3 className="text-lg font-semibold text-gold mb-3">{useCase.title}</h3>
                <p className="text-moonlight font-mono text-sm italic">{useCase.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-midnight">
        <div className="container-landing max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              Technical Excellence Under the Hood
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-pacific border border-[rgba(199,204,216,0.1)] rounded-lg p-4 hover:border-gold transition-colors"
              >
                <TrendingUp className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-moonlight">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-b from-midnight to-pacific relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,206,110,0.08),transparent_70%)]" />

        <div className="relative container-landing text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-moonlight mb-6">
            Automation that learns, adapts, and scales
          </h2>
          <p className="text-xl text-silver mb-12 max-w-2xl mx-auto">
            Be among the first to experience the future of workflow automation
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={() => setShowComingSoon(true)}
            className="shadow-gold"
          >
            <Sparkles className="w-5 h-5" />
            Join Waitlist
          </Button>

          <p className="text-sm text-softSky mt-6">Coming Q1 2025 • Early access available</p>
        </div>
      </section>

      <Footer />

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        agentName="Atlas"
      />
    </div>
  );
}
