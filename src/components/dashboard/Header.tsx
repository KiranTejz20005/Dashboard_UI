import { Button } from "@/components/ui/button";
import { Bell, UserCircle, Plus, Link as LinkIcon, Users, Eye } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="h-24 bg-card border-b border-border px-8 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Get a quick snapshot of your shop's performance — bookings, payments — all in one place.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="text-sm">
          <Users className="w-4 h-4 mr-2" />
          Invite Staff
        </Button>
        <Button variant="ghost" size="sm" className="text-sm">
          <LinkIcon className="w-4 h-4 mr-2" />
          Booking Link
        </Button>
        <Button variant="ghost" size="sm" className="text-sm">
          <Eye className="w-4 h-4 mr-2" />
          View All Requests
        </Button>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          New Booking
        </Button>
        
        <div className="w-px h-8 bg-border mx-2" />
        
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
        </Button>

        <div className="flex items-center gap-3 ml-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground">HC</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <div className="font-medium text-foreground">Hanna Colzoni</div>
            <div className="text-xs text-muted-foreground">hannacolzoni@gmail.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}
