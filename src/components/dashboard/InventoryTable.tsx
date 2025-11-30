import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useRef, useEffect } from "react";

const allInventory = [
  { artist: "Ayra Voss", item: "Dynamic Black Bot Ink", quantity: 12, threshold: 10, vendor: "Ink Supply Co." },
  { artist: "Sophie Langley", item: "7RL Needles (Box of 50)", quantity: 200, threshold: 20, vendor: "Ink Supply Co." },
  { artist: "Ayra Voss", item: "Green Soap (1L)", quantity: 14, threshold: 5, vendor: "CleariTattoo" },
  { artist: "Ayra Voss", item: "Stencil Transfer Paper (Sheets)", quantity: 1002, threshold: 100, vendor: "Stencil Champs" },
  { artist: "Ayra Voss", item: "Nitrile Gloves (Box of 100)", quantity: 40, threshold: 10, vendor: "Safelands" },
  { artist: "Ayra Voss", item: "Eternal White Ink 2oz", quantity: 32, threshold: 10, vendor: "Ink Supply Co." },
  { artist: "Luca Moretti", item: "Cavicide Disinfectant (1L)", quantity: 34, threshold: 100, vendor: "28 Years" },
  { artist: "Ethan", item: "Elastic Bands (pack of 100)", quantity: 56, threshold: 20, vendor: "Medical Plus" },
  { artist: "Clara Jensen", item: "Tattoo Balm (50g)", quantity: 25, threshold: 15, vendor: "After Care Pro" },
  { artist: "Sophie Langley", item: "Transfer Gel (250ml)", quantity: 8, threshold: 5, vendor: "Ink Supply Co." },
  { artist: "Luca Moretti", item: "Clip Cord Sleeves (100ct)", quantity: 140, threshold: 30, vendor: "Barrier Pro" },
  { artist: "Ethan", item: "Machine Bags (50ct)", quantity: 52, threshold: 20, vendor: "Barrier Pro" },
  { artist: "Clara Jensen", item: "Gauze Pads (200ct)", quantity: 180, threshold: 40, vendor: "Medical Plus" },
  { artist: "Sophie Langley", item: "Derm Shield Roll (10m)", quantity: 3, threshold: 2, vendor: "After Care Pro" },
  { artist: "Ayra Voss", item: "Ink Caps (500ct)", quantity: 480, threshold: 200, vendor: "Stencil Champs" },
  { artist: "Luca Moretti", item: "Port USB-C Cables", quantity: 12, threshold: 6, vendor: "TechTat" },
  { artist: "Ethan", item: "Power Supply Unit", quantity: 4, threshold: 2, vendor: "TechTat" },
  { artist: "Clara Jensen", item: "Organic Aftercare Pack", quantity: 19, threshold: 10, vendor: "After Care Pro" },
  { artist: "Sophie Langley", item: "Thermal Copier Paper (100ct)", quantity: 210, threshold: 80, vendor: "Stencil Champs" },
  { artist: "Ayra Voss", item: "Barrier Film (1200ft)", quantity: 2, threshold: 1, vendor: "Barrier Pro" },
];

export function InventoryTable() {
    const artistPhoto = (name: string) => {
      const map: Record<string, string> = {
        "Ayra Voss": "/avatars/human-ayra.svg",
        "Sophie Langley": "/avatars/human-sophie.svg",
        "Luca Moretti": "/avatars/human-luca.svg",
        "Ethan": "/avatars/human-ethan.svg",
        "Clara Jensen": "/avatars/human-clara.svg",
      };
      return map[name] || "/avatars/human-ayra.svg";
    };
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const artists = ["All Status", "Ayra Voss", "Sophie Langley", "Luca Moretti", "Ethan", "Clara Jensen"];
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollHint, setScrollHint] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  
  const inventory = selectedStatus === "All Status" 
    ? allInventory 
    : allInventory.filter(item => item.artist === selectedStatus);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      const canScroll = el.scrollHeight > el.clientHeight + 4;
      setScrollHint(canScroll && el.scrollTop < 24);
      setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 4);
    };
    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <Card className="bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-foreground">Inventory</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                {selectedStatus}
                <ChevronDown className="w-3 h-3 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border border-border z-50 shadow-lg">
              {artists.map((artist) => (
                <DropdownMenuItem
                  key={artist}
                  onClick={() => setSelectedStatus(artist)}
                  className={`cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors ${
                    selectedStatus === artist ? "bg-primary/10" : ""
                  }`}
                >
                  {artist}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative overflow-auto max-h-[400px] scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent rounded-b-lg"
        aria-label="Inventory items scroll region"
      >
        <table className="w-full">
          <thead className="sticky top-0 z-10 bg-card backdrop-blur-sm">
            <tr className="border-b border-border">
              <th className="text-left text-xs font-bold text-foreground px-4 py-3 bg-card">Artist Name</th>
              <th className="text-left text-xs font-bold text-foreground px-4 py-3 bg-card">Item</th>
              <th className="text-left text-xs font-bold text-foreground px-4 py-3 bg-card">Quantity</th>
              <th className="text-left text-xs font-bold text-foreground px-4 py-3 bg-card">Threshold</th>
              <th className="text-left text-xs font-bold text-foreground px-4 py-3 bg-card">Vendor</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr 
                key={index} 
                className="border-b border-border/50 hover:bg-muted/30 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <td className="px-4 py-3 bg-card">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-7 h-7">
                      <AvatarImage src={artistPhoto(item.artist)} />
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {item.artist.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-foreground">{item.artist}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-foreground bg-card">{item.item}</td>
                <td className="px-4 py-3 text-sm text-foreground bg-card">{item.quantity}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground bg-card">{item.threshold}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground bg-card">{item.vendor}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Scroll hint overlay */}
        {scrollHint && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-card to-card/0 flex items-end justify-center pb-1">
            <div className="pointer-events-none text-[10px] uppercase tracking-wide font-medium text-muted-foreground bg-card/70 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
              Scroll for more
            </div>
          </div>
        )}
        {!scrollHint && !atBottom && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card to-transparent" />
        )}
      </div>
    </Card>
  );
}
