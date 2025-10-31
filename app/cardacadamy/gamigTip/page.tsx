import Layout from "@/app/components/layout/layout"
import Image from "next/image"
import Link from "next/link"

const GamingTip = () => {

    return (
        <Layout>
            <div className="relative w-full h-[500px] flex flex-col justify-end items-center text-center overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 bg-[url(/assets/images/gamingTip.jpg)] bg-no-repeat bg-cover bg-center "></div>

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
                    <p className="text-white text-[36px]">Gaming Tips and Tricks</p>
                    <p className="text-[14px] nunito">
                        Whether you’re a beginner or consider yourself
                        advanced, our crew shares their essential
                        tips to help you win big at the tables.</p>
                </div>
                <div>
                    <div className="flex justify-between border-b-2 border-white/40 px-10 md:px-0 py-2.5">
                        <div className="flex flex-col justify-center">
                            <p className="text-[18px]">casino manager</p>
                            <p className="text-[28px]">Vals videos</p>
                        </div>
                        <Image className="rounded-[64px]" src={"/assets/images/man_Val.png"} alt="julie's photo" width={100} height={50} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-10 mb-25 gap-4">
                        <Link href={"/"} className="relative mx-auto my-5">
                            <p className="absolute left-[50px] bottom-10 text-[14px] md:text-[20px] nunito z-50">Top 3 Tips for Winning Big</p>
                            <Image src={"/assets/images/man_tip3.jpg"} alt="julie video" width={400} height={150} className="brightness-50 hover:brightness-90 w-full md:w-auto z-0" />
                        </Link>
                        <Link href={"/"} className="relative mx-auto my-5">
                            <p className="absolute left-[50px] bottom-10 text-[14px] md:text-[20px] nunito z-50">Top 5 Tips for Beginners</p>
                            <Image src={"/assets/images/man_tip5.png"} alt="julie video" width={400} height={150} className="brightness-50 hover:brightness-90 w-full md:w-auto z-0" />
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between border-b-2 border-white/40 px-10 md:px-0 py-2.5">
                        <div className="flex flex-col justify-center">
                            <p className="text-[18px]">casino manager</p>
                            <p className="text-[28px]">Julie videos</p>
                        </div>
                        <Image className="rounded-[64px]" src={"/assets/images/julie.png"} alt="julie's photo" width={100} height={50} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-10 mb-25 gap-4">
                        <Link href={"/"} className="relative mx-auto my-5">
                            <p className="absolute left-[50px] bottom-10 text-[14px] md:text-[20px] nunito z-50">Top 3 Tips for Winning Big</p>
                            <Image src={"/assets/images/julievideothreecard.png"} alt="julie video" width={400} height={200} className="brightness-50 hover:brightness-90 w-full md:w-auto z-0" />
                        </Link>
                        <Link href={"/"} className="relative mx-auto my-5">
                            <p className="absolute left-[50px] bottom-10 text-[14px] md:text-[20px] nunito z-50">Top 5 Tips for Beginners</p>
                            <Image src={"/assets/images/julievideotip2.png"} alt="julie video" width={400} height={200} className="brightness-50 hover:brightness-90 w-full md:w-auto z-0" />
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default GamingTip