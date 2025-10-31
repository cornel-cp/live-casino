import Image from "next/image"
import PokerIcon from "../components/icons/pokerIcon"
import Layout from "../components/layout/layout"
import Acadamy from "../components/acadamy/acadamy"
import Pure from "../components/acadamy/pure"
import ThreeCardGameStyle from "../components/acadamy/threecard"
import Link from "next/link"

const CardAcadamy = () => {


    return (
        <Layout>
            <div className="relative w-full min-h-screen flex flex-col justify-end items-center text-center overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 bg-[url(/assets/images/card_acadamy.jpg)] bg-no-repeat bg-cover bg-center brightness-50"></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-white/10 to-black/90"></div>

                {/* Foreground content */}
                <div className="relative z-10 flex flex-col justify-end items-center pb-16 sm:pb-20 px-4">
                    <p className="text-[60px] lg:text-[100px] font-bold text-white leading-tight drop-shadow-lg">
                        CARD ACADAMY
                    </p>
                    <p className="text-[20px] lg:text-[24px] text-red-600 mt-3 drop-shadow-md">
                        CASINO M8MTIX
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-20">
                <div className="relative w-full flex justify-center items-center py-20 mt-10">
                    <div
                        className="absolute opacity-0 flex justify-center items-center transform -translate-x-1/2 left-1/2 animate-cardFade -ml-[60px] mt-4"
                        style={{
                            animationDelay: `0.4s`,  // Delay for animation to start in sequence
                        }}
                    >
                        <Image
                            src={"/assets/images/first.png"}
                            alt={`card first image`}
                            width={250}
                            height={350}
                            className="rounded-lg shadow-lg transition-all duration-500 w-[200px] md:w-auto "
                        />
                    </div>
                    <div
                        className="absolute opacity-0 flex justify-center items-center animate-cardFade transform -translate-x-1/2 left-1/2 -ml-[30px] mt-2"
                        style={{
                            animationDelay: `0.8s`,  // Delay for animation to start in sequence
                        }}
                    >
                        <Image
                            src={"/assets/images/second.png"}
                            alt={`card second image`}
                            width={250}
                            height={350}
                            className="rounded-lg shadow-lg transition-all duration-500 w-[200px] md:w-auto "
                        />
                    </div>
                    <div
                        className="absolute opacity-0 flex justify-center items-center animate-cardFade transform -translate-x-1/2 left-1/2"
                        style={{
                            animationDelay: `1.2s`,  // Delay for animation to start in sequence
                        }}
                    >
                        <Image
                            src={"/assets/images/third.png"}
                            alt={`card third image`}
                            width={250}
                            height={350}
                            className="rounded-lg shadow-lg transition-all duration-500 w-[200px] md:w-auto "
                        />
                    </div>
                    <div
                        className="absolute opacity-0 flex justify-center items-center animate-cardFade transform -translate-x-1/2 left-1/2 ml-[30px] mt-2"
                        style={{
                            animationDelay: `1.6s`,  // Delay for animation to start in sequence
                        }}
                    >
                        <Image
                            src={"/assets/images/fourth.png"}
                            alt={`card fourth image`}
                            width={250}
                            height={350}
                            className="rounded-lg shadow-lg transition-all duration-500 min-w-[200px] md:w-auto "
                        />
                    </div>
                    <div
                        className="absolute opacity-0 flex justify-center items-center animate-cardFade transform -translate-x-1/2 left-1/2 ml-[60px] mt-6"
                        style={{
                            animationDelay: `2.0s`,  // Delay for animation to start in sequence
                        }}
                    >
                        <Image
                            src={"/assets/images/fifth.png"}
                            alt={`card fifth image`}
                            width={250}
                            height={350}
                            className="rounded-lg shadow-lg transition-all duration-500 min-w-[200px] md:w-auto"
                        />
                    </div>
                </div>
                <div className="text-white max-w-6xl mx-auto  text-center pt-5">
                    <p className="noodle text-[36px]">welcome to casino m8trix card academy</p>
                    <p className="nunito text-white/80 py-2.5">This tutorial series was designed by top professionals in the
                        gaming industry with the goal of introducing table gaming
                        to players of all levels. You will navigate the
                        <span className="font-bold text-white">fundamentals and best strategies</span>
                        for playing a variety of different games offered at Casino M8trix. Our instructor will leave you ready
                        to take your newly developed skills to live action games and
                        experience the excitement Casino M8trix offers. Good luck
                        and may the cards fall in your favor!</p>
                    <p className="nunito text-white/80 pb-14">Casino M8trix Card Academy tutorials are available online and in person.</p>
                </div>
                <div className="flex flex-col md:flex-row group border-2 border-white/30 py-7 px-2 md:px-10 mx-0 hover:border-red-600">
                    <div className="flex">
                        <div className="min-w-[100px]"><PokerIcon /></div>
                        <div className="flex-col md:flex-row">
                            <p className="text-white noodel w-full text-center text-[28px]">gaming tips and tricks</p>
                            <p className="text-white/80 nunito text-[14px] w-full text-center">Whether you are a beginner or consider yourself advanced, our crew
                                shares their essential tips to help you win big at the tables.
                            </p>
                        </div>
                    </div>
                    <Link href={"/cardacadamy/gamigTip"} className="w-3/4 md:w-auto mx-auto pl-10 mt-10 md:mt-0">
                        <button className="border-2 border-white py-2 px-4 -skew-x-16 w-full group-hover:bg-red-600 hover:border-red-600"><p className="skew-x-16">Watch videos</p></button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-4 mb-10">
                    <Acadamy />
                    <Pure />
                    <ThreeCardGameStyle />
                </div>
            </div>
        </Layout>
    )
}

export default CardAcadamy