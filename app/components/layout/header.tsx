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
      <Link href="#" className="absolute left-5 top-0 sm:left-20">
        <Image
          src="/logo.svg"
          alt="Site logo"
          width={140}
          height={50}
          className="w-auto h-auto" // Ensures responsiveness of logo
        />
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
