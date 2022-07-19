import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
    <div className="hero fixed h-full align-middle justify-center bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">This section may be coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
