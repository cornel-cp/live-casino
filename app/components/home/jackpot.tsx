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
        <div className="bg-background flex flex-col py-10 md:py-30 md:flex-row max-w-6xl">
            <div className="flex-4 text-white">
                <div className="relative ">
                    <CornerGradient />
                    <div className="ml-[30px] mt-[30px]">
                        <p className="text-white font-normal text-[36px] lg:text-[48px] mb-2.5 "> Progressive Jackpots</p>
                        <p className="text-red-600 text-[18px] lg:text-[24px] mb-2.5 ">at casino M8trix</p>
                        <p className="text-white text-[14px] mr-2.5 mb-3.5 font-thin"
                            style={{ fontFamily: 'Nunito' }}
                        >Vulputate cursus commodo rutrum massa tellus.
                            Enim orci leo egestas in eget venenatis nunc tellus.
                            Laoreet lectus quam velit morbi amet cursus nunc eget. </p>
                        <div className="hidden md:flex md:flex-col">
                            <p className="text-white text-[9px] mb-6" style={{ fontFamily: 'Nunito' }}>
                                <span className="font-bold">Last Update</span>: 07/07/2023 16:04:28
                            </p>
                            <Link href={"/gaming/jackpot"}>
                                <button className="bg-red-600 text-white -skew-x-12 px-4 py-2.5 rounded-sm"> <p className="text-[12px] skew-x-12"> Learn More</p></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-4 text-white mt-4.5 px-3">
                <InputModel text="Progressive Jackpot 10%" input={value.first} />
                <InputModel text="Progressive Jackpot 100%" input={value.second} />
                <InputModel text="Progressive Bad Beat Jackpot" input={value.third} />
            </div>
            <div className="flex flex-col mt-10 mx-5 md:hidden ">
                <p className="text-white text-[9px] mb-6 ml-3" style={{ fontFamily: 'Nunito' }}>
                    <span className="font-bold">Last Update</span>: 07/07/2023 16:04:28
                </p>
                <Link href={"/gaming/jackpot"} className="text-center">
                    <button className="bg-red-600 text-white -skew-x-12 p-2 rounded-sm w-full sm:w-[100px]"> <p className="text-[12px] skew-x-12"> Learn More</p></button>
                </Link>
            </div>
        </div>
    )
}

export default Jackpot