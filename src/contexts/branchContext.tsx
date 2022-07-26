import * as React from "react";
import { BranchDetails } from "../data/branches";

type BranchContextType = {
  branch: BranchDetails | undefined;
  updateBranch: (updateBranch: BranchDetails | undefined) => void;
};

const defaultState: BranchContextType = {
  branch: undefined,
  updateBranch: () => undefined,
};

export const BranchContext =
  React.createContext<BranchContextType>(defaultState);

const BranchProvider = ({ children }: React.PropsWithChildren) => {
  const [branch, setBranch] = React.useState<BranchDetails | undefined>();

  const updateBranch = (branch: BranchDetails | undefined) => {
    setBranch(branch);
  };

  return (
    <BranchContext.Provider value={{ branch, updateBranch }}>
      {children}
    </BranchContext.Provider>
  );
};

export default BranchProvider;
