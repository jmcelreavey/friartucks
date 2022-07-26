import type { GetServerSideProps, NextPage } from "next";
import { useContext } from "react";
import { BranchContext } from "../contexts/branchContext";
import { Branch, Branches } from "../data/branches";
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
  const { isLoading: isLoadingBranch } = trpc.proxy.branch.nearest.useQuery(
    {
      ip: ip ?? "",
    },
    {
      onSuccess(data) {
        updateBranch(data);
      },
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );
  const { branch, updateBranch } = useContext(BranchContext);

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const blankOptionWhenLoading = isLoadingBranch && <option> </option>;
  return (
    <div className="items-center align-middle justify-center">
      <div className="text-center p-4">
        <h1 className="text-lg lg:text-2xl font-bold">
          Welcome to the{" "}
          <select
            value={branch?.name}
            onChange={async (e) => {
              updateBranch(Branches.get(e.target.value as Branch));
            }}
            className="text-center bg-base-100 text-green-700 border-green-700 border-2 rounded-lg p-2"
          >
            {blankOptionWhenLoading}
            {Object.keys(Branch.Enum).map((branch) => (
              <option key={branch} value={branch}>
                {capitalizeFirstLetter(branch)}
              </option>
            ))}
          </select>{" "}
          Branch.
        </h1>
        {/* if branch is not loaded show loading div else show phone number  */}
        <div className="mt-8 text-slate-700 grid place-items-center max-w-screen">
          {branch ? (
            <div className="card lg:card-side bg-base-100 shadow-2xl border-2 max-w-full">
              <>
                <div className="card-body">
                  <h1 className="card-title text-green-700">
                    {capitalizeFirstLetter(branch.name)} Information
                  </h1>
                  <div className="justify-start"> 
                          {branch.isHiring && (
                            <div className="alert alert-info shadow-lg">
                              <div>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span className="ml-2 font-semibold">
                                  We&apos;re Hiring - Contact us for details.
                                </span>
                              </div>
                            </div>
                          )}
                    </div>
                  <p className="text-start flex gap-2 items-center mt-4">
                    <span className="mr-4">
                      <FaPhoneAlt />
                    </span>
                    Phone Number: {branch.phone}
                  </p>
                  <div className="divider my-0" />
                  <p className="text-start flex gap-2 items-center">
                    <span className="mr-4">
                      <FaClock />
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: `Opening Hours: ${branch.openingHours}`,
                      }}
                    />
                  </p>
                  {branch.hasDeliveryService && (
                    <>
                      <div className="divider my-0" />
                      <p className="text-start flex gap-2 items-center">
                        <span className="mr-4">
                          <MdOutlineDeliveryDining />
                        </span>
                        We deliver
                      </p>
                    </>
                  )}
                  {branch.canSkipQueue && (
                    <>
                      <div className="divider my-0" />
                      <p className="text-start flex gap-2 items-center">
                        <span className="mr-4">
                          <GiSmartphone />
                        </span>
                        Call your order in advance
                      </p>
                    </>
                  )}
                  {branch.hasJavaRepublicCoffee && (
                    <>
                      <div className="divider my-0" />
                      <p className="text-start flex gap-2 items-center">
                        <span className="mr-4">
                          <SiCoffeescript />
                        </span>
                        Java Republic Coffee
                      </p>
                    </>
                  )}
                  {branch.hasTimoneysIceCream && (
                    <>
                      <div className="divider my-0" />
                      <p className="text-start flex gap-2 items-center">
                        <span className="mr-4">
                          <FaIceCream />
                        </span>
                        Timoney&apos;s Ice Cream
                      </p>
                    </>
                  )}
                  {branch.about && (
                    <>
                      <p className="text-start flex gap-2 items-center">
                        <div className="divider my-0" />
                        <span className="mr-4">
                          <GrCircleInformation />
                        </span>
                        <span
                          className="max-w-md"
                          dangerouslySetInnerHTML={{
                            __html: `${branch.about}`,
                          }}
                        />
                      </p>
                    </>
                  )}
                  <div className="card-actions">
                    <div className="grow justify-end"> 
                      {branch.orderOnlineUrl ? (
                        <a
                          href={branch.orderOnlineUrl}
                          className="btn btn-primary"
                        >
                          Order Online
                        </a>
                      ) : (
                        <a
                          href={`tel:${branch.phone}`}
                          className="btn btn-primary"
                        >
                          Call
                        </a>
                      )}
                      </div>
                  </div>
                </div>
                <iframe
                  className="min-h-[50vh] lg:w-[50vw]"
                  loading="lazy"
                  allow="fullscreen"
                  src={branch.googleMapsUrl}
                />
              </>
            </div>
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
      ip: ip ?? null,
    },
  };
};

export default Home;
