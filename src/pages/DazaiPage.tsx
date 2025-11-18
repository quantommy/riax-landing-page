import { ArrowLeft, BarChart3, Brain, Zap, Code, Sparkles, CheckCircle2, Play, Terminal } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';

export default function DazaiPage() {
  const features = [
    {
      icon: Brain,
      title: 'Metacognitive Reasoning',
      description: 'Plans the analysis, reviews its own plan for flaws, executes, then synthesizes insights like a senior data scientist.',
    },
    {
      icon: Zap,
      title: 'Self-Correcting Loop',
      description: 'Code fails? Dazai reads the error, understands it, and fixes itself automatically. No hand-holding needed.',
    },
    {
      icon: Sparkles,
      title: 'Strategic Planning',
      description: 'Breaks complex questions into logical steps: validate → explore → analyze → visualize → conclude.',
    },
    {
      icon: Code,
      title: 'Built-in Sandbox',
      description: 'Secure Python environment. Runs code, generates charts, performs statistical tests—all in real-time.',
    },
  ];

  const capabilities = [
    'Automatic data validation and cleaning',
    'Statistical hypothesis testing',
    'Interactive visualizations (matplotlib, seaborn, plotly)',
    'Correlation and regression analysis',
    'Time series forecasting',
    'Anomaly detection',
    'Natural language insights generation',
    'Research-grade documentation',
  ];

  const example = {
    question: '"What drives our sales?"',
    steps: [
      'Validates data quality and completeness',
      'Explores distributions and trends',
      'Detects outliers and asks how to handle them',
      'Runs correlation analysis',
      'Creates compelling visualizations',
      'Synthesizes findings into actionable insights',
    ],
  };

  return (
    <div className="min-h-screen bg-midnight text-moonlight">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,206,110,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(56,189,248,0.03),transparent_50%)]" />

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
              <div className="w-16 h-16 rounded-2xl bg-[rgba(56,189,248,0.15)] flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-skyBlue" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-moonlight">Dazai</h1>
                <p className="text-xl text-skyBlue font-medium">Data Analyst Agent</p>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-6 leading-tight">
              A data scientist who thinks, codes,
              <br />
              <span className="text-gradient">corrects itself, and delivers insights.</span>
            </h2>

            <p className="text-xl text-silver leading-relaxed mb-8 max-w-3xl">
              Not just a code generator. Dazai is a conversational data scientist with metacognitive
              reasoning, a built-in Python sandbox, and the ability to produce{' '}
              <span className="text-skyBlue font-semibold">research-grade analysis</span> from a
              simple question.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => (window.location.hash = 'signup')}
                className="group"
              >
                <Play className="w-5 h-5" />
                Try Dazai Now
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => (window.location.hash = 'signup')}
              >
                <Terminal className="w-5 h-5" />
                Access API
              </Button>
            </div>

            <p className="text-sm text-softSky mt-4">
              Free to start • No credit card required • Full sandbox access
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Example */}
      <section className="py-20 bg-gradient-to-b from-midnight to-pacific">
        <div className="container-landing">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              True Autonomous Intelligence
            </h2>
            <p className="text-xl text-softSky max-w-2xl mx-auto">
              Watch Dazai break down a complex question into a complete analysis workflow
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Example Card */}
            <div className="bg-midnight border border-[rgba(56,189,248,0.2)] rounded-2xl p-8 md:p-12">
              <div className="mb-8">
                <div className="inline-block bg-[rgba(56,189,248,0.1)] px-4 py-2 rounded-lg mb-4">
                  <p className="text-skyBlue font-mono text-sm">You ask:</p>
                </div>
                <p className="text-2xl md:text-3xl font-semibold text-moonlight">
                  {example.question}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-silver font-medium mb-6">Dazai automatically:</p>
                {example.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(56,189,248,0.15)] flex items-center justify-center text-skyBlue font-semibold text-sm group-hover:bg-[rgba(56,189,248,0.25)] transition-colors">
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-moonlight">{step}</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-[rgba(56,189,248,0.1)]">
                <p className="text-skyBlue font-semibold mb-2">Result:</p>
                <p className="text-silver">
                  Actionable business insights with publication-ready visualizations and statistical
                  backing—all from a single natural language question.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-pacific">
        <div className="container-landing">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              What Makes Dazai Different
            </h2>
            <p className="text-xl text-softSky">
              Built for researchers, analysts, and anyone who needs real answers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-midnight border border-[rgba(199,204,216,0.1)] rounded-xl p-8 hover:border-[rgba(56,189,248,0.3)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[rgba(56,189,248,0.15)] flex items-center justify-center mb-4 group-hover:bg-[rgba(56,189,248,0.25)] transition-colors">
                    <Icon className="w-6 h-6 text-skyBlue" />
                  </div>
                  <h3 className="text-xl font-semibold text-moonlight mb-3">{feature.title}</h3>
                  <p className="text-silver leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-20 bg-midnight">
        <div className="container-landing max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-moonlight mb-4">
              Full Analytical Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-pacific border border-[rgba(199,204,216,0.1)] rounded-lg p-4 hover:border-[rgba(56,189,248,0.2)] transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-skyBlue flex-shrink-0" />
                <span className="text-moonlight">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-b from-midnight to-pacific relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)]" />

        <div className="relative container-landing text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-moonlight mb-6">
            Start analyzing data the intelligent way
          </h2>
          <p className="text-xl text-silver mb-12 max-w-2xl mx-auto">
            Join researchers and analysts who trust Dazai for production-grade analysis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.hash = 'signup')}
              className="shadow-gold"
            >
              <Play className="w-5 h-5" />
              Get Started Free
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.hash = 'signup')}
            >
              <Terminal className="w-5 h-5" />
              View API Docs
            </Button>
          </div>

          <p className="text-sm text-softSky mt-6">
            No credit card • Full sandbox • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
