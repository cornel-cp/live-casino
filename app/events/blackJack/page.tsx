"user client";

import Layout from "../../components/layout/layout";
import Link from "next/link";
import Hamburger from "@/app/components/icons/hamburger";
import CutleryClassic from "@/app/components/icons/cutleryClassic";
import Image from "next/image";
import EventComponent from "@/app/components/events/eventComponent";
import PartSmComponent from "@/app/components/events/partSmComponent";

const BlackJack = () => {
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
                  <p className="text-4xl noodle">
                    Raise the stakes on Pure 21.5 Blackjack
                  </p>
                  <p className="text-red-600 text-[18px] noodle">
                    Enjoy “Free” Bonus Bets
                  </p>
                  <p className="text-white/40 font-extralight text-[14px]">
                    We’re taking the action up a notch at our Pure 21.5
                    Blackjack tables. For the first time ever at Casino M8trix,
                    enjoy collection-free bonus bets on Pure 21.5 Blackjack.
                    Whether you’re throwing down on Lucky Lucky, Buster Bet or
                    Match the Dealer side bets, you’ll be able to do it without
                    paying the $1 collection.
                  </p>
                  <p className="text-[20px] font-bold">
                    Take advantage of the new plays on all $5 - $100 limit
                    tables
                  </p>
                  <p className="text-[14px] text-white/40 font-extralight">
                    In addition, side bets on high-roller tables are now
                    collection-free any time, any day. Players who request a
                    $5,000 buy-in table with $100 minimum bets are now able to
                    place side bets without collections.
                  </p>
                  <p className="text-[12px] text-white/40 font-light">
                    21+ to drink or gamble. Please Gamble Responsibly.
                    1.800.Gambler. GEGA-000435, GEGA-001907, GEGA-002681
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
              Mondays and Tuesdays, 7PM to 10PM.
            </p>
          </div>
          <Image
            className="mt-4 md:mt-12 w-full"
            src={"/assets/images/image_dish (4).png"}
            alt="oysters"
            width={725}
            height={454.5}
          />
          <div className="block md:hidden px-10 mt-8 pb-9">
            <div className="pb-5">
              <p className="text-[28px] text-red-600">
                Raise the stakes on Pure 21.5 Blackjack
              </p>
              <p className="text-[18px] ">Enjoy “Free” Bonus Bets</p>
            </div>
            <p className="text-[14px] text-white/40 font-extralight pb-5 border-b-2 border-white/40 nunito">
              We’re taking the action up a notch at our Pure 21.5 Blackjack
              tables. For the first time ever at Casino M8trix, enjoy
              collection-free bonus bets on Pure 21.5 Blackjack. Whether you’re
              throwing down on Lucky Lucky, Buster Bet or Match the Dealer side
              bets, you’ll be able to do it without paying the $1 collection.
            </p>
            <div className="flex flex-col justify-between  pb-5 border-b-2 border-white/40">
              <div className="flex justify-between pt-5 ">
                <Image
                  className="-mt-2"
                  src={"/assets/images/Games.svg"}
                  alt="game"
                  width={80}
                  height={58}
                />
                <div className="flex flex-col justify-between">
                  <p className="text-[14px] font-bold">
                    Take advantage of the new plays
                  </p>
                  <div className="flex justify-between text-[10px] ">
                    <div>
                      <p className="font-bold">On all $5 - $100 </p>
                      <p className="font-bold">limit tables</p>
                    </div>
                    <div className="text-white/40 text-right pb-2.5">
                      <p className="font-light">Mondays & Tuesdays</p>
                      <p className="font-light">7:00PM-10:00PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[14px] font-extralight pt-5">
              In addition, side bets on high-roller tables are now
              collection-free any time, any day. Players who request a $5,000
              buy-in table with $100 minimum bets are now able to place side
              bets without collections.
            </p>
            <p className="text-[14px] font-extralight pt-5">
              21+ to drink or gamble. Please Gamble Responsibly. 1.800.Gambler.
              GEGA-000435, GEGA-001907, GEGA-002681
            </p>
          </div>
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

export default BlackJack;
