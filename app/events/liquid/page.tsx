"user client";

import Layout from "../../components/layout/layout";
import Link from "next/link";
import Hamburger from "@/app/components/icons/hamburger";
import CutleryClassic from "@/app/components/icons/cutleryClassic";
import Image from "next/image";
import EventComponent from "@/app/components/events/eventComponent";
import PartSmComponent from "@/app/components/events/partSmComponent";

const Liquid = () => {
  return (
    <div className="bg-background">
      <Layout>
        <div className="max-w-4xl mx-auto mt-24 md:pb-24">
          <Link
            href="/events"
            className="group text-white text-[14px] inline-flex items-center gap-1 transition"
          >
            <span className="text-[14px] font-bold text-white pr-2">&lt;</span>
            <span>
              Back to <span className="group-hover:text-red-600">events</span>
            </span>
          </Link>
          <div className="hidden md:block mt-12 pb-7 border-b-2 border-white/40">
            <div className="flex justify-between gap-1">
              <div className="flex-10">
                <div className="flex flex-col justify-between gap-2.5 nunito">
                  <p className="text-4xl noodle">Liquid Lunch Specials</p>
                  <p className="text-white/40 font-extralight text-[14px]">
                    Craving a more exciting lunch menu? Swing by Casino M8trix
                    for our delicious dining and amazing promos—like the daily
                    Liquid Lunch Specials.
                  </p>
                  <p className="text-[20px] font-bold">
                    Everything is better with a beer, including our house-faves
                    New York Steak, Cheeseburger and 2-Topping Pizza.
                  </p>
                  <p className="text-[14px] text-white/40 font-extralight">
                    Score big on Liquid Lunch Specials, daily from 11 am to 3
                    pm.
                  </p>
                  <p className="text-[12px] text-white/40 font-light">
                    Dine-in only. Offer good for a limited time. <br />
                    Each special includes a choice of one draft beer, glass of
                    house wine, fountain soft drink, or iced tea.
                  </p>
                </div>
              </div>
              <div className="flex-2">
                <div className="group flex justify-center">
                  <div className="inline group-hover:hidden">
                    <CutleryClassic />
                  </div>
                  <div className="hidden group-hover:inline">
                    <Hamburger />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-start items-center gap-1.5 border-b-2 border-white/40 pl-5">
            <Image
              src={"/assets/images/clock.svg"}
              alt="Clock"
              width={9}
              height={9}
            />
            <p className="inline nunito text-white/40 text-[12px]">When</p>
            <p className="inline text-[18px] pl-1.5 py-5">
              Daily from 11 am to 3 pm.
            </p>
          </div>
          <Image
            className="mt-4 md:mt-12 w-full"
            src={"/assets/images/image_dish (5).png"}
            alt="oysters"
            width={725}
            height={454.5}
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-4xl mt-14 md:mt-12 text-center mb-8">
            more events
          </p>
          <div className="hidden md:flex flex-col gap-7 mx-7 mb-20">
            <EventComponent
              imageUrl="/assets/images/image_dish (1).png"
              imageUrlHover="/assets/images/image_dish (5).png"
              time="Every Friday and Saturday Night From 5pm - 11pm"
              entertainment="Freshly shucked oysters"
            />
            <EventComponent
              imageUrl="/assets/images/image_dish (2).png"
              imageUrlHover="/assets/images/image_dish (5).png"
              time="Monday to Wednesday"
              entertainment="Drink Specials on the Gaming Floor and at Epic Bar"
            />
            <EventComponent
              imageUrl="/assets/images/image_dish (3).png"
              imageUrlHover="/assets/images/image_dish (5).png"
              time="Monday to Wednesday from 5pm - 11pm"
              entertainment="Gaming Floor Special"
            />
          </div>
          <div className="flex flex-col gap-7 items-center pr-12 md:hidden mb-14">
            <PartSmComponent
              imageUrl="/assets/images/image_dish (1).png"
              time="Every Friday and Saturday Night From 5pm - 11pm"
              entertainment="Freshly shucked oysters"
            />
            <PartSmComponent
              imageUrl="/assets/images/image_dish (2).png"
              time="Monday to Wednesday"
              entertainment="Drink Specials on the Gaming Floor and at Epic Bar"
            />
            <PartSmComponent
              imageUrl="/assets/images/image_dish (3).png"
              time="Monday to Wednesday from 5pm - 11pm"
              entertainment="Gaming Floor Special"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Liquid;
