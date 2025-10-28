"use client";

import Jackpot from "../components/home/jackpot";
import Games from "../components/home/games";
import HomeDining from "../components/home/homedining";
import Discover from "../components/home/discover";
import SpecialEvent from "../components/home/specialEvent";
import EventSpace from "../components/home/eventSpace";
import Layout from "../components/layout/layout";
import Carousel from "../components/home/carousel";

const HomePage = () => {

    return (
        <Layout>
            <div className="relative">
                <video controls={false} autoPlay muted>
                    <source src="/assets/video/home_video.mp4" ></source>
                </video>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent to-black/80"> </div>
            </div>
            <div className="px-7 md:px-20 flex flex-col items-center">
                <Jackpot />
                <Games />
                <HomeDining />
            </div>
            <Discover />
            <div className="px-7 md:px-20 flex flex-col items-center">
                <Carousel />
                <SpecialEvent />
                <EventSpace />
            </div>
        </Layout>

    )
};

export default HomePage;
