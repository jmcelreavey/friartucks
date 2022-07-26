import { calculateCrowDistance, retrieveIPBreakdown, t } from "../utils";
import { z } from "zod";
import { Branches } from "../../../data/branches";

export const branchRouter = t.router({
  nearest: t.procedure
    .input(z.object({ ip: z.string() }))
    .query(async ({ input }) => {
      const ipBreakdown = await retrieveIPBreakdown(input.ip);

      let nearestBranch = Branches.get("Newry");
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
