import Image from "next/image"

const EventSpaceCom = (props: any) => {

    const { text1, text2, text3, image, button1, button2 } = props;

    return (
        <div className="pt-[30px] max-w-4xl">
            <div className="flex px-4 md:pl-[30px] pt-[30px] relative gap-8 flex-col md:flex-row">
                <Image className="absolute " src={"/assets/images/jackpot_corner.png"} alt="jackpot_corner" width={85} height={95} />
                <Image className="absolute top-[25px] left-[25px]" src={"/assets/images/jackpot_corner-gradient.png"} alt="jackpot_corner" width={85} height={95} />
                <div className="flex-1 pl-[25px] pt-[25px]">
                    <p className="text-4xl text-white">{text1}</p>
                    <p className="text-[18px] text-red-600 pt-3.5">{text2}</p>
                    <p className="text-[14px] text-white/30 pt-[19px]">{text3}</p>
                    <div className="flex pt-2.5">
                        <button className={`bg-white text-red-600 -skew-x-12 p-[10px] ${button1 === "" ? "hidden" : ""}`}><p className="skew-x-12">{button1}</p></button>
                        <button className="bg-red-600 text-white -skew-x-12 ml-4 p-[10px]"><p className="skew-x-12">{button2}</p></button>
                    </div>
                </div>
                <div className="shrink-0 pt-[25px]">
                    <Image src={`/assets/images/${image}.png`} alt="Event Tower" width={358} height={254} />
                </div>
            </div>
        </div>
    )
}

export default EventSpaceCom