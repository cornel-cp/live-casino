"use client";

import BtnElement from "@/app/components/BtnElement/BtnElement";
import FacebookIcon from "@/app/components/icons/facebookIcon";
import InstagramIcon from "@/app/components/icons/instagramIcon";
import Layout from "@/app/components/layout/layout";
import Image from "next/image";
import Link from "next/link";

const Parallel = () => {
  return (
    <>
      <div className="hidden md:block">
        <Layout>
          {/* main image Part */}
          <div className="bg-[url(/assets/images/room.png)] bg-no-repeat bg-cover bg-center h-[300px] flex flex-col justify-end w-full">
            <div className="flex items-end justify-center bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[469px]"></div>
          </div>
          {/* main body Part */}
          <div className=" bg-gray-340 pt-[60px]">
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
                  is the perfect setting to host your next private cocktail
                  party, business dinner, or birthday party.
                  <br />
                  Now accepting reservations for parties of 6 or larger. Have a
                  seated dinner for up to 14 people, or host a cocktail party
                  for up to 25.
                  <br />
                  Reservations are required to be made at least 48 hours in
                  advance. A $100 food and beverage minimum applies. 21 and
                  over.
                </p>
                <div className="flex justify-between py-5 border-b-2 border-gray-300">
                  <p className="text-[14px] font-bold text-white">
                    Opening Hours
                  </p>
                  <p className="text-[12px] font-light text-white/60">
                    Daily 11:00 AM to 12:00 AM
                  </p>
                </div>
                <div className="flex justify-between py-5 border-b-2 border-gray-300">
                  <p className="text-[14px] font-bold text-white">
                    To-Go Orders
                  </p>
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
      </div>
      <div className="block md:hidden">
        <Layout>
          {/* main image Part */}
          <div className="bg-[url(/assets/images/image_18.png)] bg-no-repeat bg-cover bg-center h-[300px] flex flex-col justify-end w-full">
            <div className="flex items-end justify-center bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[469px]"></div>
          </div>
          {/* main body Part */}
          <div className="ml-28 mr-[85px] my-10">
            <div className="relative mb-[50px]">
              <Image
                className="absolute -top-5 translate-[-50%]"
                src={"/assets/images/Ellipse (1).png"}
                alt="RestaurantLogo"
                width={145}
                height={145}
              />
              <Image
                className="absolute -top-5 translate-[-50%]"
                src={"/assets/images/Ellipse1.png"}
                alt="RestaurantLogo"
                width={140}
                height={62}
              />
              <div className="flex justify-end gap-7">
                <FacebookIcon />
                <InstagramIcon />
              </div>
            </div>
            <div className="flex flex-col gap-15">
              <div>
                <p className="text-white/60 font-extralight text-[14px] mb-5">
                  <p className="inline text-white">Zone 8 Sports Bar & Grill</p>{" "}
                  showcases the latest news and biggest sporting events on our
                  40 HD flat screen TV’s, as well as two massive 200” HD
                  screens. Our menu offers a diverse selection, from American to
                  Asian fare, and more!
                </p>
                <div className="pb-2.5">
                  <div className="flex items-center pb-[5px]">
                    <p className="flex-4 text-[14px] font-bold text-white">
                      Opening Hours
                    </p>
                    <p className="flex-3 text-[8px] italic text-white/60">
                      Sunday to Thursday
                    </p>
                    <p className="flex-3 text-[8px] italic text-white/60">
                      Friday & Saturday
                    </p>
                  </div>
                  <div className="flex items-center pb-[5px]">
                    <p className="flex-4 text-[10px] font-bold text-white">
                      Dining Room
                    </p>
                    <p className="flex-3 text-[10px] text-white/60">
                      11:00AM-12:00AM
                    </p>
                    <p className="flex-3 text-[10px] text-white/60">
                      11:00AM-1:00AM
                    </p>
                  </div>
                  <div className="flex items-center pb-[5px]">
                    <p className="flex-4 text-[10px] font-bold text-white">
                      Bar
                    </p>
                    <p className="flex-6 text-[10px] text-white/60">
                      11:00AM-1:00AM
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mb-2.5">
                  <p className="text-[14px] font-bold text-white">
                    To-Go Orders
                  </p>
                  <p className="text-[12px] font-light text-white/60">
                    Call at{" "}
                    <span className="text-[10px] font-bold text-white">
                      408-484-6298
                    </span>
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[14px] font-bold text-white">
                    Restaurant Info
                  </p>
                  <p className="text-[12px] font-light text-white/60">
                    Call at{" "}
                    <span className="text-[10px] font-bold text-white">
                      408-453-4030
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className="w-full"
                  src={"/assets/images/image_18.png"}
                  alt="Image18"
                  width={300}
                  height={315}
                />
                <div className="flex justify-between gap-2 mt-2">
                  <Image
                    className="border rounded-md w-full"
                    src={"/assets/images/image 19.png"}
                    alt="Orange"
                    width={95}
                    height={50}
                  />
                  <Image
                    className="border rounded-md  w-full"
                    src={"/assets/images/image 20.png"}
                    alt="Orange"
                    width={95}
                    height={50}
                  />
                  <Image
                    className="border rounded-md w-full"
                    src={"/assets/images/image 21.png"}
                    alt="Orange"
                    width={95}
                    height={50}
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-between gap-4">
                  <BtnElement className="w-full" color="white" name="3D TOUR" />
                  <button
                    className={`bg-white flex justify-center items-center w-full h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white`}
                  >
                    <p
                      className={`skew-x-16 text-red-600 max-w-[68px] text-[14px] font-normal text-wrap leading-none text-center`}
                    >
                      SEE MENU
                    </p>
                  </button>
                  <BtnElement
                    className="w-full"
                    color="red"
                    name="RESERVATIONS"
                  />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Parallel;
