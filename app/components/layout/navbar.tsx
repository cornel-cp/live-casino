"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const path = usePathname();

  const menulist = [
    {
      label: "Home",
      path: "/home",
    },
    {
      label: "Gaming",
      path: "/gaming",
    },
    {
      label: "Dining",
      path: "/dining",
    },
    {
      label: "Employment",
      path: "/employment",
    },
  ];

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <ul className="flex gap-2 py-4 px-10 bg-white/20 -skew-x-12 mr-11">
      {menulist.map((menu, idx) => (
        <Link
          href={menu.path}
          className={`uppercase  text-[14px] skew-x-12 cursor-pointer ${"/" + path.split("/")[1] === menu.path
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
