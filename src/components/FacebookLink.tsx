import Link from "next/link";
import { useContext } from "react";
import { GrFacebook } from "react-icons/gr";
import { BranchContext } from "../contexts/branchContext";

export const FacebookLink = () => {
  const { branch } = useContext(BranchContext);

  return (
    <Link href="/">
      <a
        href={branch?.facebookUrl ?? "https://www.facebook.com/friar.tucks.7"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-600"
      >
        <GrFacebook size={40} className="text-blue-500" />
      </a>
    </Link>
  );
};
