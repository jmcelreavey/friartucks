import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { trpc } from "../utils/trpc";
import { Logo } from "../components/Logo";
import { NavBar } from "../components/NavBar";
import { NavBarItem } from "../components/NavBarItem";
import { useRouter } from "next/router";
import { Footer } from "../components/Footer";
import { FacebookLink } from "../components/FacebookLink";
import BranchProvider from "../contexts/branchContext";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const Navigation = () => (
    <NavBar
      key={"navigation"}
      startContent={<Logo />}
      endContent={<FacebookLink />}
    >
      <NavBarItem
        selected={router.pathname === "/"}
        title="Branches"
        path="/"
      />
      <NavBarItem
        selected={router.pathname === "/menu"}
        title="Menu"
        path="/menu"
      />
    </NavBar>
  );

  return (
    <div
      className="mx-auto min-h-screen min-w-screen flex-col items-stretch flex text-white bg-friar-blue"
      data-theme="lemonade"
    >
      <BranchProvider>
        <Navigation />
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />
      </BranchProvider>
    </div>
  );
};

export default trpc.withTRPC(MyApp);
