import Link from "next/link";

type NavBarItemProps = {
  title: string;
  path: string;
  selected?: boolean;
};
export const NavBarItem = (props: NavBarItemProps) => {
  const { title, path, selected } = props;
  const className = selected ? "bg-green-700" : "";
  return (
    <li>
      <Link href={path} passHref>
        <a
          className={`${className} uppercase font-semibold btn-link hover:bg-green-700 duration-500 motion-safe:hover:scale-105`}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};
