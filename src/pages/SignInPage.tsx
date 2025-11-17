import { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // On success: redirect to app
      window.location.hash = 'app';
    } catch (error) {
      setErrors({ submit: 'Invalid email or password. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    // Google OAuth flow would go here
    console.log('Google sign in clicked');
  };

  return (
    <div className="min-h-screen flex bg-midnight">
      {/* Left panel - Brand */}
      <div className="hidden lg:flex lg:w-[45%] bg-pacific relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(236,206,110,0.05),transparent_70%)]" />

        <div className="relative z-10 flex flex-col justify-between p-16">
          {/* Logo */}
          <div>
            <a href="#" className="inline-block">
              <span className="text-2xl font-semibold text-moonlight">AURELIUM</span>
            </a>
          </div>

          {/* Main content */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-moonlight leading-tight">
              Welcome back to
              <br />
              Aurelium
            </h1>

            <p className="text-lg text-softSky leading-relaxed max-w-md">
              Continue working with your intelligent agents. Automate, analyze, and create.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[rgba(236,206,110,0.15)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-silver">Pick up where you left off</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[rgba(236,206,110,0.15)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-silver">Access your workspace and history</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[rgba(236,206,110,0.15)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-silver">Collaborate with your team</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-softSky">
            Trusted by teams at innovative companies worldwide
          </div>
        </div>
      </div>

      {/* Right panel - Form */}
      <div className="flex-1 bg-midnight flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left">
              {/* Mobile logo */}
              <div className="lg:hidden mb-8 text-center">
                <a href="#" className="inline-block">
                  <span className="text-2xl font-semibold text-moonlight">AURELIUM</span>
                </a>
              </div>

              <h2 className="text-3xl font-bold text-moonlight mb-2">Sign in to your account</h2>
              <p className="text-softSky">Welcome back! Please enter your details</p>
            </div>

            {/* Google button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full h-12 px-4 bg-white border border-silver rounded-lg text-midnight font-medium text-sm flex items-center justify-center gap-3 hover:border-gold hover:shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <g fill="none">
                  <path
                    fill="#4285F4"
                    d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
                  />
                  <path
                    fill="#34A853"
                    d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M4.32 11.98c-.22-.59-.35-1.22-.35-1.98 0-.76.13-1.39.35-1.98V5.49H1.07C.38 6.85 0 8.38 0 10s.38 3.15 1.07 4.51l3.25-2.53z"
                  />
                  <path
                    fill="#EA4335"
                    d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.49l3.25 2.53c.8-2.41 3.04-4.14 5.68-4.14z"
                  />
                </g>
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[rgba(199,204,216,0.2)]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-midnight text-softSky">or</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
                error={errors.email}
                placeholder="you@company.com"
                required
              />

              <div>
                <Input
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={(value) => setFormData({ ...formData, password: value })}
                  error={errors.password}
                  placeholder="Enter your password"
                  required
                />
                <div className="mt-2 text-right">
                  <a href="#forgot-password" className="text-sm text-gold hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Submit error */}
              {errors.submit && (
                <div className="flex items-center gap-2 text-crimson text-sm bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] rounded-lg p-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errors.submit}</span>
                </div>
              )}

              {/* Submit button */}
              <Button type="submit" variant="primary" size="lg" fullWidth loading={loading} disabled={loading}>
                Sign In
              </Button>
            </form>

            {/* Footer links */}
            <div className="text-center space-y-4">
              <p className="text-sm text-softSky">
                Don't have an account?{' '}
                <a
                  href="#signup"
                  className="text-gold font-semibold hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = 'signup';
                  }}
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
