import type { GetServerSideProps, NextPage } from "next";
import { useContext, useEffect } from "react";
import { BranchContext } from "../contexts/branchContext";
import { Branch } from "../server/trpc/data/branches";
import { trpc } from "../utils/trpc";
import { FaPhoneAlt } from "react-icons/fa";

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
    <div className="items-center align-middle justify-center">
      <div className="text-center p-4">
        <h1 className="text-lg lg:text-2xl font-bold">
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
        {/* if branch is not loaded show loading div else show phone number  */}
        <div className="mt-4 text-green-700 grid place-items-center">
          <div className="card lg:card-side bg-base-100 shadow-xl border-green-700 border-2">
            {branch ? (
              <>
                <div className="card-body min-h-[50vh] min-w-[50vh]">
                  <h1 className="card-title mb-4">
                    {capitalizeFirstLetter(branch.name)} Information
                  </h1>
                  <p className="text-start">Phone Number: {branch.phone}</p>
                  <p
                    className="text-start"
                    dangerouslySetInnerHTML={{
                      __html: `Opening Hours: ${branch.openingHours}`,
                    }}
                  />
                  <p className="text-start">About: {branch.about}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Order</button>
                  </div>
                </div>
                <iframe
                  className="min-h-[50vh] min-w-[50vh]"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJt16j-GaTYEgRqnUTNOoBR_o&key=AIzaSyBN6PrFQIW38viBGwecW9OGXQbL0luCsG0"
                />
              </>
            ) : (
              <div className="text-center">
                <div className="spinner-border text-green-700" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
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
