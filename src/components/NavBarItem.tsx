import Link from "next/link";

type NavBarItemProps = {
  title: string;
  path: string;
  selected?: boolean;
};
export const NavBarItem = (props: NavBarItemProps) => {
  const { title, path, selected } = props;
  const className = selected ? "bg-green-700 text-white" : "text-green-700";
  return (
    <li>
      <Link href={path} passHref>
        <a
          className={`${className} uppercase font-semibold hover:text-white hover:bg-green-600 duration-600 motion-safe:hover:scale-110`}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};
