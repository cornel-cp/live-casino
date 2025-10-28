"use client";

import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full max-w-6xl left-1/2 -translate-x-1/2 z-50 ${className}`}
    >
      {/* Logo */}
      <Link href="/home" className="absolute left-5 top-0 sm:left-20">
        <Image
          src="/logo.svg"
          alt="Site logo"
          width={140}
          height={50}
          className="w-auto h-auto" // Ensures responsiveness of logo
        />
      </Link>

      <button
        className="md:hidden absolute top-3 right-5 text-white z-60"
        onClick={toggleNavbar}
      >
        {/* You can use an icon for a hamburger menu or something else */}
        <span className="text-3xl">☰</span> {/* Hamburger icon */}
      </button>

      {/* Navbar - Visible on md screens and above, or when toggled open on smaller screens */}
      <div
        className={`md:flex md:justify-end md:mr-8 ${
          isNavbarOpen ? "block" : "hidden"
        } md:block`}
      >
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
