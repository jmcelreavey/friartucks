import type { NextPage } from "next";
import { Branch } from "../server/trpc/data/branches";
import { trpc } from "../utils/trpc";

type HomeProps = {
  ip: string;
};
const Home: NextPage<HomeProps> = ({ ip }: HomeProps) => {
  const nearestBranch = trpc.proxy.branch.nearest.useQuery({ ip });

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="items-center grid h-full min-w-screen w-screen align-middle justify-center text-white bg-friar-blue">
      <div className="min-w-full text-center p-4">
        <h1 className="text-2xl font-bold">
          Welcome to the{" "}
          {nearestBranch.data ? (
            <select
              value={nearestBranch.data.name}
              className="text-center bg-base-100 text-green-700 border-green-700 border-2 rounded-lg p-2"
            >
              {Object.keys(Branch).map((branch) => (
                <option key={branch} value={branch}>
                  {capitalizeFirstLetter(branch)}
                </option>
              ))}
            </select>
          ) : (
            <p>Loading..</p>
          )}{" "}
          Branch.
        </h1>
        <div className="justify-center border mt-4">
          <p>Tour</p>
        </div>
        <div className="mt-4 flex gap-x-2 flex-col lg:flex-row">
          <p className="flex-auto border">Details</p>
          <p className="flex-auto border mt-4 lg:mt-0">Map</p>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const ip = req?.headers["x-real-ip"] || req?.socket.remoteAddress;
  return { ip: String(ip) };
};

export default Home;
