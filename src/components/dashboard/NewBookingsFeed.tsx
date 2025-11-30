import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const bookings = [
  {
    artist: "Ayra Voss",
    client: "Martin Torff",
    type: "Consultation",
    style: "realism",
    date: "Tue Aug 20 2025",
    time: "8:00 – 10:00 AM",
    status: "New",
    statusColor: "info",
  },
  {
    artist: "Luca Moretti",
    client: "Cheyenne Lipshutz",
    type: "Tattoo Session",
    style: "Blackwork",
    date: "Tue Aug 20 2025",
    time: "8:00 PM – 4:00 PM",
    status: "Deposit",
    statusColor: "warning",
  },
  {
    artist: "Ethan",
    client: "Davis",
    type: "Flash",
    style: "realism",
    date: "Wed Aug 21 2025",
    time: "10:00 AM – 2:00 PM",
    status: "Deposit",
    statusColor: "warning",
  },
  {
    artist: "Sophie Langley",
    client: "Haylie Dokidis",
    type: "Tattoo Session",
    style: "Fine Line",
    date: "Thu Aug 22 2025",
    time: "10:00 AM – 1:30 AM",
    status: "Check-in",
    statusColor: "purple",
  },
  {
    artist: "Clara Jensen",
    client: "Marilyn Levin",
    type: "Consultation",
    style: "Tribal",
    date: "Fri Aug 23 2025",
    time: "2:00 – 4:00 PM",
    status: "Upcoming",
    statusColor: "teal",
  },
  {
    artist: "Ayra Voss",
    client: "Another Client",
    type: "Consultation",
    style: "realism",
    date: "Sat Aug 24 2025",
    time: "3:00 – 5:00 PM",
    status: "Repeat",
    statusColor: "success",
  },
];

const getStatusVariant = (color: string) => {
  const variants: Record<string, string> = {
    info: "bg-info/10 text-info hover:bg-info/20",
    success: "bg-success/10 text-success hover:bg-success/20",
    warning: "bg-warning/10 text-warning hover:bg-warning/20",
    purple: "bg-purple/10 text-purple hover:bg-purple/20",
    teal: "bg-teal/10 text-teal hover:bg-teal/20",
  };
  return variants[color] || "";
};

export function NewBookingsFeed() {
  return (
    <Card className="bg-card border border-border shadow-sm">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">New Bookings Feed</h3>
          <Button variant="outline" size="sm" className="text-xs">
            All Status
            <ChevronDown className="w-3 h-3 ml-2" />
          </Button>
        </div>
      </div>

      <div className="overflow-auto max-h-[420px]">
        <table className="w-full">
          <thead className="bg-muted/50 sticky top-0">
            <tr>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Artist Name</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Client Name</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Booking Type</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Style</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Date & Time</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {booking.artist.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-foreground">{booking.artist}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-foreground">{booking.client}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{booking.type}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{booking.style}</td>
                <td className="px-4 py-3">
                  <div className="text-sm">
                    <div className="text-foreground">{booking.date}</div>
                    <div className="text-xs text-muted-foreground">{booking.time}</div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Badge className={`text-xs font-semibold ${getStatusVariant(booking.statusColor)}`}>
                    {booking.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
