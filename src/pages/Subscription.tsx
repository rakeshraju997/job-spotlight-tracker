import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Crown, Star, Zap } from "lucide-react";
import { PromoCodeDialog } from "@/components/PromoCodeDialog";
import { SubscriptionLoader } from "@/components/SubscriptionLoader";
import { SubscriptionFailedDialog } from "@/components/SubscriptionFailedDialog";

const Subscription = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showFailedDialog, setShowFailedDialog] = useState(false);
  const [failedMessage, setFailedMessage] = useState("");

  const handleSubscription = async (planName: string) => {
    setIsLoading(true);
    
    // Simulate subscription process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate random failure for demo
      if (Math.random() > 0.7) {
        throw new Error("Payment processing failed. Please check your payment details and try again.");
      }
      
      // Success - you would handle success here
      console.log(`Subscribed to ${planName}`);
    } catch (error) {
      setFailedMessage(error instanceof Error ? error.message : "An unexpected error occurred.");
      setShowFailedDialog(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setShowFailedDialog(false);
    // You could retry the last attempted subscription here
  };

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      icon: Star,
      badge: null,
      features: [
        "Access to basic job listings",
        "5 job applications per month",
        "Basic profile creation",
        "Email support",
      ],
      limitations: [
        "Limited search filters",
        "No priority support",
        "Basic analytics only",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Professional",
      description: "Best for active job seekers",
      monthlyPrice: 19,
      annualPrice: 15,
      icon: Zap,
      badge: "Most Popular",
      features: [
        "Unlimited job applications",
        "Advanced search filters",
        "Priority listing visibility",
        "Resume builder & templates",
        "Application tracking",
        "Email & chat support",
        "Interview preparation tools",
        "Salary insights",
      ],
      limitations: [],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For serious professionals",
      monthlyPrice: 49,
      annualPrice: 39,
      icon: Crown,
      badge: "Premium",
      features: [
        "Everything in Professional",
        "Personal career advisor",
        "Custom job alerts",
        "Premium company insights",
        "Networking opportunities",
        "Priority support (24/7)",
        "Career coaching sessions",
        "LinkedIn optimization",
        "Mock interview sessions",
        "Salary negotiation guide",
      ],
      limitations: [],
      buttonText: "Contact Sales",
      buttonVariant: "default" as const,
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Unlock your career potential with our comprehensive job search platform.
            Start free and upgrade as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
              Annual
            </span>
            <Badge variant="secondary" className="ml-2 bg-accent text-accent-foreground">
              Save 20%
            </Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const originalPrice = isAnnual ? plan.monthlyPrice : null;
            
            return (
              <Card 
                key={plan.name} 
                className={`relative transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${
                      plan.popular ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="text-center">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-foreground">
                        ${price}
                      </span>
                      <span className="text-muted-foreground">
                        {price === 0 ? 'forever' : '/month'}
                      </span>
                    </div>
                    {originalPrice && isAnnual && originalPrice > 0 && (
                      <div className="text-sm text-muted-foreground mt-1">
                        <span className="line-through">${originalPrice}/month</span>
                        <span className="text-primary ml-2 font-medium">
                          Save ${(originalPrice - price) * 12}/year
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.buttonVariant}
                    className={`w-full py-6 text-base font-semibold ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg' 
                        : ''
                    }`}
                    onClick={() => handleSubscription(plan.name)}
                    disabled={isLoading}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Can I change plans anytime?
              </h3>
              <p className="text-muted-foreground text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Is there a free trial?
              </h3>
              <p className="text-muted-foreground text-sm">
                Professional and Enterprise plans come with a 14-day free trial. No credit card required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-muted-foreground text-sm">
                We accept all major credit cards, PayPal, and bank transfers for annual plans.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-muted-foreground text-sm">
                Yes, you can cancel your subscription at any time. You'll have access until the end of your billing period.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SubscriptionLoader isOpen={isLoading} />
      
      <SubscriptionFailedDialog
        isOpen={showFailedDialog}
        onClose={() => setShowFailedDialog(false)}
        onRetry={handleRetry}
        errorMessage={failedMessage}
      />
    </div>
  );
};

export default Subscription;