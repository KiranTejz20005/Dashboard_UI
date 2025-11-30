import { Calendar, DollarSign, Receipt, XCircle, TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 gap-6">
      {metrics.map((metric) => {
        const isHovered = hoveredCard === metric.title;
        const shouldShowGradient = metric.gradient || isHovered;

        return (
          <Card
            key={metric.title}
            className={
              shouldShowGradient
                ? "bg-gradient-to-br from-primary via-primary to-orange-500 text-primary-foreground border-0 shadow-lg transition-all duration-300 animate-fade-in hover:scale-105 hover:shadow-xl"
                : "bg-card border border-border shadow-sm transition-all duration-300 animate-fade-in hover:shadow-lg"
            }
            onMouseEnter={() => setHoveredCard(metric.title)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <metric.icon 
                  className={
                    shouldShowGradient 
                      ? "w-8 h-8 transition-transform duration-300" 
                      : "w-8 h-8 text-primary transition-all duration-300"
                  } 
                  style={{
                    transform: isHovered ? 'rotate(10deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                  }}
                />
              </div>
              <div className={shouldShowGradient ? "text-sm font-medium opacity-90 mb-2" : "text-sm font-medium text-muted-foreground mb-2"}>
                {metric.title}
              </div>
              <div className={shouldShowGradient ? "text-5xl font-bold mb-2" : "text-4xl font-bold text-foreground mb-2"}>
                {metric.value}
              </div>
              <div className="flex items-center gap-1 text-xs">
                {metric.trend === "up" ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span className={shouldShowGradient ? "" : metric.trend === "up" ? "text-success" : "text-destructive"}>
                  {metric.change}
                </span>
                <span className={shouldShowGradient ? "opacity-90" : "text-muted-foreground"}>
                  {metric.period}
                </span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
