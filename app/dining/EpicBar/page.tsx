"use client";

import BtnElement from "@/app/components/BtnElement/BtnElement";
import Layout from "@/app/components/layout/layout";
import Image from "next/image";
import Link from "next/link";

const EpicBar = () => {
  return (
    <Layout>
      {/* main image Part */}
      <div className="bg-[url(/assets/images/room_of_bar.png)] bg-no-repeat bg-cover bg-center h-[300px] flex flex-col justify-end w-full">
        <div className="flex items-end justify-center bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[469px]"></div>
      </div>
      {/* main body Part */}
      <div className=" bg-background pt-[60px]">
        <div className="flex gap-10 ml-28 mr-[85px]">
          <div className="relative">
            <Image
              className="block h-[315px]"
              src={"/assets/images/room_of_bar.png"}
              alt="Image18"
              width={300}
              height={315}
            />
            <Image
              className="absolute top-0 translate-[-50%]"
              src={"/Restaurant_Logos_(2).svg"}
              alt="RestaurantLogo"
              width={145}
              height={145}
            />
            <div className="flex justify-between mb-[186.5px]">
              <Image
                src={"/assets/images/image 19.png"}
                alt="Orange"
                width={95}
                height={50}
              />
              <Image
                src={"/assets/images/image 20.png"}
                alt="Orange"
                width={95}
                height={50}
              />
              <Image
                src={"/assets/images/image 21.png"}
                alt="Orange"
                width={95}
                height={50}
              />
            </div>
          </div>
          <div className="flex-6">
            <p className="text-white/60 font-extralight text-[14px] pb-5 border-b-2 border-gray-780">
              <p className="font-bold inline-block text-white">Epic Bar</p> is
              located in the heart of the casino and is the perfect setting for
              gathering and socializing. The bar serves finely crafted
              cocktails, draft beers, wines by the glass, and an appetizer and
              dining menu.
            </p>
            <div className="flex justify-between py-5 border-b-2 border-gray-300">
              <p className="text-[14px] font-bold text-white">Opening Hours</p>
              <p className="text-[12px] font-light text-white/60">
                Daily 6:00AM – 1:00AM
              </p>
            </div>
            <div className="flex justify-between py-5 border-b-2 border-gray-300">
              <p className="text-[14px] font-bold text-white">To-Go Orders</p>
              <p className="text-[12px] font-light text-white/60">
                Call at{" "}
                <span className="text-[10px] font-bold text-white">
                  408-484-6298
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
            </div>
          </div>
        </div>
        <Link href={"/dining"}>
          <p className="text-white/40 text-[14px] pl-[85px] pb-[71.5px]">
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
