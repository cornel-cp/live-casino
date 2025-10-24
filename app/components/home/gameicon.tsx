"use client"

import Image from "next/image";
import { useState } from "react";

const GameIcon = (props: any) => {

    const { icon, name } = props;
    const [hover, setHover] = useState(false);

    return (
        <div className="text-center group">
            <Image className="fill-red-600" src={`/assets/images/${icon}.svg`} alt="jackpot corner" width={110} height={60} />
            <p className="text-white/20 text-[12px] text-center group-hover:text-white" >{name}</p>
        </div>
    )
}


export default GameIcon