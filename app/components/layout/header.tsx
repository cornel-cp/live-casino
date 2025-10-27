// import Link from "next/link";
// import Navbar from "./navbar";
// import Image from "next/image";

// const Header = (props: any) => {
//   const { className = "" } = props;

//   return (
//     <header className="relative sm:bg-red-600">
//       <Link
//         href="#"
//         className="absolute left-20 top-0 cursor-pointer sm:inherit"
//       >
//         <Image src={`/logo.svg`} alt="logo" width={140} height={50} />
//       </Link>
//       <div className={`flex justify-end ${className} sm:inherit `}>
//         <Navbar />
//       </div>
//       <span className="absolute right-10 top-105 text-white rounded-[50%] px-2 pt-[3px] bg-white/20 cursor-pointer hover:bg-white hover:text-gray-600 transition-all duration-500">
//         ^
//       </span>
//     </header>
//   );
// };

// export default Header;


import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  return (
    <header className={`relative sm:bg-red-600 ${className}`}>
      {/* Logo */}
      <Link href="#" className="absolute left-5 top-0 sm:left-20 sm:top-2">
        <a
          aria-label="Go to homepage" // Accessibility improvement
          className="flex items-center"
        >
          <Image
            src="/logo.svg"
            alt="Site logo"
            width={140}
            height={50}
            className="w-auto h-auto" // Ensures responsiveness of logo
          />
        </a>
      </Link>

      {/* Navbar */}
      <div className="flex justify-end sm:mr-8">
        <Navbar />
      </div>
      {/* <span className="absolute right-10 top-105 text-white rounded-[50%] px-2 pt-[3px] bg-white/20 cursor-pointer hover:bg-white hover:text-gray-600 transition-all duration-500">
        ^
      </span> */}
    </header>
  );
};

export default Header;
