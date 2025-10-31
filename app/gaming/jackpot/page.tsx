import Layout from "../../components/layout/layout";
import JackpotGameGroup from "@/app/components/gaming/jackpotGameGroup"
import Image from "next/image"

const Jackpot = () => {



    return (
        <Layout>

            <div className="relative w-full min-h-screen flex flex-col justify-end items-center text-center overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 bg-[url(/assets/images/bg_jackpot.png)] bg-no-repeat bg-cover bg-center brightness-50"></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-[#181818]"></div>

                {/* Foreground content */}
                <div className="relative z-10 flex flex-col justify-end items-center pb-16 sm:pb-20 px-4">
                    <p className="text-[60px]  lg:text-[100px] font-bold text-white leading-tight drop-shadow-lg">
                        JACKPOTS
                    </p>
                    <p className="text-[20px]  lg:text-[24px] text-red-600 mt-3 drop-shadow-md">
                        casino m8trix
                    </p>
                </div>
            </div>

            <div className="bg-background text-white max-w-6xl px-10 md:px-16 mx-auto">
                <div className="flex flex-col justify-center items-center md:flex-row py-20 ">
                    <div className="flex-4 text-center md:text-left">
                        <p className=" text-white text-4xl">Progressive Jackpot</p>
                        <p className="text-white/80 text-[12px] nunito pt-5">Amet enim nibh morbi morbi. At sed nibh vestibulum cursus at nibh congue eget. </p>
                        <p className="text-white/80 text-[12px] nunito pt-5">Urna sodales commodo sit feugiat Enim ipsum nunc adipiscing ut sed viverra. Interdum at amet lacus lorem</p>
                        <p className="text-white text-[12px] nunito pt-5">Check out the <span className="text-red-600">Game Rules!</span></p>
                    </div>

                    <div className="w-full mx-8 lg:mx-16 items-center md:flex-4 px-4 lg:px-8 pt-12">
                        <div className="flex items-center justify-center border-b-2 border-b-red-600">
                            <p className="min-w-25 nunito text-[12px] pl-2.5">Jackpot 10%</p>
                            <p className="text-white text-[36px] md:text-[48px] lg:text-[64px]">$ 10,000.00</p>
                        </div>
                        <div className="flex items-center justify-center border-b-2 border-b-red-600 mt-8">
                            <p className="min-w-25 nunito text-[12px] pl-2.5">Jackpot 100%</p>
                            <p className="text-white text-[36px] md:text-[48px] lg:text-[64px]">$ 100,000.00</p>
                        </div>
                    </div>
                </div>
                <JackpotGameGroup />
                <div className="flex flex-col md:flex-row pt-12 md:pt-24">
                    <div className="flex-6 text-center md:text-left">
                        <p className="text-white text-[18px]">Texas hold’em</p>
                        <p className="text-white text-4xl">progressive bad beat jackpot</p>
                        <div className="md:flex-row flex-col">
                            <p className="text-white text-[12px] nunito">Jackpot increases daily.</p>
                            <p className="text-white text-[12px] nunito">Check out the <span className="text-red-600">Game Rules!</span></p>
                        </div>
                    </div>
                    <div className="flex-6">
                        <div className="flex justify-center border-b-2 border-b-red-600 mt-5">
                            <p className="min-w-30 pl-2.5 flex items-end">100%</p>
                            <p className="text-white text-4xl lg:text-6xl">$ 100,000.00</p>
                        </div>
                    </div>
                </div>

                <div className="mt-[50px]">
                    <div className="flex flex-col justify-center border-2 border-red-600">
                        <p className="bg-background text-white text-center text-[28px] -mt-5 max-w-[200px] mx-auto">TRIGGER HAND</p>
                        <p className="text-white/60 text-center text-[20px] py-[15px] nunito">QUAD 4’s OR BETTER BEAT</p>
                    </div>
                </div>

                <p className="nunito mt-10 text-center text-white/50">Disclaimer - Porta quisque consequat mi id tincidunt
                    non tincidunt mi. Et eu sagittis commodo nisi sed vivamus ullamcorper.</p>

                <div className="mt-16 flex flex-col justify-center border-2 border-white/30">
                    <p className="bg-background text-white text-center text-[50px] -mt-10 max-w-[400px] mx-auto">OTHER PROMOS</p>
                    <div className="px-2 pt-5 md:px-5 text-[14px] flex border-b-1 border-white/30 ">
                        <p className="text-white/40 min-w-28 sm:min-w-36 md:min-w-72">High Hand</p>
                        <p className="text-white text-center min-w-20">$100</p>
                        <p className="text-white/40">MONS & TUES 12a - 5a & 10a - 1p / HOURLY</p>
                    </div>
                    <div className="pt-3 px-2 md:px-5 text-[14px] flex border-b-1 border-white/30 ">
                        <p className="text-white/40 min-w-28 sm:min-w-36 md:min-w-72">Rack Attack</p>
                        <p className="text-white text-center min-w-20">$100/$300</p>
                        <p className="text-white/40">SUN - THUR 2a - 5a & SUN - THUR 4p - 7p / HOURLY</p>
                    </div>
                    <div className="pt-3 px-2 md:px-5 text-[14px] flex border-b-1 border-white/30 ">
                        <p className="text-white/40 min-w-28 sm:min-w-36 md:min-w-72">Rack Attack</p>
                        <p className="text-white text-center min-w-20">$100/$300</p>
                        <p className="text-white/40">SUN - THUR 2a - 5a & SUN - THUR 4p - 7p / HOURLY</p>
                    </div>
                    <div className="pt-3 px-2 md:px-5 text-[14px] flex">
                        <p className="text-white/40 min-w-28 sm:min-w-36 md:min-w-72">Progressive Royal Flush</p>
                        <p className="text-white text-center min-w-20">24 * 7</p>
                        <p className="text-white/40">$ 500 SEED + $ 50 ADDED EACH MONTH</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-20 border-white/40 border-1 py-5 -skew-x-16 ">
                    <div className="flex pl-0 md:pl-10 items-center">
                        <Image src={"/assets/images/Live.png"} alt="" width={20} height={20} />
                        <p className="text-white/60 pl-2">Time Last Updated</p>
                    </div>
                    <div className="flex items-center skew-x-16">
                        <p className="text-[14px] text-white/40 pr-10">July 19, 2023</p>
                        <p className="text-[28px] text-white pr-10"><span className="pr-2.5">04</span> : <span className="pl-2.5">59</span></p>
                        <p className="text-[14px] text-white/40 pr-0 md:pr-10">AM</p>
                    </div>
                </div>

            </div>
        </Layout>

    )
}

export default Jackpot