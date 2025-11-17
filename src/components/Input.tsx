import { useState } from 'react';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';

interface InputProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
}

export function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  fullWidth = true,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const baseClasses = 'h-12 px-4 rounded-lg font-inter text-[15px] text-moonlight placeholder:text-softSky transition-all duration-200';
  const bgClasses = isFocused ? 'bg-[rgba(26,35,52,0.8)]' : 'bg-[rgba(26,35,52,0.5)]';
  const borderClasses = error
    ? 'border border-crimson'
    : isFocused
      ? 'border border-gold'
      : 'border border-[rgba(199,204,216,0.2)]';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const widthClasses = fullWidth ? 'w-full' : '';

  return (
    <div className={`flex flex-col gap-2 ${widthClasses}`}>
      {label && (
        <label className="text-sm font-semibold text-silver">
          {label}
          {required && <span className="text-crimson ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`${baseClasses} ${bgClasses} ${borderClasses} ${disabledClasses} ${type === 'password' ? 'pr-12' : ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${label}-error` : undefined}
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-softSky hover:text-moonlight transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && (
        <div id={`${label}-error`} className="flex items-center gap-2 text-crimson text-xs">
          <AlertCircle size={14} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
