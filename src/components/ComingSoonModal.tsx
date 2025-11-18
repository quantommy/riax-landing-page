import { Sparkles } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from './Button';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  agentName: string;
}

export function ComingSoonModal({ isOpen, onClose, agentName }: ComingSoonModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <div className="text-center py-8">
        <div className="w-20 h-20 rounded-full bg-[rgba(236,206,110,0.1)] flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-10 h-10 text-gold" />
        </div>

        <h2 className="text-3xl font-bold text-moonlight mb-4">
          Coming Soon
        </h2>

        <p className="text-lg text-softSky mb-2">
          <span className="text-gold font-semibold">{agentName}</span> is almost ready.
        </p>

        <p className="text-softSky mb-8">
          We're putting the finishing touches on this incredible agent. Join the waitlist to be notified when it launches.
        </p>

        <div className="space-y-3">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => {
              onClose();
              window.location.hash = 'signup';
            }}
          >
            Join Waitlist
          </Button>

          <Button
            variant="ghost"
            size="md"
            fullWidth
            onClick={onClose}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </Modal>
  );
}
