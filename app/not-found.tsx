import Link from "next/link"
import FacebookIcon from "./components/icons/facebookIcon"
import InstagramIcon from "./components/icons/instagramIcon"
import LinkedinIcon from "./components/icons/linkedinIcon"
import LocationOutline from "./components/icons/locationIcon"
import PhoneIcon from "./components/icons/phoneIcon"
import YoutubeIcon from "./components/icons/youtubeIcon"
import Header from "./components/layout/header"
import Image from "next/image"

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col justify-between min-h-screen">
                <div>
                    <div className="flex md:justify-center max-w-6xl mx-auto mt-[125px] gap-10 relative px-20">
                        <div className="hidden md:flex">
                            <Image
                                src={"/assets/images/Cards.png"}
                                alt="card"
                                width={290}
                                height={220}
                                className="w-2.0 h-2.0"
                            />
                        </div>
                        <div className="absolute right-10 -top-20 flex md:hidden">
                            <Image
                                src={"/assets/images/Cards.png"}
                                alt="card"
                                width={250}
                                height={200}
                                className="w-1.0 h-1.0"
                            />
                        </div>
                        <div className="mt-10">
                            <p className="text-[14px] font-[400px] noodle text-red-600">ERROR 404</p>
                            <div className="flex flex-col md:flex-row">
                                <p className="text-[50px] font-[400px] text-white noodle">THE DEALER</p>
                                <p className="text-[50px] font-[400px] text-white noodle">HAS BUSTED</p>
                            </div>
                            <p className="text-[18px] text-[#5c5c5c] noodle font-[400px]">IT LOOKS LIKE NOTHING WAS FOUND AT THIS LOCATION</p>
                            <div className="hidden md:flex mt-8">
                                <Link href={"/"}>
                                    <button className={`bg-red-600-0 flex items-center w-full md:w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white mr-2`}>
                                        <p className={`skew-x-16 text-white w-full text-[14px] font-normal text-wrap leading-none text-center`}>
                                            HOMEPAGE
                                        </p>
                                    </button>
                                </Link>
                                <Link href={"/gaming"}>
                                    <button className={`bg-red-600-0 flex items-center w-full md:w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white mr-2`}>
                                        <p className={`skew-x-16 text-white w-full text-[14px] font-normal text-wrap leading-none text-center`}>
                                            GAMING
                                        </p>
                                    </button>
                                </Link>
                                <Link href={"/dining"}>
                                    <button className={`bg-red-600-0 flex items-center w-full md:w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white mr-2`}>
                                        <p className={`skew-x-16 text-white w-full text-[14px] font-normal text-wrap leading-none text-center`}>
                                            DINING
                                        </p>
                                    </button>
                                </Link>
                                <Link href={"/contact"}>
                                    <button className={`bg-red-600 flex items-center w-full md:w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-red-600`}>
                                        <p className={`skew-x-16 text-white w-full text-[14px] font-normal text-wrap leading-none text-center`}>
                                            CONTACT US
                                        </p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 md:hidden mt-8 max-w-6xl px-20 gap-x-2 gap-y-4 mb-10">
                            <button className={`bg-red-600-0 flex items-center w-full md:w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white mr-2`}>
                                <p className={`skew-x-16 text-white w-full text-[14px] font-normal text-wrap leading-none text-center`}>
                                    HOMEPAGE
                                </p>
                            </button>
                            <button className={`bg-red-600-0 flex items-center w-full md:w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white mr-2`}>
                                <p className={`skew-x-16 text-white w-full text-[14px] font-normal text-wrap leading-none text-center`}>
                                    GAMING
                                </p>
                            </button>
                            <button className={`bg-red-600-0 flex items-center w-full md:w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white mr-2`}>
                                <p className={`skew-x-16 text-white w-full text-[14px] font-normal text-wrap leading-none text-center`}>
                                    DINING
                                </p>
                            </button>
                            <button className={`bg-red-600 flex items-center w-full md:w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-red-600`}>
                                <p className={`skew-x-16 text-white w-full text-[14px] font-normal text-wrap leading-none text-center`}>
                                    CONTACT US
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <footer className="nunito">
                    <div className="bg-[url(/assets/images/footer-bg2.png)] bg-black bg-no-repeat bg-cover bg-center flex flex-col justify-top py-15 w-full h-auto">
                        <div className="bg-[url(/assets/images/footer_bg2_gradient.png)] w-full bg-cover"></div>
                        <div className="px-8 md:px-16">
                            <div className="flex items-center">
                                <PhoneIcon />
                                <p className="text-white pl-2 text-[10px] font-bold">
                                    408 244 3333
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-start gap-7 md:items-center justify-between mt-5">
                                <div className="flex-10/12">
                                    <div className="flex">
                                        <LocationOutline />
                                        <div className="text-white pl-2 text-[12px] ">
                                            <p className="font-bold">
                                                1887 Matrix Boulevard San Jose, Ca 95110
                                            </p>
                                            <p className="font-normal">
                                                We are just off Highway 101 by the San Jose International
                                                Airport.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex-2/12 w-full md:w-full border-2 border-white -skew-x-16 text-white p-2 cursor-pointer">
                                    <p className="skew-x-16 noodle">Private Policy</p>
                                </button>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex text-white text-[9px]">
                                        <Image
                                            src={"/assets/images/footer-logo.png"}
                                            alt="location"
                                            width={120}
                                            height={32}
                                        />
                                        <div className="pl-2.5 text-[9px]">
                                            <p>© 2022 CASINO M8TRIX. All Rights Reserved</p>
                                            <p>
                                                21+ Please gamble responsibly | 1-800-GAMBLER |
                                                www.problemgambling.ca.gov
                                            </p>
                                            <p>
                                                This site is protected by reCAPTCHA and the Google Privacy
                                                Policy and Terms of Service apply.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-7">
                                        <FacebookIcon />
                                        <InstagramIcon />
                                        <YoutubeIcon />
                                        <LinkedinIcon />
                                    </div>
                                </div>
                            </div>
                            <div className="block md:hidden mb-7">
                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex text-white text-[9px]">
                                        <Image
                                            src={"/assets/images/footer-logo.png"}
                                            alt="location"
                                            width={120}
                                            height={32}
                                        />
                                    </div>
                                    <div className="flex gap-7">
                                        <FacebookIcon />
                                        <InstagramIcon />
                                        <YoutubeIcon />
                                        <LinkedinIcon />
                                    </div>
                                </div>
                                <div className="mt-5 text-white text-[9px]">
                                    <p>© 2022 CASINO M8TRIX. All Rights Reserved</p>
                                    <p>
                                        21+ Please gamble responsibly | 1-800-GAMBLER |
                                        www.problemgambling.ca.gov
                                    </p>
                                    <p>
                                        This site is protected by reCAPTCHA and the Google Privacy
                                        Policy and Terms of Service apply.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default NotFound
