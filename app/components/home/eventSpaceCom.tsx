import Image from "next/image"
import Link from "next/link";

interface eventSpaceComProps {
    text1: string,
    text2: string,
    text3: string,
    image: string,
    button1: string,
    button2: string
}

const EventSpaceCom = (props: eventSpaceComProps) => {

    const { text1, text2, text3, image, button1, button2 } = props;

    return (
        <div className="pt-[30px] w-full">
            <div className="flex pt-[30px] relative max-w-6xl gap-8 flex-col md:flex-row pb-12 ">
                <Image className="absolute " src={"/assets/images/jackpot_corner.png"} alt="jackpot_corner" width={85} height={95} />
                <Image className="absolute top-[25px] left-[25px]" src={"/assets/images/jackpot_corner-gradient.png"} alt="jackpot_corner" width={85} height={95} />
                <div className="flex-1 pl-[25px] pt-[15px] md:pt-[25px]">
                    <p className="text-4xl text-white">{text1}</p>
                    <p className="text-[18px] text-red-600 pt-3.5">{text2}</p>
                    <div className="hidden md:flex md:flex-col">
                        <p className="text-[14px] text-white pt-[19px]" style={{ fontFamily: "Nunito" }}>{text3}</p>
                        <div className="flex pt-3 md:pt-5 lg:pt-8">
                            <button className={`bg-white text-red-600 -skew-x-12 px-8 py-2.5 ${button1 === "" ? "hidden" : ""}`}><p className="skew-x-12 text-[12px] lg:text-[16px]">{button1}</p></button>
                            <Link href={"/cardacadamy"}>
                                <button className="bg-red-600 text-white -skew-x-12 px-8 py-2.5 ml-4"><p className="skew-x-12 text-[12px] lg:text-[16px]">{button2}</p></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 pt-[15px] md:pt-[25px] px-3">
                    <Image className="w-full md:w-[300px] lg:w-[360px]" src={`/assets/images/${image}.png`} alt="Event Tower" width={358} height={254} />
                </div>
                <div className="flex flex-col md:hidden px-3">
                    <p className="text-[9px] sm:text-[14px] text-white pt-[19px]" style={{ fontFamily: "Nunito" }}>{text3}</p>
                    <div className="flex pt-3 w-full sm:w-full md:pt-5 lg:pt-8 mx-auto gap-4">
                        <button className={`bg-white text-red-600 -skew-x-12 w-full px-8 py-2.5 md:w-auto  ${button1 === "" ? "hidden" : ""}`}><p className="skew-x-12 text-[12px] lg:text-[16px]">{button1}</p></button>
                        <button className="bg-red-600 text-white -skew-x-12 w-full px-8 py-2.5 md:w-auto "><p className="skew-x-12 text-[12px] lg:text-[16px]">{button2}</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSpaceCom