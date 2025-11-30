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
              <Button variant="outline" size="sm" className="btn-white-gradient font-medium rounded-full shadow-sm">
                {selectedMonth}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border border-border z-50 shadow-lg">
              {Object.keys(monthlyData).map((month) => (
                <DropdownMenuItem
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`item-white-gradient cursor-pointer rounded-md text-sm font-medium ${
                    selectedMonth === month ? 'ring-1 ring-[#FF8E1A]' : ''
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
                backgroundColor: "#ffffff",
                border: "1px solid #f1f1f1",
                borderRadius: "8px",
                padding: "6px 10px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
              }}
              labelStyle={{ color: "#111", fontWeight: 600, fontSize: "13px" }}
              itemStyle={{ color: "#333" }}
              cursor={{ stroke: "#FF8E1A", strokeWidth: 1 }}
              formatter={(value: number) => [`${value}`, "Appointments"]}
            />
            <defs>
              {/* Hover gradient matches Bookings card theme */}
              <linearGradient id="barGradientHover" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF7A18" />
                <stop offset="60%" stopColor="#FF8E1A" />
                <stop offset="100%" stopColor="#FFB347" />
              </linearGradient>
            </defs>
            <Bar
              dataKey="appointments"
              radius={[18, 18, 18, 18]}
              maxBarSize={60}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={hoveredIndex === index ? "url(#barGradientHover)" : "#FFF5EE"}
                  stroke={hoveredIndex === index ? "#FF8E1A" : "none"}
                  strokeWidth={hoveredIndex === index ? 2 : 0}
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
