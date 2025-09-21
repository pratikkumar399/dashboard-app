"use client"

import { Pie, PieChart } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

export const TotalSales = () => {
  const salesData = [
    { 
      name: "Direct", 
      amount: "$300.56", 
      value: 47.1,
      percentage: "47.1%",
      fill: "var(--color-direct)"
    },
    { 
      name: "Affilliate", 
      amount: "$135.18", 
      value: 21.2,
      percentage: "21.2%",
      fill: "var(--color-affilliate)"
    },
    { 
      name: "Sponsored", 
      amount: "$154.02", 
      value: 24.1,
      percentage: "24.1%",
      fill: "var(--color-sponsored)"
    },
    { 
      name: "E-mail", 
      amount: "$48.96", 
      value: 7.6,
      percentage: "7.6%",
      fill: "var(--color-email)"
    }
  ];

  const chartConfig = {
    direct: {
      label: "Direct",
      color: "#A78BFA",
    },
    affilliate: {
      label: "Affilliate",
      color: "#10B981",
    },
    sponsored: {
      label: "Sponsored",
      color: "#8B5CF6",
    },
    email: {
      label: "E-mail",
      color: "#3B82F6",
    },
  } satisfies ChartConfig


  return (
    <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border w-full max-h-[415px]">
      {/* Header */}
      <h3 className="text-lg font-bold text-foreground mb-6">Total Sales</h3>
      
      {/* Donut Chart */}
      <div className="flex justify-center mb-6">
        <div className="relative w-48 h-44">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: data.fill }}
                          />
                          <span className="text-sm font-medium">{data.name}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {data.percentage}
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Pie
                data={salesData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={80}
              />
            </PieChart>
          </ChartContainer>
        </div>
      </div>
      
      {/* Legend */}
      <div className="space-y-3">
        {salesData.map((item, index) => {
          const configKey = item.name.toLowerCase().replace('-', '') as keyof typeof chartConfig;
          const color = chartConfig[configKey]?.color || '#A78BFA';
          
          return (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-sm text-foreground font-normal">
                  {item.name}
                </span>
              </div>
              <span className="text-sm text-foreground font-normal">
                {item.amount}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
