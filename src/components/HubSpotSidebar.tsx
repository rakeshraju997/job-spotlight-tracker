import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  Users,
  TrendingUp,
  FileText,
  ShoppingCart,
  Briefcase,
  Headphones,
  Database,
  Zap,
  BarChart3,
  Wind,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  isExpanded?: boolean;
}

export const HubSpotSidebar = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>(["CRM"]);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const sidebarItems: SidebarItem[] = [
    {
      icon: <Bookmark className="w-4 h-4" />,
      label: "Bookmarks",
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: "CRM",
      isActive: true,
      hasSubmenu: true,
      isExpanded: expandedItems.includes("CRM"),
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      label: "Marketing",
    },
    {
      icon: <FileText className="w-4 h-4" />,
      label: "Content",
    },
    {
      icon: <ShoppingCart className="w-4 h-4" />,
      label: "Sales",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      label: "Commerce",
    },
    {
      icon: <Headphones className="w-4 h-4" />,
      label: "Service",
    },
    {
      icon: <Database className="w-4 h-4" />,
      label: "Data Management",
    },
    {
      icon: <Zap className="w-4 h-4" />,
      label: "Automation",
    },
    {
      icon: <BarChart3 className="w-4 h-4" />,
      label: "Reporting",
    },
    {
      icon: <Wind className="w-4 h-4" />,
      label: "Breeze",
    },
  ];

  return (
    <div className="w-56 bg-primary text-primary-foreground h-full overflow-y-auto">
      <div className="p-4 space-y-1">
        {sidebarItems.map((item) => (
          <div key={item.label}>
            <Button
              variant="ghost"
              className={`w-full justify-start h-9 px-3 text-sm font-normal ${
                item.isActive 
                  ? 'bg-primary-foreground/10 text-primary-foreground' 
                  : 'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground'
              }`}
              onClick={() => item.hasSubmenu && toggleExpanded(item.label)}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </div>
                {item.hasSubmenu && (
                  item.isExpanded ? (
                    <ChevronDown className="w-3 h-3" />
                  ) : (
                    <ChevronRight className="w-3 h-3" />
                  )
                )}
              </div>
            </Button>
            
            {item.hasSubmenu && item.isExpanded && (
              <div className="ml-6 mt-1 space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start h-8 px-3 text-xs font-normal text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Contacts
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-8 px-3 text-xs font-normal text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Companies
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-8 px-3 text-xs font-normal text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Deals
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-8 px-3 text-xs font-normal text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Tickets
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};