import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const allBookings = [
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
  {
    artist: "Clara Jensen",
    client: "Jane Smith",
    type: "Flash",
    style: "Minimalist",
    date: "Sun Aug 25 2025",
    time: "1:00 – 3:00 PM",
    status: "New",
    statusColor: "info",
  },
  {
    artist: "Sophie Langley",
    client: "Michael Brown",
    type: "Tattoo Session",
    style: "Traditional",
    date: "Mon Aug 26 2025",
    time: "9:00 AM – 12:00 PM",
    status: "Cancelled",
    statusColor: "muted",
  },
];

const getStatusVariant = (color: string) => {
  const variants: Record<string, string> = {
    info: "bg-info/10 text-info hover:bg-info/20",
    success: "bg-success/10 text-success hover:bg-success/20",
    warning: "bg-warning/10 text-warning hover:bg-warning/20",
    purple: "bg-purple/10 text-purple hover:bg-purple/20",
    teal: "bg-teal/10 text-teal hover:bg-teal/20",
    muted: "bg-muted text-muted-foreground hover:bg-muted/80",
  };
  return variants[color] || "";
};

export function NewBookingsFeed() {
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const statuses = ["All Status", "New", "Repeat", "Deposit", "Check-in", "Upcoming", "Cancelled"];
  
  const bookings = selectedStatus === "All Status" 
    ? allBookings 
    : allBookings.filter(b => b.status === selectedStatus);

  return (
    <Card className="bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">New Bookings Feed</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                {selectedStatus}
                <ChevronDown className="w-3 h-3 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border border-border z-50 shadow-lg">
              {statuses.map((status) => (
                <DropdownMenuItem
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors ${
                    selectedStatus === status ? "bg-primary/10" : ""
                  }`}
                >
                  {status}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="overflow-auto max-h-[420px] scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        <table className="w-full">
          <thead className="sticky top-0 z-10 bg-card backdrop-blur-sm">
            <tr className="border-b border-border">
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3 bg-card">Artist Name</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3 bg-card">Client Name</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3 bg-card">Booking Type</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3 bg-card">Style</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3 bg-card">Date & Time</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3 bg-card">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr 
                key={index} 
                className="border-b border-border/50 hover:bg-muted/30 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <td className="px-4 py-3 bg-card">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {booking.artist.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-foreground">{booking.artist}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-foreground bg-card">{booking.client}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground bg-card">{booking.type}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground bg-card">{booking.style}</td>
                <td className="px-4 py-3 bg-card">
                  <div className="text-sm">
                    <div className="text-foreground">{booking.date}</div>
                    <div className="text-xs text-muted-foreground">{booking.time}</div>
                  </div>
                </td>
                <td className="px-4 py-3 bg-card">
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
