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
    } catch (error) {
      console.error("Error creating goal:", error);
    }
  };

  return (
    <div>
      <h1> Set Your Monthly Goeeeal Here</h1>
      <form onSubmit={handleCreateGoal}>
        <div>
          <label>Goal</label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(parseInt(e.target.value))}
          />
        </div>
        <button type="submit">Set Goal</button>
      </form>
    </div>
  );
}

export default SetGoals;
