"use client";

import BtnElement from "@/app/components/BtnElement/BtnElement";
import Layout from "@/app/components/layout/layout";
import Image from "next/image";
import Link from "next/link";

const EpicBar = () => {
  return (
    <Layout>
      {/* main image Part */}
      <div className="bg-[url(/assets/images/room.png)] bg-no-repeat bg-cover bg-center h-[300px] flex flex-col justify-end w-full">
        <div className="flex items-end justify-center bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[469px]"></div>
      </div>
      {/* main body Part */}
      <div className=" bg-black/50 pt-[60px]">
        <div className="flex gap-10 ml-28 mr-[85px]">
          <div className="relative">
            <Image
              className="block h-[315px]"
              src={"/assets/images/room.png"}
              alt="Image18"
              width={300}
              height={315}
            />
            <Image
              className="absolute top-0 translate-[-50%]"
              src={"/Group 48095902.svg"}
              alt="RestaurantLogo"
              width={145}
              height={145}
            />
          </div>
          <div className="flex-6">
            <p className="text-white/60 font-extralight text-[14px] pb-5 border-b-2 border-gray-780">
              <p className="font-bold inline-block text-white">
                Parallel Lounge
              </p>{" "}
              is the perfect setting to host your next private cocktail party,
              business dinner, or birthday party.
              <br />
              Now accepting reservations for parties of 6 or larger. Have a
              seated dinner for up to 14 people, or host a cocktail party for up
              to 25.
              <br />
              Reservations are required to be made at least 48 hours in advance.
              A $100 food and beverage minimum applies. 21 and over.
            </p>
            <div className="flex justify-between py-5 border-b-2 border-gray-300">
              <p className="text-[14px] font-bold text-white">Opening Hours</p>
              <p className="text-[12px] font-light text-white/60">
                Daily 11:00 AM to 12:00 AM
              </p>
            </div>
            <div className="flex justify-between py-5 border-b-2 border-gray-300">
              <p className="text-[14px] font-bold text-white">To-Go Orders</p>
              <p className="text-[12px] font-light text-white/60">
                Call at{" "}
                <span className="text-[10px] font-bold text-white">
                  408-416-4482
                </span>
              </p>
            </div>
            <div className="flex justify-end gap-4 mt-[52px]">
              <BtnElement className="" color="white" name="3D TOUR" />
              <button
                className={`bg-white flex justify-center items-center w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white`}
              >
                <p
                  className={`skew-x-16 text-red-600 max-w-[68px] text-[14px] font-normal text-wrap leading-none text-center`}
                >
                  SEE MENU
                </p>
              </button>
              <BtnElement className="" color="red" name="RESERVATIONS" />
            </div>
          </div>
        </div>
        <Link href={"/dining"}>
          <p className="text-white/40 text-[14px] pl-[85px] pt-[103px] pb-[71.5px]">
            <span className="text-[14px] font-bold text-white/40 pr-2">
              &lt;
            </span>
            Back to dining
          </p>
        </Link>
      </div>
    </Layout>
  );
};

export default EpicBar;
