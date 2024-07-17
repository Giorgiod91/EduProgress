"use client";
import React, { useState } from "react";

type Props = {};

function StudyBoard({}: Props) {
  const [hover, setHover] = useState(true);
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

  //
  //onMouseEnter={() => setHover(false)}
  //onMouseLeave={() => setHover(true)}

  return (
    <div className="mx-auto max-w-5xl">
      <div className="">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="group min-w-full divide-y divide-gray-200">
                  <thead className="bg-base-200">
                    <tr>
                      {titles.map((title) => (
                        <th
                          key={title}
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                          {title}
                        </th>
                      ))}
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {tasks.map((task) => (
                      <tr
                        key={task.id}
                        className={
                          task.id === 2
                            ? "translate-x-1/4 opacity-0 duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                            : ""
                        }
                      >
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {task.title}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              task.subject.includes("Math")
                                ? "bg-blue-100 text-blue-800"
                                : task.subject.includes("Science")
                                  ? "bg-green-100 text-green-800"
                                  : task.subject.includes("English")
                                    ? "bg-yellow-100 text-yellow-800"
                                    : task.subject.includes("History")
                                      ? "bg-red-100 text-red-800"
                                      : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {task.subject}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          {task.time}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          {task.date}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              task.status === "In Progress"
                                ? "bg-yellow-100 text-yellow-800"
                                : task.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {task.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          {task.status === "In Progress" && (
                            <button
                              onClick={() => handleFinish(task.id)}
                              className="btn btn-secondary w-[150px]"
                            >
                              Mark as Completed
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyBoard;
