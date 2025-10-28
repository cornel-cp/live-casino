"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const path = usePathname();

  const menulist = [
    {
      label: "Gaming",
      path: "/gaming",
    },
    {
      label: "Dining",
      path: "/dining",
    },
    {
      label: "Events",
      path: "/events",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },
    {
      label: "Employment",
      path: "/employment",
    },
  ];

  return (
    <ul className="flex flex-col gap-6 py-4 px-10 mt-13 md:mt-0 bg-white/20 md:-skew-x-12 md:mr-11 md:flex-row transition-all duration-500">
      {menulist.map((menu, idx) => (
        <Link
          href={menu.path}
          className={`uppercase  text-[14px] md:skew-x-12 cursor-pointer hover:text-red-600 ${"/" + path.split("/")[1] === menu.path
            ? "text-white/50"
            : "text-white"
            }`}
          key={idx}
        >
          {menu.label}
        </Link>
      ))}
    </ul>
  );
};

export default Navbar;
