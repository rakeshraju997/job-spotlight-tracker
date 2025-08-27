import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Filter,
  Plus,
  Upload,
  Download,
  Settings,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  ArrowUpDown,
  User,
  Eye,
} from "lucide-react";
import { HubSpotSidebar } from "@/components/HubSpotSidebar";

interface Contact {
  id: string;
  name: string;
  email: string;
  firstPageSeen: string;
  phoneNumber: string;
  contactOwner: string;
  lastActivityDate: string;
  selected?: boolean;
}

export const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Contact;
    direction: "asc" | "desc";
  } | null>(null);

  const contacts: Contact[] = [
    {
      id: "1",
      name: "Qoteamp Ewhnmnh",
      email: "qoteamp.ewhnmnh190@de...",
      firstPageSeen: "--",
      phoneNumber: "+91 96594-65430",
      contactOwner: "No owner",
      lastActivityDate: "Jun 5, 2025 1:21 AM GMT+5:30",
    },
    {
      id: "2",
      name: "Hapclf Sxrdhba",
      email: "hapclf.sxrdhba397@demo...",
      firstPageSeen: "--",
      phoneNumber: "+91 81866-34917",
      contactOwner: "No owner",
      lastActivityDate: "--",
    },
    {
      id: "3",
      name: "Jraaymo Hxpymce",
      email: "jraaymo.hxpymce481@exa...",
      firstPageSeen: "--",
      phoneNumber: "+44 718 814 0009",
      contactOwner: "No owner",
      lastActivityDate: "--",
    },
    {
      id: "4",
      name: "Tmkwmjt Gxamthx",
      email: "tmkwmjt.gxamthx672@test...",
      firstPageSeen: "--",
      phoneNumber: "+91 96753-81700",
      contactOwner: "No owner",
      lastActivityDate: "--",
    },
    {
      id: "5",
      name: "Hasajfg Vofdjrn",
      email: "hasajfg.vofdjrn177@demo...",
      firstPageSeen: "--",
      phoneNumber: "+91 86159-54002",
      contactOwner: "No owner",
      lastActivityDate: "Jun 5, 2025 4:58 PM GMT+5:30",
    },
    {
      id: "6",
      name: "Cbzdxma Tbufezw",
      email: "cbzdxma.tbufezw375@test...",
      firstPageSeen: "--",
      phoneNumber: "+91 99372-45495",
      contactOwner: "No owner",
      lastActivityDate: "--",
    },
    {
      id: "7",
      name: "Iyhqzqw Zxxlkrq",
      email: "iyhqzqw.zxxlkrq727@testm...",
      firstPageSeen: "--",
      phoneNumber: "+91 86169-04371",
      contactOwner: "No owner",
      lastActivityDate: "Jun 5, 2025 4:58 PM GMT+5:30",
    },
    {
      id: "8",
      name: "Sjtoeu Ilaecji",
      email: "sjtoeu.ilaecji793@testmail...",
      firstPageSeen: "--",
      phoneNumber: "+91 75625-04253",
      contactOwner: "No owner",
      lastActivityDate: "--",
    },
    {
      id: "9",
      name: "Sxwcwfm Moruezf",
      email: "sxwcwfm.moruezf958@de...",
      firstPageSeen: "--",
      phoneNumber: "+44 740 313 6368",
      contactOwner: "No owner",
      lastActivityDate: "--",
    },
    {
      id: "10",
      name: "Snwpqdb Ccpczqb",
      email: "snwpqdb.ccpczqb800@test...",
      firstPageSeen: "--",
      phoneNumber: "+44 752 914 5791",
      contactOwner: "No owner",
      lastActivityDate: "--",
    },
  ];

  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  const handleSort = (key: keyof Contact) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleSelectContact = (contactId: string) => {
    setSelectedContacts(prev =>
      prev.includes(contactId)
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    );
  };

  const handleSelectAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(contacts.map(c => c.id));
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedContacts = filteredContacts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex h-screen bg-background">
      <HubSpotSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-primary h-14 flex items-center justify-between px-6 text-primary-foreground">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-orange-400">🔶</div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-foreground/60" />
              <Input
                placeholder="Search HubSpot"
                className="pl-10 w-80 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
            </div>
            <div className="text-xs bg-primary-foreground/20 px-2 py-1 rounded">
              Ctrl K
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Plus className="w-4 h-4" />
            </Button>
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-semibold">
              ⚡
            </div>
            <div className="text-sm">Upgrade</div>
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-semibold text-foreground flex items-center">
                  Contacts
                  <ChevronDown className="w-4 h-4 ml-1" />
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  {filteredContacts.length.toLocaleString()} records
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  <Eye className="w-3 h-3 mr-1" />
                  Data Quality
                </Badge>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Actions
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Export</DropdownMenuItem>
                    <DropdownMenuItem>Bulk edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Import
                </Button>
                
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Create contact
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
              <div className="flex items-center justify-between">
                <TabsList className="bg-transparent p-0 h-auto">
                  <TabsTrigger 
                    value="all" 
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2"
                  >
                    All contacts
                  </TabsTrigger>
                  <TabsTrigger 
                    value="my" 
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2"
                  >
                    My contacts
                  </TabsTrigger>
                  <TabsTrigger 
                    value="unassigned" 
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2"
                  >
                    Unassigned contacts
                  </TabsTrigger>
                </TabsList>
                
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" className="text-primary">
                    <Plus className="w-4 h-4 mr-1" />
                    Add view (3/5)
                  </Button>
                  <Button variant="ghost">All Views</Button>
                </div>
              </div>
            </Tabs>

            {/* Filters */}
            <div className="flex items-center space-x-4 mb-6">
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Contact owner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All owners</SelectItem>
                  <SelectItem value="no-owner">No owner</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Create date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This week</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Last activity date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This week</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Lead status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline">
                More
              </Button>
              
              <Button variant="outline" className="text-primary border-primary/20">
                <Filter className="w-4 h-4 mr-2" />
                Advanced filters
              </Button>
            </div>

            {/* Search and Table Actions */}
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search name, phone, email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  Export
                </Button>
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4" />
                  Edit columns
                </Button>
              </div>
            </div>

            {/* Data Table */}
            <Card className="overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedContacts.length === contacts.length}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                      <div className="flex items-center">
                        NAME
                        <ArrowUpDown className="w-3 h-3 ml-1" />
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("email")}>
                      <div className="flex items-center">
                        EMAIL
                        <ArrowUpDown className="w-3 h-3 ml-1" />
                      </div>
                    </TableHead>
                    <TableHead>FIRST PAGE SEEN</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("phoneNumber")}>
                      <div className="flex items-center">
                        PHONE NUMBER
                        <ArrowUpDown className="w-3 h-3 ml-1" />
                      </div>
                    </TableHead>
                    <TableHead>CONTACT OWNER</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("lastActivityDate")}>
                      <div className="flex items-center">
                        LAST ACTIVITY DATE (GMT+5:30)
                        <ArrowUpDown className="w-3 h-3 ml-1" />
                      </div>
                    </TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedContacts.map((contact) => (
                    <TableRow key={contact.id} className="hover:bg-muted/20">
                      <TableCell>
                        <Checkbox
                          checked={selectedContacts.includes(contact.id)}
                          onCheckedChange={() => handleSelectContact(contact.id)}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-medium text-primary hover:underline cursor-pointer">
                            {contact.name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-primary hover:underline cursor-pointer">
                        {contact.email}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {contact.firstPageSeen}
                      </TableCell>
                      <TableCell>{contact.phoneNumber}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {contact.contactOwner}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {contact.lastActivityDate}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Prev
                </Button>
                
                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-8 h-8 px-0"
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">
                  {itemsPerPage} per page
                </span>
                <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(parseInt(value))}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};