import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const data = [
  { date: "Dec 01", appointments: 8 },
  { date: "Dec 02", appointments: 12 },
  { date: "Dec 03", appointments: 17 },
  { date: "Dec 04", appointments: 10 },
  { date: "Dec 05", appointments: 14 },
  { date: "Dec 06", appointments: 20 },
  { date: "Dec 07", appointments: 25 },
];

export function BookingInsights() {
  return (
    <Card className="bg-card border border-border shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Booking Insights</h3>
          <Button variant="outline" size="sm" className="text-sm">
            December
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorAppointments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis
              dataKey="date"
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
              domain={[0, 35]}
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
            <Area
              type="monotone"
              dataKey="appointments"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fill="url(#colorAppointments)"
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
