import { Calendar, DollarSign, Receipt, XCircle, TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const metrics = [
  {
    title: "Bookings",
    value: "240",
    change: "+9.7%",
    trend: "up",
    period: "vs last month",
    icon: Calendar,
    gradient: true,
  },
  {
    title: "Revenue",
    value: "$842,450",
    change: "+9.7%",
    trend: "up",
    period: "vs last month",
    icon: DollarSign,
    gradient: false,
  },
  {
    title: "Avg Booking Value",
    value: "$1,254",
    change: "-3.5%",
    trend: "down",
    period: "vs last month",
    icon: Receipt,
    gradient: false,
  },
  {
    title: "No Show Rate",
    value: "5%",
    change: "+5%",
    trend: "up",
    period: "vs last month",
    icon: XCircle,
    gradient: false,
  },
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {metrics.map((metric) => (
        <Card
          key={metric.title}
          className={
            metric.gradient
              ? "bg-gradient-to-br from-primary via-primary to-orange-500 text-primary-foreground border-0 shadow-lg"
              : "bg-card border border-border shadow-sm"
          }
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <metric.icon className={metric.gradient ? "w-8 h-8" : "w-8 h-8 text-primary"} />
            </div>
            <div className={metric.gradient ? "text-sm font-medium opacity-90 mb-2" : "text-sm font-medium text-muted-foreground mb-2"}>
              {metric.title}
            </div>
            <div className={metric.gradient ? "text-5xl font-bold mb-2" : "text-4xl font-bold text-foreground mb-2"}>
              {metric.value}
            </div>
            <div className="flex items-center gap-1 text-xs">
              {metric.trend === "up" ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              <span className={metric.gradient ? "" : metric.trend === "up" ? "text-success" : "text-destructive"}>
                {metric.change}
              </span>
              <span className={metric.gradient ? "opacity-90" : "text-muted-foreground"}>
                {metric.period}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
