"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Molicule from "../icons/molicule";
import BtnElement from "../BtnElement/BtnElement";
import JobPost from "../employment/jobPost";

export default function DraggableContainer() {
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
          className="hover:border-white [&:has(.special:hover)]:border-gray-600 transition-all duration-500"
          date="Nov, 9"
          title="Bartender"
          text="Bartenders prepare alcoholic or non-alcoholic beverages for bar and restaurant patrons."
        />
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
