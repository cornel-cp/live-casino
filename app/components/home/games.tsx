"use client"

import { useRouter } from "next/router";
import GameIcon from "./gameicon"
import Link from "next/link";

const Games = () => {

    // const router = useRouter();

    // const goToGamingPage = () => {
    //     router.push('/gaming'); // Navigate to the gaming page
    // };

    return (
        <div className="bg-background flex flex-col justify-center xl:px-50 lg:px-30 md:pt-10 px-8">
            <div className="border-2 border-red-600">
                <p className=" text-white text-center text-4xl md:text-5xl lg:text-[100px] md:text-[50px]">ARE YOU IN?</p>
                <p className="text-red-600 text-center lg:text-[32px] md:text-[32px]">TABLE GAMING AT CASINO M8TRIX</p>
                <p className="text-white lg:text-[28px] lg:px-7 md:text-[14px] md:px-15 text-center pt-7" style={{ fontFamily: "Nunito" }}>Casino M8trix will be offering Limit & No Limit Texas Hold’em starting Sunday, May 2nd at 8am</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-[38px] px-20">
                    <GameIcon icon="poker" name="poker" />
                    <GameIcon icon="pure" name="Pure 21.5 Blackjack" />
                    <GameIcon icon="baccarat" name="Baccarat" />
                    <GameIcon icon="aka" name="AKA PAI GOW POKER" />
                    <GameIcon icon="pri" name="PAI GOW TILES" />
                </div>
                <Link href={"/gaming"}>
                    <button className="bg-red-600 -skew-x-12 p-2 flex justify-center mt-7 w-[200px] mx-auto mb-11"><p className="text-white text-2xl skew-x-12">All Games</p></button>
                </Link>
            </div>
        </div>

    )

}

export default Games