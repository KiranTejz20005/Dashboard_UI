import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MoreVertical, MessageSquare, Scissors } from "lucide-react";
import { useState } from "react";

const appointments = [
  {
    title: "Consultation with Martin Torff",
    time: "10:00 – 11:00 AM",
    icon: "consultation",
  },
  {
    title: "Tattoo Session with Haylie",
    time: "8:00 – 9:00 AM",
    icon: "tattoo",
  },
  {
    title: "Consultation with Davis",
    time: "6:00 – 8:00 AM",
    icon: "consultation",
  },
];

export function UpcomingAppointments() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Card className="bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Upcoming Appointments</h3>
          <Button variant="outline" size="sm" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
            <Calendar className="w-3 h-3 mr-2" />
            31 December 2025
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
              hoveredIndex === index 
                ? "bg-primary/10 shadow-md scale-105" 
                : "hover:bg-muted/50"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              hoveredIndex === index ? "bg-primary scale-110" : "bg-primary/10"
            }`}>
              {appointment.icon === "consultation" ? (
                <MessageSquare className={`w-5 h-5 transition-colors duration-300 ${
                  hoveredIndex === index ? "text-primary-foreground" : "text-primary"
                }`} />
              ) : (
                <Scissors className={`w-5 h-5 transition-colors duration-300 ${
                  hoveredIndex === index ? "text-primary-foreground" : "text-primary"
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
                hoveredIndex === index ? "opacity-100 bg-primary/20" : "opacity-0 group-hover:opacity-100"
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
