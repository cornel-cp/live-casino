import Image from "next/image"
import Layout from "../components/layout/layout"

const About = () => {

    return (
        <Layout>
            <div className="relative w-full min-h-screen bg-[url(/assets/images/about.jpg)] bg-no-repeat bg-cover bg-center">
                {/* Overlay to darken background */}
                {/* <div className="absolute inset-0 bg-black/40" /> */}
                <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-b from-black/20 to-[#181818]"> </div>
                {/* Content stays bright */}
                <div className="relative flex flex-col justify-center items-center h-full">
                    <p className="text-white font-normal text-center text-[64px] pt-[550px] md:text-[100px] md:pt-[550px]">ABOUT US</p>
                    <p className="text-center font-normal text-[28px] text-[#e00000] mt-[-30px]">CASINO M8TRIX</p>
                </div>
            </div>

            <div>
                <p className="text-center nunito font-[300px] text-[16px] pt-[50px]">Casino M8trix is the premiere 24/7 entertainment destination in <span className="text-red-600">San Jose</span> and <span className="text-red-600">Silicon Valley</span>. </p>
                <p className="text-center text-[28px] font-[400px] pb-9">At Casino M8trix, you can find non-stop action at your favorite gaming tables.</p>
            </div>

            <div className="relative bg-[url(/assets/images/visit.png)] bg-no-repeat bg-cover bg-center w-full h-[50vw] min-h-110 flex justify-center align-middle items-center">
                <div className="absolute inset-0 bg-black/40" />
                <button className="w-full border-2 border-white -skew-x-16 text-white p-2 cursor-pointer sm:w-full md:w-30 lg:w-30 mx-[55px]">
                    <p className="skew-x-16 noodle">VIRTUAL VISIT</p>
                </button>
            </div>

            <div className="max-w-6xl mx-auto mt-[66px]">
                <div className="flex group -skew-x-16 mb-10 md:mb-5 mx-10">
                    <div className="bg-white/20 justify-center items-center mr-10 md:mr-2 py-5 flex-12 group-hover:bg-white/30 md:flex-4 relative rounded-xs  transition duration-1000">
                        <Image
                            src={"/assets/images/zonelogo.png"}
                            alt="8logo"
                            width={140}
                            height={100}
                            className="m-auto skew-x-16 h-30"
                        />
                    </div>
                    <div className="absolute -bottom-5 -right-4 md:hidden rounded-xs">
                        <button className="px-8 py-2.5 bg-red-800" type="submit"><p className="skew-x-16 text-white">Read More</p></button>
                    </div>
                    <div className="bg-white/20 p-10 hidden md:flex md:flex-8 rounded-xs group-hover:bg-white/50  transition duration-1000">
                        <p className="skew-x-16 text-[12px] font-[300px] nunito">Visit the <span className="text-red-600">Zone 8 Sports Bar & Grill</span> and explore a diverse menu of American and Asian fare, while enjoying your favorite draft beers, wines and spirits. Plus catch the biggest sporting events on our massive 200″ HD screens, or catch the action on one of our many HD flat screens throughout the casino floor.</p>
                    </div>
                </div>
                <div className="flex -skew-x-16 mb-10 md:mb-5 mx-10 group">
                    <div className="bg-white/20 justify-center items-center mr-10 md:mr-2 py-5 flex-12 md:flex-4 relative rounded-xs group-hover:bg-white/30  transition duration-1000">
                        <Image
                            src={"/assets/images/lotuslogo.png"}
                            alt="8logo"
                            width={140}
                            height={100}
                            className="m-auto skew-x-16 h-30"
                        />
                    </div>
                    <div className="absolute -bottom-5 -right-4 md:hidden rounded-xs">
                        <button className="px-8 py-2.5 bg-red-800" type="submit"><p className="skew-x-16 text-white">Read More</p></button>
                    </div>
                    <div className="bg-white/20 p-10 hidden md:flex md:flex-8 rounded-xs group-hover:bg-white/50  transition duration-1000">
                        <p className="skew-x-16 text-[12px] font-[300px] nunito">Open 24/7, <span className="text-red-600">Lotus Café</span> features freshly brewed fine coffees and teas along with Vietnamese-influenced sandwiches such as bánh mì, and fresh-baked pastries.</p>
                    </div>
                </div>
                <div className="flex -skew-x-16 mb-10 md:mb-5 mx-10 group">
                    <div className="bg-white/20 justify-center items-center mr-10 md:mr-2 py-5 flex-12 md:flex-4 relative rounded-xs group-hover:bg-white/30  transition duration-1000">
                        <Image
                            src={"/assets/images/elogo.png"}
                            alt="8logo"
                            width={140}
                            height={100}
                            className="m-auto skew-x-16 h-30"
                        />
                    </div>
                    <div className="absolute -bottom-5 -right-4 md:hidden rounded-xs">
                        <button className="px-8 py-2.5 bg-red-800" type="submit"><p className="skew-x-16 text-white">Read More</p></button>
                    </div>
                    <div className="bg-white/20 p-10 hidden md:flex md:flex-8 rounded-xs group-hover:bg-white/50  transition duration-1000">
                        <p className="skew-x-16 text-[12px] font-[300px] nunito">The <span className="text-red-600">Epic Bar</span> also awaits you – located in the heart of the casino – as it is the perfect setting for gathering and socializing.</p>
                    </div>
                </div>
                <div className="flex -skew-x-16 mb-20 mx-10 group">
                    <div className="bg-white/20 justify-center items-center mr-10 md:mr-2 py-5 flex-12 md:flex-4 relative rounded-xs group-hover:bg-white/30  transition duration-1000">
                        <Image
                            src={"/assets/images/parallellogo.png"}
                            alt="8logo"
                            width={140}
                            height={100}
                            className="m-auto skew-x-16 h-30"
                        />
                    </div>
                    <div className="absolute -bottom-5 -right-4 md:hidden rounded-xs">
                        <button className="px-8 py-2.5 bg-red-800" type="submit"><p className="skew-x-16 text-white">Read More</p></button>
                    </div>
                    <div className="bg-white/20 p-10 hidden md:flex md:flex-8 rounded-xs group-hover:bg-white/50  transition duration-1000">
                        <p className="skew-x-16 text-[12px] font-[300px] nunito">Plus, high atop the <span className="text-red-600">Casino M8trix Event tower</span> are our luxurious meeting and event spaces that provide picturesque views of Silicon Valley and are ideal for corporate events, meetings and team-building.</p>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default About