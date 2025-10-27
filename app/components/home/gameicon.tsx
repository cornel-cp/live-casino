"use client"

import AkaIcon from "../icons/akaIcon";
import CasinoWar from "../icons/casinoWar";
import { IcoBabacat } from "../icons/icons";
import PokerIcon from "../icons/pokerIcon";
import PriIcon from "../icons/priIcon";
import PureIcon from "../icons/pureIcon";
import ThreeCard from "../icons/threeCard";
import UltimateTexas from "../icons/ultimateTexas";

const GameIcon = (props: any) => {

    const { icon, name } = props;

    return (
        <div className="text-center group cursor-pointer w-full">
            {icon === "poker" && <PokerIcon />}
            {icon === "pure" && <PureIcon />}
            {icon === "baccarat" && <IcoBabacat />}
            {icon === "aka" && <AkaIcon />}
            {icon === "pri" && <PriIcon />}
            {icon === "three_card" && <ThreeCard />}
            {icon === "ultimate" && <UltimateTexas />}
            {icon === "casino" && <CasinoWar />}


            <p className="text-white/20 text-[24px] text-center group-hover:text-white transition duration-500" >{name}</p>
        </div>
    )
}


export default GameIcon