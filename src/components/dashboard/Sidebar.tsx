import { Home, Calendar, Users, MessageSquare, CalendarDays, FileText, BarChart3, Settings, Plus, Grid2x2, Bell, Table, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Main navigation items (exclude settings which sits in lower cluster)
const navItems = [
  { icon: Grid2x2, label: "Dashboard", active: true },
  { icon: Calendar, label: "Bookings", active: false },
  { icon: Users, label: "Customers", active: false },
  { icon: MessageSquare, label: "Messages", active: false },
  { icon: Bell, label: "Notifications", active: false },
  { icon: CalendarDays, label: "Calendar", active: false },
  { icon: FileText, label: "Documents", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Table, label: "Inventory", active: false },
];

export function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 bg-[#FAFAFA] border-r border-neutral-200 md:flex-col items-center py-6 z-50">
      {/* Logo block */}
      <div className="w-11 h-11 rounded-xl mb-7 gradient-bookings flex items-center justify-center shadow-sm">
        <Grid2x2 className="w-6 h-6 text-white" />
      </div>

      {/* Main navigation */}
      <nav className="flex flex-col gap-3">
        {navItems.map((item) => {
          const activeClasses = "bg-gradient-to-br from-[#FF7A18] via-[#FF8E1A] to-[#FFB347] text-white shadow-sm";
          const inactiveClasses = "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100";
          return (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Button
                variant="ghost"
                size="icon"
                className={`w-11 h-11 rounded-xl transition-colors duration-200 ${item.active ? activeClasses : inactiveClasses}`}
                title={item.label}
              >
                <item.icon className="w-5 h-5" />
              </Button>
              {hoveredItem === item.label && (
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-neutral-900 text-white px-2.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shadow-md z-50">
                  {item.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-6 border-transparent border-r-neutral-900" />
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Separator */}
      <div className="my-6 w-12 h-px bg-neutral-200" />

      {/* Lower cluster: settings + action */}
      <div className="flex flex-col gap-4 mt-auto">
        <Button
          variant="ghost"
          size="icon"
          className="w-11 h-11 rounded-xl bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100"
          title="Settings"
        >
          <Settings className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-11 h-11 rounded-xl bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100"
          title="Help"
        >
          <HelpCircle className="w-5 h-5" />
        </Button>
        <Button
          size="icon"
          className="w-12 h-12 rounded-full btn-white-to-gradient shadow-md hover:shadow-lg transition"
          title="New Booking"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </aside>
  );
}
