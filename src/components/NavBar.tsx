import React, { PropsWithChildren } from "react";

type NavBarItemContainerProps = PropsWithChildren<{
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
}>;
export const NavBar = (props: NavBarItemContainerProps) => {
  const { children, endContent, startContent } = props;
  return (
    <div className="navbar bg-base-100 shadow-xl border-green-700 border-b-2">
      <div className="navbar-start">{startContent}</div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 space-x-4">{children}</ul>
      </div>
      <div className="navbar-end mr-1">
        {endContent}
        <div className="dropdown ml-1 dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {<BurgerIcon />}
          </label>
          {<BurgerContent> {children} </BurgerContent>}
        </div>
      </div>
    </div>
  );
};

const BurgerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  );
};

const BurgerContent = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <ul
      tabIndex={0}
      className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    >
      {children}
    </ul>
  );
};
