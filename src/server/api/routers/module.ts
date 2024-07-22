import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const moduleRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.module.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  delete: protectedProcedure
    .input(
      z.object({
        moduleId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { moduleId } = input;
      await ctx.db.module.delete({
        where: { id: moduleId },
      });
      return { success: true };
    }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        subject: z.string(),
        color: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { title, subject, color } = input;

      try {
        const createdModule = await ctx.db.module.create({
          data: {
            title,
            subject,
            color,
            userId: ctx.session.user.id,
            createdById: ctx.session.user.id,
          },
        });

        return createdModule;
      } catch (error) {
        console.error("Error creating module:", error);
        throw new Error("Failed to create module");
      }
    }),

  update: protectedProcedure
    .input(
      z.object({
        moduleId: z.string(),
        completed: z.boolean(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { moduleId, completed } = input;

      try {
        const updatedModule = await ctx.db.module.update({
          where: { id: moduleId },
          data: {
            completed,
          },
        });

        // Increment the completedModuleCount for the user
        if (completed) {
          const user = await ctx.db.user.findUnique({
            where: { id: ctx.session.user.id },
          });

          if (!user) {
            throw new Error("User not found");
          }

          const updatedUser = await ctx.db.user.update({
            where: { id: ctx.session.user.id },
            data: {
              completedModuleCount: user.completedModuleCount + 1,
            },
          });
        }

        return updatedModule;
      } catch (error) {
        console.error("Error updating module:", error);
        throw new Error("Failed to update module");
      }
    }),
  updateMonthlyGoal: protectedProcedure
    .input(
      z.object({
        monthlyGoal: z.number(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { monthlyGoal } = input;

      try {
        const updatedUser = await ctx.db.user.update({
          where: { id: ctx.session.user.id },
          data: {
            monthlyGoal,
          },
        });

        return updatedUser;
      } catch (error) {
        console.error("Error updating monthly goal:", error);
        throw new Error("Failed to update monthly goal");
      }
    }),

  getCompletedCount: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
    });

    return { completedCount: user?.completedModuleCount ?? 0 };
  }),

  getUserGoal: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
    });

    return { goal: user?.monthlyGoal ?? 0 };
  }),
});
