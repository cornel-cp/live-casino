"use client"

import Image from "next/image"
import { useState } from "react"

const HomeDining = () => {

    // const [hover, setHover] = useState({
    //     first: false,
    //     second: false,
    //     third: false,
    //     fourth: false
    // });

    return (
        <div className="bg-black/50 ">
            {/* <button className="-skew-x-12 " onMouseEnter={() => { setHover({ ...hover, first: true }) }} onMouseDown={() => { setHover({ ...hover, first: false }) }}>
                <Image className={`${hover.first === true ? "bg-white" : ""}`} src={"/assets/images/dining2.png"} alt="dining2" width={hover.first === true ? 280 : 253} height={hover.first === true ? 200 : 181} />
            </button>
            <button className="-skew-x-12 " onMouseEnter={() => { setHover({ ...hover, second: true }) }} onMouseLeave={() => { setHover({ ...hover, second: false }) }}>
                <Image className={`${hover.second === true ? "bg-white" : ""}`} src={"/assets/images/dining2.png"} alt="dining2" width={hover.second === true ? 280 : 253} height={hover.second === true ? 200 : 181} />
            </button>
            <button className="-skew-x-12 " onMouseEnter={() => { setHover({ ...hover, third: true }) }} onMouseLeave={() => { setHover({ ...hover, third: false }) }}>
                <Image className={`${hover.third === true ? "bg-white" : ""}`} src={"/assets/images/dining2.png"} alt="dining2" width={hover.third === true ? 280 : 253} height={hover.third === true ? 200 : 181} />
            </button>
            <button className="-skew-x-12 " onMouseEnter={() => { setHover({ ...hover, fourth: true }) }} onMouseLeave={() => { setHover({ ...hover, fourth: false }) }}>
                <Image className={`${hover.fourth === true ? "bg-white" : ""}`} src={"/assets/images/dining2.png"} alt="dining2" width={hover.fourth === true ? 280 : 253} height={hover.fourth === true ? 200 : 181} />
            </button> */}
            <p className="text-6xl text-center text-white pt-[46px] pb-[30px]">Dining</p>
            <div className="flex justify-center pb-[120px]">
                <Image className="" src={"/assets/images/dining1.png"} alt="dining1" width={253} height={181} />
                <Image className="-ml-17" src={"/assets/images/dining2.png"} alt="dining2" width={253} height={181} />
                <Image className="-ml-17" src={"/assets/images/dining3.png"} alt="dining3" width={253} height={181} />
                <Image className="-ml-17" src={"/assets/images/dining4.png"} alt="dining4" width={253} height={181} />
            </div>
        </div>
    )
}

export default HomeDining