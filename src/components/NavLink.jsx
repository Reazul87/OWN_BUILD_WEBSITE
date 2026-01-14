import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, href, className }) => {
  const path = usePathname();
  const isActive = href.slice(1) === path;
  // console.log(isActive, path, href);

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-orange-500/95 font-bold border-b-2 rounded-br-lg border-b-orange-500/95"
          : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
