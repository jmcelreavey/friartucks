import type { GetServerSideProps, NextPage } from "next";
import { useContext } from "react";
import { BranchContext } from "../contexts/branchContext";
import { Branch } from "../server/trpc/data/branches";
import { trpc } from "../utils/trpc";
import { FaPhoneAlt, FaClock, FaIceCream } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { GrCircleInformation } from "react-icons/gr";
import { SiCoffeescript } from "react-icons/si";
import { MdOutlineDeliveryDining } from "react-icons/md";

type HomeProps = {
  ip: string | undefined;
};
const Home: NextPage<HomeProps> = ({ ip }: HomeProps) => {
  const { isLoading: isLoadingNearestBranch } =
    trpc.proxy.branch.nearest.useQuery(
      {
        ip: ip ?? "",
      },
      {
        onSuccess(data) {
          updateBranch(data);
        },
      }
    );
  const { branch, updateBranch } = useContext(BranchContext);
  const { mutate: getBranch } = trpc.proxy.branch.get.useMutation();

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (isLoadingNearestBranch) {
    return (
      <div className="flex animate-fade-in-delay justify-center p-8">
        ...Loading
      </div>
    );
  }

  return (
    <div className="items-center align-middle justify-center">
      <div className="text-center p-4">
        <h1 className="text-lg lg:text-2xl font-bold">
          Welcome to the{" "}
          <select
            value={branch?.name}
            onChange={async (e) => {
              getBranch(
                { branch: e.target.value as Branch },
                {
                  onSuccess(data) {
                    updateBranch(data);
                  },
                }
              );
            }}
            className="text-center bg-base-100 text-green-700 border-green-700 border-2 rounded-lg p-2"
          >
            {Object.keys(Branch.Enum).map((branch) => (
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
                  <p className="text-start flex gap-2 items-center">
                    <FaPhoneAlt /> Phone Number: {branch.phone}
                  </p>
                  <p className="text-start flex gap-2 items-center">
                    <FaClock />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: `Opening Hours: ${branch.openingHours}`,
                      }}
                    />
                  </p>
                  {branch.hasDeliveryService && (
                    <p className="text-start flex gap-2 items-center">
                      <MdOutlineDeliveryDining /> We deliver
                    </p>
                  )}
                  {branch.canSkipQueue && (
                    <p className="text-start flex gap-2 items-center">
                      <GiSmartphone /> Call your order in advance
                    </p>
                  )}
                  {branch.hasJavaRepublicCoffee && (
                    <p className="text-start flex gap-2 items-center">
                      <SiCoffeescript /> Java Republic Coffee
                    </p>
                  )}
                  {branch.hasTimoneysIceCream && (
                    <p className="text-start flex gap-2 items-center">
                      <FaIceCream />
                      Timoney&apos;s Ice Cream
                    </p>
                  )}
                  {branch.about && (
                    <p className="text-start flex gap-2 items-center">
                      <GrCircleInformation />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `About: ${branch.about}`,
                        }}
                      />
                    </p>
                  )}
                  <div className="card-actions justify-end">
                    {branch.orderOnlineUrl ? (
                      <a
                        href={branch.orderOnlineUrl}
                        className="btn btn-primary"
                      >
                        Order Online
                      </a>
                    ) : (
                      <a href={branch.phone} className="btn btn-primary">
                        Call
                      </a>
                    )}
                  </div>
                </div>
                <iframe
                  className="min-h-[50vh] min-w-[50vh]"
                  loading="lazy"
                  allow="fullscreen"
                  src={branch.googleMapsUrl}
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
    forwarded && !Array.isArray(forwarded)
      ? forwarded.split(/, /)[0]
      : context.req.socket.remoteAddress;
  return {
    props: {
      ip,
    },
  };
};

export default Home;
