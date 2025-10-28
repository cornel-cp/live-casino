import Image from "next/image"

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
        <div className="pt-[30px] max-w-[500px] xl:max-w-6xl lg:max-w-4xl md:max-w-[800px] mx-auto">
            <div className="flex px-4 md:pl-[30px] pt-[30px] relative gap-8 flex-col md:flex-row">
                <Image className="absolute " src={"/assets/images/jackpot_corner.png"} alt="jackpot_corner" width={85} height={95} />
                <Image className="absolute top-[25px] left-[25px]" src={"/assets/images/jackpot_corner-gradient.png"} alt="jackpot_corner" width={85} height={95} />
                <div className="flex-1 pl-[25px] pt-[15px] md:pt-[25px]">
                    <p className="text-[28px] md:text-[30px] lg:text-[36px] text-white">{text1}</p>
                    <p className="text-[18px] text-red-600 pt-3.5">{text2}</p>
                    <div className="hidden md:flex md:flex-col">
                        <p className="text-[14px] text-white pt-[19px]" style={{ fontFamily: "Nunito" }}>{text3}</p>
                        <div className="flex pt-3 md:pt-5 lg:pt-8">
                            <button className={`bg-white text-red-600 -skew-x-12 sm:p-1 lg:p-2.5 ${button1 === "" ? "hidden" : ""}`}><p className="skew-x-12 text-[12px] lg:text-[16px]">{button1}</p></button>
                            <button className="bg-red-600 text-white -skew-x-12 ml-4 sm:p-1 lg:p-2.5"><p className="skew-x-12 text-[12px] lg:text-[16px]">{button2}</p></button>
                        </div>
                    </div>
                </div>
                <div className="shrink-0 pt-[15px] md:pt-[25px]">
                    <Image className="sm:w-full md:w-[300px] lg:w-[360px]" src={`/assets/images/${image}.png`} alt="Event Tower" width={358} height={254} />
                </div>
                <div className="flex flex-col md:hidden">
                    <p className="text-[9px] sm:text-[14px] text-white pt-[19px]" style={{ fontFamily: "Nunito" }}>{text3}</p>
                    <div className="flex pt-3 w-full sm:w-full md:pt-5 lg:pt-8 mx-auto">
                        <button className={`bg-white text-red-600 -skew-x-12 w-full md:w-auto sm:p-1 lg:p-2.5 ${button1 === "" ? "hidden" : ""}`}><p className="skew-x-12 text-[12px] lg:text-[16px]">{button1}</p></button>
                        <button className="bg-red-600 text-white -skew-x-12 ml-4 w-full md:w-auto sm:p-1 lg:p-2.5"><p className="skew-x-12 text-[12px] lg:text-[16px]">{button2}</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSpaceCom