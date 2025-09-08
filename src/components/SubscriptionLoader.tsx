import { Loader2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface SubscriptionLoaderProps {
  isOpen: boolean;
}

export const SubscriptionLoader = ({ isOpen }: SubscriptionLoaderProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md border-border bg-background">
        <div className="flex flex-col items-center justify-center py-8 px-4">
          <div className="relative mb-6">
            <div className="w-20 h-20 border-4 border-muted rounded-full"></div>
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <Loader2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary animate-pulse" />
          </div>
          
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Processing Your Subscription
          </h3>
          
          <p className="text-muted-foreground text-center text-sm">
            Please wait while we set up your account. This may take a few moments...
          </p>
          
          <div className="flex space-x-1 mt-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};