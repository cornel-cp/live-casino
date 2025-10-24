import Image from "next/image"

const SpecialEvent = () => {

    return (
        <div className="bg-black/60 px-[90px]">
            <p className="text-6xl text-white text-center pt-[50px]">Specials & Events</p>
            <div className="flex pt-5">
                <Image src={"/assets/images/specialDish.png"} alt="special event" width={265} height={117} />
                <div className="bg-white/20 flex items-center justify-between w-full mr-10 -skew-x-19" >
                    <div className="text-white pt-[18px] pl-14 skew-x-18">
                        <p className="text-[14px]">Daily from 11am to 3pm</p>
                        <p className="text-[28px]">Liquid</p>
                        <p className="text-[28px]">Lunch Specials</p>
                    </div>
                    <button className="-skew-x-12 bg-red-600 w-[103px] h-[34px] mr-5"><p className="text-white skew-x-30">READ MORE</p></button>
                </div>
            </div>
            <div className="flex pt-8 pb-20">
                <Image src={"/assets/images/specialEvent2.png"} alt="special event" width={265} height={117} />
                <div className="bg-white/20 flex items-center justify-between w-full mr-10 -skew-x-19" >
                    <div className="text-white pt-[18px] pl-14 skew-x-18">
                        <p className="text-[14px]">Daily from 11am to 3pm</p>
                        <p className="text-[28px]">Liquid</p>
                        <p className="text-[28px]">Lunch Specials</p>
                    </div>
                    <button className="-skew-x-12 bg-red-600 w-[103px] h-[34px] mr-5"><p className="text-white skew-x-30">READ MORE</p></button>
                </div>
            </div>
        </div>
    )
}

export default SpecialEvent