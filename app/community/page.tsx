import Image from "next/image"
import Layout from "../components/layout/layout"
import BtnElement from "../components/BtnElement/BtnElement"

const About = () => {

    return (
        <Layout>
            <div className="relative w-full h-screen min-h-screen bg-[url(/assets/images/community.jpg)] bg-no-repeat bg-cover bg-center">
                {/* Overlay to darken background */}
                <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-b from-black/20 to-[#181818]"> </div>
                {/* Content stays bright */}
                <div className="relative flex flex-col justify-end pb-16 items-center h-full">
                    <p className="text-white font-normal text-center text-[64px] pt-[550px] md:text-[100px] md:pt-[550px]">COMMUNITY</p>
                    <p className="text-center font-normal text-[28px] text-[#e00000] mt-[-30px]">OUTREACH</p>
                </div>
            </div>

            <div className="max-w-6xl items-center flex flex-col justify-center mx-auto">
                <p className="text-center text-[36px] font-[400px] pb-[5px] pt-[42px]">Social responsibility</p>
                <p className="text-center text-[18px] font-[400px] pb-[15px]">giving back to our community</p>
                <p className="text-center nunito font-[200px] text-[14px] pb-[30px] mx-6 sm:mx-10 md:mx-20">We at M8trix firmly believe in giving back to our community. Our brand ambassadors serve the community through charitable efforts, like supporting organizations fighting cancer, helping to feed the homeless, visiting local animal rescue organizations, and working to keep our Bay Area parks clean.</p>
            </div>

            <div className="max-w-6xl items-center mx-auto mt-[70px] mb-[110px]">
                <div className="mx-6 sm:mx-10 md:mx-20 border-red-600 border-4 shadow-[0_0_15px_rgba(255,0,0,0.9)]">
                    <p className="text-center noodle text-[36px] font-[400px] pb-[5px] pt-[42px] mx-10">Supporting fight against Blood cancer</p>
                    <p className="text-center noodle text-[18px] font-[400px] mx-10">Leukemia and Lymphoma Society</p>
                    <div className="flex flex-col md:flex-row mx-10 mb-2">
                        <Image
                            src={"/assets/images/society.png"}
                            alt="society"
                            width={315}
                            height={150}
                            className="pr-2 w-full md:w-1/2 h-1/3 md:h-full mx-auto"
                        />
                        <div className="flex-6 pl-2pb-2">
                            <p className="text-[14px] nunito font-[500px] pb-2.5 pt-[42px]">The Leukemia & Lymphoma Society delivers hope in a time of despair, a community in place of loneliness and life-saving RESEARCH & SUPPORT for cancer patients and their families.</p>
                            <p className="text-[12px] nunito font-[300px] pb-[15px]">Light The Night walks are a celebration of light to drive out the darkness of cancer. The Leukemia and Lymphoma Society Light the Night event was full of so much light and love. Thank you to all who participated.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-center gap-4 noodle mb-10 mx-10">
                        <button className={`bg-red-600-0 flex items-center w-full md:w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white`}>
                            <p className={`skew-x-16 text-white w-full text-[14px] font-normal text-wrap leading-none text-center`}>
                                VIEW WEBSITE
                            </p>
                        </button>
                        <button className={`bg-red-600 flex items-center w-full md:w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-red-600`}>
                            <p className={`skew-x-16 text-white w-full text-[14px] font-normal text-wrap leading-none text-center`}>
                                DONATE
                            </p>
                        </button>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default About