import * as React from "react";
import { BranchDetails } from "../server/trpc/data/branches";

type BranchContextType = {
  branch: BranchDetails | undefined;
  updateBranch: (updateBranch: BranchDetails) => void;
};

const defaultState: BranchContextType = {
  branch: undefined,
  updateBranch: () => {},
};

export const BranchContext =
  React.createContext<BranchContextType>(defaultState);

const BranchProvider = ({ children }: React.PropsWithChildren) => {
  const [branch, setBranch] = React.useState<BranchDetails>();

  const updateBranch = (branch: BranchDetails) => {
    setBranch(branch);
  };

  return (
    <BranchContext.Provider value={{ branch, updateBranch }}>
      {children}
    </BranchContext.Provider>
  );
};

export default BranchProvider;
