import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MoreVertical, MessageSquare, Scissors, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Appt = { title: string; time: string; icon: "consultation" | "tattoo" };
const appointmentsByDate: Record<string, Appt[]> = {
  "31 Dec 2025": [
    { title: "Consultation with Martin Torff", time: "10:00 – 11:00 AM", icon: "consultation" },
    { title: "Tattoo Session with Haylie", time: "8:00 – 9:00 AM", icon: "tattoo" },
    { title: "Consultation with Davis", time: "6:00 – 8:00 AM", icon: "consultation" },
  ],
  "01 Jan 2026": [
    { title: "Consultation with Jane", time: "9:00 – 10:00 AM", icon: "consultation" },
    { title: "Tattoo Session with Luca", time: "11:00 – 2:00 PM", icon: "tattoo" },
  ],
  "02 Jan 2026": [
    { title: "Consultation with Clara", time: "8:30 – 9:30 AM", icon: "consultation" },
    { title: "Flash Session with Ethan", time: "3:00 – 5:00 PM", icon: "tattoo" },
  ],
  "03 Jan 2026": [
    { title: "Consultation with Sophie", time: "10:00 – 11:30 AM", icon: "consultation" },
    { title: "Tattoo Session with Ayra", time: "1:00 – 4:00 PM", icon: "tattoo" },
    { title: "Consultation with Davis", time: "5:00 – 6:00 PM", icon: "consultation" },
  ],
  "04 Jan 2026": [
    { title: "Consultation with Marilyn", time: "9:15 – 10:15 AM", icon: "consultation" },
    { title: "Tattoo Session with Martin", time: "11:00 – 1:00 PM", icon: "tattoo" },
  ],
};

export function UpcomingAppointments() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("31 Dec 2025");
  const currentAppointments = appointmentsByDate[selectedDate] || [];
  const dateKeys = Object.keys(appointmentsByDate);

  return (
    <Card className="bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground">Upcoming Appointments</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="btn-white-gradient font-medium rounded-full shadow-sm px-4">
                <Calendar className="w-3 h-3 mr-2" />
                {selectedDate}
                <ChevronDown className="w-3 h-3 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border border-border z-50 shadow-lg max-h-[260px] overflow-auto">
              {dateKeys.map((d) => (
                <DropdownMenuItem
                  key={d}
                  onClick={() => setSelectedDate(d)}
                  className={`item-white-gradient text-xs font-medium rounded-md cursor-pointer ${
                    selectedDate === d ? 'ring-1 ring-[#FF8E1A]' : ''
                  }`}
                >
                  {d}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {currentAppointments.length === 0 && (
          <div className="text-sm text-muted-foreground">No appointments for this date.</div>
        )}
        {currentAppointments.map((appointment, index) => (
          <div
            key={index}
            className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
              hoveredIndex === index
                ? "bg-primary/10 shadow-md scale-[1.02]"
                : "hover:bg-muted/50"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ animationDelay: `${index * 0.07}s` }}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              hoveredIndex === index ? "bg-gradient-to-br from-[#FF7A18] via-[#FF8E1A] to-[#FFB347] scale-105" : "bg-primary/10"
            }`}>
              {appointment.icon === "consultation" ? (
                <MessageSquare className={`w-5 h-5 transition-colors duration-300 ${
                  hoveredIndex === index ? "text-white" : "text-primary"
                }`} />
              ) : (
                <Scissors className={`w-5 h-5 transition-colors duration-300 ${
                  hoveredIndex === index ? "text-white" : "text-primary"
                }`} />
              )}
            </div>
            <div className="flex-1">
              <div className={`text-sm font-medium transition-colors duration-300 ${
                hoveredIndex === index ? "text-primary" : "text-foreground"
              }`}>{appointment.title}</div>
              <div className="text-xs text-muted-foreground">{appointment.time}</div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={`w-8 h-8 transition-all duration-300 ${
                hoveredIndex === index ? "opacity-100 bg-primary/10" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
