import Link from "next/link"
import GameIcon from "../home/gameicon"

const ThreeCardGameStyle = () => {

    return (
        <div className="flex-4 group border-1 border-white/20 m-1 text-center py-6 hover:border-red-600 transition duration-1000">
            <GameIcon icon="three_card" name="three card poker" />
            <p className="nunito text-[16px] md:text-[14px] md:min-h-[200px] lg:min-h-[130px]">
                Three Card Poker, or TCP, is an exciting table
                game that has developed from the basics of
                Texas Hold ‘Em Poker. The objective of TCP
                is to create the best three card poker hand
                while trying to beat the dealer’s hand.
                Bonus options that pay up to 1000:1 introduced!</p>
            <Link href={"/cardacadamy/threecard"} className="">
                <button className="text-white border-white border-2 bg-black py-2.5 px-5 mt-2.5 -skew-x-12 flex mx-auto md:justify-center group-hover:text-red-600 group-hover:border-red-600"><p className="skew-x-12">TRIGGER HANDS</p></button>
            </Link>
        </div>
    )
}

export default ThreeCardGameStyle