import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
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
  ChartLegend,
  ChartLegendContent,
} from "@/components/charts/chart";

const meta = {
  title: "Charts/Bar Chart",
  component: BarChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Bar charts are used to compare values across categories. Built with Recharts and follows USWDS design guidelines with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

BarChart.displayName = "BarChart";

// Default bar chart
export const Default: Story = {
  render: (args) => (
    <Card className="max-w-5xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Bar Chart</h2>
        <p className="text-sm text-muted-foreground">
          A simple bar chart example
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)", // var(--color-blue-60v)
              },
            } as ChartConfig
          }
        >
          <BarChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 73 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
          >
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
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          </BarChart>
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
        story: "A basic bar chart showing desktop visitors over 6 months.",
      },
    },
  },
};

// Multi-series bar chart
export const MultiSeries: Story = {
  render: (args) => (
    <Card className="max-w-5xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Multi-Series Bar Chart
        </h2>
        <p className="text-sm text-muted-foreground">
          Comparing desktop and mobile visitors
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)", // var(--color-blue-60v)
              },
              mobile: {
                label: "Mobile",
                color: "var(--color-cyan-30v)", // var(--color-cyan-30v)
              },
            } as ChartConfig
          }
        >
          <BarChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186, mobile: 80 },
              { month: "February", desktop: 305, mobile: 200 },
              { month: "March", desktop: 237, mobile: 120 },
              { month: "April", desktop: 73, mobile: 190 },
              { month: "May", desktop: 209, mobile: 130 },
              { month: "June", desktop: 214, mobile: 140 },
            ]}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Comparing desktop and mobile visitors
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Bar chart comparing multiple data series side by side.",
      },
    },
  },
};

// Horizontal bar chart
export const Horizontal: Story = {
  render: (args) => (
    <Card className="max-w-5xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Horizontal Bar Chart
        </h2>
        <p className="text-sm text-muted-foreground">
          Comparing desktop visitors over 6 months
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              desktop: {
                label: "Desktop",
                color: "var(--color-blue-60v)", // var(--color-blue-60v)
              },
            } as ChartConfig
          }
        >
          <BarChart
            {...args}
            accessibilityLayer
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 73 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            layout="vertical"
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <XAxis type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Horizontal layout for easier label reading
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Horizontal bar chart useful when category labels are long or when comparing values is the primary goal.",
      },
    },
  },
};
