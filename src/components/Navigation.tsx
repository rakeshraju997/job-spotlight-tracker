import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  User, 
  Settings, 
  LogOut, 
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  userType?: 'user' | 'admin';
}

export const Navigation = ({ isAuthenticated = false, isAdmin = false, userType = 'user' }: NavigationProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const publicNavItems = [
    { name: "Home", path: "/", icon: Briefcase },
    { name: "Jobs", path: "/jobs", icon: Briefcase }
  ];

  const userNavItems = [
    { name: "Dashboard", path: "/dashboard", icon: User },
    { name: "Applied Jobs", path: "/applied", icon: Briefcase }
  ];

  const adminNavItems = [
    { name: "Admin Dashboard", path: "/admin", icon: Settings },
    { name: "Manage Jobs", path: "/admin/jobs", icon: Briefcase },
    { name: "Analytics", path: "/admin/analytics", icon: User }
  ];

  const getNavItems = () => {
    if (!isAuthenticated) return publicNavItems;
    if (isAdmin || userType === 'admin') return [...publicNavItems, ...adminNavItems];
    return [...publicNavItems, ...userNavItems];
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">JobPortal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {getNavItems().map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button className="btn-primary">Sign Up</Button>
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">
                  Welcome, {userType === 'admin' ? 'Admin' : 'User'}!
                </span>
                <Button variant="ghost" size="sm">
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="space-y-2">
              {getNavItems().map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.path) 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
              
              {!isAuthenticated && (
                <div className="pt-2 mt-2 border-t border-border space-y-2">
                  <Link
                    to="/login"
                    className="block w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button variant="ghost" className="w-full justify-start">
                      Login
                    </Button>
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="btn-primary w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};