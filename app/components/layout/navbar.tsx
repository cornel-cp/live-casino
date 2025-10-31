
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import { FaAngleUp } from "react-icons/fa6";
// import { FaAngleDown } from "react-icons/fa6";

// interface NavbarProps {
//   onLinkClick?: () => void;
// }

// const Navbar = ({ onLinkClick }: NavbarProps) => {
//   const path = usePathname();
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   const toggleDropdown = (label: string) => {
//     setOpenDropdown(openDropdown === label ? null : label);
//   };

//   const menulist = [
//     {
//       label: "Gaming",
//       path: "/gaming",
//       subItems: [
//         { label: "THREE CARD POKER", path: "/gaming/threecard" },
//         { label: "BACCARAT", path: "/gaming/baccarat" },
//         { label: "PURE 21.5 BLACKJACK", path: "/gaming/pure" },
//         { label: "AKA PAI GOW POKER", path: "/gaming/akaPai" },
//         { label: "ULTIMATE TEXAS", path: "/gaming/ultimate" },
//         { label: "PAI GOW TILES", path: "/gaming/paigow" },
//         { label: "CASINO WAR", path: "/gaming/casinowar" },
//         { label: "CRAZY 4 POKER", path: "/gaming/crazyPoker" },
//         { label: "PURE SPANISH 21.5", path: "/gaming/pureSpanish" },
//         { label: "21st CENTURY BLACKJACK SWITCH", path: "/gaming/blackjack" },
//         { label: "LET IT RIDE", path: "/gaming/ride" }
//       ],
//     },
//     {
//       label: "Dining",
//       path: "/dining",
//       subItems: [
//         { label: "Zone 8 sports", path: "/dining/zoneSports" },
//         { label: "Epic Bar", path: "/dining/epicBar" },
//         { label: "PARALLEL LOUNGE", path: "/dining/parallel" },
//         { label: "Lotus Cafe", path: "/dining/lotusCafe" },
//       ],
//     },
//     {
//       label: "Events",
//       path: "/events",
//       subItems: [
//         { label: "BLACKJACK BONUS BETS", path: "/events/bonusbet" },
//         { label: "EVENTTOWER", path: "/events/eventtower" },
//       ],
//     },
//     {
//       label: "Card Academy",
//       path: "/card-academy",
//       subItems: [
//         { label: "Gaming tips and tricks", path: "/card-academy/gameTips" },
//         { label: "BACCARAT GOLD 1.0", path: "/card-academy/baccarat" },
//         { label: "PURE 21.5 BLACKJACK", path: "/card-academy/pureBlackjack" },
//         { label: "THREE CARD POKER", path: "/card-academy/threeCard" }
//       ],
//     },
//     { label: "About", path: "/about" },
//     { label: "Contact", path: "/contact" },
//   ];

//   console.log(openDropdown)

//   return (
//     <ul className="flex flex-col md:flex-row pt-20 px-10 gap-4 md:gap-6">
//       {menulist.map((menu, idx) => {
//         const isActive =
//           "/" + path.split("/")[1] === menu.path ? "text-white/50" : "text-white";

//         return (
//           <li key={idx} className="w-full md:w-auto border-b-2 border-white/40 ">
//             <div className="flex items-center justify-between mx-4">
//               <Link
//                 href={menu.path}
//                 onClick={onLinkClick}
//                 className={`cursor-pointer text-[36px] md:text-[14px] ${isActive} hover:text-red-600 ${openDropdown === menu.label ? "text-red-600!" : "text-blue-50"}`}
//               >
//                 {menu.label}
//               </Link>

//               {menu.subItems && menu.subItems.length > 0 && (
//                 <button
//                   onClick={() => toggleDropdown(menu.label)}
//                   className="text-sm text-gray-400 hover:text-white md:ml-2"
//                 >
//                   {openDropdown === menu.label ? <FaAngleUp /> : <FaAngleDown />}
//                 </button>
//               )}
//             </div>

//             {/* Accordion submenu */}
//             {menu.subItems && openDropdown === menu.label && (
//               <ul className="flex flex-col gap-2 mt-2 ml-4 transition-all duration-300">
//                 {menu.subItems.map((sub, subIdx) => (
//                   <li key={subIdx} className="py-2 px-4">
//                     <Link
//                       href={sub.path}
//                       onClick={() => {
//                         onLinkClick?.();
//                         setOpenDropdown(null); // close after click
//                       }}
//                       className="text-white hover:text-red-600 text-[28px]"
//                     >
//                       {sub.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

interface NavbarProps {
  onLinkClick?: () => void;
}

const Navbar = ({ onLinkClick }: NavbarProps) => {
  const path = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(prev => (prev === label ? null : label));
  };

  const menulist = [
    {
      label: "Gaming",
      path: "/gaming",
      subItems: [
        { label: "THREE CARD POKER", path: "/gaming/threecard" },
        { label: "BACCARAT", path: "/gaming/baccarat" },
        { label: "PURE 21.5 BLACKJACK", path: "/gaming/pure" },
        { label: "AKA PAI GOW POKER", path: "/gaming/akaPai" },
        { label: "ULTIMATE TEXAS", path: "/gaming/ultimate" },
        { label: "PAI GOW TILES", path: "/gaming/paigow" },
        { label: "CASINO WAR", path: "/gaming/casinowar" },
        { label: "CRAZY 4 POKER", path: "/gaming/crazyPoker" },
        { label: "PURE SPANISH 21.5", path: "/gaming/pureSpanish" },
        { label: "21st CENTURY BLACKJACK SWITCH", path: "/gaming/blackjack" },
        { label: "LET IT RIDE", path: "/gaming/ride" },
      ],
    },
    {
      label: "Dining",
      path: "/dining",
      subItems: [
        { label: "Zone 8 sports", path: "/dining/zoneSports" },
        { label: "Epic Bar", path: "/dining/epicBar" },
        { label: "PARALLEL LOUNGE", path: "/dining/parallel" },
        { label: "Lotus Cafe", path: "/dining/lotusCafe" },
      ],
    },
    {
      label: "Events",
      path: "/events",
      subItems: [
        { label: "BLACKJACK BONUS BETS", path: "/events/bonusbet" },
        { label: "EVENTTOWER", path: "/events/eventtower" },
      ],
    },
    {
      label: "Card Academy",
      path: "/cardacadamy",
      subItems: [
        { label: "Gaming tips and tricks", path: "/card-academy/gameTips" },
        { label: "BACCARAT GOLD 1.0", path: "/card-academy/baccarat" },
        { label: "PURE 21.5 BLACKJACK", path: "/card-academy/pureBlackjack" },
        { label: "THREE CARD POKER", path: "/card-academy/threeCard" },
      ],
    },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <ul className="flex flex-col md:flex-row pt-20 px-10 gap-4 md:gap-6">
      {menulist.map((menu, idx) => {
        const isActive = path.startsWith(menu.path);

        return (
          <li
            key={idx}
            className="w-full md:w-auto border-b-2 border-white/40 overflow-hidden"
          >
            <div className="flex items-center justify-between mx-4">
              <Link
                href={menu.path}
                onClick={onLinkClick}
                className={`cursor-pointer text-[36px] md:text-[14px] hover:text-red-600 transition-colors duration-200 ${isActive ? "text-white/70" : "text-white"
                  } ${openDropdown === menu.label ? "text-red-600!" : ""}`}
              >
                {menu.label}
              </Link>

              {menu.subItems && (
                <button
                  onClick={() => toggleDropdown(menu.label)}
                  className="text-sm text-gray-400 hover:text-white md:ml-2"
                >
                  {openDropdown === menu.label ? <FaAngleUp /> : <FaAngleDown />}
                </button>
              )}
            </div>

            {/* Animated Dropdown */}
            <div
              className={`transition-all duration-1000 ease-in-out overflow-hidden ${openDropdown === menu.label ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <ul className="flex flex-col gap-2 mt-2 ml-6">
                {menu.subItems?.map((sub, subIdx) => (
                  <li key={subIdx} className="py-2 px-2 ">
                    <Link
                      href={sub.path}
                      onClick={() => {
                        onLinkClick?.();
                        setOpenDropdown(null);
                      }}
                      className="text-white hover:text-red-600 text-[28px] transition-colors duration-200"
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
