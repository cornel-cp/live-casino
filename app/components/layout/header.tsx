import Link from "next/link"
import Navbar from "./navbar"
import Image from "next/image"

const Header = (props: any) => {
    const { className = "" } = props

    return (
        <header className="relative sm:bg-red-600">
            <Link href="#" className="absolute left-20 top-0 cursor-pointer sm:inherit">
                <Image src={`/logo.svg`} alt="logo" width={140} height={50} />
            </Link>
            <div className={`flex justify-end ${className} sm:inherit `}>
                <Navbar />
            </div>
        </header>
    )
}

export default Header