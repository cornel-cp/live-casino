"use client";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Jackpot from "../components/home/jackpot";
import Games from "../components/home/games";
import HomeDining from "../components/home/homedining";
import Discover from "../components/home/discover";
import Image from "next/image";
import SpecialEvent from "../components/home/specialEvent";
import EventSpace from "../components/home/eventSpace";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="">
        <Header className="absolute right-0" />
        {/* Hero Section */}

        <div className="bg-[url(/assets/images/bg_home_hero.png)] bg-no-repeat bg-cover h-[469px] flex flex-col justify-end w-full">
          <div className="bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[267px]"></div>
        </div>

        <Jackpot />
        <Games />
        <HomeDining />
        <Discover />
        <div className="py-20 bg-black/60">
          <Image
            src="/assets/images/Fake_Carousel.png"
            alt="carousel"
            width={895}
            height={347}
          />
        </div>
        <SpecialEvent />
        <EventSpace />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
