import React from "react";

type Props = {};

function DashGrafic({}: Props) {
  return (
    <div className="w-full overflow-hidden">
      <div className="stats w-full overflow-hidden shadow">
        <div className="stat w-[200px]">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title">Total Modules Done</div>
          <div className="stat-value text-primary">25.6K</div>
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
          <div className="stat-value">86%</div>
          <div className="stat-title">Modules done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
}

export default DashGrafic;
