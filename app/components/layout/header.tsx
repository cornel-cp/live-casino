"use client";

import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const path = usePathname();

  const toggleNavbar = () => setIsNavbarOpen((prev) => !prev);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isNavbarOpen ? "hidden" : "auto";
  }, [isNavbarOpen]);

  const menulist = [
    { label: "Gaming", path: "/gaming" },
    { label: "Dining", path: "/dining" },
    { label: "Events", path: "/events" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Employment", path: "/employment" },
  ];

  return (
    <header
      className={`fixed top-0 w-full max-w-6xl left-1/2 -translate-x-1/2 z-50 ${className}`}
    >
      {/* ============ MOBILE HEADER ============ */}
      <div className="flex md:hidden relative">
        {/* Background blur bar */}
        <div className="bg-white/20 absolute w-full h-[50px] backdrop-blur-md"></div>

        {/* Logo */}
        <Link href="/home" className="absolute left-5 top-2 z-100">
          <Image
            src="/assets/images/md_logo.svg"
            alt="Site logo"
            width={140}
            height={50}
            className="w-[100px] h-auto"
          />
        </Link>

        {/* Toggle Button */}
        <button
          className="absolute top-4 right-5 text-white z-100"
          onClick={toggleNavbar}
          aria-label="Toggle menu"
        >
          {isNavbarOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H21M5 8H21M1 15H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${isNavbarOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={toggleNavbar}
        ></div>

        {/* MOBILE NAVBAR with smooth slide */}
        <div
          className={`absolute top-full left-0 w-full min-h-screen text-white z-50 backdrop-blur-sm transition-all duration-500 ease-in-out overflow-hidden ${isNavbarOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <Navbar onLinkClick={() => setIsNavbarOpen(false)} />
        </div>
      </div>

      {/* ============ DESKTOP HEADER ============ */}
      <div className="hidden md:flex md:justify-end items-center relative">
        <Link href="/home" className="absolute left-5 top-0 sm:left-20">
          <Image
            src="/logo.svg"
            alt="Site logo"
            width={140}
            height={50}
            className="w-auto h-auto"
          />
        </Link>

        <div className="md:flex md:justify-end md:mr-8">
          <ul
            className="
              flex flex-col md:flex-row
              items-center justify-center
              gap-8 md:gap-6
              w-full h-full md:h-auto
              py-20 md:py-4
              px-10 md:px-4
              text-left
              bg-transparent md:bg-white/20
              md:-skew-x-12 md:mr-11
              transition-all duration-500
            "
          >
            {menulist.map((menu, idx) => {
              const active =
                "/" + path.split("/")[1] === menu.path
                  ? "text-white/50"
                  : "text-white";

              return (
                <Link
                  href={menu.path}
                  key={idx}
                  className={`
                    text-[32px] md:text-[14px]
                    font-medium
                    md:skew-x-12
                    cursor-pointer
                    hover:text-red-600
                    transition-colors duration-300
                    ${active}
                  `}
                >
                  {menu.label}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
