"use client";

import BtnElement from "@/app/components/BtnElement/BtnElement";
import FacebookIcon from "@/app/components/icons/facebookIcon";
import InstagramIcon from "@/app/components/icons/instagramIcon";
import Layout from "@/app/components/layout/layout";
import Image from "next/image";
import Link from "next/link";

const SportsBar = () => {
  return (
    <Layout>
      {/* main image Part */}
      <div className="bg-[url(/assets/images/image_18.png)] bg-no-repeat bg-cover bg-center h-[300px] flex flex-col justify-end w-full">
        <div className="flex items-end justify-center bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[469px]"></div>
      </div>
      {/* main body Part */}
      <div className=" bg-background pt-[60px] max-w-5xl mx-auto">
        <div className="flex gap-10 px-8 md:mx-20  flex-col md:flex-row relative">
          <Image
            className="block w-full shrink-0 md:w-1/2"
            src={"/assets/images/image_18.png"}
            alt="Image18"
            width={300}
            height={315}
          />
          <Image
            className="absolute top-0 left-1/2 md:left-0 -translate-x-1/2 -translate-y-1/2 "
            src={"/assets/images/Ellipse (1).png"}
            alt="RestaurantLogo"
            width={145}
            height={145}
          />
          <Image
            className="absolute top-0  left-1/2 md:left-0 -translate-x-1/2 -translate-y-1/2 "
            src={"/assets/images/Ellipse1.png"}
            alt="RestaurantLogo"
            width={140}
            height={62}
          />
          <div className="w-full md:w-1/2">
            <p className="text-white/60 font-extralight text-[14px] pb-5 border-b-2 border-gray-780">
              <p className="font-bold inline-block text-white">
                Zone 8 Sports Bar & Grill
              </p>{" "}
              showcases the latest news and biggest sporting events on our 40 HD
              flat screen TV’s, as well as two massive 200” HD screens. Our menu
              offers a diverse selection, from American to Asian fare, and more!
            </p>
            <div className="py-5 border-b-2 border-gray-300">
              <div className="flex items-center pb-[5px]">
                <p className="flex-4 text-[14px] font-bold text-white">
                  Opening Hours
                </p>
                <p className="flex-3 text-[10px] italic text-white/60">
                  Sunday to Thursday
                </p>
                <p className="flex-3 text-[10px] italic text-white/60">
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
              <div className="flex-6 nunito">
                <p className="text-white/60 font-extralight text-[14px] pb-5 border-b-2 border-gray-780">
                  <p className="font-bold inline-block text-white">
                    Zone 8 Sports Bar & Grill
                  </p>{" "}
                  showcases the latest news and biggest sporting events on our
                  40 HD flat screen TV’s, as well as two massive 200” HD
                  screens. Our menu offers a diverse selection, from American to
                  Asian fare, and more!
                </p>
                <div className="py-5 border-b-2 border-gray-300">
                  <div className="flex items-center pb-[5px]">
                    <p className="flex-4 text-[14px] font-bold text-white">
                      Opening Hours
                    </p>
                    <p className="flex-3 text-[10px] italic text-white/60">
                      Sunday to Thursday
                    </p>
                    <p className="flex-3 text-[10px] italic text-white/60">
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
                <div className="flex justify-between py-5 border-b-2 border-gray-300">
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
                <div className="flex justify-between py-5 border-b-2 border-gray-300">
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
            </div>
            <div className="flex justify-between items-baseline mx-[85px]">
              <div className="flex flex-col gap-11 mb-[71.5px] mt-5">
                <div>
                  <div className="flex justify-around gap-2">
                    <FacebookIcon />
                    <InstagramIcon />
                  </div>
                </div>
                <Link href="/dining" className="">
                  <p className="text-white/40 text-[14px]">
                    <span className="text-[14px] font-bold text-white/40 pr-2">
                      &lt;
                    </span>
                    Back to dining
                  </p>
                </Link>
              </div>
              <div className="flex justify-between w-[316px]!">
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
                <BtnElement className="" color="red" name="ORDER ONLINE" />
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <div className="block md:hidden">
        <Layout>
          {/* main image Part */}
          <div className="bg-[url(/assets/images/image_18.png)] bg-no-repeat bg-cover bg-center h-[300px] flex flex-col justify-end w-full">
            <div className="flex items-end justify-center bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[469px]"></div>
          </div>
          <div className="flex justify-between w-[316px]! flex-col sm:flex-row gap-4">
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
            <BtnElement className="" color="red" name="ORDER ONLINE" />
          </div>
        </Layout>
      </div>
    </>
  );
};

export default SportsBar;
