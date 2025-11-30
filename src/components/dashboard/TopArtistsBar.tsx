import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const data = [
  { name: "Clara Jensen", appointments: 13 },
  { name: "Sophie Langley", appointments: 43 },
  { name: "Ethan", appointments: 38 },
  { name: "Luca Moretti", appointments: 32 },
  { name: "Ayra Voss", appointments: 19 },
];

export function TopArtistsBar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Card className="bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Top Artists</h3>
          <Button variant="outline" size="sm" className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
            December
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} onMouseMove={(state: any) => {
            if (state.isTooltipActive) {
              setHoveredIndex(state.activeTooltipIndex);
            } else {
              setHoveredIndex(null);
            }
          }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[0, 50]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--foreground))",
                border: "none",
                borderRadius: "8px",
                padding: "8px 12px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              labelStyle={{ color: "hsl(var(--background))", fontWeight: 600, fontSize: "14px" }}
              itemStyle={{ color: "hsl(var(--background))" }}
              formatter={(value: number) => [`${value}`, "Appointments"]}
            />
            <Bar
              dataKey="appointments"
              radius={[8, 8, 0, 0]}
              maxBarSize={60}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={hoveredIndex === index ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.8)"}
                  className="transition-all duration-200"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
