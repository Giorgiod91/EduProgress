"use client";
import React from "react";
import { api } from "~/trpc/react";

type Props = {};

function DashGrafic({}: Props) {
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
    <div className="w-full overflow-hidden">
      <div className="stats w-full overflow-x-scroll shadow md:overflow-hidden">
        <div className="stat w-[200px]">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title">Total Modules Done</div>
          <div className="stat-value text-primary">
            {completedCountData?.completedCount || 0}
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat w-[200px]">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat w-[200px]">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="meReal.jpeg" className="object-contain" />
              </div>
            </div>
          </div>
          <div className="stat-value">{completionPercentage}%</div>
          <div className="stat-title">Modules done</div>
          <div className="stat-desc text-secondary">
            {notcompleted} Modules remaining
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashGrafic;
