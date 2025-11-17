import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}: ModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[rgba(12,17,32,0.85)] backdrop-blur-lg animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div
        className={`relative bg-pacific border border-[rgba(199,204,216,0.2)] rounded-2xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] animate-scaleIn w-full ${sizeClasses[size]}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-softSky hover:text-moonlight transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Title */}
        {title && (
          <h2 id="modal-title" className="text-2xl font-semibold text-moonlight mb-6">
            {title}
          </h2>
        )}

        {/* Content */}
        <div className="text-moonlight">
          {children}
        </div>
      </div>
    </div>
  );
}
