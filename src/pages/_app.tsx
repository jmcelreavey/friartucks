import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { trpc } from "../utils/trpc";
import { Logo } from "../components/Logo";
import { NavBar } from "../components/NavBar";
import { NavBarItem } from "../components/NavBarItem";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const Navigation = () => (
    <NavBar key={"navigation"} startContent={<Logo />}>
      <NavBarItem
        selected={router.pathname === "/food"}
        title="Our Food"
        path="/food"
      />
      <NavBarItem
        selected={router.pathname === "/restaurants"}
        title="Our Restaurants"
        path="/restaurants"
      />
      <NavBarItem
        selected={router.pathname === "/delivery"}
        title="Delivery"
        path="/delivery"
      />
      <NavBarItem
        selected={router.pathname === "/careers"}
        title="Careers"
        path="/careers"
      />
      <NavBarItem
        selected={router.pathname === "/vouchers"}
        title="Vouchers"
        path="/vouchers"
      />
    </NavBar>
  );

  return (
    <div className="mx-auto min-h-screen flex-col" data-theme="business">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
};

export default trpc.withTRPC(MyApp);
