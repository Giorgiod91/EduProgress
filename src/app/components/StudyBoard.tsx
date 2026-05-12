"use client";
import React, { useState } from "react";

function StudyBoard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Math Homework",
      subject: "Math",
      time: "2h",
      date: "2024-07-14",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Science Project",
      subject: "Science",
      time: "3h",
      date: "2024-07-15",
      status: "In Progress",
    },
  ]);

  const titles = ["Title", "Subject", "Time", "Date", "Status"];

  const handleFinish = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: "Completed" } : task,
      ),
    );
  };

  const subjectColors: Record<string, string> = {
    Math: "bg-blue-500/20 text-blue-300 ring-1 ring-blue-500/30",
    Science: "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/30",
    English: "bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/30",
    History: "bg-rose-500/20 text-rose-300 ring-1 ring-rose-500/30",
  };

  return (
    <div className="min-w-[520px]">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between px-2">
        <h3 className="text-sm font-semibold text-white/80">Study Tasks</h3>
        <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
          {tasks.filter((t) => t.status === "Completed").length}/{tasks.length} Done
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="group min-w-full">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              {titles.map((title) => (
                <th
                  key={title}
                  scope="col"
                  className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-white/40"
                >
                  {title}
                </th>
              ))}
              <th scope="col" className="relative px-5 py-3">
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {tasks.map((task) => (
              <tr
                key={task.id}
                className={`transition-colors hover:bg-white/5 ${
                  task.id === 2
                    ? "translate-x-1/4 opacity-0 duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                    : ""
                }`}
              >
                <td className="whitespace-nowrap px-5 py-4">
                  <div className="text-sm font-medium text-white">
                    {task.title}
                  </div>
                </td>
                <td className="whitespace-nowrap px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      subjectColors[task.subject] ??
                      "bg-white/10 text-white/60"
                    }`}
                  >
                    {task.subject}
                  </span>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-white/50">
                  {task.time}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-sm text-white/50">
                  {task.date}
                </td>
                <td className="whitespace-nowrap px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      task.status === "In Progress"
                        ? "bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/30"
                        : "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/30"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-right">
                  {task.status === "In Progress" && (
                    <button
                      onClick={() => handleFinish(task.id)}
                      className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-all hover:border-primary/60 hover:bg-primary/20"
                    >
                      Mark Done
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudyBoard;
