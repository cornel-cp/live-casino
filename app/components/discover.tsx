import Image from "next/image";

const Discover = () => {


    return (
        <div className="bg-[url(/assets/images/bg_discover.png)] bg-cover bg-no-repeat w-full h-full ">
            <div className="relative pt-[93px] pl-[115px]">
                <Image className="absolute top-[70px] left-[70px]" src={"/assets/images/jackpot_corner.png"} alt="jackpot_corner" width={85} height={95} />
                <Image className="absolute top-[60px] left-[60px]" src={"/assets/images/jackpot_corner-gradient.png"} alt="jackpot_corner" width={85} height={95} />
                <p className="text-[50px] text-white">DISCOVER Casino M8TRIX</p>
                <p className="text-red-600 text-[28px]">TAKE A WALK AROUND AND EXPERIENCE IT YOURSELF</p>
                <p className="text-white/40 text-[14px] w-[690px] pt-5"> We have prepared a 3D tour of the whole casino.
                    You can see for yourself what an evening and Casino
                    M8trix might look like, check out our restaurants
                    and card games tables.</p>
                <div className="flex justify-end">
                    <button className="bg-red-600 -skew-x-12 mr-20 mb-11 px-5 py-2.5" ><p className="text-white skew-x-12">3D TOUR</p></button>
                </div>
            </div>
        </div>
    )
}

export default Discover;