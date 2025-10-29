import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/charts/chart";

const meta = {
  title: "Charts/Area Chart",
  component: AreaChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Area charts display quantitative data over a continuous interval or time period. Built with Recharts and follows USWDS design guidelines with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

AreaChart.displayName = "AreaChart";

// Format month abbreviation
const formatMonthTick = (value: string) => value.slice(0, 3);

// Default area chart with smooth curve
export const Default: Story = {
  render: (args) => (
    <Card className="max-w-5xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Area Chart</h2>
        <p className="text-sm text-muted-foreground">
          Monthly visitor trend with smooth curve
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)",
              },
            } as ChartConfig
          }
        >
          <AreaChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 173 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatMonthTick}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A basic area chart with smooth (natural) curve showing desktop visitors over time.",
      },
    },
  },
};

// Linear area chart
export const Linear: Story = {
  render: (args) => (
    <Card className="max-w-5xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Area Chart - Linear
        </h2>
        <p className="text-sm text-muted-foreground">
          Monthly visitor trend with linear interpolation
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-cyan-30v)",
              },
            } as ChartConfig
          }
        >
          <AreaChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 173 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatMonthTick}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Linear interpolation connects data points with straight lines
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Area chart with linear interpolation, connecting data points with straight lines instead of curves.",
      },
    },
  },
};

// Step area chart
export const Step: Story = {
  render: (args) => (
    <Card className="max-w-5xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Area Chart - Step
        </h2>
        <p className="text-sm text-muted-foreground">
          Monthly visitor trend with step interpolation
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-green-cool-50v)",
              },
            } as ChartConfig
          }
        >
          <AreaChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 173 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatMonthTick}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="step"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Step interpolation creates a staircase effect between data points
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Area chart with step interpolation, useful for showing discrete changes or states over time.",
      },
    },
  },
};

// Stacked area chart
export const Stacked: Story = {
  render: (args) => (
    <Card className="max-w-5xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Area Chart - Stacked
        </h2>
        <p className="text-sm text-muted-foreground">
          Multiple data series stacked to show total and composition
        </p>
      </CardHeader>
      <CardContent>
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
        >
          <AreaChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186, mobile: 80 },
              { month: "February", desktop: 305, mobile: 200 },
              { month: "March", desktop: 237, mobile: 120 },
              { month: "April", desktop: 173, mobile: 190 },
              { month: "May", desktop: 209, mobile: 130 },
              { month: "June", desktop: 214, mobile: 140 },
            ]}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={formatMonthTick}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Comparing desktop and mobile visitors with cumulative view
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Stacked area chart showing multiple data series. The total height represents the sum of all values, while each layer shows the contribution of each series.",
      },
    },
  },
};
