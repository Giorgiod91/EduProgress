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

  // State to hold the completed count
  const [completedCount, setCompletedCount] = useState<number | null>(null);

  useEffect(() => {
    // Update the completed count when data is fetched
    if (completedCountData) {
      setCompletedCount(completedCountData.completedCount);
    }
  }, [completedCountData]);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (!ctx) {
      throw new Error("Failed to get 2D context for canvas.");
    }

    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((entry) => entry.date),
        datasets: [
          {
            label: "Goal",
            data: data.map((entry) => entry.progress),
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
          },
          {
            label: "Completed Modules",
            data: data.map(() => completedCount), // Use the completed count for all dates
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
  }, [data, completedCount]); // Update chart when data or completedCount changes

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default DashChart;
