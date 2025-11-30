import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const monthlyData: Record<string, Array<{ name: string; value: number }>> = {
  January: [
    { name: "Sophie Langley", value: 42 },
    { name: "Luca Moretti", value: 22 },
    { name: "Ayra Voss", value: 18 },
    { name: "Ethan", value: 11 },
    { name: "Clara Jensen", value: 7 },
  ],
  February: [
    { name: "Sophie Langley", value: 44 },
    { name: "Luca Moretti", value: 21 },
    { name: "Ayra Voss", value: 16 },
    { name: "Ethan", value: 12 },
    { name: "Clara Jensen", value: 7 },
  ],
  March: [
    { name: "Sophie Langley", value: 46 },
    { name: "Luca Moretti", value: 23 },
    { name: "Ayra Voss", value: 15 },
    { name: "Ethan", value: 10 },
    { name: "Clara Jensen", value: 6 },
  ],
  April: [
    { name: "Sophie Langley", value: 43 },
    { name: "Luca Moretti", value: 21 },
    { name: "Ayra Voss", value: 17 },
    { name: "Ethan", value: 13 },
    { name: "Clara Jensen", value: 6 },
  ],
  May: [
    { name: "Sophie Langley", value: 45 },
    { name: "Luca Moretti", value: 22 },
    { name: "Ayra Voss", value: 16 },
    { name: "Ethan", value: 11 },
    { name: "Clara Jensen", value: 6 },
  ],
  June: [
    { name: "Sophie Langley", value: 47 },
    { name: "Luca Moretti", value: 24 },
    { name: "Ayra Voss", value: 14 },
    { name: "Ethan", value: 9 },
    { name: "Clara Jensen", value: 6 },
  ],
  July: [
    { name: "Sophie Langley", value: 41 },
    { name: "Luca Moretti", value: 20 },
    { name: "Ayra Voss", value: 19 },
    { name: "Ethan", value: 12 },
    { name: "Clara Jensen", value: 8 },
  ],
  August: [
    { name: "Sophie Langley", value: 44 },
    { name: "Luca Moretti", value: 21 },
    { name: "Ayra Voss", value: 17 },
    { name: "Ethan", value: 11 },
    { name: "Clara Jensen", value: 7 },
  ],
  September: [
    { name: "Sophie Langley", value: 46 },
    { name: "Luca Moretti", value: 22 },
    { name: "Ayra Voss", value: 16 },
    { name: "Ethan", value: 10 },
    { name: "Clara Jensen", value: 6 },
  ],
  October: [
    { name: "Sophie Langley", value: 40 },
    { name: "Luca Moretti", value: 19 },
    { name: "Ayra Voss", value: 18 },
    { name: "Ethan", value: 14 },
    { name: "Clara Jensen", value: 9 },
  ],
  November: [
    { name: "Sophie Langley", value: 43 },
    { name: "Luca Moretti", value: 20 },
    { name: "Ayra Voss", value: 17 },
    { name: "Ethan", value: 13 },
    { name: "Clara Jensen", value: 7 },
  ],
  December: [
    { name: "Sophie Langley", value: 45 },
    { name: "Luca Moretti", value: 20 },
    { name: "Ayra Voss", value: 17 },
    { name: "Ethan", value: 9 },
    { name: "Clara Jensen", value: 5 },
  ],
};

export function TopArtistsPie() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState("December");
  const data = monthlyData[selectedMonth];

  const total = data.reduce((sum, d) => sum + d.value, 0);
  const topIndex = data.reduce((bestIdx, d, idx, arr) => d.value > arr[bestIdx].value ? idx : bestIdx, 0);
  const displayIndex = activeIndex !== null ? activeIndex : topIndex;
  const display = data[displayIndex];

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

        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <defs>
              <radialGradient id="activeSlice" cx="50%" cy="50%" r="75%">
                <stop offset="0%" stopColor="#FFB347" stopOpacity="0.35" />
                <stop offset="55%" stopColor="#FF8E1A" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FF7A18" />
              </radialGradient>
            </defs>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={95}
              cornerRadius={6}
              paddingAngle={2}
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              animationBegin={0}
              animationDuration={800}
            >
              {data.map((entry, index) => {
                const isActive = index === displayIndex;
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={isActive ? 'url(#activeSlice)' : '#FFF5EE'}
                    stroke={isActive ? '#FF8E1A' : 'none'}
                    strokeWidth={isActive ? 2 : 0}
                    className="transition-colors duration-200"
                  />
                );
              })}
              <Label
                position="center"
                content={() => {
                  return (
                    <g>
                      <text
                        x={0}
                        y={-6}
                        textAnchor="middle"
                        fill="hsl(var(--foreground))"
                        fontSize={14}
                        fontWeight={600}
                      >
                        {display.name}
                      </text>
                      <text
                        x={0}
                        y={14}
                        textAnchor="middle"
                        fill="hsl(var(--muted-foreground))"
                        fontSize={12}
                      >
                        {display.value} / {total}
                      </text>
                    </g>
                  );
                }}
              />
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #f1f1f1',
                borderRadius: '8px',
                padding: '6px 10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
              }}
              labelStyle={{ color: '#111', fontWeight: 600 }}
              itemStyle={{ color: '#333' }}
              formatter={(value: number, name: string) => [`${value}`, name]}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="mt-5 flex flex-wrap gap-4 justify-center">
          {data.map((entry, index) => {
            const isActive = index === displayIndex;
            return (
              <button
                type="button"
                key={entry.name}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(index)}
                className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all ${isActive ? 'bg-primary text-primary-foreground border-primary' : 'bg-card text-foreground border-border hover:bg-muted'}`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: isActive ? '#FF8E1A' : '#FFE9DC', boxShadow: isActive ? '0 0 0 2px #FF8E1A33' : 'none' }}
                />
                <span>{entry.name} ({entry.value})</span>
              </button>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
