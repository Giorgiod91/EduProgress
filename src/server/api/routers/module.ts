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
            completedCount: { increment: 1 },
          },
        });

        return updatedModule;
      } catch (error) {
        console.error("Error updating module:", error);
        throw new Error("Failed to update module");
      }
    }),

  getCompletedCount: protectedProcedure.query(async ({ ctx }) => {
    const totalCompletedCount = await ctx.db.module.aggregate({
      _sum: {
        completedCount: true,
      },
    });
    return { completedCount: totalCompletedCount._sum.completedCount || 0 };
  }),
});
