import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";

const Header = (props: any) => {
  const { className = "" } = props;

<<<<<<< HEAD
  return (
    <header className="relative sm:bg-red-600">
      <Link
        href="#"
        className="absolute left-20 top-0 cursor-pointer sm:inherit"
      >
        <Image src={`/logo.svg`} alt="logo" width={140} height={50} />
      </Link>
      <div className={`flex justify-end ${className} sm:inherit `}>
        <Navbar />
      </div>
      <span className="absolute right-10 top-105 text-white rounded-[50%] px-2 pt-[3px] bg-white/20 cursor-pointer">
        ^
      </span>
    </header>
  );
};
=======
    return (
        <header className="relative ">
            <Link href="#" className="absolute left-20 top-0 cursor-pointer sm:inherit">
                <Image src={`/logo.svg`} alt="logo" width={140} height={50} />
            </Link>
            <div className={`flex justify-end ${className} sm:inherit `}>
                <Navbar />
            </div>
        </header>
    )
}
>>>>>>> 3b86ab875ca5e99867e6621c36288a1b379273f8

export default Header;
