import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MoreVertical, MessageSquare, Scissors } from "lucide-react";

const appointments = [
  {
    title: "Consultation with Martin Torff",
    time: "10:00 – 11:00 AM",
    icon: MessageSquare,
  },
  {
    title: "Tattoo Session with Haylie",
    time: "8:00 – 9:00 AM",
    icon: Scissors,
  },
  {
    title: "Consultation with Davis",
    time: "6:00 – 8:00 AM",
    icon: MessageSquare,
  },
];

export function UpcomingAppointments() {
  return (
    <Card className="bg-card border border-border shadow-sm">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Upcoming Appointments</h3>
          <Button variant="outline" size="sm" className="text-xs">
            <Calendar className="w-3 h-3 mr-2" />
            31 December 2025
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <appointment.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">{appointment.title}</div>
              <div className="text-xs text-muted-foreground">{appointment.time}</div>
            </div>
            <Button variant="ghost" size="icon" className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
