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
    <NavBar key={"navigation"} startContent={<Logo />} endContent={<FacebookLink />}>
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
    <div className="mx-auto min-h-screen h-screen flex-col items-stretch flex" data-theme="lemonade">
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default trpc.withTRPC(MyApp);
