"use client";

import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import DropNavbar from "./dropNavbar";

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
      <div className="flex md:hidden">
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
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${isNavbarOpen ? "opacity-100 visible" : "opacity-0"
            }`}
          onClick={toggleNavbar}
        ></div>

        {/* MOBILE NAVBAR with smooth slide */}
        <div
          className={`absolute top-full left-0 w-full min-h-screen text-white z-50 backdrop-blur-sm transition-all duration-500 ease-in-out overflow-hidden ${isNavbarOpen ? "max-h-[1000px] block" : "max-h-0 hidden"
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
            className="flex flex-col md:flex-row
    items-center justify-center
    gap-8 md:gap-6
    w-full h-full md:h-auto
    py-20 md:py-4
    px-10 md:px-4
    text-left
   md:bg-white/20
    -skew-x-12 md:mr-11
    transition-all duration-500
  "
          >
            {menulist.map((menu, idx) => {
              const active =
                "/" + path.split("/")[1] === menu.path
                  ? "text-white/50"
                  : "text-white";

              return (
                <div key={idx} className="relative group skew-x-12">
                  <Link
                    href={menu.path}
                    className={`text-[32px] md:text-[14px] font-medium cursor-pointer transition-colors duration-300 ${active}`}
                  >
                    {menu.label}
                  </Link>

                  {menu.path === "/gaming" ? <DropNavbar
                    className="left-[145px]"
                    text="Experience the excitement of world-class gaming"
                    title="games at"
                    button="active games">
                    <div className="flex gap-4 pt-4">
                      <Link href={"/gaming"} className="bg-[url(/assets/images/header_gaming1.png)] bg-cover bg-center rounded-md w-[100px] h-20 bg-white/10 hover:bg-black/40 transition duration-1000 flex justify-center items-center brightness-30 hover:brightness-90 ">
                        <p className=" text-[14px]">casino m8trix games</p>
                      </Link>
                      <Link href={"/cardacadamy"} className="bg-[url(/assets/images/pure_video2.png)] bg-cover bg-center rounded-md w-[100px] h-20 bg-white/10 hover:bg-black/40 transition duration-1000 flex justify-center items-center brightness-30 hover:brightness-90">
                        <p className=" text-[14px]">card academy</p>
                      </Link>
                      <Link href={"/gaming"} className="bg-[url(/assets/images/blackJack.png)] bg-cover bg-center rounded-md w-[100px] h-20 bg-white/10 hover:bg-black/40 transition duration-1000 flex justify-center items-center brightness-30 hover:brightness-90">
                        <p className="text-[14px] z-50">blackjack bonus bets!</p>
                      </Link>
                    </div>
                  </DropNavbar> : ""}
                  {menu.path === "/dining" ? <DropNavbar
                    className="left-[90px]"
                    text=""
                    title="dining at"
                    button="great deals"
                  >
                    <div className="flex gap-4 pt-4">
                      <Link
                        href="/dining/EpicBar"
                        className="relative w-[100px] h-20 flex justify-center items-center overflow-hidden rounded-md group"
                      >
                        {/* Background image with slight blur */}
                        <div className="absolute inset-0 bg-[url('/assets/images/dining_first.jpg')] bg-cover bg-center transition duration-700 blur-[1px] group-hover:blur-[2px]" />
                        {/* Logo stays sharp */}
                        <Image
                          src="/assets/images/Restaurant_Logos.png"
                          alt="Epic Bar Logo"
                          width={80}
                          height={80}
                          className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                        />
                      </Link>
                      <Link
                        href="/dining/EpicBar"
                        className="relative w-[100px] h-20 flex justify-center items-center overflow-hidden rounded-md group"
                      >
                        {/* Background image with slight blur */}
                        <div className="absolute inset-0 bg-[url('/assets/images/dining_second.jpg')] bg-cover bg-center transition duration-700 blur-[1px] group-hover:blur-[2px]" />
                        {/* Logo stays sharp */}
                        <Image
                          src="/assets/images/Restaurant_Logos1.png"
                          alt="Epic Bar Logo"
                          width={80}
                          height={80}
                          className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                        />
                      </Link>
                      <Link
                        href="/dining/EpicBar"
                        className="relative w-[100px] h-20 flex justify-center items-center overflow-hidden rounded-md group"
                      >
                        {/* Background image with slight blur */}
                        <div className="absolute inset-0 bg-[url('/assets/images/dining_third.jpg')] bg-cover bg-center transition duration-700 blur-[1px] group-hover:blur-[2px]" />
                        {/* Logo stays sharp */}
                        <Image
                          src="/assets/images/Restaurant_Logos2.png"
                          alt="Epic Bar Logo"
                          width={80}
                          height={80}
                          className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                        />
                      </Link>
                      <Link
                        href="/dining/EpicBar"
                        className="relative w-[100px] h-20 flex justify-center items-center overflow-hidden rounded-md group"
                      >
                        {/* Background image with slight blur */}
                        <div className="absolute inset-0 bg-[url('/assets/images/dining_fourth.jpg')] bg-cover bg-center transition duration-700 blur-[1px] group-hover:blur-[2px]" />
                        {/* Logo stays sharp */}
                        <Image
                          src="/assets/images/restaurant_logos3.png"
                          alt="Epic Bar Logo"
                          width={80}
                          height={80}
                          className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                        />
                      </Link>
                    </div>
                  </DropNavbar> : ""}
                  {menu.path === "/events" ? <DropNavbar
                    className="left-10"
                    text="Experience the services on our or your own events"
                    title="events at"
                    button="event request"
                  >
                    <div className="flex gap-4 pt-4">
                      <Link href={"/gaming"} className="bg-[url('/assets/images/eventLogo1.png')] bg-cover bg-center brightness-30 hover:brightness-90 rounded-md w-[100px] group h-20 bg-white/10 hover:bg-black/40 transition duration-1000 flex flex-col justify-center items-center">
                        <p className="text-[18px]">fresh oysters</p>
                        <p className="text-[12px]">fresh oysters</p>
                      </Link>
                      <Link href={"/gaming"} className="bg-[url('/assets/images/eventLogo2.png')] bg-cover bg-center brightness-30 hover:brightness-90 rounded-md w-[100px] h-20 bg-white/10 hover:bg-black/40 transition duration-1000 flex flex-col justify-center items-center">
                        <p className="text-[14px]">drink specials</p>
                        <p className="text-[12px]">monday to wendesday</p>
                      </Link>
                      <Link href={"/gaming"} className="bg-[url('/assets/images/eventLogo3.png')] bg-cover bg-center brightness-30 hover:brightness-90 rounded-md w-[100px] h-20 bg-white/10 hover:bg-black/40 transition duration-1000 flex flex-col justify-center items-center">
                        <p className="text-[14px]">gaming floor special</p>
                        <p className="text-[12px]">monday to wendesday</p>
                      </Link>
                    </div>
                  </DropNavbar> : ""}
                  {menu.path === "/about" ? <DropNavbar
                    className="-left-2.5"
                    text="Giving back to our community"
                    title="life at "
                    button="">
                    <div className="flex gap-4 pt-4">
                      <Link href={"/about"} className="bg-[url('/assets/images/aboutLogo1.png')] bg-cover bg-center brightness-30 hover:brightness-90 rounded-md w-[100px] h-20 bg-white/10 hover:bg-black/40 transition duration-1000 flex justify-center items-center">
                        <p className="text-[14px]">about us</p>
                      </Link>
                      <Link href={"/community"} className="bg-[url('/assets/images/aboutLogo2.png')] bg-cover bg-center brightness-30 hover:brightness-90 rounded-md w-[100px] h-20 bg-white/10 hover:bg-black/40 transition duration-1000 flex justify-center items-center">
                        <p className="text-[14px]">community outreach</p>
                      </Link>
                      <Link href={"/employment"} className="bg-[url('/assets/images/aboutLogo3.png')] bg-cover bg-center brightness-30 hover:brightness-90 rounded-md w-[100px] h-20 bg-white/10 hover:bg-black/40 transition duration-1000 flex justify-center items-center">
                        <p className="text-[14px]">employment</p>
                      </Link>
                    </div>
                  </DropNavbar> : ""}
                  {/* Tooltip with outside arrow */}
                  {/* <div
                    className="absolute top-[40px] left-[100px] -translate-x-1/2
          w-[380px] bg-white/10 backdrop-blur-md border border-white/30 text-white
          rounded-lg shadow-xl invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-300 p-4 text-center z-50
          group-hover:translate-y-1 -skew-x-12">
                    <div>123</div>
                  </div> */}
                </div>
              );
            })}
          </ul>
        </div>
      </div >
    </header >
  );
};

export default Header;
