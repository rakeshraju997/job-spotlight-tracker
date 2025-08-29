import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  FileText,
  Download,
  Eye,
  Save,
  ArrowLeft,
  Plus,
  X,
  Palette,
  Layout,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Phone,
  Mail,
  MapPin,
  Globe
} from "lucide-react";
import { toast } from "sonner";

export const ResumeBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [isLoading, setIsLoading] = useState(false);

  const [resumeData, setResumeData] = useState({
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "johndoe.dev",
      linkedin: "linkedin.com/in/johndoe",
      summary: "Passionate full-stack developer with 5+ years of experience building scalable web applications."
    },
    experience: [
      {
        id: 1,
        company: "Tech Corp",
        position: "Senior Software Engineer",
        startDate: "2022-01",
        endDate: "",
        current: true,
        location: "San Francisco, CA",
        description: "• Led development of microservices architecture serving 1M+ users\n• Improved application performance by 40% through optimization\n• Mentored junior developers and conducted code reviews"
      }
    ],
    education: [
      {
        id: 1,
        institution: "University of California",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2016",
        endDate: "2020",
        gpa: "3.8",
        location: "Berkeley, CA"
      }
    ],
    skills: [
      { category: "Frontend", items: ["React", "TypeScript", "Vue.js", "HTML/CSS"] },
      { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
      { category: "Tools", items: ["AWS", "Docker", "Git", "CI/CD"] }
    ],
    projects: [
      {
        id: 1,
        name: "E-commerce Platform",
        description: "Full-stack web application built with React and Node.js",
        technologies: "React, Node.js, MongoDB, Stripe API",
        url: "https://github.com/johndoe/ecommerce"
      }
    ],
    certifications: [
      {
        id: 1,
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
        url: ""
      }
    ]
  });

  const templates = [
    { id: "modern", name: "Modern", preview: "Clean and contemporary design" },
    { id: "classic", name: "Classic", preview: "Traditional professional layout" },
    { id: "creative", name: "Creative", preview: "Bold and unique design" },
    { id: "minimal", name: "Minimal", preview: "Simple and elegant" }
  ];

  const colors = [
    { id: "blue", name: "Blue", class: "bg-blue-500" },
    { id: "purple", name: "Purple", class: "bg-purple-500" },
    { id: "green", name: "Green", class: "bg-green-500" },
    { id: "red", name: "Red", class: "bg-red-500" },
    { id: "gray", name: "Gray", class: "bg-gray-500" }
  ];

  const handlePersonalInfoChange = (field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      location: "",
      description: ""
    };
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  const updateExperience = (id: number, field: string, value: string | boolean) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id: number) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    const newEdu = {
      id: Date.now(),
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      gpa: "",
      location: ""
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  const updateEducation = (id: number, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id: number) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: "",
      description: "",
      technologies: "",
      url: ""
    };
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const updateProject = (id: number, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === id ? { ...project, [field]: value } : project
      )
    }));
  };

  const removeProject = (id: number) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }));
  };

  const addCertification = () => {
    const newCert = {
      id: Date.now(),
      name: "",
      issuer: "",
      date: "",
      url: ""
    };
    setResumeData(prev => ({
      ...prev,
      certifications: [...prev.certifications, newCert]
    }));
  };

  const updateCertification = (id: number, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.map(cert => 
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    }));
  };

  const removeCertification = (id: number) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert.id !== id)
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Resume saved successfully!");
    }, 1000);
  };

  const handleDownload = () => {
    toast.success("Resume downloaded as PDF!");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Resume Builder</h1>
              <p className="text-muted-foreground">Create a professional resume with our easy-to-use builder</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSave} disabled={isLoading}>
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? "Saving..." : "Save"}
            </Button>
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button onClick={handleDownload} className="btn-primary">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Form */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="personal" className="text-xs">Personal</TabsTrigger>
                <TabsTrigger value="experience" className="text-xs">Experience</TabsTrigger>
                <TabsTrigger value="education" className="text-xs">Education</TabsTrigger>
                <TabsTrigger value="skills" className="text-xs">Skills</TabsTrigger>
                <TabsTrigger value="projects" className="text-xs">Projects</TabsTrigger>
                <TabsTrigger value="certs" className="text-xs">Certificates</TabsTrigger>
              </TabsList>

              {/* Personal Info */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={resumeData.personalInfo.firstName}
                          onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={resumeData.personalInfo.lastName}
                          onChange={(e) => handlePersonalInfoChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={resumeData.personalInfo.email}
                          onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={resumeData.personalInfo.phone}
                          onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={resumeData.personalInfo.location}
                          onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          value={resumeData.personalInfo.website}
                          onChange={(e) => handlePersonalInfoChange('website', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={resumeData.personalInfo.linkedin}
                          onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="summary">Professional Summary</Label>
                      <Textarea
                        id="summary"
                        value={resumeData.personalInfo.summary}
                        onChange={(e) => handlePersonalInfoChange('summary', e.target.value)}
                        className="min-h-[100px]"
                        placeholder="Write a brief summary of your professional background..."
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Experience */}
              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        Work Experience
                      </CardTitle>
                      <Button onClick={addExperience} variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {resumeData.experience.map((exp) => (
                      <div key={exp.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">Experience #{resumeData.experience.indexOf(exp) + 1}</h4>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeExperience(exp.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Company</Label>
                            <Input
                              value={exp.company}
                              onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label>Position</Label>
                            <Input
                              value={exp.position}
                              onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label>Start Date</Label>
                            <Input
                              type="month"
                              value={exp.startDate}
                              onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label>End Date</Label>
                            <Input
                              type="month"
                              value={exp.endDate}
                              onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                              disabled={exp.current}
                            />
                          </div>
                          <div className="flex items-center mt-6">
                            <input
                              type="checkbox"
                              id={`current-${exp.id}`}
                              checked={exp.current}
                              onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                              className="mr-2"
                            />
                            <label htmlFor={`current-${exp.id}`} className="text-sm">
                              Current position
                            </label>
                          </div>
                        </div>

                        <div>
                          <Label>Location</Label>
                          <Input
                            value={exp.location}
                            onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                            placeholder="City, State"
                          />
                        </div>

                        <div>
                          <Label>Description</Label>
                          <Textarea
                            value={exp.description}
                            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                            className="min-h-[100px]"
                            placeholder="• Achievement or responsibility&#10;• Another key accomplishment&#10;• Quantified result when possible"
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Education */}
              <TabsContent value="education">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5" />
                        Education
                      </CardTitle>
                      <Button onClick={addEducation} variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Education
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {resumeData.education.map((edu) => (
                      <div key={edu.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">Education #{resumeData.education.indexOf(edu) + 1}</h4>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeEducation(edu.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Institution</Label>
                            <Input
                              value={edu.institution}
                              onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label>Degree</Label>
                            <Input
                              value={edu.degree}
                              onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label>Start Year</Label>
                            <Input
                              value={edu.startDate}
                              onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                              placeholder="2020"
                            />
                          </div>
                          <div>
                            <Label>End Year</Label>
                            <Input
                              value={edu.endDate}
                              onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                              placeholder="2024"
                            />
                          </div>
                          <div>
                            <Label>GPA</Label>
                            <Input
                              value={edu.gpa}
                              onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                              placeholder="3.8"
                            />
                          </div>
                        </div>

                        <div>
                          <Label>Location</Label>
                          <Input
                            value={edu.location}
                            onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                            placeholder="City, State"
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Skills */}
              <TabsContent value="skills">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {resumeData.skills.map((skillGroup, index) => (
                      <div key={index} className="space-y-3">
                        <Label>{skillGroup.category}</Label>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="px-3 py-1">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Skill Category
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Projects */}
              <TabsContent value="projects">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Projects</CardTitle>
                      <Button onClick={addProject} variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Project
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {resumeData.projects.map((project) => (
                      <div key={project.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">Project #{resumeData.projects.indexOf(project) + 1}</h4>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeProject(project.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Project Name</Label>
                            <Input
                              value={project.name}
                              onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label>Project URL</Label>
                            <Input
                              value={project.url}
                              onChange={(e) => updateProject(project.id, 'url', e.target.value)}
                              placeholder="https://github.com/username/project"
                            />
                          </div>
                        </div>

                        <div>
                          <Label>Technologies</Label>
                          <Input
                            value={project.technologies}
                            onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                            placeholder="React, Node.js, MongoDB"
                          />
                        </div>

                        <div>
                          <Label>Description</Label>
                          <Textarea
                            value={project.description}
                            onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                            placeholder="Describe the project and your role..."
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Certifications */}
              <TabsContent value="certs">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Certifications
                      </CardTitle>
                      <Button onClick={addCertification} variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Certification
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {resumeData.certifications.map((cert) => (
                      <div key={cert.id} className="border rounded-lg p-4 space-y-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">Certification #{resumeData.certifications.indexOf(cert) + 1}</h4>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeCertification(cert.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Certification Name</Label>
                            <Input
                              value={cert.name}
                              onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label>Issuing Organization</Label>
                            <Input
                              value={cert.issuer}
                              onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Date Earned</Label>
                            <Input
                              value={cert.date}
                              onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                              placeholder="2023"
                            />
                          </div>
                          <div>
                            <Label>Credential URL</Label>
                            <Input
                              value={cert.url}
                              onChange={(e) => updateCertification(cert.id, 'url', e.target.value)}
                              placeholder="https://..."
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Panel - Template & Preview */}
          <div className="space-y-6">
            {/* Template Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layout className="w-5 h-5" />
                  Templates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {templates.map((template) => (
                    <div 
                      key={template.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedTemplate === template.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{template.name}</h4>
                          <p className="text-sm text-muted-foreground">{template.preview}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedTemplate === template.id 
                            ? 'border-primary bg-primary' 
                            : 'border-border'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Color Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Colors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      className={`w-8 h-8 rounded-full ${color.class} border-2 ${
                        selectedColor === color.id ? 'border-foreground' : 'border-border'
                      }`}
                      onClick={() => setSelectedColor(color.id)}
                      title={color.name}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resume Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border rounded-lg p-6 text-black text-sm space-y-4 shadow-sm">
                  {/* Header */}
                  <div className="text-center border-b pb-4">
                    <h1 className="text-xl font-bold">
                      {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                    </h1>
                    <div className="flex justify-center gap-4 text-xs mt-2 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {resumeData.personalInfo.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {resumeData.personalInfo.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {resumeData.personalInfo.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  {resumeData.personalInfo.summary && (
                    <div>
                      <h2 className="font-bold text-sm mb-2">PROFESSIONAL SUMMARY</h2>
                      <p className="text-xs leading-relaxed">{resumeData.personalInfo.summary}</p>
                    </div>
                  )}

                  {/* Experience */}
                  {resumeData.experience.length > 0 && (
                    <div>
                      <h2 className="font-bold text-sm mb-2">WORK EXPERIENCE</h2>
                      <div className="space-y-3">
                        {resumeData.experience.map((exp) => (
                          <div key={exp.id}>
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-xs">{exp.position}</h3>
                                <p className="text-xs">{exp.company} • {exp.location}</p>
                              </div>
                              <p className="text-xs">
                                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                              </p>
                            </div>
                            <div className="text-xs mt-1 whitespace-pre-line">
                              {exp.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Education */}
                  {resumeData.education.length > 0 && (
                    <div>
                      <h2 className="font-bold text-sm mb-2">EDUCATION</h2>
                      <div className="space-y-2">
                        {resumeData.education.map((edu) => (
                          <div key={edu.id}>
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-xs">{edu.degree}</h3>
                                <p className="text-xs">{edu.institution} • {edu.location}</p>
                              </div>
                              <p className="text-xs">{edu.startDate} - {edu.endDate}</p>
                            </div>
                            {edu.gpa && <p className="text-xs">GPA: {edu.gpa}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  {resumeData.skills.length > 0 && (
                    <div>
                      <h2 className="font-bold text-sm mb-2">SKILLS</h2>
                      <div className="space-y-1">
                        {resumeData.skills.map((skillGroup, index) => (
                          <div key={index}>
                            <span className="font-semibold text-xs">{skillGroup.category}: </span>
                            <span className="text-xs">{skillGroup.items.join(', ')}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};