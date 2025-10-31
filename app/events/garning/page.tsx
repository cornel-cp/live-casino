"user client";

import Layout from "../../components/layout/layout";
import Link from "next/link";
import Hamburger from "@/app/components/icons/hamburger";
import CutleryClassic from "@/app/components/icons/cutleryClassic";
import Image from "next/image";
import EventComponent from "@/app/components/events/eventComponent";
import PartSmComponent from "@/app/components/events/partSmComponent";

const Garning = () => {
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
            <div className="flex justify-between">
              <div>
                <p className="text-4xl pb-0.5">
                  Monday to Wednesday Gaming Floor Special
                </p>
                <p className="text-white/60 text-xl font-extralight nunito pt-0.5">
                  Join us for our Liquid Prime Time Special.
                </p>
              </div>
              <div className="group">
                <div className="inline group-hover:hidden">
                  <CutleryClassic />
                </div>
                <div className="hidden group-hover:inline">
                  <Hamburger />
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
              Mondays to Wednesdays, 5pm to 11pm.
            </p>
          </div>
          <Image
            className="mt-4 md:mt-12 w-full"
            src={"/assets/images/image_dish (3).png"}
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
              imageUrl="/assets/images/image_dish (4).png"
              imageUrlHover="/assets/images/image_dish (5).png"
              time="Mondays & Tuesdays from 7pm - 10pm"
              entertainment="Raise the stakes on Pure 21.5 Blackjack"
            />
            <EventComponent
              imageUrl="/assets/images/image_dish (5).png"
              imageUrlHover="/assets/images/image_dish (5).png"
              time="Daily from 11am to 3pm"
              entertainment="Liquid Lunch Specials"
            />
            <EventComponent
              imageUrl="/assets/images/image_dish (1).png"
              imageUrlHover="/assets/images/image_dish (5).png"
              time="Every Friday and Saturday Night From 5pm - 11pm"
              entertainment="Freshly shucked oysters"
            />
          </div>
          <div className="flex flex-col gap-7 items-center pr-12 md:hidden mb-14">
            <PartSmComponent
              imageUrl="/assets/images/image_dish (4).png"
              time="Mondays & Tuesdays from 7pm - 10pm"
              entertainment="Raise the stakes on Pure 21.5 Blackjack"
            />
            <PartSmComponent
              imageUrl="/assets/images/image_dish (5).png"
              time="Daily from 11am to 3pm"
              entertainment="Liquid Lunch Specials"
            />
            <PartSmComponent
              imageUrl="/assets/images/image_dish (1).png"
              time="Every Friday and Saturday Night From 5pm - 11pm"
              entertainment="Freshly shucked oysters"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Garning;
