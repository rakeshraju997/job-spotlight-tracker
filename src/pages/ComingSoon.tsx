import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export const ComingSoon = () => {
  const targetDate = new Date("2025-10-27T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full p-8 md:p-12 text-center space-y-8 bg-card/50 backdrop-blur-sm border-2">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Sparkles className="h-16 w-16 text-primary animate-bounce-in" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Feature will be available from 27th of October
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={item.label}
              className="bg-primary/10 rounded-lg p-6 border border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-muted-foreground mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <p className="text-sm text-muted-foreground">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
        </div>
      </Card>
    </div>
  );
};
