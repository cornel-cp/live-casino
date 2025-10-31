import Link from "next/link"
import GameIcon from "../home/gameicon"

const Pure = () => {

    return (
        <div className="flex-4 group border-1 border-white/20 m-1 text-center py-6 hover:border-red-600 transition duration-1000">
            <GameIcon icon="pure" name="Pure 21.5 Blackjack" />
            <p className="nunito text-[16px] md:text-[14px] md:min-h-[200px] lg:min-h-[130px]">
                Pure 21.5 Blackjack is the game we all know and love.
                The objective of this game is to get closest to 21
                without going over, and to beat the dealer’s hand.
                Double Down and Split options introduced!</p>
            <Link href={"/cardacadamy/pure"} className="">
                <button className="text-white border-white border-2 bg-black py-2.5 px-5 mt-2.5 -skew-x-12 flex mx-auto md:justify-center group-hover:text-red-600 group-hover:border-red-600"><p className="skew-x-12">TRIGGER HANDS</p></button>
            </Link>
        </div>
    )
}

export default Pure