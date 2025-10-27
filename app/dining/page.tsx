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

const Dining = () => {
  return (
    <Layout>
      {/* room Section */}
      <div className="bg-[url(/assets/images/bg_dining_room.jpg)] bg-no-repeat bg-cover h-[469px] flex flex-col justify-end w-full min-h-screen">
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
              <p className="text-white text-[50px] text-center inline -mt-[60px] pt-2 px-4 leading-none bg-background">
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
                className="w-[258px] mt-6 -mb-[50px]"
                color="red"
                name="see our great deals"
              />
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
            <div className=" bg-background px-4 py-2 flex justify-around gap-4 absolute top-[50%] -right-[5px] transform -translate-[50%] md:top-0 md:-right-[5px] md:transform md:-translate-[50%]">
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <Image
              className="flex-6 w-full md:h-full"
              src={"/assets/images/image_18.png"}
              alt="Image18"
              width={300}
              height={230}
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
          logoName="EpicBar"
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
          logoName="Parallel"
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
          logoName="Cafe"
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
