import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="items-center grid h-full min-w-screen w-screen align-middle justify-center text-white bg-friar-blue">
      <div className="min-w-full text-center p-4">
        <h1 className="text-2xl font-bold">
          Welcome to the{" "}
          <select className="text-center bg-base-100 text-green-700 border-green-700 border-2 rounded-lg p-2">
            <option value="newry">Newry</option>
            <option value="banbridge">Banbridge</option>
            <option value="lurgan">Lurgan</option>
          </select>{" "}
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

export default Home;
