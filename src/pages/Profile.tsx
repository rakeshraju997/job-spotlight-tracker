import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Edit3,
  Download,
  Eye,
  Briefcase,
  GraduationCap,
  Award,
  Star,
  FileText,
  Plus,
  Coins
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [credits, setCredits] = useState(35);
  const { toast } = useToast();
  const maxCredits = 50;

  const handleAddCredits = () => {
    const newCredits = Math.min(credits + 10, maxCredits);
    setCredits(newCredits);
    toast({
      title: "Credits Added!",
      description: `${10} credits have been added to your account.`,
    });
  };

  // Mock user data
  const userData = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Senior Software Engineer",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Expert in React, Node.js, and cloud technologies.",
    joinDate: "March 2023",
    profileCompletion: 85,
    avatar: "/placeholder.svg"
  };

  const skills = [
    "JavaScript", "React", "Node.js", "TypeScript", "Python", "AWS", "Docker", "MongoDB"
  ];

  const experience = [
    {
      company: "Tech Corp",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      description: "Led development of microservices architecture serving 1M+ users"
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description: "Built and maintained React applications with Node.js backend"
    }
  ];

  const education = [
    {
      institution: "University of California",
      degree: "Bachelor of Science in Computer Science",
      year: "2020",
      gpa: "3.8"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Profile Info */}
          <Card className="flex-1">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback className="text-2xl">
                    {userData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground">
                        {userData.name}
                      </h1>
                      <p className="text-xl text-muted-foreground">
                        {userData.title}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link to="/profile/edit">
                        <Button variant="outline" size="sm">
                          <Edit3 className="w-4 h-4 mr-2" />
                          Edit Profile
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {userData.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {userData.phone}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {userData.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Joined {userData.joinDate}
                    </div>
                  </div>
                  
                  <p className="text-foreground mt-4">
                    {userData.bio}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Completion */}
          <Card className="w-full lg:w-80">
            <CardHeader>
              <CardTitle className="text-lg">Profile Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span className="font-medium">{userData.profileCompletion}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="hero-gradient h-2 rounded-full transition-all duration-300"
                      style={{ width: `${userData.profileCompletion}%` }}
                    />
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>✓ Basic Info</span>
                    <span className="text-success">Complete</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>✓ Work Experience</span>
                    <span className="text-success">Complete</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>⚬ Skills</span>
                    <span className="text-warning">Add more</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>⚬ Portfolio</span>
                    <span className="text-muted-foreground">Missing</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: "overview", label: "Overview" },
            { id: "experience", label: "Experience" },
            { id: "education", label: "Education" },
            { id: "skills", label: "Skills" },
            { id: "resume", label: "Resume" }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className="mb-2"
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <Eye className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Profile viewed by TechCorp</p>
                          <p className="text-sm text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Applied to Senior Developer position</p>
                          <p className="text-sm text-muted-foreground">1 day ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle>Top Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.slice(0, 6).map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "experience" && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Work Experience</CardTitle>
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Experience
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{exp.position}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.duration}</p>
                          <p className="mt-2 text-foreground">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "education" && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Education</CardTitle>
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Education
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{edu.degree}</h3>
                          <p className="text-primary font-medium">{edu.institution}</p>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span>{edu.year}</span>
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "skills" && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Skills & Expertise</CardTitle>
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Skills
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="px-3 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {skill}
                        <Star className="w-3 h-3 ml-2 fill-current" />
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "resume" && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Resume</CardTitle>
                    <div className="flex gap-2">
                      <Link to="/resume-builder">
                        <Button variant="outline" size="sm">
                          <Edit3 className="w-4 h-4 mr-2" />
                          Edit Resume
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-6 bg-muted/30">
                    <div className="text-center py-8">
                      <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Your Resume Preview</h3>
                      <p className="text-muted-foreground mb-4">
                        Build a professional resume with our easy-to-use resume builder
                      </p>
                      <Link to="/resume-builder">
                        <Button className="btn-primary">
                          <Plus className="w-4 h-4 mr-2" />
                          Create Resume
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link to="/jobs">
                    <Button variant="outline" className="w-full justify-start">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Browse Jobs
                    </Button>
                  </Link>
                  <Link to="/resume-builder">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Resume Builder
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    <Award className="w-4 h-4 mr-2" />
                    Skill Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Credit Limit */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coins className="w-5 h-5 mr-2 text-primary" />
                  Credit Points
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Available Credits</span>
                    <span className="font-semibold">
                      {credits} / {maxCredits}
                    </span>
                  </div>
                  <Progress value={(credits / maxCredits) * 100} className="h-2" />
                </div>
                
                <div className="pt-2">
                  <Button 
                    onClick={handleAddCredits}
                    className="w-full"
                    disabled={credits >= maxCredits}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Credits
                  </Button>
                  {credits >= maxCredits && (
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Maximum credits reached
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Profile Views */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Profile Views</span>
                    <span className="font-semibold">47</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Search Appearances</span>
                    <span className="font-semibold">128</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Applications</span>
                    <span className="font-semibold">12</span>
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