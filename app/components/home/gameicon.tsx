"use client"

import AkaIcon from "../icons/akaIcon";
import { IcoBabacat } from "../icons/icons";
import PokerIcon from "../icons/pokerIcon";
import PriIcon from "../icons/priIcon";
import PureIcon from "../icons/pureIcon";

const GameIcon = (props: any) => {

    const { icon, name } = props;

    return (
        <div className="text-center group cursor-pointer">
            {/* <Image className="text-white hover:text-red-500" src={`/assets/images/${icon}.svg`} alt="jackpot corner" width={110} height={60} /> */}
            {icon === "poker" && <PokerIcon />}
            {icon === "pure" && <PureIcon />}
            {icon === "baccarat" && <IcoBabacat />}
            {icon === "aka" && <AkaIcon />}
            {icon === "pri" && <PriIcon />}
            <p className="text-white/20 text-[12px] text-center group-hover:text-white" >{name}</p>
        </div>
    )
}


export default GameIcon