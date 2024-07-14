"use client";
import React, { useState } from "react";

type Props = {};

function StudyBoard({}: Props) {
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

  return (
    <div className="mx-auto max-w-5xl p-4">
      <h1 className="mb-8 text-4xl font-bold text-gray-800">Study Board</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg bg-white shadow-md">
          <thead className="bg-gray-200">
            <tr>
              {titles.map((title) => (
                <th
                  key={title}
                  className="px-4 py-2 text-left text-sm font-semibold text-gray-700"
                >
                  {title}
                </th>
              ))}
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {tasks
              .filter((task) => task.status !== "Completed")
              .map((task) => (
                <tr key={task.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">{task.title}</td>
                  <td
                    className={`rounded-xl px-4 py-2 text-gray-700 ${
                      task.subject.includes("Math")
                        ? "bg-blue-100"
                        : task.subject.includes("Science")
                          ? "bg-green-100"
                          : task.subject.includes("English")
                            ? "bg-yellow-100"
                            : task.subject.includes("History")
                              ? "bg-red-100"
                              : ""
                    }`}
                  >
                    {task.subject}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{task.time}</td>
                  <td className="px-4 py-2 text-gray-700">{task.date}</td>
                  <td className="px-4 py-2 text-gray-700">{task.status}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleFinish(task.id)}
                      className="rounded-lg bg-green-500 px-3 py-1 font-semibold text-white transition duration-200 hover:bg-green-600"
                    >
                      Finish
                    </button>
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
