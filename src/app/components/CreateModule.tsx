"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";

type Props = {};

function CreateModule({}: Props) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const {
    data: modules,
    isLoading,
    refetch: refetchModules,
  } = api.module.getAll.useQuery();

  const createModuleMutation = api.module.create.useMutation();
  const updateModuleMutation = api.module.update.useMutation();

  const handleCreateModule = async () => {
    try {
      await createModuleMutation.mutateAsync({
        title,
        subject,
      });
      setTitle("");
      setSubject("");
      await refetchModules();
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateModule = async (id: string) => {
    try {
      await updateModuleMutation.mutateAsync({
        moduleId: id,
        completed: true,
      });
      await refetchModules();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <div>Loading... No Access need to be logged in !</div>;

  return (
    <div className="flex max-w-screen-2xl flex-col">
      <div className="mb-6 w-full max-w-2xl">
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">
          Habit Tracker
        </h1>
        <div className="mb-4 flex items-center justify-center gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Module name"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject name"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleCreateModule}
            className="btn btn-wide flex items-center rounded-md bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-blue-500 hover:to-cyan-400 hover:text-black"
          >
            Create Task
          </button>
          <h2>weekly tracker</h2>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {modules
          ?.filter((module) => !module.completed)
          .map((module) => (
            <div
              key={module.id}
              className="flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-lg"
            >
              <button
                className="mt-2 rounded-md border border-gray-400 bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => handleUpdateModule(module.id)}
              >
                {module.completed ? "Mark as Incomplete" : "Mark as Complete"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CreateModule;
