"use client";
import React from "react";
import { api } from "~/trpc/react";

type Props = {};

type StyleProps = {
  "--value": number;
  "--size": string;
  "--thickness": string;
} & React.CSSProperties;

function DashGrafik2({}: Props) {
  const { data: completedData, isLoading: isLoadingCompleted } =
    api.module.getCompletedCount.useQuery();
  const { data: completedCountData } = api.module.getCompletedCount.useQuery();
  console.log(completedCountData);
  const { data: allData, isLoading: isLoadingAll } =
    api.module.getAll.useQuery();
  const totalModules = allData?.length || 0;
  // fetching the completed modules
  const temporary = allData?.filter((module) => module.completed)?.length || 0;
  // fetching the not completed modules
  const notcompleted =
    allData?.filter((module) => !module.completed)?.length || 0;
  const completedModules = completedData?.completedCount || 0;
  // calculating the percentage of the completed modules
  const completionPercentage =
    totalModules > 0 ? ((temporary / totalModules) * 100).toFixed(2) : 0;
  return (
    <div
      className="radial-progress border-primary bg-red-300 text-primary-content"
      style={
        {
          "--value": completionPercentage,
          "--size": "12rem",
          "--thickness": "2rem",
        } as StyleProps
      }
      role="progressbar"
    >
      {completionPercentage}%
    </div>
  );
}

export default DashGrafik2;
