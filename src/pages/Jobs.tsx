import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  MapPin, 
  Building2, 
  Clock, 
  DollarSign,
  ExternalLink,
  CheckCircle2,
  Bookmark,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  const categories = [
    "All Categories",
    "Technology", 
    "Design", 
    "Marketing", 
    "Sales", 
    "Finance", 
    "Operations"
  ];

  const locations = [
    "All Locations",
    "Remote",
    "San Francisco, CA",
    "New York, NY",
    "Los Angeles, CA",
    "Seattle, WA",
    "Austin, TX"
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      category: "Technology",
      salary: "$120K - $150K",
      posted: "2 days ago",
      description: "We're looking for an experienced Frontend Developer to join our dynamic team and help build the next generation of web applications.",
      requirements: ["5+ years React experience", "TypeScript proficiency", "UI/UX sensibility"],
      applyUrl: "https://techcorp.com/careers/frontend-dev",
      logo: "🚀"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Design Studio Pro",
      location: "New York, NY",
      type: "Full-time",
      category: "Design",
      salary: "$80K - $110K",
      posted: "1 day ago",
      description: "Join our creative team to design beautiful, user-centered digital experiences that delight customers and drive business growth.",
      requirements: ["3+ years UX/UI experience", "Figma expertise", "Design systems knowledge"],
      applyUrl: "https://designstudio.com/careers/ux-designer",
      logo: "🎨"
    },
    {
      id: 3,
      title: "Digital Marketing Manager",
      company: "GrowthCo",
      location: "Remote",
      type: "Full-time",
      category: "Marketing",
      salary: "$70K - $90K",
      posted: "3 days ago",
      description: "Lead our digital marketing initiatives and help scale our customer acquisition through innovative marketing strategies.",
      requirements: ["Digital marketing experience", "Analytics expertise", "Campaign management"],
      applyUrl: "https://growthco.com/careers/marketing-manager",
      logo: "📈"
    },
    {
      id: 4,
      title: "Sales Development Representative",
      company: "SalesForce Pro",
      location: "Austin, TX",
      type: "Full-time",
      category: "Sales",
      salary: "$50K - $70K",
      posted: "1 week ago",
      description: "Drive revenue growth by identifying and qualifying leads, building relationships with prospects, and supporting the sales team.",
      requirements: ["1-3 years sales experience", "CRM proficiency", "Strong communication skills"],
      applyUrl: "https://salesforcepro.com/careers/sdr",
      logo: "💼"
    },
    {
      id: 5,
      title: "Product Manager",
      company: "InnovateTech",
      location: "Seattle, WA",
      type: "Full-time",
      category: "Technology",
      salary: "$100K - $130K",
      posted: "5 days ago",
      description: "Own the product roadmap and work cross-functionally to deliver innovative solutions that meet customer needs.",
      requirements: ["Product management experience", "Agile methodology", "Data-driven mindset"],
      applyUrl: "https://innovatetech.com/careers/product-manager",
      logo: "🔧"
    },
    {
      id: 6,
      title: "Financial Analyst",
      company: "FinCorp Solutions",
      location: "Los Angeles, CA",
      type: "Full-time",
      category: "Finance",
      salary: "$65K - $85K",
      posted: "4 days ago",
      description: "Analyze financial data, create reports, and provide insights to support strategic business decisions.",
      requirements: ["Finance degree", "Excel expertise", "Analytical skills"],
      applyUrl: "https://fincorp.com/careers/financial-analyst",
      logo: "💰"
    }
  ];

  const handleApply = (jobId: number, applyUrl: string) => {
    // Track application
    setAppliedJobs(prev => [...prev, jobId]);
    // Open external link
    window.open(applyUrl, '_blank');
  };

  const toggleSaved = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    const matchesLocation = selectedLocation === "all" || job.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Find Your Next Opportunity</h1>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Discover {jobs.length} curated job opportunities from top companies
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search Jobs</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Job title, company..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.slice(1).map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      {locations.slice(1).map(location => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Clear Filters */}
                 <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedLocation("all");
                    handleFilterChange();
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Jobs List */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {filteredJobs.length} Jobs Found
              </h2>
              <Select defaultValue="newest">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                  <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                  <SelectItem value="company">Company A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              {currentJobs.map((job, index) => {
                const isApplied = appliedJobs.includes(job.id);
                const isSaved = savedJobs.includes(job.id);
                
                return (
                  <Card 
                    key={job.id} 
                    className={`job-card animate-slide-up transition-all ${isApplied ? 'ring-2 ring-success/20' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                            {job.logo}
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Building2 className="w-4 h-4 mr-1" />
                                {job.company}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {job.posted}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSaved(job.id)}
                            className={isSaved ? 'text-primary' : ''}
                          >
                            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                          </Button>
                          <Badge className={`category-badge category-${job.category.toLowerCase()}`}>
                            {job.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-muted-foreground mb-3">{job.description}</p>
                        
                        <div className="flex items-center mb-3">
                          <DollarSign className="w-4 h-4 mr-2 text-primary" />
                          <span className="font-medium">{job.salary}</span>
                          <span className="mx-2">•</span>
                          <span className="text-muted-foreground">{job.type}</span>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Requirements:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.requirements.map((req, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {isApplied && (
                            <div className="flex items-center text-success">
                              <CheckCircle2 className="w-4 h-4 mr-1" />
                              <span className="text-sm font-medium">Applied</span>
                            </div>
                          )}
                        </div>
                        
                        <Button
                          onClick={() => handleApply(job.id, job.applyUrl)}
                          disabled={isApplied}
                          className={isApplied ? 'opacity-50' : 'btn-primary'}
                        >
                          {isApplied ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Applied
                            </>
                          ) : (
                            <>
                              Apply Now
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Pagination */}
            {filteredJobs.length > 0 && totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, i) => {
                      const page = i + 1;
                      // Show first page, last page, current page, and pages around current
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => setCurrentPage(page)}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      } else if (page === currentPage - 2 || page === currentPage + 2) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      return null;
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">No jobs found matching your criteria</p>
                  <p>Try adjusting your filters or search terms</p>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedLocation("all");
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};