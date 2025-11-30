import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const monthlyData: Record<string, Array<{ name: string; appointments: number }>> = {
  January: [
    { name: "Clara Jensen", appointments: 18 },
    { name: "Sophie Langley", appointments: 38 },
    { name: "Ethan", appointments: 35 },
    { name: "Luca Moretti", appointments: 28 },
    { name: "Ayra Voss", appointments: 22 },
  ],
  February: [
    { name: "Clara Jensen", appointments: 20 },
    { name: "Sophie Langley", appointments: 42 },
    { name: "Ethan", appointments: 37 },
    { name: "Luca Moretti", appointments: 30 },
    { name: "Ayra Voss", appointments: 24 },
  ],
  March: [
    { name: "Clara Jensen", appointments: 16 },
    { name: "Sophie Langley", appointments: 45 },
    { name: "Ethan", appointments: 40 },
    { name: "Luca Moretti", appointments: 33 },
    { name: "Ayra Voss", appointments: 21 },
  ],
  April: [
    { name: "Clara Jensen", appointments: 14 },
    { name: "Sophie Langley", appointments: 41 },
    { name: "Ethan", appointments: 36 },
    { name: "Luca Moretti", appointments: 31 },
    { name: "Ayra Voss", appointments: 20 },
  ],
  May: [
    { name: "Clara Jensen", appointments: 19 },
    { name: "Sophie Langley", appointments: 44 },
    { name: "Ethan", appointments: 39 },
    { name: "Luca Moretti", appointments: 34 },
    { name: "Ayra Voss", appointments: 23 },
  ],
  June: [
    { name: "Clara Jensen", appointments: 17 },
    { name: "Sophie Langley", appointments: 46 },
    { name: "Ethan", appointments: 41 },
    { name: "Luca Moretti", appointments: 35 },
    { name: "Ayra Voss", appointments: 25 },
  ],
  July: [
    { name: "Clara Jensen", appointments: 15 },
    { name: "Sophie Langley", appointments: 40 },
    { name: "Ethan", appointments: 34 },
    { name: "Luca Moretti", appointments: 29 },
    { name: "Ayra Voss", appointments: 18 },
  ],
  August: [
    { name: "Clara Jensen", appointments: 16 },
    { name: "Sophie Langley", appointments: 42 },
    { name: "Ethan", appointments: 37 },
    { name: "Luca Moretti", appointments: 31 },
    { name: "Ayra Voss", appointments: 21 },
  ],
  September: [
    { name: "Clara Jensen", appointments: 18 },
    { name: "Sophie Langley", appointments: 44 },
    { name: "Ethan", appointments: 39 },
    { name: "Luca Moretti", appointments: 33 },
    { name: "Ayra Voss", appointments: 22 },
  ],
  October: [
    { name: "Clara Jensen", appointments: 12 },
    { name: "Sophie Langley", appointments: 39 },
    { name: "Ethan", appointments: 33 },
    { name: "Luca Moretti", appointments: 27 },
    { name: "Ayra Voss", appointments: 17 },
  ],
  November: [
    { name: "Clara Jensen", appointments: 14 },
    { name: "Sophie Langley", appointments: 41 },
    { name: "Ethan", appointments: 36 },
    { name: "Luca Moretti", appointments: 30 },
    { name: "Ayra Voss", appointments: 20 },
  ],
  December: [
    { name: "Clara Jensen", appointments: 13 },
    { name: "Sophie Langley", appointments: 43 },
    { name: "Ethan", appointments: 38 },
    { name: "Luca Moretti", appointments: 32 },
    { name: "Ayra Voss", appointments: 19 },
  ],
};

export function TopArtistsBar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState("December");
  const data = monthlyData[selectedMonth];

  return (
    <Card className="bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Top Artists</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                {selectedMonth}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border border-border z-50 shadow-lg">
              {Object.keys(monthlyData).map((month) => (
                <DropdownMenuItem
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors ${
                    selectedMonth === month ? "bg-primary/10" : ""
                  }`}
                >
                  {month}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
