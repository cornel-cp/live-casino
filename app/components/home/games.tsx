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
        <div className="bg-black/50 relative flex flex-col justify-center">
            {/* <img className="absolute top-[50px]" src={"/assets/images/games_border.png"} alt="jackpot_corner" width={"719px"} height={"346px"} /> */}
            <div className="bg-[url(/assets/images/games_border.png)] bg-no-repeat w-[722px] m-auto">
                <p className="text-white text-center text-[50px] -mt-8">ARE YOU IN?</p>
                <p className="text-red-600 text-center text-[16px]">TABLE GAMING AT CASINO M8TRIX</p>
                <p className="text-white/40 text-[14px] text-center pt-7">Casino M8trix will be offering Limit & No Limit Texas Hold’em starting Sunday, May 2nd at 8am</p>
                <div className="flex justify-center pt-[38px]">
                    <GameIcon icon="poker" name="poker" />
                    <GameIcon icon="pure" name="Pure 21.5 Blackjack" />
                    <GameIcon icon="baccarat" name="Baccarat" />
                    <GameIcon icon="aka" name="AKA PAI GOW POKER" />
                    <GameIcon icon="pri" name="PAI GOW TILES" />
                </div>
                <Link href={"/gaming"}>
                    <button className="bg-red-600 -skew-x-12 p-2 flex justify-center mt-7 w-[102px] mx-auto mb-11"><p className="text-white skew-x-12">All Games</p></button>
                </Link>
            </div>

        </div>
    )

}

export default Games