import { Calendar, DollarSign, Receipt, XCircle, TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const metrics = [
  {
    title: "Bookings",
    value: "240",
    change: "+9.97%",
    trend: "up",
    period: "vs last month",
    icon: Calendar,
    gradient: true,
    accent: "from-[#FF7A18] via-[#FF8E1A] to-[#FFB347]",
  },
  {
    title: "Revenue",
    value: "$842,450",
    change: "+9.7%",
    trend: "up",
    period: "vs last month",
    icon: DollarSign,
    gradient: false,
    accent: "from-[#FF7A18] via-[#FF8E1A] to-[#FFB347]",
  },
  {
    title: "Avg Booking Value",
    value: "$1,254",
    change: "-3.5%",
    trend: "down",
    period: "vs last month",
    icon: Receipt,
    gradient: false,
    accent: "from-[#FF7A18] via-[#FF8E1A] to-[#FFB347]",
  },
  {
    title: "No Show Rate",
    value: "5%",
    change: "+5%",
    trend: "up",
    period: "vs last month",
    icon: XCircle,
    gradient: false,
    accent: "from-[#FF7A18] via-[#FF8E1A] to-[#FFB347]",
  },
];

export function MetricsGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {metrics.map((metric) => {
        const isHovered = hoveredCard === metric.title;
        const shouldShowGradient = metric.gradient || isHovered;

        return (
          <Card
            key={metric.title}
            className={shouldShowGradient
              ? `relative overflow-hidden bg-gradient-to-br ${metric.accent ?? 'from-primary via-primary to-orange-500'} text-white border-0 shadow-lg transition-all duration-300 animate-fade-in hover:scale-[1.02] hover:shadow-xl`
              : "bg-card border border-border shadow-sm transition-all duration-300 animate-fade-in hover:shadow-lg"}
            onMouseEnter={() => setHoveredCard(metric.title)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-6">
              {shouldShowGradient && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute right-0 top-0 w-24 h-24 opacity-15" style={{background:"radial-gradient(circle at top right, rgba(255,255,255,0.4), transparent 60%)"}} />
                  <svg className="absolute right-3 top-3 w-14 h-14 opacity-10" viewBox="0 0 64 64" fill="none">
                    <path d="M8 8L56 8L32 56Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {/* Unified top row: icon in circular badge + title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={shouldShowGradient ? "w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center" : "w-11 h-11 rounded-full bg-muted flex items-center justify-center"}>
                  <metric.icon 
                    className={shouldShowGradient ? "w-6 h-6 text-white" : "w-6 h-6 text-primary"} 
                  />
                </div>
                <h4 className={shouldShowGradient ? "text-base font-semibold tracking-tight" : "text-base font-semibold text-foreground"}>{metric.title}</h4>
              </div>
              <div className={shouldShowGradient ? "text-5xl font-bold mb-3 leading-none drop-shadow-sm" : "text-4xl font-bold text-foreground mb-3"}>
                {metric.value}
              </div>
              <div className="flex items-center gap-2 text-xs mt-1">
                <div className={shouldShowGradient ? "flex items-center gap-1 px-2 py-1 rounded-full bg-white shadow-sm" : "flex items-center gap-1 px-2 py-1 rounded-full bg-muted"}>
                  {metric.trend === "up" ? (
                    <TrendingUp className={shouldShowGradient ? "w-3 h-3 text-[#FF7A18]" : "w-3 h-3 text-success"} />
                  ) : (
                    <TrendingDown className={shouldShowGradient ? "w-3 h-3 text-[#FF7A18]" : "w-3 h-3 text-destructive"} />
                  )}
                  <span className={shouldShowGradient ? "font-semibold text-[#FF7A18]" : metric.trend === "up" ? "text-success" : "text-destructive"}>{metric.change}</span>
                </div>
                <span className={shouldShowGradient ? "opacity-90" : "text-muted-foreground"}>{metric.period}</span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
