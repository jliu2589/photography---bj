import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const formRouter = createTRPCRouter({
  formInput: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string(),
        message: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      {
        const form = await ctx.prisma.form.create({
          data: input,
        });
        console.log("gg");

        return form;
      }
    }),
});
