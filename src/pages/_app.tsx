import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { trpc } from "../utils/trpc";
import { Logo } from "../components/Logo";
import { NavBar } from "../components/NavBar";
import { NavBarItem } from "../components/NavBarItem";
import { useRouter } from "next/router";
import { Footer } from "../components/Footer";
import { FacebookLink } from "../components/FacebookLink";

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
      className="mx-auto min-h-screen h-screen min-w-screen w-screen flex-col items-stretch flex"
      data-theme="lemonade"
    >
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default trpc.withTRPC(MyApp);
