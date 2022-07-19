import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <a>
      <Image src="/logo.png" width={250} height={80} alt="Friar Tucks" />
    </a>
  </Link>
);
