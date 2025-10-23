import Link from "next/link"
import Navbar from "./navbar"
import Image from "next/image"

const Header = (props: any) => {
    const { className = "" } = props
    return (
        <header>
            <Link href="/" className="absolute left-20 top-0 cursor-pointer">
                <Image src={`/logo.svg`} alt="logo" width={140} height={50} />
            </Link>
            <div className={`flex justify-end ${className}`}>
                <Navbar />
            </div>
        </header>
    )
}

export default Header