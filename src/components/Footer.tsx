import { SiContactlesspayment } from "react-icons/si";
import { FcWiFiLogo } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => (
  <footer className="border-green-700 border-t-2 footer p-4 bg-base-100 text-green-700 gap-y-4">
    <div className="grid-flow-col divide-friar-blue place-self-center">
      <p>Copyright Friar Tucks © {new Date().getFullYear()}</p>
      <div className="divider divider-horizontal" />
      <Link href="/about" passHref>
        <a className="text-green-700 hover:text-green-800 hover:underline">About Us</a>
      </Link>
      <div className="divider divider-horizontal" />
      <Link href="/contact" passHref>
        <a className="text-green-700 hover:text-green-800 hover:underline">Contact Us</a>
      </Link>
    </div>
    <div className="grid-flow-col gap-4 place-self-center">
      <SiContactlesspayment size={40} className="text-black" />
      <FcWiFiLogo size={40} className="text-black" />
      <Image
        src="/food-hygiene.png"
        height={35}
        width={75}
        alt="5 star food rating"
      />
    </div>
  </footer>
);
