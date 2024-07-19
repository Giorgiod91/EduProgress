"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";

type Props = {};

function SetGoals({}: Props) {
  const createGoalMutation = api.module.updateMonthlyGoal.useMutation();
  const [goal, setGoal] = useState(0);

  const handleCreateGoal = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createGoalMutation.mutateAsync({
        monthlyGoal: goal,
      });
      window.location.hash = "#Board";
    } catch (error) {
      console.error("Error creating goal:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm rounded-lg border-4 border-primary bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold text-black">
          Set Your Goal
        </h1>
        <form onSubmit={handleCreateGoal} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="goal" className="mb-2 text-black">
              Monthly Goal
            </label>
            <input
              id="goal"
              type="number"
              value={goal}
              onChange={(e) => setGoal(Number(e.target.value))}
              className="rounded-lg border border-primary p-2 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your goal"
            />
          </div>
          <button
            type="submit"
            className="rounded-lgpy-2 w-full bg-primary text-white transition-colors hover:bg-primary/70"
          >
            Set Goal
          </button>
        </form>
      </div>
    </div>
  );
}

export default SetGoals;
