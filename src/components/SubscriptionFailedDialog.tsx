import { useState } from "react";
import { AlertTriangle, RefreshCw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface SubscriptionFailedDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
  errorMessage?: string;
}

export const SubscriptionFailedDialog = ({ 
  isOpen, 
  onClose, 
  onRetry, 
  errorMessage = "We couldn't process your subscription. Please try again." 
}: SubscriptionFailedDialogProps) => {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    try {
      await onRetry();
    } finally {
      setIsRetrying(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-border bg-background">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
          </div>
          <DialogTitle className="text-xl font-semibold text-foreground">
            Subscription Failed
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {errorMessage}
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2 text-sm">Common issues:</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Payment method declined</li>
              <li>• Insufficient funds</li>
              <li>• Network connection issues</li>
              <li>• Card information incorrect</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button
              onClick={handleRetry}
              disabled={isRetrying}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isRetrying ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4 mr-2" />
              )}
              {isRetrying ? 'Retrying...' : 'Try Again'}
            </Button>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Need help?{' '}
              <a href="#" className="text-primary hover:underline">
                Contact support
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};