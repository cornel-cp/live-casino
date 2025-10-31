import Image from "next/image"
import Layout from "../components/layout/layout"
import Link from "next/link"

const Contact = () => {

    return (
        <Layout>
            <div className="relative w-full h-screen min-h-screen bg-[url(/assets/images/contact.png)] bg-no-repeat bg-cover bg-bottom-left">
                {/* Overlay to darken background */}
                <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-b from-black/20 to-[#181818]"> </div>
                {/* Content stays bright */}
                <div className="relative flex flex-col justify-end pb-16 items-center h-full">
                    <p className="text-white font-normal text-center text-[64px] md:text-[100px]">CONTACT US</p>
                    <p className="text-center font-normal text-[28px] text-[#e00000] mt-[-30px]">CASINO M8TRIX</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-10">
                <div className="flex justify-between mx-20 mb-0 md:mb-[74px] mt-[70px] md:mt-0">
                    <div className="pt-[74px] w-3/5 relative hidden md:block">
                        <Image
                            src={"/assets/images/location.png"}
                            alt="map"
                            width={400}
                            height={320}
                            className="[clip-path:polygon(0_0,100%_0,100%_calc(0),calc(100%-126px)_100%,0_100%)] h-full"
                        />
                        <Link href={"/not-found.tsx"}>
                            <button className="border-2 border-white -skew-x-20 text-white p-2 cursor-pointer w-25 mx-[55px] absolute top-1/2 left-1/10">
                                <p className="skew-x-20 noodle text-[14px] font-[400px]">GET DIRECTIONS</p>
                            </button>
                        </Link>
                    </div>
                    <div className="w-full md:w-2/5">
                        <div className="mt-[99px] hidden md:block">
                            <div className="flex ml-5">
                                <img
                                    src={"/assets/images/footer_location.png"}
                                    alt="location"
                                    style={{ height: '18px', width: '18px', margin: '2px' }}
                                />
                                <p className="pl-[9px] text-[14px] nunito font-[700px]">1887 Matrix Boulevard <br></br> San Jose, CA 95110</p>
                            </div>
                            <p className="pt-2.5 text-[12px] nunito font-[300px] ml-5">We are just off Highway 101 by the San Jose International Airport.</p>
                        </div>
                        <div className="border-[3px] shadow-[0_0_15px_rgba(255,0,0,0.9)] rounded-xs border-red-700 py-7  mt-[19px] -skew-x-20 md:-ml-10 w-full">
                            <p className="text-[28px] font-[400px] text-[#5c5c5c] skew-x-20 -mt-13 float-right pl-2 mr-10 bg-[#181818] w-20"> CALL US</p>
                            <p className="font-[200px] nunito text-[14px] pb-[15px] skew-x-20 text-center">Casino M8trix <span className="font-bold pl-[5]">408 244 3333</span></p>
                            <p className="font-[200px] nunito text-[14px] pb-[15px] skew-x-20 text-center">Poker Desk <span className="font-bold pl-[5]">408 244 3333 160</span></p>
                            <p className="font-[200px] nunito text-[14px] pb-[15px] skew-x-20 text-center">Zone 8 Sports <span className="font-bold pl-[5]">408 453 4030</span></p>
                            <p className="font-[200px] nunito text-[14px] skew-x-20 text-center">Events Department <span className="font-bold pl-[5]">408 416 4482</span></p>
                        </div>
                    </div>
                </div>
                <div className="block md:hidden mx-10">
                    <div className="mt-[50px]">
                        <div className="flex ml-5">
                            <img
                                src={"/assets/images/footer_location.png"}
                                alt="location"
                                style={{ height: '18px', width: '18px', margin: '2px' }}
                            />
                            <p className="pl-[9px] text-[14px] nunito font-[700px]">1887 Matrix Boulevard <br></br> San Jose, CA 95110</p>
                        </div>
                        <p className="pt-2.5 text-[12px] nunito font-[300px] ml-5">We are just off Highway 101 by the San Jose International Airport.</p>
                    </div>
                </div>
            </div>

            <div className="relative bg-[url(/assets/images/location.png)] bg-no-repeat bg-cover bg-center w-full h-[50vw] min-h-110 flex justify-center align-middle items-center md:hidden mt-20">
                <div className="absolute inset-0 bg-black/40" />
                <Link href={"/not-found.tsx"}>
                    <button className="border-2 border-white -skew-x-16 text-white p-2 cursor-pointer sm:w-full md:w-30 lg:w-30 mx-auto">
                        <p className="skew-x-16 noodle">GET DIRECTIONS</p>
                    </button>
                </Link>
            </div>

            <div className="mx-auto max-w-6xl px-20">
                <div className="relative flex flex-col justify-center items-center h-full">
                    <p className="text-center noodle text-[18px] text-[#e00000] mt-[50px] font-[400px]">Questions, suggestions, tips?</p>
                    <p className="text-white noodle text-center text-[36px] font-[400px]">Leave us a message</p>
                </div>
                <div className="flex-row md:flex md:justify-between nunito text-white text-[14px] font-[200px] mt-[50px] mb-[150px]">
                    <div className="w-full md:w-1/3 flex flex-col mr-3 gap-6">
                        <input placeholder=" Your Name" className="nunito text-[14px] font-[200px] outline-none border-b-2 border-white placeholder-white"></input>
                        <input placeholder=" Email Address" className="nunito text-[14px] font-[200px] outline-none border-b-2 border-white placeholder-white"></input>
                        <input placeholder=" Phone Number" className="nunito text-[14px] font-[200px] outline-none border-b-2 border-white placeholder-white"></input>
                    </div>
                    <div className="w-full md:w-2/3">
                        <textarea className="hidden md:block outline-none border-b-2 border-white w-full min-h-[70px] placeholder-white" placeholder="Your Message"></textarea>
                        {/* <input type="textarea" className=" bg-background outline-none border-b-2 border-white w-full" placeholder="Your Message"></input> */}
                        <div className="md:flex justify-between mt-2">
                            <select className="w-full md:w-1/2 pt-4  border-b-2 border-white text-[14px] font-[200px] outline-none">
                                <option>Select Department</option>
                            </select>
                            <textarea className="block md:hidden outline-none border-b-2 border-white w-full min-h-[70px] placeholder-white mt-5 h-[236px]" placeholder=" Your Message"></textarea>
                            <div className="mx-2">
                                <Link href={"/not-found.tsx"}>
                                    <button className="w-full border-2 bg-red-600 border-red-600 -skew-x-16 text-white p-1 cursor-pointer md:w-30 mt-9 md:mt-0">
                                        <p className="skew-x-16 noodle text-[14px] font-[400px]">SEND</p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact