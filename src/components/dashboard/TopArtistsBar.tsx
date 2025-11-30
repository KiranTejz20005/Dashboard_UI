import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const data = [
  { name: "Clara Jensen", appointments: 13 },
  { name: "Sophie Langley", appointments: 43 },
  { name: "Ethan", appointments: 38 },
  { name: "Luca Moretti", appointments: 32 },
  { name: "Ayra Voss", appointments: 19 },
];

export function TopArtistsBar() {
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

        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data}>
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
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                padding: "8px 12px",
              }}
              labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
              formatter={(value: number) => [`${value}`, "Appointments"]}
            />
            <Bar
              dataKey="appointments"
              fill="hsl(var(--primary))"
              radius={[8, 8, 0, 0]}
              maxBarSize={60}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
