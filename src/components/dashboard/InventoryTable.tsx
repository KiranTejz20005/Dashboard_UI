import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const inventory = [
  { artist: "Ayra Voss", item: "Dynamic Black Bot Ink", quantity: 12, threshold: 10, vendor: "Ink Supply Co." },
  { artist: "Sophie Langley", item: "7RL Needles (Box of 50)", quantity: 200, threshold: 20, vendor: "Ink Supply Co." },
  { artist: "Ayra Voss", item: "Green Soap (1L)", quantity: 14, threshold: 5, vendor: "CleariTattoo" },
  { artist: "Ayra Voss", item: "Stencil Transfer Paper (Sheets)", quantity: 1002, threshold: 100, vendor: "Stencil Champs" },
  { artist: "Ayra Voss", item: "Nitrile Gloves (Box of 100)", quantity: 40, threshold: 10, vendor: "Safelands" },
  { artist: "Ayra Voss", item: "Eternal White Ink 2oz", quantity: 32, threshold: 10, vendor: "Ink Supply Co." },
  { artist: "Luca Moretti", item: "Cavicide Disinfectant (1L)", quantity: 34, threshold: 100, vendor: "28 Years" },
  { artist: "Ethan", item: "Elastic Bands (pack of 100)", quantity: 56, threshold: 20, vendor: "Medical Plus" },
];

export function InventoryTable() {
  return (
    <Card className="bg-card border border-border shadow-sm">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Inventory</h3>
          <Button variant="outline" size="sm" className="text-xs">
            All Status
            <ChevronDown className="w-3 h-3 ml-2" />
          </Button>
        </div>
      </div>

      <div className="overflow-auto max-h-[300px]">
        <table className="w-full">
          <thead className="bg-muted/50 sticky top-0">
            <tr>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Artist Name</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Item</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Quantity</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Threshold</th>
              <th className="text-left text-xs font-semibold text-muted-foreground px-4 py-3">Vendor</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-7 h-7">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {item.artist.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-foreground">{item.artist}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-foreground">{item.item}</td>
                <td className="px-4 py-3 text-sm text-foreground">{item.quantity}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{item.threshold}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{item.vendor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
