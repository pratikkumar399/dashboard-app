"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

const chartData = [
  { month: "Jan", currentWeek: 12, previousWeek: 7 },
  { month: "Feb", currentWeek: 7, previousWeek: 17 },
  { month: "Mar", currentWeek: 12, previousWeek: 12 },
  { month: "Apr", currentWeek: 16, previousWeek: 10 },
  { month: "May", currentWeek: 19, previousWeek: 15 },
  { month: "Jun", currentWeek: 19, previousWeek: 22 },
]

const chartConfig = {
  currentWeek: {
    label: "Current Week",
    color: "var(--chart-1)",
  },
  previousWeek: {
    label: "Previous Week", 
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export const RevenueLineChart = () => {
  return (
    <Card className="bg-card text-card-foreground border-border border-2  font-sans w-full max-w-full transition-all duration-300 rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-medium text-foreground">Revenue</CardTitle>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--chart-1)' }}></div>
            <span className="text-muted-foreground">Current Week</span>
            <span className="text-foreground font-medium">$58,211</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--chart-2)' }}></div>
            <span className="text-muted-foreground">Previous Week</span>
            <span className="text-foreground font-medium">$68,768</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `${value}M`}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="currentWeek"
                type="monotone"
                stroke="var(--color-currentWeek)"
                strokeWidth={3}
                dot={false}
              />
              <Line
                dataKey="previousWeek"
                type="monotone"
                stroke="var(--color-previousWeek)"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueLineChart;