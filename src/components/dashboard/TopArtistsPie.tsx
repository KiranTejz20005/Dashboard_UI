import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const data = [
  { name: "Sophie Langley", value: 45, color: "hsl(14, 100%, 60%)" },
  { name: "Luca Moretti", value: 20, color: "hsl(20, 100%, 65%)" },
  { name: "Ayra Voss", value: 17, color: "hsl(25, 95%, 70%)" },
  { name: "Ethan", value: 9, color: "hsl(30, 90%, 75%)" },
  { name: "Clara Jensen", value: 5, color: "hsl(35, 85%, 80%)" },
];

export function TopArtistsPie() {
  return (
    <Card className="bg-card border border-border shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Top Artists</h3>
          <Button variant="outline" size="sm" className="text-sm">
            December
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                padding: "8px 12px",
              }}
              formatter={(value: number) => [`${value}%`, ""]}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="mt-4 space-y-2">
          {data.map((entry) => (
            <div key={entry.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: entry.color }} />
                <span className="text-foreground">{entry.name}</span>
              </div>
              <span className="text-muted-foreground">({entry.value})</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
