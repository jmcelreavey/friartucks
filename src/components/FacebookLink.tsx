import Link from "next/link";
import { GrFacebook } from "react-icons/gr";

export const FacebookLink = () => (
  <Link href="/">
      <a
        href="https://www.facebook.com/friar.tucks.7"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-600"
      >
        <GrFacebook size={40} className="text-blue-500" />
      </a>
  </Link>
);
