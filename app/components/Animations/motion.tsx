"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Molicule from "../icons/molicule";
import BtnElement from "../BtnElement/BtnElement";
import JobPost from "../employment/jobPost";
import Modal from "../Modal/modal";

export default function DraggableContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft ?? 0));
    setStartY(e.pageY - (containerRef.current?.offsetTop ?? 0));
    setScrollLeft(containerRef.current?.scrollLeft ?? 0);
    setScrollTop(containerRef.current?.scrollTop ?? 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const y = e.pageY - containerRef.current.offsetTop;
    const walkX = x - startX;
    const walkY = y - startY;
    containerRef.current.scrollLeft = scrollLeft - walkX;
    containerRef.current.scrollTop = scrollTop - walkY;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="w-[400px] h-[300px] overflow-hidden cursor-grab active:cursor-grabbing pl-4 mb-16"
    >
      <div className="flex flex-row items-center justify-around h-full flex-nowrap w-[1390px] md:flex-wrap md:w-full gap-2 pl-10 pr-25">
        <div className="w-[233px] h-[268px] relative border border-white [&:has(.special:hover)]:border-gray-600 transition duration-500">
          <Image
            className="absolute -top-0.5 -left-0.5"
            src={"/assets/images/Vector 3.png"}
            alt="Molicule"
            width={54}
            height={61}
          />
          <Molicule className="special absolute top-[15.5px] right-[16.5px] text-gray-600 hover:text-white transition duration-500" />
          <div className="ml-[26px] mr-[30px] mt-[27px] mb-12 text-[14px]">
            <p className="text-white/40 font-light">Nov, 13</p>
            <div>
              <p className="text-[20px] font-bold text-white">
                Human Resources Generalist
              </p>
              <p className="text-white/40 font-light text-[14px]">
                Elevate your career by joining our human resources team in the
                gaming industry!
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-center px-4 noodle">
            <button
              className={`flex-5 bg-white flex justify-center items-center w-full h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white`}
            >
              <p
                className={`skew-x-16 text-red-600 max-w-[68px] text-[14px] font-normal text-wrap leading-none text-center`}
              >
                PREVIEW
              </p>
            </button>
            <BtnElement
              className="flex-5 w-full"
              color="red"
              name="APPLY NOW"
            />
          </div>
        </div>
        <JobPost
          onClick={() => setIsOpen(true)}
          className="hover:border-white [&:has(.special:hover)]:border-gray-600 transition-all duration-500"
          date="Nov, 9"
          title="Bartender"
          text="Bartenders prepare alcoholic or non-alcoholic beverages for bar and restaurant patrons."
        />
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Image
            className="absolute -top-0.5 -left-0.5"
            src={"/assets/images/jackpot_corner.png"}
            alt="corner"
            width={54}
            height={61}
          />
          <Molicule className="absolute top-[17px] right-[40px] text-gray-600" />
          <div className="nunito flex flex-col gap-4">
            <div>
              <p className="text-[12px] font-[300px] text-white/60">Nov, 9</p>
              <p className="text-[20px] font-bold">Bartender</p>
              <p className="text-white/60 font-[300px] text-[14px] mb-6">
                Bartenders prepare alcoholic or non-alcoholic beverages for bar
                and restaurant patrons.
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-between text-white/60">
              <div className="flex-3">
                <p className="text-white text-[14px] font-bold mb-2">
                  Requirements
                </p>
                <ul className="list-disc pl-4 text-[12px]">
                  <li>Must be 21 years or older</li>
                  <li>Must be willing to undergo background check</li>
                  <li>
                    Speak English fluently and coherently (bilingual a plus)
                  </li>
                </ul>
              </div>
              <div className="flex-3">
                <p className="text-white text-[14px] font-bold mb-2">
                  Qualifications
                </p>
                <ul className="list-disc pl-4 text-[12px]">
                  <li>
                    Have a minimum of 1 year of bartending experience in a
                    fast-paced environment
                  </li>
                  <li>
                    Basic math skills necessary to run cash register and prepare
                    cash drops
                  </li>
                </ul>
                <a className="underline underline-offset-3 text-[14px]">
                  See 4 more
                </a>
              </div>
              <div className="flex-3">
                <p className="text-white text-[14px] font-bold mb-2">
                  Work Hours and Availability
                </p>
                <ul className="list-disc pl-4 text-[12px]">
                  <li>
                    Day Shift:
                    <br /> 9:00 AM - 3:00 PM
                  </li>
                  <li>
                    Swing Shift:
                    <br /> 3:00 PM - 8:00 PM
                  </li>
                  <li>
                    Grave Shift:
                    <br /> 8:00 PM - 2:00 AM
                  </li>
                </ul>
              </div>
              <div className="flex-2 hidden">
                <p className="text-white text-[14px] font-bold mb-2">
                  Compensation and Benefits
                </p>
                <p className="text-[12px]">
                  Starting compensation is{" "}
                  <p className="inline text-white font-bold">$15.45</p> hourly,
                  plus tips. Employee benefits are available for all qualifying
                  full-time employees including: paid time off, medical, vision,
                  dental insurance, and a 25% employee discount on food,
                  non-alcoholic beverages.
                </p>
              </div>
            </div>
            <BtnElement
              className="noodle mt-[20px] float-right"
              color="red"
              name="apply now"
            />
          </div>
        </Modal>
        <JobPost
          className="hover:border-white [&:has(.special:hover)]:border-gray-600 transition-all duration-500"
          date="Nov, 11"
          title="Security Officer"
          text="Security Officer candidates with specialty skills including customer service and concierge experience. "
        />
        <JobPost
          className="hover:border-white [&:has(.special:hover)]:border-gray-600 transition-all duration-500"
          date="Nov, 21"
          title="Chip Runner"
          text="Responsible for chip and cash transactions, issuing imprest bank carts and table banks, assisting with even-exchange employee transactions."
        />
        <JobPost
          className="hover:border-white [&:has(.special:hover)]:border-gray-600 transition-all duration-500"
          date="Nov, 17"
          title="Poker Dealer"
          text="We promote from within and often our gaming employees will have the opportunity to be promoted to Game Attendants."
        />
      </div>
    </div>
  );
}
