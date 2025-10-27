"use client"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useTranslations } from 'next-intl'
export const description = "Sales"



const chartConfig = {
    sales: {
    label: "sales",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function Barcharts() {
  const t = useTranslations();
  const chartData = [
    { month:t("dashboard.January"), sales: 40 },
    { month: t("dashboard.February"), sales:60   },
    { month: t("dashboard.March"), sales:  75 },
    { month: t("dashboard.April"), sales: 90},
    { month:  t("dashboard.May"), sales: 95},
    { month:  t("dashboard.June"), sales:  110 },
  ]
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle>{t("dashboard.salesChart") }</CardTitle>
        <CardDescription>{t("dashboard.January-June2024") }</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="sales" fill="var(--color-desktop)" radius={10} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
       
      </CardFooter>
    </Card>
  )
}
