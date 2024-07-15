import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const moduleRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.module.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        subject: z.string(),
      }),
    )
    .mutation(({ input, ctx }) => {
      return ctx.db.module.create({
        data: {
          title: input.title,
          subject: input.subject,
          userId: ctx.session.user.id,
          createdById: ctx.session.user.id,
        },
      });
    }),
  update: protectedProcedure
    .input(
      z.object({
        taskId: z.string().refine((val) => !isNaN(Number(val)), {
          message: "taskId must be a number",
        }),
        completed: z.boolean(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { taskId, completed } = input;
      const task = await ctx.db.module.update({
        where: { id: String(taskId) },
        data: { completed },
      });
      return task;
    }),
});
