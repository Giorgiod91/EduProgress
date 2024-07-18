"use client";
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import { api } from "~/trpc/react";

interface DataEntry {
  date: string;
  progress: number;
}

interface DashChartProps {
  data: DataEntry[];
}

const DashChart = ({ data }: DashChartProps) => {
  const { data: completedCountData, refetch: refetchCompletedCount } =
    api.module.getCompletedCount.useQuery();
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const { data: userMonthlyGoal } = api.module.getUserGoal.useQuery();

  const [completedCount, setCompletedCount] = useState<number | null>(null);

  useEffect(() => {
    if (completedCountData) {
      setCompletedCount(completedCountData.completedCount);
    }
  }, [completedCountData]);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (!ctx) {
      throw new Error("Failed to get 2D context for canvas.");
    }

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    //mostly code snippet from chart.js documentation
    //data: data.map(() => userMonthlyGoal?.goal ?? null),

    // Create a new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((entry) => entry.date),
        datasets: [
          {
            label: "Goal",
            data: data.map(() => userMonthlyGoal?.goal ?? null),
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
          },
          {
            label: "Completed Modules",
            data: data.map(() => completedCount),
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "Goal",
            },
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, completedCount]);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default DashChart;
