export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Atlas', href: '#atlas' },
      { label: 'Data Analyst', href: '#data-analyst' },
      { label: 'Scribe', href: '#scribe' },
      { label: 'Researcher', href: '#researcher' },
    ],
    resources: [
      { label: 'Docs', href: '#docs' },
      { label: 'Blog', href: '#blog' },
      { label: 'API', href: '#api' },
      { label: 'Examples', href: '#examples' },
    ],
    company: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
    ],
  };

  return (
    <footer className="bg-midnight border-t border-[rgba(199,204,216,0.1)]">
      <div className="container-landing py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Left column - Logo and tagline */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-semibold text-moonlight mb-3">
              AURELIUM
            </div>
            <p className="text-sm text-softSky max-w-xs">
              Intelligent agents for modern work. Automate, analyze, and create with AI.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-moonlight mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-softSky hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="text-sm font-semibold text-moonlight mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-softSky hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-moonlight mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-softSky hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[rgba(199,204,216,0.1)] text-center">
          <p className="text-sm text-softSky">
            © {currentYear} Aurelium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
