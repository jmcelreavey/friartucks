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
import Head from "next/head";

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
      className="mx-auto min-h-screen min-w-screen flex-col items-stretch flex text-white gradient-background"
      data-theme="lemonade"
    >
      <Head>
        <title>Friar Tucks Family Restaurants Northern Ireland - Kids Parties</title>
        <meta name="description" content="At Friar Tuck's Family Restaurants we are most famous for our Chicken Burger and Superchips. We bread juicy pieces of chicken in a renowned seasoning, a special formula of herbs and spices and lightly" />
        <meta name="keywords" content="Friar Tucks Newry, Friar Tucks Armagh, Friar Tucks Warrenpoint, Friar Tucks Lurgan, Friar Tucks Banbridge, Family Restaurants Northern Ireland, kids parties Newry" />
        <meta name="robots" content="ALL" />
        <meta name="revisit-after" content="30" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
