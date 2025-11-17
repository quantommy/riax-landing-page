import { Loader } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
  fullWidth = false,
  className = '',
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 ease-out inline-flex items-center justify-center gap-2';

  const variantClasses = {
    primary: 'bg-gold text-midnight hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-transparent border border-silver text-moonlight hover:bg-[rgba(199,204,216,0.1)] hover:border-gold',
    ghost: 'bg-transparent text-moonlight hover:bg-[rgba(199,204,216,0.05)]',
  };

  const sizeClasses = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-[52px] px-8 text-base',
  };

  const disabledClasses = 'opacity-40 cursor-not-allowed hover:scale-100 hover:brightness-100';
  const widthClasses = fullWidth ? 'w-full' : '';

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${(disabled || loading) ? disabledClasses : ''}
    ${widthClasses}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading && <Loader className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}
