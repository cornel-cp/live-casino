"use client";

import Layout from "../components/layout/layout";
import BorderBox from "../components/restaurant/BorderBox";
import BtnElement from "../components/BtnElement/BtnElement";
import Image from "next/image";
import RoomPart from "../components/restaurant/RoomPart";
import Link from "next/link";
import Cocktail from "../components/icons/cocktail";
import Cutlery from "../components/icons/cutlery";
import Hamburger from "../components/icons/hamburger";
import FacebookIcon from "../components/icons/facebookIcon";
import InstagramIcon from "../components/icons/instagramIcon";
import Modal from "../components/Modal/modal";
import { useState } from "react";

const Dining = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      {/* room Section */}
      <div className="bg-[url(/assets/images/bg_dining_room.jpg)] bg-center bg-no-repeat bg-cover h-[469px] flex flex-col justify-end w-full min-h-screen">
        <div className="flex items-end justify-center bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[469px]">
          <div className="">
            <p className="text-[100px] font-normal text-white leading-25">
              DINING
            </p>
            <p className="text-[28px] font-normal pt-0 text-red-600 text-center pb-[69px]">
              AT CASINO M8TRIX
            </p>
          </div>
        </div>
      </div>

      {/* restaurant Section */}
      <div className="flex flex-col justify-around gap-20 my-10 bg-gray-430">
        <div className="block md:hidden">
          <BorderBox>
            <div className="flex flex-col items-center">
              <p className="bg-background text-white text-[50px] text-center inline -mt-[60px] pt-2 px-4 leading-none">
                Happy hour
              </p>
              <p className="text-center text-[14px]">
                <p className="inline text-white/60">Daily from</p>
                <p className="inline text-white"> 3 PM to 6 PM </p>
                <p className="inline text-white/60">& </p>
                <p className="inline text-white">9 PM to 11 PM</p>
              </p>
              <div className="flex justify-around mt-[22px] w-full">
                <Cocktail />
                <Cutlery />
                <Hamburger />
                <Cutlery />
              </div>
              <BtnElement
                onClick={() => setIsOpen(true)}
                className="w-[258px] mt-6 -mb-[50px]"
                color="red"
                name="see our great deals"
              />
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Image
                  className="absolute -top-0.5 -left-0.5"
                  src={"/assets/images/jackpot_corner.png"}
                  alt="corner"
                  width={54}
                  height={61}
                />
                <div>
                  <p className="text-[28px] text-white">
                    Happy hour{" "}
                    <p className="text-red-600 inline">at casino m8trix</p>
                  </p>
                  <p className="text-[14px] font-[200px] text-white/60 nunito">
                    Enjoy our great deals daily from 3 pm to 6 pm and from 9 pm
                    to 11 pm !
                  </p>
                  <div className="flex justify-between items-end -mt-4">
                    <p className="nunito text-[14px] pb-4">
                      Food{" "}
                      <p className="text-red-600 noodle inline">
                        &frac12; OFF select
                      </p>
                      <p className="text-white noodle inline"> starters</p>
                    </p>
                    <Cutlery />
                  </div>
                  <div className="flex justify-start gap-2">
                    <ul className="nunito list-disc pl-4 text-white/60">
                      <li>Pot Stickers</li>
                      <li>Roti Paratha</li>
                      <li>Samosas</li>
                      <li>Pork Egg Rolls</li>
                      <li>Fried Calamari Strips</li>
                    </ul>
                    <ul className="nunito list-disc pl-4 text-white/60">
                      <li>Online Rings</li>
                      <li>&quot;Fry Basket&quot;</li>
                      <li>Full Order Wings</li>
                      <li>Chips & Salsa</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between items-end">
                      <p className="nunito text-white pb-4">Drinks</p>
                      <Cocktail />
                    </div>
                    <ul className="space-y-2 nunito">
                      <li className="flex items-center text-white">
                        <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
                        <span className="flex-none">Heineken Bottles</span>
                        <span className="flex-1 border-b border-dotted border-gray-500 mx-2 pt-2"></span>
                        <span className="flex-none text-gray-300 noodle">
                          $3.00
                        </span>
                      </li>

                      <li className="flex items-center text-white">
                        <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
                        <span className="flex-none">Corona Extra</span>
                        <span className="flex-1 border-b border-dotted border-gray-500 mx-2 pt-2"></span>
                        <span className="flex-none text-gray-300 noodle">
                          $3.50
                        </span>
                      </li>

                      <li className="flex items-center text-white">
                        <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
                        <span className="flex-none">Budweiser</span>
                        <span className="flex-1 border-b border-dotted border-gray-500 mx-2 pt-2"></span>
                        <span className="flex-none text-gray-300 noodle">
                          $2.80
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Modal>
            </div>
          </BorderBox>
        </div>
        <BorderBox>
          <Image
            className="absolute top-0 left-[50%] transform -translate-[50%] md:top-0 md:left-20 md:transform md:-translate-[50%]"
            src="/Restaurant Logos.svg"
            alt="restaurant"
            width={100}
            height={100}
          />
          <div className="hidden md:block">
            <div className="flex justify-around gap-4 bg-background p-2 absolute top-[50%] -right-[5px] transform -translate-[50%] md:top-0 md:-right-[5px] md:transform md:-translate-[50%]">
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4  mb-10">
            <Image
              src={"/assets/images/image_18.png"}
              alt="Image18"
              width={400}
              height={230}
              className="flex-6 w-full md:w-1/2"
            />
            <div className="flex-6">
              <p className="text-white/60 font-extralight text-[14px] mb-5 nunito">
                Zone 8 Sports Bar & Grill showcases the latest news and biggest
                sporting events on our 40 HD flat screen TV’s, as well as two
                massive 200” HD screens. Our menu offers a diverse selection,
                from American to Asian fare, and more!
              </p>
              <div className="pb-2.5">
                <div className="flex items-center pb-[5px]">
                  <p className="flex-4 text-[14px] font-bold text-white nunito">
                    Opening Hours
                  </p>
                  <p className="flex-3 text-[8px] italic text-white/60 nunito">
                    Sunday to Thursday
                  </p>
                  <p className="flex-3 text-[8px] italic text-white/60 nunito">
                    Friday & Saturday
                  </p>
                </div>
                <div className="flex items-center pb-[5px]">
                  <p className="flex-4 text-[10px] font-bold text-white nunito">
                    Dining Room
                  </p>
                  <p className="flex-3 text-[10px] text-white/60 nunito">
                    11:00AM-12:00AM
                  </p>
                  <p className="flex-3 text-[10px] text-white/60 nunito">
                    11:00AM-1:00AM
                  </p>
                </div>
                <div className="flex items-center pb-[5px]">
                  <p className="flex-4 text-[10px] font-bold text-white nunito">
                    Bar
                  </p>
                  <p className="flex-6 text-[10px] text-white/60 nunito">
                    11:00AM-1:00AM
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2.5">
                <p className="text-[14px] font-bold text-white nunito">
                  To-Go Orders
                </p>
                <p className="text-[12px] font-light text-white/60 nunito">
                  Call at{" "}
                  <span className="text-[10px] font-bold text-white nunito">
                    408-484-6298
                  </span>
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] font-bold text-white nunito">
                  Restaurant Info
                </p>
                <p className="text-[12px] font-light text-white/60 nunito">
                  Call at{" "}
                  <span className="text-[10px] font-bold text-white">
                    408-453-4030
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row justify-between">
            <BtnElement
              className="md:w-full"
              name="LATE NITE MENU"
              color="white"
            />
            <BtnElement
              className="md:w-full"
              name="HAPPY HOUR MENU"
              color="white"
            />
            <BtnElement
              className="md:w-full"
              name="WEEKLY SPECIALS"
              color="white"
            />
            <BtnElement className="md:w-full" name="3D TOUR" color="white" />
            <BtnElement
              className="md:w-full"
              name="ORDER ONLINE"
              color="white"
            />
            <Link href="/dining/sportsBar" className="md:w-full">
              <BtnElement
                className="w-full md:w-full"
                name="SEE MORE"
                color="red"
              />
            </Link>
          </div>
        </BorderBox>
        <RoomPart
          direction="right"
          logoUrl="/Epic Bar.svg"
          text="Epic Bar is located in the heart of the casino and is the perfect setting for gathering and socializing. The bar serves finely crafted cocktails, draft beers, wines by the glass, and an appetizer and dining menu."
          firstHeader="Opening Hours"
          firstBody="Daily 6:00AM – 1:00AM"
          secondHeader="To-Go Orders"
          secondBody="408-484-6298"
          imageUrl="/assets/images/room_of_bar.png"
          imageName="RomeOfBar"
          href="/dining/EpicBar"
        />
        <RoomPart
          direction="left"
          logoUrl="/parallel.svg"
          text="Parallel Lounge is the perfect setting to host your next private cocktail party, business dinner, or birthday party.

Now accepting reservations for parties of 6 or larger. Have a seated dinner for up to 14 people, or host a cocktail party for up to 25.

Reservations are required to be made at least 48 hours in advance. A $100 food and beverage minimum applies. 21 and over."
          firstHeader="Opening Hours"
          firstBody="Daily 11am to 12am"
          secondHeader="Reservations"
          secondBody="408-416-4482"
          imageUrl="/assets/images/room.png"
          imageName="RomeOfParallel"
          href="/dining/parallel"
        />
        <RoomPart
          direction="right"
          logoUrl="/Cafe.svg"
          text="Parallel Lounge is the perfect setting to host your next private cocktail party, business dinner, or birthday party.

Now accepting reservations for parties of 6 or larger. Have a seated dinner for up to 14 people, or host a cocktail party for up to 25.

Reservations are required to be made at least 48 hours in advance. A $100 food and beverage minimum applies. 21 and over."
          firstHeader="Opening Hours"
          firstBody="Daily 11am to 12am"
          secondHeader="Reservations"
          secondBody="408-484-6298"
          imageUrl="/assets/images/room_of_cafe.png"
          imageName="RomeOfCafe"
          href="/dining/cafe"
        />
      </div>
    </Layout>
  );
};

export default Dining;
