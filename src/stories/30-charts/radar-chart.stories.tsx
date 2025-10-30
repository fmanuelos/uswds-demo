import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/charts/chart";

const meta = {
  title: "Charts/Radar Chart",
  component: RadarChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Radar charts display multivariate data on a two-dimensional chart with three or more quantitative variables. Built with Recharts and follows USWDS design guidelines with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

RadarChart.displayName = "RadarChart";

// Default radar chart
export const Default: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Radar Chart</h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics across multiple categories
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[500px]"
        >
          <RadarChart
            {...args}
            data={[
              { category: "Performance", desktop: 186 },
              { category: "Security", desktop: 305 },
              { category: "Accessibility", desktop: 237 },
              { category: "SEO", desktop: 273 },
              { category: "Best Practices", desktop: 209 },
            ]}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarAngleAxis dataKey="category" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Performance metrics across different categories
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic radar chart showing performance across multiple categories with filled area.",
      },
    },
  },
};

// Radar chart with dots
export const Dots: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Dots
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics with visible data points
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-cyan-30v)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[500px]"
        >
          <RadarChart
            {...args}
            data={[
              { category: "Performance", desktop: 186 },
              { category: "Security", desktop: 305 },
              { category: "Accessibility", desktop: 237 },
              { category: "SEO", desktop: 273 },
              { category: "Best Practices", desktop: 209 },
            ]}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarAngleAxis dataKey="category" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Data points highlighted with visible dots
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar chart with visible dots at each data point for emphasis on individual values.",
      },
    },
  },
};

// Radar chart with lines only
export const LinesOnly: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Lines Only
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics with outline only
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
              mobile: {
                label: "Mobile",
                color: "var(--color-cyan-30v)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[500px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186, mobile: 160 },
              { month: "February", desktop: 185, mobile: 170 },
              { month: "March", desktop: 207, mobile: 180 },
              { month: "April", desktop: 173, mobile: 160 },
              { month: "May", desktop: 160, mobile: 190 },
              { month: "June", desktop: 174, mobile: 204 },
            ]}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid radialLines={false}/>
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0}
              stroke="var(--color-desktop)"
              strokeWidth={2}
            />
            <Radar
              dataKey="mobile"
              fill="var(--color-mobile)"
              fillOpacity={0}
              stroke="var(--color-mobile)"
              strokeWidth={2}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Outline only view for cleaner visualization
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar chart with lines only (no fill), useful for comparing multiple series or cleaner presentation.",
      },
    },
  },
};


// Radar chart - Multiple
export const Multiple: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radar Chart - Multiple
        </h2>
        <p className="text-sm text-muted-foreground">
          Performance metrics with outline only
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
              mobile: {
                label: "Mobile",
                color: "var(--color-cyan-30v)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[500px]"
        >
          <RadarChart
            {...args}
            data={[
              { month: "January", desktop: 186, mobile: 80 },
              { month: "February", desktop: 305, mobile: 200 },
              { month: "March", desktop: 237, mobile: 120 },
              { month: "April", desktop: 73, mobile: 190 },
              { month: "May", desktop: 209, mobile: 130 },
              { month: "June", desktop: 214, mobile: 140 },
            ]}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
            <Radar
              dataKey="mobile"
              fill="var(--color-mobile)"
              fillOpacity={0.9}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Outline only view for cleaner visualization
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Radar chart with lines only (no fill), useful for comparing multiple series or cleaner presentation.",
      },
    },
  },
};