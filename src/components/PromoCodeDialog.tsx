import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Gift, X } from "lucide-react";

interface PromoCodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PromoCodeDialog = ({ open, onOpenChange }: PromoCodeDialogProps) => {
  const [promoCode, setPromoCode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    setError("");
    
    // Simulate API call
    setTimeout(() => {
      if (promoCode.toLowerCase() === "welcome2024" || promoCode.toLowerCase() === "freecode") {
        setIsSuccess(true);
      } else {
        setError("Invalid promo code. Please try again.");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleClose = () => {
    setPromoCode("");
    setIsSuccess(false);
    setError("");
    onOpenChange(false);
  };

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Success! 🎉
            </h2>
            
            <p className="text-muted-foreground mb-6 max-w-sm">
              Your promo code has been applied successfully. You now have access to premium features for free!
            </p>
            
            <div className="w-full bg-accent/50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">Free Premium Access</span>
                <Badge className="bg-primary text-primary-foreground">Active</Badge>
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Valid for 30 days • Expires Jan 2025
              </div>
            </div>
            
            <div className="space-y-2 w-full text-left">
              <h3 className="font-semibold text-foreground mb-3">Unlocked Features:</h3>
              <div className="space-y-2">
                {[
                  "Unlimited job applications",
                  "Advanced search filters", 
                  "Resume builder & templates",
                  "Priority support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button onClick={handleClose} className="w-full mt-6">
              Get Started
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-primary" />
            Enter Promo Code
          </DialogTitle>
          <DialogDescription>
            Have a promo code? Enter it below to unlock premium features for free.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Input
              placeholder="Enter your promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="text-center tracking-wider uppercase"
              maxLength={20}
            />
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>
          
          <div className="bg-accent/50 rounded-lg p-4">
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-1">Try these sample codes:</p>
              <div className="space-y-1">
                <Badge variant="outline" className="mr-2">WELCOME2024</Badge>
                <Badge variant="outline">FREECODE</Badge>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!promoCode.trim() || isLoading}
              className="flex-1"
            >
              {isLoading ? "Applying..." : "Apply Code"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};