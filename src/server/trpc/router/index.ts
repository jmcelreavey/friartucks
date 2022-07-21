// src/server/router/index.ts
import { t } from "../utils";

import { branchRouter } from "./branch";

export const appRouter = t.router({
  branch: branchRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
