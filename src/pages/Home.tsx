import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Building2,
  MapPin
} from "lucide-react";

export const Home = () => {
  const stats = [
    { label: "Active Jobs", value: "1,200+", icon: Briefcase },
    { label: "Companies", value: "300+", icon: Building2 },
    { label: "Job Seekers", value: "50K+", icon: Users },
    { label: "Success Rate", value: "92%", icon: TrendingUp }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Curated Opportunities",
      description: "Hand-picked job listings from top companies across various industries."
    },
    {
      icon: TrendingUp,
      title: "Application Tracking",
      description: "Keep track of your applications with real-time status updates."
    },
    {
      icon: Star,
      title: "Company Insights",
      description: "Get detailed information about companies and their work culture."
    }
  ];

  const recentJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      category: "Technology",
      type: "Full-time",
      salary: "$120K - $150K"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "New York, NY",
      category: "Design",
      type: "Full-time",
      salary: "$80K - $110K"
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "StartupXYZ",
      location: "Remote",
      category: "Marketing",
      type: "Full-time",
      salary: "$70K - $90K"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Dream Job
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover curated opportunities from top companies. Track your applications 
              and land your next career milestone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
                  Browse Jobs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/register">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center animate-slide-up">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose JobPortal?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make job hunting simple, transparent, and effective with our cutting-edge platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title} 
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4 mx-auto">
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Jobs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Opportunities
            </h2>
            <p className="text-lg text-muted-foreground">
              Fresh job listings from top companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {recentJobs.map((job, index) => (
              <Card 
                key={job.id} 
                className="job-card animate-slide-up hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-2">{job.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Building2 className="w-4 h-4 mr-1" />
                        {job.company}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                    </div>
                    <span className={`category-badge category-${job.category.toLowerCase()}`}>
                      {job.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <div className="font-medium text-primary">{job.salary}</div>
                      <div className="text-muted-foreground">{job.type}</div>
                    </div>
                    <Button size="sm" className="btn-primary">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/jobs">
              <Button size="lg" className="btn-primary">
                View All Jobs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of job seekers who have found their perfect role through our platform.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
              Create Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};