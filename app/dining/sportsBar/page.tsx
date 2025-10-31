"use client";

import BtnElement from "@/app/components/BtnElement/BtnElement";
import Cocktail from "@/app/components/icons/cocktail";
import Cutlery from "@/app/components/icons/cutlery";
import FacebookIcon from "@/app/components/icons/facebookIcon";
import InstagramIcon from "@/app/components/icons/instagramIcon";
import Layout from "@/app/components/layout/layout";
import Modal from "@/app/components/Modal/modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SportsBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Modal Section */}
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
            Happy hour <p className="text-red-600 inline">at casino m8trix</p>
          </p>
          <p className="text-[14px] font-[200px] text-white/60 nunito">
            Enjoy our great deals daily from 3 pm to 6 pm and from 9 pm to 11 pm
            !
          </p>
          <div className="flex justify-between items-end -mt-4">
            <p className="nunito text-[14px] pb-4">
              Food{" "}
              <p className="text-red-600 noodle inline">&frac12; OFF select</p>
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
                <span className="flex-none text-gray-300 noodle">$3.00</span>
              </li>

              <li className="flex items-center text-white">
                <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
                <span className="flex-none">Corona Extra</span>
                <span className="flex-1 border-b border-dotted border-gray-500 mx-2 pt-2"></span>
                <span className="flex-none text-gray-300 noodle">$3.50</span>
              </li>

              <li className="flex items-center text-white">
                <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
                <span className="flex-none">Budweiser</span>
                <span className="flex-1 border-b border-dotted border-gray-500 mx-2 pt-2"></span>
                <span className="flex-none text-gray-300 noodle">$2.80</span>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
      <div className="hidden md:block">
        <Layout>
          {/* main image Part */}
          <div className="bg-[url(/assets/images/image_18.png)] bg-no-repeat bg-cover bg-center h-[300px] flex flex-col justify-end w-full">
            <div className="flex items-end justify-center bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[469px]"></div>
          </div>
          <div className=" bg-background pt-[60px] max-w-5xl mx-auto">
            {/* main body Part */}
            <div className="flex gap-10 md:mx-20 flex-col md:flex-row relative">
              <div className="flex-6 flex-col">
                <div className="w-full">
                  <Image
                    className="block w-full shrink-0"
                    src={"/assets/images/image_18.png"}
                    alt="Image18"
                    width={300}
                    height={315}
                  />

                  <Image
                    className="absolute top-0  left-1/2 md:left-0 -translate-x-1/2 -translate-y-1/2 "
                    src={"/assets/images/Ellipse 24.svg"}
                    alt="RestaurantLogo"
                    width={140}
                    height={62}
                  />
                  <Image
                    className="absolute top-0 left-1/2 md:left-0 -translate-x-1/2 -translate-y-1/2 "
                    src={"/assets/images/Frame.svg"}
                    alt="RestaurantLogo"
                    width={145}
                    height={145}
                  />
                </div>
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
            <div className="flex justify-between items-center mx-[85px]">
              <div className="flex flex-col gap-11 mb-[71.5px] mt-5">
                <div>
                  <div className="flex justify-around gap-2">
                    <FacebookIcon />
                    <InstagramIcon />
                  </div>
                </div>
                <div className="">
                  <Link href="/dining" className="">
                    <p className="text-white/40 text-[14px] group hover:text-white">
                      <span className="text-[14px] font-bold text-white/40 pr-2 group-hover:text-white">
                        &lt;
                      </span>
                      Back to{" "}
                      <p className="group-hover:text-red-600 inline">dining</p>
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex justify-between w-[316px]!">
                <BtnElement
                  onClick={() => setIsOpen(true)}
                  className=""
                  color="white"
                  name="3D TOUR"
                />
                <button
                  onClick={() => setIsOpen(true)}
                  className={`bg-white flex justify-center items-center w-[93px] -skew-x-16 cursor-pointer border rounded-xs border-white`}
                >
                  <p
                    className={`skew-x-16 text-red-600 max-w-[68px] text-[14px] py-4 font-normal text-wrap leading-none text-center`}
                  >
                    SEE MENU
                  </p>
                </button>
                <BtnElement
                  onClick={() => setIsOpen(true)}
                  className=""
                  color="red"
                  name="ORDER ONLINE"
                />
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
          {/* main body Part */}
          <div className="mx-8 md:ml-28 md:mr-[85px] my-10">
            <div className="relative mb-[50px]">
              <Image
                className="absolute -top-10 -translate-y-1/2"
                src={"/assets/images/Ellipse 24.svg"}
                alt="RestaurantLogo"
                width={145}
                height={145}
              />
              <Image
                className="absolute -top-10 -translate-y-1/2"
                src={"/assets/images/Frame.svg"}
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
              <div className="nunito">
                <p className="text-white/60 font-extralight text-[14px] mb-5 ">
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
                  <BtnElement
                    onClick={() => setIsOpen(true)}
                    className="w-full"
                    color="white"
                    name="3D TOUR"
                  />
                  <button
                    onClick={() => setIsOpen(true)}
                    className={`bg-white flex justify-center items-center w-full -skew-x-16 cursor-pointer border rounded-xs border-white`}
                  >
                    <p
                      className={`skew-x-16 text-red-600 max-w-[68px] text-[14px] py-4 font-normal text-wrap leading-none text-center`}
                    >
                      SEE MENU
                    </p>
                  </button>
                  <BtnElement
                    onClick={() => setIsOpen(true)}
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

export default SportsBar;
