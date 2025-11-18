import { useState } from 'react';
import { ArrowLeft, FileText, Sparkles, DollarSign, Target, Layers, Award } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ComingSoonModal } from '../components/ComingSoonModal';

export default function ScribePage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const tools = [
    'Text extraction (FREE)',
    'Structure analyzer (FREE)',
    'Citation manager',
    'Style matcher',
    'Format converter',
    'Outline generator',
    'Content editor',
    'Quality checker',
    'Reference validator',
    'Template engine',
    'Export pipeline',
  ];

  const comparison = {
    traditional: {
      name: 'ChatGPT Approach',
      process: 'Dump entire request → Pay $$$ → Generic output → Start over if wrong',
      cost: '$4.00',
      quality: 'Generic, needs heavy editing',
    },
    scribe: {
      name: 'ScribeAI',
      process: 'Smart agent analyzes → Plans optimal approach → Uses 11 specialized tools',
      breakdown: [
        { step: 'Extract text', cost: 'FREE' },
        { step: 'Analyze structure', cost: 'FREE' },
        { step: 'Plan improvements', cost: '$0.02' },
        { step: 'Targeted edits', cost: '$0.08' },
        { step: 'Format output', cost: 'FREE' },
      ],
      totalCost: '$0.10',
      savings: '97.5%',
      quality: 'Professional, publication-ready',
    },
  };

  const features = [
    {
      icon: DollarSign,
      title: '70-95% Cost Savings',
      description: 'Intelligent agent architecture means you only pay for what you need. Most operations are free or extremely cheap.',
    },
    {
      icon: Target,
      title: 'Precision Editing',
      description: 'Matches citation styles, tone, and structure by reverse-engineering target formats. Perfect for academic papers.',
    },
    {
      icon: Layers,
      title: '11 Specialized Tools',
      description: 'Each tool optimized for specific tasks. The agent orchestrates them intelligently for best results.',
    },
    {
      icon: Award,
      title: 'Publication-Ready Quality',
      description: 'From rough drafts to polished papers. Scribe handles formatting, citations, and structure like an expert editor.',
    },
  ];

  const useCases = [
    {
      title: 'Academic Papers',
      description: 'Perfect citations, journal-specific formatting, literature review synthesis',
    },
    {
      title: 'Business Reports',
      description: 'Executive summaries, data visualization integration, consistent branding',
    },
    {
      title: 'Technical Documentation',
      description: 'API docs, user guides, code examples with proper syntax highlighting',
    },
    {
      title: 'Proposals & Grants',
      description: 'Match RFP requirements, budget tables, compliance sections',
    },
  ];

  return (
    <div className="min-h-screen bg-midnight text-moonlight">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(236,206,110,0.05),transparent_50%)]" />

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
                <FileText className="w-8 h-8 text-gold" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-moonlight">Scribe</h1>
                <p className="text-xl text-gold font-medium">Document Creation Agent</p>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-6 leading-tight">
              Documents that look official, polished,
              <br />
              <span className="text-gradient">effortless.</span>
            </h2>

            <p className="text-xl text-silver leading-relaxed mb-8 max-w-3xl">
              Not just another AI writer. Scribe is an intelligent document architect with 11
              specialized tools, delivering{' '}
              <span className="text-gold font-semibold">publication-ready documents</span> at a
              fraction of the cost.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-3xl font-bold text-gold">97.5%</p>
                <p className="text-sm text-softSky">Cost Savings</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold">11</p>
                <p className="text-sm text-softSky">Specialized Tools</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold">100%</p>
                <p className="text-sm text-softSky">Publication Ready</p>
              </div>
            </div>

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
                See Examples
              </Button>
            </div>

            <p className="text-sm text-softSky mt-4">
              Coming soon • Join the waitlist • Save up to 95% on document costs
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-gradient-to-b from-midnight to-pacific">
        <div className="container-landing">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              Intelligent Architecture = Massive Savings
            </h2>
            <p className="text-xl text-softSky max-w-3xl mx-auto">
              Traditional AI tools process everything. Scribe's agent only pays for what matters.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traditional Approach */}
            <div className="bg-midnight border border-[rgba(239,68,68,0.3)] rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-moonlight">{comparison.traditional.name}</h3>
                <span className="px-3 py-1 bg-[rgba(239,68,68,0.15)] text-crimson text-sm font-semibold rounded-full">
                  Expensive
                </span>
              </div>

              <p className="text-silver mb-6">{comparison.traditional.process}</p>

              <div className="bg-pacific rounded-lg p-6 mb-6">
                <p className="text-sm text-softSky mb-2">Total Cost:</p>
                <p className="text-4xl font-bold text-crimson">{comparison.traditional.cost}</p>
              </div>

              <p className="text-sm text-softSky">Result: {comparison.traditional.quality}</p>
            </div>

            {/* Scribe Approach */}
            <div className="bg-midnight border border-[rgba(236,206,110,0.3)] rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-moonlight">{comparison.scribe.name}</h3>
                <span className="px-3 py-1 bg-[rgba(74,222,128,0.15)] text-emerald text-sm font-semibold rounded-full">
                  Intelligent
                </span>
              </div>

              <p className="text-silver mb-6">{comparison.scribe.process}</p>

              <div className="space-y-2 mb-6">
                {comparison.scribe.breakdown.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-softSky">→ {item.step}</span>
                    <span className={`font-mono ${item.cost === 'FREE' ? 'text-emerald' : 'text-gold'}`}>
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-[rgba(236,206,110,0.1)] rounded-lg p-6 border border-[rgba(236,206,110,0.2)]">
                <div className="flex items-end justify-between mb-2">
                  <p className="text-sm text-softSky">Total Cost:</p>
                  <p className="text-xs text-emerald font-semibold">
                    ↓ {comparison.scribe.savings} savings
                  </p>
                </div>
                <p className="text-4xl font-bold text-gold">{comparison.scribe.totalCost}</p>
              </div>

              <p className="text-sm text-emerald mt-6">Result: {comparison.scribe.quality}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-pacific">
        <div className="container-landing">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              What Makes Scribe Special
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-midnight border border-[rgba(199,204,216,0.1)] rounded-xl p-8 hover:border-gold transition-all duration-300 group"
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

      {/* Specialized Tools */}
      <section className="py-20 bg-midnight">
        <div className="container-landing max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              11 Specialized Tools Working in Harmony
            </h2>
            <p className="text-xl text-softSky">Each optimized for precision and cost-efficiency</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-pacific border border-[rgba(199,204,216,0.1)] rounded-lg px-4 py-3 text-center hover:border-gold transition-colors"
              >
                <span className="text-moonlight text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-pacific">
        <div className="container-landing max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              Perfect for Every Document Type
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-midnight border border-[rgba(199,204,216,0.1)] rounded-xl p-6 hover:border-gold transition-colors"
              >
                <h3 className="text-lg font-semibold text-gold mb-3">{useCase.title}</h3>
                <p className="text-silver text-sm">{useCase.description}</p>
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
            Professional documents without the professional cost
          </h2>
          <p className="text-xl text-silver mb-12 max-w-2xl mx-auto">
            Be among the first to experience intelligent document creation
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
        agentName="Scribe"
      />
    </div>
  );
}
