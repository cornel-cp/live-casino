"use client"

import { useState } from "react";
import GameIcon from "./gameicon"
import Link from "next/link";

const Games = () => {

    return (
        <div className="bg-background flex flex-col justify-center max-w-6xl w-full">
            <div className="border-2 border-red-600 text-center  px-4" style={{ boxShadow: "0 0 10px rgba(255, 0, 0, 0.8);" }}>
                <p className=" text-white text-center text-4xl text-[50px]  bg-background -mt-6 md:-mt-8 max-w-[200px] md:max-w-[390px] mx-auto">ARE YOU IN?</p>
                <p className="text-red-600 text-center lg:text-[32px] md:text-[32px] ">TABLE GAMING AT CASINO M8TRIX</p>
                <p className="text-white lg:px-7 md:text-[14px] md:px-15 text-center pt-7" style={{ fontFamily: "Nunito" }}>Casino M8trix will be offering Limit & No Limit Texas Hold’em starting Sunday, May 2nd at 8am</p>
                {/* Show the "More..." button on small screens */}
                <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-[38px] px-4 md:px-20`}>
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