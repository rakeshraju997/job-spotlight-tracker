import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Eye, 
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  ExternalLink,
  Calendar,
  BarChart3,
  Building2,
  MapPin
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = {
    totalJobs: 156,
    activeJobs: 89,
    totalApplications: 2847,
    totalClicks: 15420,
    clickRate: 68.5
  };

  const recentJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      category: "Technology",
      status: "active",
      posted: "2024-01-15",
      applications: 45,
      clicks: 234,
      salary: "$120K - $150K"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Design Studio Pro",
      location: "New York, NY",
      category: "Design",
      status: "active",
      posted: "2024-01-12",
      applications: 32,
      clicks: 187,
      salary: "$80K - $110K"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "InnovateTech",
      location: "Seattle, WA",
      category: "Technology",
      status: "paused",
      posted: "2024-01-10",
      applications: 28,
      clicks: 156,
      salary: "$100K - $130K"
    },
    {
      id: 4,
      title: "Digital Marketing Manager",
      company: "GrowthCo",
      location: "Remote",
      category: "Marketing",
      status: "active",
      posted: "2024-01-08",
      applications: 19,
      clicks: 98,
      salary: "$70K - $90K"
    },
    {
      id: 5,
      title: "Sales Development Rep",
      company: "SalesForce Pro",
      location: "Austin, TX",
      category: "Sales",
      status: "closed",
      posted: "2024-01-05",
      applications: 67,
      clicks: 312,
      salary: "$50K - $70K"
    }
  ];

  const topPerformingJobs = [
    { title: "Senior Full Stack Developer", clicks: 456, applications: 78 },
    { title: "Data Scientist", clicks: 389, applications: 65 },
    { title: "DevOps Engineer", clicks: 334, applications: 52 },
    { title: "Product Designer", clicks: 298, applications: 48 },
    { title: "Backend Developer", clicks: 267, applications: 41 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-success bg-success/10 border-success/20';
      case 'paused': return 'text-warning bg-warning/10 border-warning/20';
      case 'closed': return 'text-muted-foreground bg-muted border-border';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const filteredJobs = recentJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 animate-fade-in">Admin Dashboard</h1>
              <p className="text-lg text-muted-foreground animate-fade-in">
                Manage job listings and track platform analytics
              </p>
            </div>
            <Button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Add New Job
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className="stat-card animate-slide-up">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stats.totalJobs}</div>
              <div className="text-sm text-muted-foreground">Total Jobs</div>
            </CardContent>
          </Card>

          <Card className="dashboard-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-success/20 rounded-full mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div className="text-3xl font-bold mb-2">{stats.activeJobs}</div>
              <div className="text-sm text-muted-foreground">Active Jobs</div>
            </CardContent>
          </Card>

          <Card className="dashboard-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mx-auto mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold mb-2">{stats.totalApplications.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Applications</div>
            </CardContent>
          </Card>

          <Card className="dashboard-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-warning/20 rounded-full mx-auto mb-4">
                <Eye className="w-6 h-6 text-warning" />
              </div>
              <div className="text-3xl font-bold mb-2">{stats.totalClicks.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Clicks</div>
            </CardContent>
          </Card>

          <Card className="dashboard-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">{stats.clickRate}%</div>
              <div className="text-sm text-muted-foreground">Click Rate</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Listings Management */}
          <div className="lg:col-span-2">
            <Card className="animate-slide-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Job Listings
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search jobs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button size="sm" className="btn-primary">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Job
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredJobs.map((job, index) => (
                    <div 
                      key={job.id} 
                      className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-lg">{job.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mt-1 space-x-4">
                            <div className="flex items-center">
                              <Building2 className="w-4 h-4 mr-1" />
                              {job.company}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(job.posted).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={`${getStatusColor(job.status)}`}>
                            {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                          </Badge>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Public
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-sm">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1 text-muted-foreground" />
                            <span>{job.clicks} clicks</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1 text-muted-foreground" />
                            <span>{job.applications} applications</span>
                          </div>
                          <div className="font-medium text-primary">
                            {job.salary}
                          </div>
                        </div>
                        <Badge className={`category-badge category-${job.category.toLowerCase()}`}>
                          {job.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Sidebar */}
          <div className="space-y-6">
            {/* Top Performing Jobs */}
            <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topPerformingJobs.map((job, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{job.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {job.clicks} clicks • {job.applications} applications
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">#{index + 1}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full btn-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Job
                </Button>
                <Button variant="outline" className="w-full">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Users
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">New application</span>
                    <span className="text-xs">2m ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Job posted</span>
                    <span className="text-xs">1h ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">User registered</span>
                    <span className="text-xs">3h ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Job updated</span>
                    <span className="text-xs">5h ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};