import { useState } from "react"
import InputModel from "./inputModel"
import CornerGradient from "./cornerGradient"
import Link from "next/link"

const Jackpot = () => {

    const [value, setValue] = useState({
        first: "$ 10,000.00",
        second: "$100,000.00",
        third: "$100,000.00"
    })

    return (
        <div className="flex p-[85px] bg-black/50">
            <div className="flex-8 text-white">
                <div className="relative">
                    <CornerGradient />
                    <div className="ml-[30px] mt-[30px]">
                        <p className="text-white font-normal text-[36px]  mb-2.5 "> Progressive Jackpots</p>
                        <p className="text-red-600 text-[18px] mb-2.5 ">at casino M8trix</p>
                        <p className="text-white/60 text-[14px] mr-2.5 mb-3.5">Vulputate cursus commodo rutrum massa tellus.
                            Enim orci leo egestas in eget venenatis nunc tellus.
                            Laoreet lectus quam velit morbi amet cursus nunc eget. </p>
                        <p className="text-white text-[9px] mb-6">
                            Last Update: 07/07/2023 16:04:28
                        </p>
                        <Link href={"/gaming/jackpot"}>
                            <button className="bg-red-600 text-white -skew-x-12 p-2 rounded-sm"> <p className="text-[12px] skew-x-12"> Learn More</p></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex-7 text-white mt-4.5">
                <InputModel text="Progressive Jackpot 10%" input={value.first} />
                <InputModel text="Progressive Jackpot 100%" input={value.second} />
                <InputModel text="Progressive Bad Beat Jackpot" input={value.third} />

            </div>

        </div>
    )
}

export default Jackpot