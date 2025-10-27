import { IcoBabacat } from "../icons/icons"
import PokerIcon from "../icons/pokerIcon"
import PriIcon from "../icons/priIcon"
import EachGame from "./eachGame"

const GamesRules = () => {


    const items = [
        {
            icon: <PokerIcon />,
            title: "POKER",
            label: "Three card poker is one of the most popular",
            desc: "poker games with two of the most played bonuses in the casino. Three card bonus pays with a pair or better…"
        }
    ]
    return (
        <div className="pt-[125px]  text-white  px-8 sm:px-16 md:px-[86px] max-w-4xl mx-auto">
            <p className="text-[64px] text-center">GAMES RULES</p>
            {/* <div>
                {items.map((item, idx) => (
                    <div className="flex-4 group border-1 border-white/20 m-1 text-center py-6 hover:border-red-600 transition duration-1000">
                        <p className="text-[18px]">{item.icon}</p>
                        <p className="pt-2.5 text-[12px] text-white/40">
                        </p>
                        <button className="text-white border-white border-2 bg-black py-2.5 px-5 mt-2.5 -skew-x-12 hover:text-red-600 hover:border-red-600"><p className="skew-x-12">SEE MORE</p></button>
                    </div>
                ))}
            </div> */}
            <EachGame />
            <EachGame />
            <EachGame />
            <EachGame />
        </div>
    )
}

export default GamesRules