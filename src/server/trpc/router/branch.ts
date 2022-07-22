import { calculateCrowDistance, retrieveIPBreakdown, t } from "../utils";
import { z } from "zod";
import { BranchDetails, Branches } from "../data/branches";

export const branchRouter = t.router({
  nearest: t.procedure
    .input(z.object({ ip: z.string() }))
    .query(async ({ input }) => {
      if (
        input.ip === "::1" ||
        input.ip.includes("172.20.0.1") ||
        input.ip.includes("localhost")
      ) {
        input.ip = "86.136.170.246";
      }

      const ipBreakdown = await retrieveIPBreakdown(input.ip);

      let nearestBranch: BranchDetails | undefined;
      let nearestDistance = Number.MAX_VALUE;

      Branches.forEach((branch) => {
        const distance = calculateCrowDistance(
          ipBreakdown.lat,
          ipBreakdown.lon,
          branch.lat,
          branch.lon
        );
        if (distance < nearestDistance) {
          nearestBranch = branch;
          nearestDistance = distance;
        }
      });

      return nearestBranch;
    }),
});
