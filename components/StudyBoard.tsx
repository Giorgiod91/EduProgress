"use client";
import React, { useState } from "react";

type Props = {};

function StudyBoard({}: Props) {
  const [clicked, setClicked] = useState(false);
  const titles = ["Title", "Subject", "Time", "Date", "Status"];
  const tasks = [
    {
      title: "Math Homework",
      subject: "Math",
      time: "2h",
      date: "2024-07-14",
      status: "In Progress",
    },
    {
      title: "Science Project",
      subject: "Science",
      time: "3h",
      date: "2024-07-15",
      status: "Completed",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Study Board</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg bg-white shadow-md">
          <thead>
            <tr>
              {titles.map((title) => (
                <th
                  key={title}
                  className="border-b-2 border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border-b border-gray-300 px-4 py-2">
                  {task.title}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {task.subject}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {task.time}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {task.date}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {task.status}
                </td>
                <td>
                  <button
                    onClick={() => setClicked(!clicked)}
                    className="btn btn-primary"
                  ></button>
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
