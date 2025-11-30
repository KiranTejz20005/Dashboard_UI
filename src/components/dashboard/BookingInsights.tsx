import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const monthlyData: Record<string, Array<{ date: string; appointments: number }>> = {
  January: [
    { date: "Jan 01", appointments: 15 },
    { date: "Jan 02", appointments: 12 },
    { date: "Jan 03", appointments: 18 },
    { date: "Jan 04", appointments: 20 },
    { date: "Jan 05", appointments: 14 },
    { date: "Jan 06", appointments: 16 },
    { date: "Jan 07", appointments: 19 },
  ],
  February: [
    { date: "Feb 01", appointments: 18 },
    { date: "Feb 02", appointments: 14 },
    { date: "Feb 03", appointments: 22 },
    { date: "Feb 04", appointments: 19 },
    { date: "Feb 05", appointments: 16 },
    { date: "Feb 06", appointments: 20 },
    { date: "Feb 07", appointments: 25 },
  ],
  March: [
    { date: "Mar 01", appointments: 20 },
    { date: "Mar 02", appointments: 16 },
    { date: "Mar 03", appointments: 24 },
    { date: "Mar 04", appointments: 21 },
    { date: "Mar 05", appointments: 18 },
    { date: "Mar 06", appointments: 22 },
    { date: "Mar 07", appointments: 28 },
  ],
  April: [
    { date: "Apr 01", appointments: 17 },
    { date: "Apr 02", appointments: 13 },
    { date: "Apr 03", appointments: 19 },
    { date: "Apr 04", appointments: 22 },
    { date: "Apr 05", appointments: 15 },
    { date: "Apr 06", appointments: 18 },
    { date: "Apr 07", appointments: 24 },
  ],
  May: [
    { date: "May 01", appointments: 19 },
    { date: "May 02", appointments: 15 },
    { date: "May 03", appointments: 23 },
    { date: "May 04", appointments: 20 },
    { date: "May 05", appointments: 17 },
    { date: "May 06", appointments: 21 },
    { date: "May 07", appointments: 26 },
  ],
  June: [
    { date: "Jun 01", appointments: 21 },
    { date: "Jun 02", appointments: 17 },
    { date: "Jun 03", appointments: 25 },
    { date: "Jun 04", appointments: 22 },
    { date: "Jun 05", appointments: 19 },
    { date: "Jun 06", appointments: 23 },
    { date: "Jun 07", appointments: 29 },
  ],
  July: [
    { date: "Jul 01", appointments: 16 },
    { date: "Jul 02", appointments: 12 },
    { date: "Jul 03", appointments: 20 },
    { date: "Jul 04", appointments: 18 },
    { date: "Jul 05", appointments: 14 },
    { date: "Jul 06", appointments: 17 },
    { date: "Jul 07", appointments: 23 },
  ],
  August: [
    { date: "Aug 01", appointments: 18 },
    { date: "Aug 02", appointments: 14 },
    { date: "Aug 03", appointments: 22 },
    { date: "Aug 04", appointments: 19 },
    { date: "Aug 05", appointments: 16 },
    { date: "Aug 06", appointments: 20 },
    { date: "Aug 07", appointments: 25 },
  ],
  September: [
    { date: "Sep 01", appointments: 20 },
    { date: "Sep 02", appointments: 16 },
    { date: "Sep 03", appointments: 24 },
    { date: "Sep 04", appointments: 21 },
    { date: "Sep 05", appointments: 18 },
    { date: "Sep 06", appointments: 22 },
    { date: "Sep 07", appointments: 27 },
  ],
  October: [
    { date: "Oct 01", appointments: 14 },
    { date: "Oct 02", appointments: 10 },
    { date: "Oct 03", appointments: 18 },
    { date: "Oct 04", appointments: 16 },
    { date: "Oct 05", appointments: 12 },
    { date: "Oct 06", appointments: 15 },
    { date: "Oct 07", appointments: 21 },
  ],
  November: [
    { date: "Nov 01", appointments: 16 },
    { date: "Nov 02", appointments: 12 },
    { date: "Nov 03", appointments: 20 },
    { date: "Nov 04", appointments: 17 },
    { date: "Nov 05", appointments: 14 },
    { date: "Nov 06", appointments: 18 },
    { date: "Nov 07", appointments: 24 },
  ],
  December: [
    { date: "Dec 01", appointments: 8 },
    { date: "Dec 02", appointments: 12 },
    { date: "Dec 03", appointments: 17 },
    { date: "Dec 04", appointments: 10 },
    { date: "Dec 05", appointments: 14 },
    { date: "Dec 06", appointments: 20 },
    { date: "Dec 07", appointments: 25 },
  ],
};

export function BookingInsights() {
  const [selectedMonth, setSelectedMonth] = useState("December");
  const data = monthlyData[selectedMonth];

  return (
    <Card className="bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Booking Insights</h3>
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
                backgroundColor: "hsl(var(--foreground))",
                border: "none",
                borderRadius: "8px",
                padding: "8px 12px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              labelStyle={{ color: "hsl(var(--background))", fontWeight: 600 }}
              itemStyle={{ color: "hsl(var(--background))" }}
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
