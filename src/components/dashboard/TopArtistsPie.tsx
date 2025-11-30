import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const data = [
  { name: "Sophie Langley", value: 45, color: "hsl(14, 100%, 60%)" },
  { name: "Luca Moretti", value: 20, color: "hsl(20, 100%, 65%)" },
  { name: "Ayra Voss", value: 17, color: "hsl(25, 95%, 70%)" },
  { name: "Ethan", value: 9, color: "hsl(30, 90%, 75%)" },
  { name: "Clara Jensen", value: 5, color: "hsl(35, 85%, 80%)" },
];

export function TopArtistsPie() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              animationBegin={0}
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  className="transition-all duration-200"
                  style={{
                    filter: activeIndex === index ? 'brightness(1.1)' : 'brightness(1)',
                    transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--foreground))",
                border: "none",
                borderRadius: "8px",
                padding: "8px 12px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              labelStyle={{ color: "hsl(var(--background))", fontWeight: 600 }}
              itemStyle={{ color: "hsl(var(--background))" }}
              formatter={(value: number, name: string) => [`${value}%`, name]}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="mt-4 space-y-2">
          {data.map((entry, index) => (
            <div 
              key={entry.name} 
              className="flex items-center justify-between text-sm transition-all duration-200 hover:bg-muted/50 p-2 rounded-lg cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-sm transition-transform duration-200" 
                  style={{ 
                    backgroundColor: entry.color,
                    transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)'
                  }} 
                />
                <span className={`text-foreground font-medium ${activeIndex === index ? 'text-primary' : ''}`}>
                  {entry.name}
                </span>
              </div>
              <span className="text-muted-foreground font-medium">({entry.value})</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
