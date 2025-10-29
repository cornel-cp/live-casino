// 'use client'

// import Link from "next/link";
// import Navbar from "./navbar";
// import Image from "next/image";
// import { useState } from "react";

// interface HeaderProps {
//   className?: string;
// }

// const Header = ({ className = "" }: HeaderProps) => {

//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   };

//   return (
//     <header className={`fixed top-0 w-full max-w-6xl left-1/2 -translate-x-1/2  ${className}`}>
//       {/* Logo */}
//       <div className="flex md:hidden">

//         <div className={`${isNavbarOpen === true ? "absolute" : "hidden"} w-full min-h-screen bg-black/50 z-0`}></div>

//         <Link href="/home" className="absolute left-5 top-2 sm:left-20 z-10">
//           <Image
//             src="/logo.svg"
//             alt="Site logo"
//             width={140}
//             height={50}
//             className="w-[100px] md:w-auto h-auto" // Ensures responsiveness of logo
//           />
//         </Link>

//         <button
//           className="md:hidden absolute top-4 right-5 text-white z-60"
//           onClick={toggleNavbar}
//         >
//           {/* You can use an icon for a hamburger menu or something else */}
//           {isNavbarOpen === false ? <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M1 1L21 1" stroke="white" stroke-width="2" stroke-linecap="round" />
//             <path d="M5 8L21 8" stroke="white" stroke-width="2" stroke-linecap="round" />
//             <path d="M1 15L21 15" stroke="white" stroke-width="2" stroke-linecap="round" />
//           </svg> : <svg
//             width="22"
//             height="22"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M6 6L18 18M6 18L18 6"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//             />
//           </svg>}

//         </button>

//         {/* Navbar - Visible on md screens and above, or when toggled open on smaller screens */}
//         {isNavbarOpen && (<div className={`${isNavbarOpen ? "block" : "hidden"} w-full z-100 `}>
//           <Navbar />
//         </div>)}
//       </div>
//       <div className="hidden md:flex md:justify-end">
//         <Link href="/home" className="absolute left-5 top-0 sm:left-20">
//           <Image
//             src="/logo.svg"
//             alt="Site logo"
//             width={140}
//             height={50}
//             className="w-auto h-auto" // Ensures responsiveness of logo
//           />
//         </Link>

//         {/* Navbar - Visible on md screens and above, or when toggled open on smaller screens */}
//         <div className={`md:flex md:justify-end md:mr-8`}>
//           <Navbar />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


'use client'

import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => setIsNavbarOpen((prev) => !prev);

  const path = usePathname();

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
      {/* Mobile Header */}
      <div className="flex md:hidden">


        <div className="bg-white/30 absolute w-full h-[50px]"></div>
        <div className={`${isNavbarOpen === true ? "absolute" : "hidden"} w-full min-h-screen bg-black/80 z-0`}></div>

        {/* Backdrop when navbar is open */}
        {isNavbarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleNavbar} // Click outside closes menu
          ></div>
        )}

        {/* Logo */}
        <Link href="/home" className="absolute left-5 top-2 sm:left-20 z-50">
          <Image
            src="/assets/images/md_logo.svg"
            alt="Site logo"
            width={140}
            height={50}
            className="w-[100px] md:w-auto h-auto z-100"
          />
        </Link>

        {/* Toggle Button (Hamburger / X) */}
        <button
          className="absolute top-4 right-5 text-white z-[60]" // 👈 higher z-index than backdrop
          onClick={toggleNavbar}
          aria-label="Toggle menu"
        >
          {isNavbarOpen ? (
            // Cancel (X) icon
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
            // Hamburger icon
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M5 8H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M1 15H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        {/* Mobile Navbar */}
        {isNavbarOpen && (
          <div className="absolute top-full left-0 w-full text-white z-50">
            <Navbar />
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex md:justify-end items-center ">
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
                "/" + path.split("/")[1] === menu.path ? "text-white/50" : "text-white";

              return (
                <Link
                  href={menu.path}
                  key={idx}
                  className={`
              text-[32px] md:text-[14px]
              font-medium
              md:skew-x-12
              cursor-pointer
              w-full
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
