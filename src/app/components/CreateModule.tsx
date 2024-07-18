"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";

type Props = {};

function CreateModule({}: Props) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [color, setColor] = useState("");

  const { isLoading, refetch: refetchModules } = api.module.getAll.useQuery();
  const createModuleMutation = api.module.create.useMutation();

  const handleCreateModule = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createModuleMutation.mutateAsync({
        title,
        subject,
        color,
      });
      // Reset form fields
      setTitle("");
      setSubject("");
      setColor("");
      await refetchModules();
      window.location.hash = "#dash";
    } catch (error) {
      console.error("Error creating module:", error);
    }
  };

  if (isLoading) {
    return <div>Loading... No Access need to be logged in !</div>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border-4 border-primary bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Create Module</h1>
        <form onSubmit={handleCreateModule}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Module Name
              </label>
              <input
                maxLength={20}
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Module name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                maxLength={15}
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter subject name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="color"
                className="block text-sm font-medium text-gray-700"
              >
                Color
              </label>
              <select
                id="color"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="">Choose Color</option>
                <option value="blue" className="text-blue-600">
                  Blue
                </option>
                <option value="green" className="text-green-600">
                  Green
                </option>
                <option value="yellow" className="text-yellow-600">
                  Yellow
                </option>
                <option value="red" className="text-red-600">
                  Red
                </option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
              >
                Create Module
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateModule;
