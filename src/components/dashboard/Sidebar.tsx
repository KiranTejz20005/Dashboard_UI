import { Home, Calendar, Users, MessageSquare, CalendarDays, FileText, BarChart3, Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Calendar, label: "Bookings", active: false },
  { icon: Users, label: "Customers", active: false },
  { icon: MessageSquare, label: "Messages", active: false },
  { icon: CalendarDays, label: "Calendar", active: false },
  { icon: FileText, label: "Documents", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-6 z-50">
      {/* Logo */}
      <div className="w-10 h-10 bg-primary rounded-xl mb-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
        <div className="w-6 h-6 bg-primary-foreground rounded" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-3">
        {navItems.map((item) => (
          <div 
            key={item.label}
            className="relative group"
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className={
                item.active
                  ? "w-10 h-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-md transition-all duration-300 hover:scale-110"
                  : "w-10 h-10 text-sidebar-foreground hover:bg-sidebar-accent rounded-xl transition-all duration-300 hover:scale-110"
              }
              title={item.label}
            >
              <item.icon className="w-5 h-5" />
            </Button>
            
            {/* Tooltip */}
            {hoveredItem === item.label && (
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg animate-fade-in z-50">
                {item.label}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-foreground" />
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Floating Action Button */}
      <Button
        size="icon"
        className="w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl"
        title="New Booking"
      >
        <Plus className="w-6 h-6" />
      </Button>
    </aside>
  );
}
