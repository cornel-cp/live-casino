"use client"

import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";
import { useState } from "react";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  return (
    <header className="w-full fixed top-0 z-10">
      <div className="flex justify-between items-center">
        <Link href="#">
          <Image
            src={`/logo.svg`}
            alt="logo"
            width={140}
            height={50}
            className="ml-[47px]"
          />
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden sm:flex justify-end space-x-6">
          <Navbar />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${isOpen ? 'block' : 'hidden'
          } sm:hidden bg-gray-100 text-center text-black space-y-4 py-4`}
      >
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
