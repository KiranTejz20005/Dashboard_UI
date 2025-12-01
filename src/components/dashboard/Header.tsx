import { Button } from "@/components/ui/button";
import { Bell, UserCircle, Plus, Link as LinkIcon, Users, Eye } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="bg-[#F8F8F8] border-b border-border px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col gap-3">
      {/* Top row: right-aligned notifications + profile */}
      <div className="flex items-center justify-end gap-3">
        <Button
          aria-label="Notifications"
          variant="ghost"
          size="icon"
          className="relative rounded-full border hover:bg-muted"
        >
          <Bell className="w-5 h-5" />
        </Button>
        <Avatar className="w-11 h-11 ring-2 ring-primary/25">
          <AvatarImage src="/avatars/human-ethan.svg" />
          <AvatarFallback className="bg-gradient-to-br from-[#FF7A18] via-[#FF8E1A] to-[#FFB347] text-white">HC</AvatarFallback>
        </Avatar>
        <div className="text-sm leading-tight text-right">
          <div className="font-semibold text-foreground">Kiran Teja</div>
          <div className="text-xs text-muted-foreground">kiranlanke824@gmail.com</div>
        </div>
      </div>

      {/* Second row: heading + description left, action buttons right */}
      <div className="flex items-center justify-between gap-6">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Dashboard Overview</h1>
          <p className="text-sm text-muted-foreground mt-0.5 max-w-xl">
            Get a quick snapshot of your shop's performance — bookings, payments — all in one place.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <Button variant="secondary" size="sm" className="font-medium rounded-full shadow-sm bg-white hover:bg-muted transition-colors border border-neutral-200 dark:border-neutral-700">
            <Users className="w-4 h-4 mr-1" /> Invite Staff
          </Button>
          <Button variant="secondary" size="sm" className="font-medium rounded-full shadow-sm bg-white hover:bg-muted transition-colors border border-neutral-200 dark:border-neutral-700">
            <LinkIcon className="w-4 h-4 mr-1" /> Booking Link
          </Button>
          <Button variant="secondary" size="sm" className="font-medium rounded-full shadow-sm bg-white hover:bg-muted transition-colors border border-neutral-200 dark:border-neutral-700">
            <Eye className="w-4 h-4 mr-1" /> View Requests
          </Button>
          <Button size="sm" className="btn-white-to-gradient font-semibold rounded-full shadow-md">
            <Plus className="w-4 h-4 mr-1" /> New Booking
          </Button>
        </div>
      </div>
    </header>
  );
}
