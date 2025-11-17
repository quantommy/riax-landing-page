interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'feature' | 'status';
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Card({
  children,
  variant = 'default',
  hoverable = false,
  className = '',
  onClick,
}: CardProps) {
  const baseClasses = 'rounded-xl transition-all duration-300 ease-out';

  const variantClasses = {
    default: 'bg-pacific border border-[rgba(199,204,216,0.15)] p-6',
    feature: 'bg-[rgba(26,35,52,0.6)] border border-[rgba(199,204,216,0.12)] p-8 backdrop-blur-xl',
    status: 'bg-[rgba(12,17,32,0.8)] border-l-[3px] border-l-softSky rounded-lg p-4',
  };

  const hoverClasses = hoverable
    ? 'hover:border-[rgba(236,206,110,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(12,17,32,0.3)] cursor-pointer'
    : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;

  return (
    <div className={classes} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      {children}
    </div>
  );
}
