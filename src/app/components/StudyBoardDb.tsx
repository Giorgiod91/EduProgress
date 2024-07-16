"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";

type Props = {};

function StudyBoardDb({}: Props) {
  const { data: tasks, isLoading, refetch } = api.module.getAll.useQuery();
  const { data: completedCountData, refetch: refetchCompletedCount } =
    api.module.getCompletedCount.useQuery();
  const [remove, setRemove] = useState<string | null>(null);

  const updateModuleMutation = api.module.update.useMutation();
  const deleteModuleMutation = api.module.delete.useMutation();

  const titles = ["Title", "Subject", "Time", "Date", "Status"];

  const handleFinish = async (taskId: string) => {
    try {
      await updateModuleMutation.mutateAsync({
        moduleId: taskId,
        completed: true,
      });
      await refetch();
      await refetchCompletedCount();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async (taskId: string) => {
    try {
      await deleteModuleMutation.mutateAsync({ moduleId: taskId });
      await refetch();
      await refetchCompletedCount();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
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
                    {tasks?.map((task) => (
                      <tr key={task.id}>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="text-sm text-gray-900">
                            {task.title}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              task.color
                                ? task.color.includes("blue")
                                  ? "bg-blue-100 text-blue-800"
                                  : task.color.includes("green")
                                    ? "bg-green-100 text-green-800"
                                    : task.color.includes("yellow")
                                      ? "bg-yellow-100 text-yellow-800"
                                      : task.color.includes("red")
                                        ? "bg-red-100 text-red-800"
                                        : "bg-gray-100 text-gray-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {task.color || "No Color"}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              task.completed
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {task.completed ? "Completed" : "In Progress"}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          {!task.completed && (
                            <button
                              onClick={() => handleFinish(task.id)}
                              className="btn btn-secondary w-[150px]"
                            >
                              Mark as Completed
                            </button>
                          )}
                          {task.completed && (
                            <button
                              onClick={() => handleRemove(task.id)}
                              className="btn btn-primary w-[150px]"
                            >
                              Remove
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

export default StudyBoardDb;
