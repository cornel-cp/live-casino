import Image from "next/image";
import BtnElement from "../BtnElement/BtnElement";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "../Modal/modal";
import Cutlery from "../icons/cutlery";
import Cocktail from "../icons/cocktail";

interface RoomPartProps {
  direction: string;
  logoUrl: string;
  logoBorderUrl: string;
  text?: string;
  children?: React.ReactNode;
  firstHeader: string;
  firstBody: string;
  secondHeader: string;
  secondBody: string;
  href: string;
  imageUrl: string;
  imageName: string;
}

const RoomPart: React.FC<RoomPartProps> = ({
  direction,
  logoUrl,
  logoBorderUrl,
  text,
  children,
  firstHeader,
  firstBody,
  secondHeader,
  secondBody,
  href,
  imageUrl,
  imageName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mx-8 md:mx-[88px] lg:mx-auto lg:max-w-[1020px] px-4 md:px-10 pt-[50px] pb-[30px] mt-2.5 border-4 border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.9)] rounded-xs">
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
      <Image
        className={`hidden md:block absolute top-0 transform -translate-[50%] left-[50%] ${
          direction === "right" ? " md:left-[85%]" : "md:left-20"
        }`}
        src={logoUrl}
        alt="restaurant"
        width={140}
        height={140}
      />
      <Image
        className="block md:hidden absolute top-0 left-1/2 translate-[-50%]"
        src={logoBorderUrl}
        alt="RestaurantLogo"
        width={180}
        height={180}
      />
      {direction === "right" ? (
        <div className="flex gap-4 flex-col-reverse md:flex-row mb-30 md:mb-0 nunito">
          <div className="flex-6 relative">
            <p className="text-white/60 font-extralight text-[14px] mb-5">
              {text}
            </p>
            <div className="flex justify-between mb-2.5">
              <p className="text-[14px] font-bold text-white">{firstHeader}</p>
              <p className="text-[12px] font-light text-white/60">
                {firstBody}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] font-bold text-white">{secondHeader}</p>
              <p className="text-[12px] font-light text-white/60">
                Call at{" "}
                <span className="text-[10px] font-bold text-white">
                  {secondBody}
                </span>
              </p>
            </div>
            <div className="absolute -bottom-30 md:bottom-2.5 w-full noodle">
              <div className="flex flex-wrap justify-between gap-4">
                <BtnElement
                  onClick={() => setIsOpen(true)}
                  className="flex-2/12 sm:flex-5/12 md:flex-3/12 w-full md:w-full ml-5 md:ml-0"
                  color="white"
                  name="3D TOUR"
                />
                <BtnElement
                  onClick={() => setIsOpen(true)}
                  className="flex-2/12 sm:flex-5/12 md:flex-3/12 w-full md:w-full mr-5 md:mr-0"
                  color="white"
                  name="MENU"
                />
                <Link href={href} className="flex-10/12 md:flex-3/12 w-full">
                  <BtnElement
                    className="w-full md:w-full"
                    color="red"
                    name="SEE MORE"
                  />
                </Link>
              </div>
            </div>
          </div>
          <Image
            src={imageUrl}
            alt={imageName}
            width={300}
            height={315}
            className="flex-6 w-full md:w-1/2 md:h-full"
          />
        </div>
      ) : (
        <div className="flex flex-col mb-30 md:mb-0 md:flex-row gap-4">
          <Image
            className="flex-6 w-full md:w-1/2 md:h-full"
            src={imageUrl}
            alt={imageName}
            width={300}
            height={315}
          />
          <div className="flex-6 relative nunito">
            <p className="text-white/60 font-extralight text-[14px] mb-5">
              {children}
            </p>
            <div className="flex justify-between mb-2.5">
              <p className="text-[14px] font-bold text-white">{firstHeader}</p>
              <p className="text-[12px] font-light text-white/60">
                {firstBody}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] font-bold text-white">{secondHeader}</p>
              <p className="text-[12px] font-light text-white/60">
                Call at{" "}
                <span className="text-[10px] font-bold text-white">
                  {secondBody}
                </span>
              </p>
            </div>
            <div className="absolute -bottom-30 md:bottom-2.5 w-full noodle">
              <div className="flex flex-wrap justify-between gap-4">
                <BtnElement
                  onClick={() => setIsOpen(true)}
                  className="flex-2/12 sm:flex-5/12 md:flex-3/12 w-full md:w-full ml-5 md:ml-0"
                  color="white"
                  name="3D TOUR"
                />
                <BtnElement
                  onClick={() => setIsOpen(true)}
                  className="flex-2/12 sm:flex-5/12 md:flex-3/12 w-full md:w-full mr-5 md:mr-0"
                  color="white"
                  name="MENU"
                />
                <Link href={href} className="flex-10/12 md:flex-3/12 w-full">
                  <BtnElement
                    className="w-full md:w-full"
                    color="red"
                    name="SEE MORE"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomPart;
