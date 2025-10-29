import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pie, PieChart, Cell, Legend } from "recharts";
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
  title: "Charts/Pie Chart",
  component: PieChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Pie charts show the relationship of parts to a whole. Built with Recharts and follows USWDS design guidelines with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

PieChart.displayName = "PieChart";

// Default pie chart
export const Default: Story = {
  render: (args) => (
    <Card className="max-w-5xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Pie Chart</h2>
        <p className="text-sm text-muted-foreground">
          Browser usage distribution
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              chrome: {
                label: "Chrome",
                color: "var(--color-blue-60v)",
              },
              safari: {
                label: "Safari",
                color: "var(--color-cyan-30v)",
              },
              firefox: {
                label: "Firefox",
                color: "var(--color-orange-40v)",
              },
              edge: {
                label: "Edge",
                color: "var(--color-green-cool-40v)",
              },
              other: {
                label: "Other",
                color: "var(--color-gray-30)",
              },
            } as ChartConfig
          }
        >
          <PieChart {...args}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Pie
              data={[
                { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
                { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
                { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
                { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
                { browser: "other", visitors: 90, fill: "var(--color-other)" },
              ]}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={0}
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing browser distribution for the last 6 months
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A basic pie chart showing browser usage distribution.",
      },
    },
  },
};

// Donut chart
export const Donut: Story = {
  render: (args) => (
    <Card className="max-w-5xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Donut Chart</h2>
        <p className="text-sm text-muted-foreground">
          Budget allocation by department
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              operations: {
                label: "Operations",
                color: "var(--color-blue-60v)",
              },
              marketing: {
                label: "Marketing",
                color: "var(--color-mint-cool-40v)",
              },
              development: {
                label: "Development",
                color: "var(--color-violet-warm-50v)",
              },
              hr: {
                label: "Human Resources",
                color: "var(--color-gold-20v)",
              },
              admin: {
                label: "Administration",
                color: "var(--color-gray-cool-40)",
              },
            } as ChartConfig
          }
        >
          <PieChart {...args}>
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Pie
              data={[
                { department: "operations", amount: 450000, fill: "var(--color-operations)" },
                { department: "marketing", amount: 300000, fill: "var(--color-marketing)" },
                { department: "development", amount: 650000, fill: "var(--color-development)" },
                { department: "hr", amount: 200000, fill: "var(--color-hr)" },
                { department: "admin", amount: 150000, fill: "var(--color-admin)" },
              ]}
              dataKey="amount"
              nameKey="department"
              innerRadius={80}
              outerRadius={120}
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Annual budget distribution across departments
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A donut chart (pie chart with inner radius) showing budget allocation.",
      },
    },
  },
};

// Pie chart with labels
export const WithLabel: Story = {
  render: (args) => (
    <Card className="max-w-5xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Pie Chart with Labels
        </h2>
        <p className="text-sm text-muted-foreground">
          Project status breakdown
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={
            {
              completed: {
                label: "Completed",
                color: "var(--color-green-cool-50v)",
              },
              inProgress: {
                label: "In Progress",
                color: "var(--color-blue-60v)",
              },
              pending: {
                label: "Pending",
                color: "var(--color-gold-30v)",
              },
              blocked: {
                label: "Blocked",
                color: "var(--color-red-warm-50v)",
              },
            } as ChartConfig
          }
        >
          <PieChart {...args}>
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Pie
              data={[
                { status: "completed", count: 45, fill: "var(--color-completed)" },
                { status: "inProgress", count: 32, fill: "var(--color-inProgress)" },
                { status: "pending", count: 18, fill: "var(--color-pending)" },
                { status: "blocked", count: 5, fill: "var(--color-blocked)" },
              ]}
              dataKey="count"
              nameKey="status"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label={(entry) => `${entry.count}%`}
              labelLine={false}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Current project status distribution
        </div>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A pie chart with percentage labels showing project status breakdown.",
      },
    },
  },
};
