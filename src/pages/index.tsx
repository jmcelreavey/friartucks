import type { GetServerSideProps, NextPage } from "next";
import { useContext, useEffect } from "react";
import { BranchContext } from "../contexts/branchContext";
import { Branch } from "../server/trpc/data/branches";
import { trpc } from "../utils/trpc";

type HomeProps = {
  ip: string;
};
const Home: NextPage<HomeProps> = ({ ip }: HomeProps) => {
  const { branch, updateBranch } = useContext(BranchContext);
  const nearestBranch = trpc.proxy.branch.nearest.useQuery({ ip });

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    if (nearestBranch.data) {
      updateBranch(nearestBranch.data);
    }
  }, [updateBranch, nearestBranch.data]);

  const blankOptionWhenLoading = nearestBranch.isLoading && <option> </option>;
  return (
    <div className="items-center grid h-full min-w-screen w-screen align-middle justify-center text-white bg-friar-blue">
      <div className="min-h-full h-full min-w-screen w-screen text-center p-4">
        <h1 className="text-2xl font-bold">
          Welcome to the{" "}
          <select
            value={branch?.name}
            className="text-center bg-base-100 text-green-700 border-green-700 border-2 rounded-lg p-2"
          >
            {blankOptionWhenLoading}
            {Object.keys(Branch).map((branch) => (
              <option key={branch} value={branch}>
                {capitalizeFirstLetter(branch)}
              </option>
            ))}
          </select>{" "}
          Branch.
        </h1>
        <div className="h-1/2 justify-center mt-4 rounded-lg shadow-lg">
            <iframe
              className="min-w-full w-full h-full"
              loading="lazy"
              allowFullScreen
              style={{ border: "none" }}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBN6PrFQIW38viBGwecW9OGXQbL0luCsG0
              &location=54.3452375,-6.65383
              &heading=0
              &pitch=0
              &fov=65"
            ></iframe>
        </div>
        <div className="mt-4 flex gap-x-2 flex-col lg:flex-row">
          <p className="flex-auto border">Details</p>
          <p className="flex-auto border mt-4 lg:mt-0">Map</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const forwarded = context.req.headers["x-forwarded-for"];
  const ip =
    forwarded && forwarded instanceof String
      ? forwarded.split(/, /)[0]
      : context.req.socket.remoteAddress;
  return {
    props: {
      ip,
    },
  };
};

export default Home;
