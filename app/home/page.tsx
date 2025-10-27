'use client'

import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import Jackpot from "../components/home/jackpot";
import Games from "../components/home/games";
import HomeDining from "../components/home/homedining";
import Discover from "../components/home/discover";
import Image from "next/image";
import SpecialEvent from "../components/home/specialEvent";
import EventSpace from "../components/home/eventSpace";
import Layout from "../components/layout/layout";
import Link from "next/link";
import Navbar from "../components/layout/navbar";

const HomePage = () => {

    return (
        <Layout>
            {/* Hero Section */}
            {/* <div className="bg-[url(/assets/images/bg_home_hero.png)] bg-no-repeat bg-cover min-h-screen flex flex-col justify-end w-full" >
            </div> */}
            <div className="relative">
                <video controls={false} autoPlay muted>
                    <source src="/assets/video/home_video.mp4" ></source>
                </video>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent to-black/80"> </div>
            </div>
            <Jackpot />
            <Games />
            <HomeDining />
            <Discover />
            <div className="py-20 bg-black/60 flex items-center justify-center" >
                <Image src="/assets/images/Fake_Carousel.png" alt="carousel" width={895} height={347} />
            </div>
            <SpecialEvent />
            <EventSpace />
        </Layout>

    )
};

export default HomePage

