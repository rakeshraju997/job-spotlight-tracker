import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Briefcase, 
  Eye, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  Calendar,
  MapPin,
  Building2,
  ExternalLink,
  Star,
  BarChart3
} from "lucide-react";

export const Dashboard = () => {
  const userStats = {
    totalApplications: 12,
    viewed: 8,
    pending: 7,
    interviews: 3,
    offers: 1
  };

  const recentApplications = [
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      appliedDate: "2024-01-15",
      status: "interview",
      location: "San Francisco, CA",
      salary: "$120K - $150K",
      notes: "Technical interview scheduled for next week"
    },
    {
      id: 2,
      jobTitle: "UX/UI Designer",
      company: "Design Studio Pro",
      appliedDate: "2024-01-12",
      status: "pending",
      location: "New York, NY",
      salary: "$80K - $110K",
      notes: "Application under review"
    },
    {
      id: 3,
      jobTitle: "Product Manager",
      company: "InnovateTech",
      appliedDate: "2024-01-10",
      status: "viewed",
      location: "Seattle, WA",
      salary: "$100K - $130K",
      notes: "HR reached out for initial screening"
    },
    {
      id: 4,
      jobTitle: "Digital Marketing Manager",
      company: "GrowthCo",
      appliedDate: "2024-01-08",
      status: "offer",
      location: "Remote",
      salary: "$70K - $90K",
      notes: "Offer received! Deadline to respond: Jan 25"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'offer': return 'text-success bg-success/10 border-success/20';
      case 'interview': return 'text-primary bg-primary/10 border-primary/20';
      case 'viewed': return 'text-warning bg-warning/10 border-warning/20';
      case 'pending': return 'text-muted-foreground bg-muted border-border';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'offer': return <CheckCircle2 className="w-4 h-4" />;
      case 'interview': return <Calendar className="w-4 h-4" />;
      case 'viewed': return <Eye className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'offer': return 'Offer Received';
      case 'interview': return 'Interview Scheduled';
      case 'viewed': return 'Application Viewed';
      case 'pending': return 'Pending Review';
      default: return 'Pending Review';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 animate-fade-in">Welcome back, John!</h1>
              <p className="text-lg text-muted-foreground animate-fade-in">
                Track your job applications and manage your career journey
              </p>
            </div>
            <Button className="btn-primary">
              <Briefcase className="w-4 h-4 mr-2" />
              Browse New Jobs
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card className="stat-card animate-slide-up">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-full mx-auto mb-3">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">{userStats.totalApplications}</div>
              <div className="text-sm text-muted-foreground">Total Applied</div>
            </CardContent>
          </Card>

          <Card className="dashboard-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-warning/20 rounded-full mx-auto mb-3">
                <Eye className="w-5 h-5 text-warning" />
              </div>
              <div className="text-2xl font-bold">{userStats.viewed}</div>
              <div className="text-sm text-muted-foreground">Viewed</div>
            </CardContent>
          </Card>

          <Card className="dashboard-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-muted rounded-full mx-auto mb-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold">{userStats.pending}</div>
              <div className="text-sm text-muted-foreground">Pending</div>
            </CardContent>
          </Card>

          <Card className="dashboard-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-full mx-auto mb-3">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-bold">{userStats.interviews}</div>
              <div className="text-sm text-muted-foreground">Interviews</div>
            </CardContent>
          </Card>

          <Card className="dashboard-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-success/20 rounded-full mx-auto mb-3">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div className="text-2xl font-bold">{userStats.offers}</div>
              <div className="text-sm text-muted-foreground">Offers</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Applications */}
          <div className="lg:col-span-2">
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Recent Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application, index) => (
                    <div 
                      key={application.id} 
                      className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-lg">{application.jobTitle}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Building2 className="w-4 h-4 mr-1" />
                            {application.company}
                            <span className="mx-2">•</span>
                            <MapPin className="w-4 h-4 mr-1" />
                            {application.location}
                          </div>
                        </div>
                        <div className={`flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(application.status)}`}>
                          {getStatusIcon(application.status)}
                          <span className="ml-1">{getStatusText(application.status)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-muted-foreground">
                          Applied: {new Date(application.appliedDate).toLocaleDateString()}
                        </div>
                        <div className="font-medium text-primary">
                          {application.salary}
                        </div>
                      </div>
                      
                      {application.notes && (
                        <div className="mt-2 p-2 bg-muted/50 rounded text-sm">
                          <strong>Note:</strong> {application.notes}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-end mt-3 space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm" className="btn-ghost">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Visit Job
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Progress */}
            <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Application Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Success Rate</span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    3 positive responses from 12 applications
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Profile Completion</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Add portfolio links to complete
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full btn-primary">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Browse Jobs
                </Button>
                <Button variant="outline" className="w-full">
                  <Star className="w-4 h-4 mr-2" />
                  Update Profile
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Interview
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle>💡 Tip of the Day</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Customize your resume for each application. Highlight relevant skills 
                  and experience that match the job requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};