import EachGame from "@/app/components/gaming/eachGame"
import JackpotGame from "@/app/components/gaming/jackpotGame"
import JackpotGameGroup from "@/app/components/gaming/jackpotGameGroup"
import Footer from "@/app/components/layout/footer"
import Header from "@/app/components/layout/header"
import Image from "next/image"

const Jackpot = () => {


    return (
        <div>
            <main className="">
                <Header className="absolute right-0" />
                <div className="bg-[url(/assets/images/bg_jackpot.png)] bg-no-repeat bg-cover h-[469px] flex flex-col justify-end w-full" ></div>

                <div className="bg-background px-16 text-white pb-20">
                    <div className="flex pt-12 pb-8">
                        <div className="flex-6">
                            <p className="text-white text-4xl">Progressive Jackpot</p>
                            <p className="text-white/80 text-[12px] pt-5">Amet enim nibh morbi morbi. At sed nibh vestibulum cursus at nibh congue eget. </p>
                            <p className="text-white/80 text-[12px] pt-5">Urna sodales commodo sit feugiat Enim ipsum nunc adipiscing ut sed viverra. Interdum at amet lacus lorem</p>
                            <p className="text-white text-[12px] pt-5">Check out the <span className="text-red-600">Game Rules!</span></p>
                        </div>
                        <div className="flex-6">
                            <div className="flex items-end border-b-2 border-b-red-600">
                                <p className="min-w-30 pl-2.5">10%</p>
                                <p className="text-white text-6xl">$ 10,000.00</p>
                            </div>
                            <div className="flex items-end border-b-2 border-b-red-600 mt-8">
                                <p className="min-w-30 pl-2.5">100%</p>
                                <p className="text-white text-6xl">$ 100,000.00</p>
                            </div>
                        </div>
                    </div>
                    <JackpotGameGroup />
                    <div className="flex pt-24">
                        <div className="flex-6">
                            <p className="text-white text-[18px]">Texas hold’em</p>
                            <p className="text-white text-4xl">progressive bad beat jackpot</p>
                            <p className="text-white text-[12px]">Jackpot increases daily. Check out the <span className="text-red-600">Game Rules!</span></p>
                        </div>
                        <div className="flex-6">
                            <div className="flex items-end border-b-2 border-b-red-600 mt-5">
                                <p className="min-w-30 pl-2.5">100%</p>
                                <p className="text-white text-6xl">$ 100,000.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[50px]">
                        <div className="relative flex flex-col justify-center pt-20">
                            <div className="bg-[url(/assets/images/triggerHandBorder.png)] bg-no-repeat w-[742px] h-full  mx-auto ">
                                <p className="text-white text-center text-[50px] -mt-6">TRIGGER HAND</p>
                                <p className="text-white/60 text-center text-[20px] pb-10">QUAD 4’s OR BETTER BEAT</p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-10 text-center text-white/50">Disclaimer - Porta quisque consequat mi id tincidunt
                        non tincidunt mi. Et eu sagittis commodo nisi sed vivamus ullamcorper.</p>

                    <div className="mt-10 flex flex-col justify-center pt-20">
                        <div className="bg-[url(/assets/images/promoBorder.png)] bg-no-repeat w-[742px] h-full  mx-auto ">
                            <p className="text-white text-center text-[50px] -mt-10">OTHER PROMOS</p>
                            <div className="pt-5 px-5 text-[14px] flex border-b-1 border-white/30 mr-[23px]">
                                <p className="text-white/40 min-w-72">High Hand</p>
                                <p className="text-white text-center min-w-20">$100</p>
                                <p className="text-white/40">MONS & TUES 12a - 5a & 10a - 1p / HOURLY</p>
                            </div>
                            <div className="pt-3 px-5 text-[14px] flex border-b-1 border-white/30 mr-[23px]">
                                <p className="text-white/40 min-w-72">Rack Attack</p>
                                <p className="text-white text-center min-w-20">$100/$300</p>
                                <p className="text-white/40">SUN - THUR 2a - 5a & SUN - THUR 4p - 7p / HOURLY</p>
                            </div>
                            <div className="pt-3 px-5 text-[14px] flex border-b-1 border-white/30 mr-[23px]">
                                <p className="text-white/40 min-w-72">Rack Attack</p>
                                <p className="text-white text-center min-w-20">$100/$300</p>
                                <p className="text-white/40">SUN - THUR 2a - 5a & SUN - THUR 4p - 7p / HOURLY</p>
                            </div>
                            <div className="pt-3 px-5 text-[14px] flex">
                                <p className="text-white/40 min-w-72">Progressive Royal Flush</p>
                                <p className="text-white text-center min-w-20">24 * 7</p>
                                <p className="text-white/40">$ 500 SEED + $ 50 ADDED EACH MONTH</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-20 border-white/40 border-1 justify-between py-5 -skew-x-16 ">
                        <div className="flex pl-10 items-center">
                            <Image src={"/assets/images/Live.png"} alt="" width={20} height={20} />
                            <p className="text-white/60 pl-2">Time Last Updated</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-[14px] text-white/40 pr-10">July 19, 2023</p>
                            <p className="text-[28px] text-white pr-10">04 : 59</p>
                            <p className="text-[14px] text-white/40 pr-10">AM</p>
                        </div>
                    </div>

                </div>
                <Footer />
            </main>
        </div>
    )
}

export default Jackpot