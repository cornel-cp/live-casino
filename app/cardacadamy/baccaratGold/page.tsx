import Layout from "@/app/components/layout/layout"
import Image from "next/image"
import Link from "next/link"

const BaccaratGold = () => {

    return (
        <Layout>
            <div className="relative w-full h-[500px] flex flex-col justify-end items-center text-center overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 bg-[url(/assets/images/baccarat_gold.jpg)] bg-no-repeat bg-cover bg-center "></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-white/10 to-[#181818]"></div>

            </div>
            <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-20 z-50">
                <Link href={"/cardacadamy"} className="transition-all duration-1000 my-10">
                    <p className="text-white/40 text-[14px] group hover:text-white ml-10 md:-ml-20 pt-10">
                        <span className="text-[14px] font-bold pr-2">&lt;</span>
                        Back to <p className="inline group-hover:text-red-600">card acadamy</p>
                    </p>
                </Link>
                <div className="pb-10 text-center px-10 md:px-0">
                    <p className="text-red-600 text-[18px]">casino m8trix </p>
                    <p className="text-white text-[36px]">baccarat gold 1.0</p>
                    <p className="text-[14px] nunito">Baccarat Gold 1.0 is played around the
                        world and is one of the most popular games at Casino M8trix.
                        Known for its simplicity, the objective of Baccarat Gold 1.0
                        is to get closest to the point value of 9 by betting on
                        either the Player or Banker hand. Introducing bonus
                        options that pay up to $2,000!</p>
                </div>
                <div>
                    <div className="flex justify-between border-b-2 border-white/40 px-10 md:px-0 py-2.5">
                        <div className="flex flex-col justify-center">
                            <p className="text-[18px]">casino manager</p>
                            <p className="text-[28px]">julies videos</p>
                        </div>
                        <Image src={"/assets/images/julie.png"} alt="julie's photo" width={100} height={50} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-10 mb-25 gap-4">
                        <Link href={"/"} className="relative mx-auto my-5">
                            <p className="absolute left-[50px] bottom-10 text-[14px] md:text-[20px] nunito z-50">Lesson 1 - Basics</p>
                            <Image src={"/assets/images/julie_video1.png"} alt="julie video" width={400} height={150} className="brightness-50 hover:brightness-90 w-full md:w-auto z-0" />
                        </Link>
                        <Link href={"/"} className="relative mx-auto my-5">
                            <p className="absolute left-[50px] bottom-10 text-[14px] md:text-[20px] nunito z-50">Lesson 2 - Bonus Options</p>
                            <Image src={"/assets/images/julie_video2.png"} alt="julie video" width={400} height={150} className="brightness-50 hover:brightness-90 w-full md:w-auto z-0" />
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BaccaratGold