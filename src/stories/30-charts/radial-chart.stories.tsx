import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Label,
  LabelList,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
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
  title: "Charts/Radial Chart",
  component: RadialBarChart,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Radial charts display data in a circular format, useful for showing progress, completion rates, or comparative metrics. Built with Recharts and follows USWDS design guidelines with proper accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

RadialBarChart.displayName = "RadialBarChart";

// Default usage radial chart
export const Default: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">Radial Chart</h2>
        <p className="text-sm text-muted-foreground">January - June 2024</p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              visitors: {
                label: "Visitors",
              },
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
                color: "var(--color-green-cool-50v)",
              },
              other: {
                label: "Other",
                color: "var(--color-gray-50)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadialBarChart
            {...args}
            data={[
              { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
              { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
              {
                browser: "firefox",
                visitors: 187,
                fill: "var(--color-firefox)",
              },
              { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
              { browser: "other", visitors: 90, fill: "var(--color-other)" },
            ]}
            innerRadius={40}
            outerRadius={120}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
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
          "Multiple browser data displayed as concentric radial bars with different colors for each browser.",
      },
    },
  },
};

// Browser usage radial chart
export const WithLabel: Story = {
  render: (args) => (
    <Card className="max-w-xl">
      <CardHeader>
        <h2 className="font-bold font-merriweather text-lg">
          Radial Chart - Label
        </h2>
        <p className="text-sm text-muted-foreground">January - June 2024</p>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={
            {
              visitors: {
                label: "Visitors",
              },
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
                color: "var(--color-green-cool-50v)",
              },
              other: {
                label: "Other",
                color: "var(--color-gray-50)",
              },
            } as ChartConfig
          }
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadialBarChart
            {...args}
            data={[
              { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
              { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
              {
                browser: "firefox",
                visitors: 187,
                fill: "var(--color-firefox)",
              },
              { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
              { browser: "other", visitors: 90, fill: "var(--color-other)" },
            ]}
            startAngle={-90}
            endAngle={380}
            innerRadius={40}
            outerRadius={120}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" background>
              <LabelList
                position="insideStart"
                dataKey="browser"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
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
          "Multiple browser data displayed as concentric radial bars with different colors for each browser.",
      },
    },
  },
};
