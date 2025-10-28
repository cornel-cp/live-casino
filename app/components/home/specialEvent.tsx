import Image from "next/image"

const SpecialEvent = () => {

    return (
        <div className="bg-background px-12 md:px-[90px] max-w-[600px] lg:max-w-7xl md:max-w-5xl mx-auto">
            <p className="text-2xl md:text-6xl text-white text-center pt-5 md:pt-[50px]">Specials & Events</p>
            <div className="flex pt-5 flex-col md:gap-2 md:flex-row  w-2/3 sm:w-full items-center rounded-2xl mx-auto">
                <Image src={"/assets/images/specialEvent1.jpg"} alt="special event" width={265} height={110} className="w-full h-auto md:w-[200px] md:-skew-x-18 md:h-[90px] lg:h-[120px] xl:h-[150px] brightness-50 hover:brightness-100 transition-all duration-1000" />
                <div className="bg-white/20 flex items-center justify-between w-full md:mr-10 md:-skew-x-18 text-white hover:bg-white hover:text-black transition-all duration-1000" >
                    <div className=" pt-[18px] pl-14 md:skew-x-18 hidden sm:block">
                        <p className="text-[10px] lg:text-[14px]">Daily from 11am to 3pm</p>
                        <p className="text-[20px] lg:text-[28px]">Liquid</p>
                        <p className="text-[20px] lg:text-[28px] xl:pb-6">Lunch Specials</p>
                    </div>
                    <button className="sm:-skew-x-12 w-full sm:w-auto bg-red-600 sm:mr-5 px-5 py-2.5"><p className="text-white sm:skew-x-12">READ MORE</p></button>

                </div>
            </div>
            <div className="flex pt-8 pb-20 flex-col md:gap-2 md:flex-row w-2/3 sm:w-full items-center rounded-2xl mx-auto">
                <Image src={"/assets/images/specialEvent2.jpg"} alt="special event" width={265} height={110} className="w-full h-auto md:w-[200px] md:-skew-x-18 md:h-[90px] lg:h-[120px] xl:h-[150px] brightness-50 hover:brightness-100 transition-all duration-1000" />
                <div className="bg-white/20 flex items-center justify-between w-full md:mr-10 md:-skew-x-18 text-white hover:bg-white hover:text-black transition-all duration-1000" >
                    <div className=" pt-[18px] pl-14 md:skew-x-18 hidden sm:block">
                        <p className="text-[10px] lg:text-[14px]">Daily from 11am to 3pm</p>
                        <p className="text-[20px] lg:text-[28px]">Liquid</p>
                        <p className="text-[20px] lg:text-[28px] xl:pb-6">Lunch Specials</p>
                    </div>
                    <button className="sm:-skew-x-12 w-full sm:w-auto bg-red-600 sm:mr-5 px-5 py-2.5"><p className="text-white sm:skew-x-12">READ MORE</p></button>
                </div>
            </div>
        </div >
    )
}

export default SpecialEvent