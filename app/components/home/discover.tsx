import Image from "next/image";

const Discover = () => {


    return (
        <div className="bg-[url(/assets/images/bg_discover.png)] bg-cover bg-center bg-no-repeat w-full h-full mt-5 px-8 md:px-16 hover:brightness-150 transition-all duration-1000">
            <div className="relative pt-[93px] pl-[50px] md:pl-[115px] max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-8xl mx-auto">
                <Image className="absolute top-[70px] left-[15px] md:left-[70px] " src={"/assets/images/jackpot_corner.png"} alt="jackpot_corner" width={85} height={95} />
                <Image className="absolute top-[60px] left-[5px] md:left-[60px]" src={"/assets/images/jackpot_corner-gradient.png"} alt="jackpot_corner" width={85} height={95} />
                <div className="group hover:ml-3 md:hover:ml-6 transition-all duration-1000">
                    <p className="text-[50px] text-white">DISCOVER Casino M8TRIX</p>
                    <p className="text-red-600 text-[28px]">TAKE A WALK AROUND AND EXPERIENCE IT YOURSELF</p>
                    <p className="text-white/40 text-[14px] pt-5" style={{ fontFamily: "Nunito" }}> We have prepared a 3D tour of the whole casino.
                        You can see for yourself what an evening and Casino
                        M8trix might look like, check out our restaurants
                        and card games tables.</p>
                    <div className="flex justify-center md:justify-end pt-10">
                        <button className="bg-red-600 -skew-x-12 mr-20 mb-11 px-5 py-2.5 w-3/4 md:w-[100px]" ><p className="text-white skew-x-12">3D TOUR</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discover;