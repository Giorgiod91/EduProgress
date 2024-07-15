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
        moduleId: z.string(),
        completed: z.boolean(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { moduleId, completed } = input;
      const module = await ctx.db.module.update({
        where: { id: moduleId },
        data: { completed },
      });
      return module;
    }),
});
