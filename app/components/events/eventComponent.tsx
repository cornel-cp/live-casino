"use client";

import Image from "next/image";
import Link from "next/link";

interface EventComponentProps {
  imageUrl: string;
  imageUrlHover: string;
  time: string;
  entertainment: string;
}

const EventComponent: React.FC<EventComponentProps> = ({
  imageUrlHover,
  imageUrl,
  time,
  entertainment,
}) => {
  const urlList: Record<string, string> = {
    "/assets/images/image_dish (1).png": "/events/oysters",
    "/assets/images/image_dish (2).png": "/events/drink",
    "/assets/images/image_dish (3).png": "/events/gaming",
    "/assets/images/image_dish (4).png": "/events/blackJack",
    "/assets/images/image_dish (5).png": "/events/liquid",
  };

  const link = urlList[imageUrl] || "/events";

  return (
    <Link href={link}>
      <div className="flex flex-col md:gap-2 md:flex-row w-full items-center rounded-2xl mx-auto cursor-pointer group">
        {/* ---------- Image Section (Left Side) ---------- */}
        <div className="hidden md:block relative w-[265px] md:h-[120px] xl:h-[150px] md:-skew-x-18 overflow-hidden">
          {/* Default Image */}
          <Image
            className="absolute inset-0 w-full h-full object-cover brightness-50 transition-all duration-1000 ease-in-out"
            src={imageUrl}
            alt="special event"
            width={265}
            height={110}
          />

          {/* Hover Image */}
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 brightness-50 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
            src={imageUrlHover}
            alt="special event hover"
            width={265}
            height={110}
          />
        </div>

        {/* ---------- Mobile Image (No Hover) ---------- */}
        <div className="block md:hidden w-full">
          <Image
            className="w-full h-auto brightness-50"
            src={imageUrl}
            alt="special event mobile"
            width={265}
            height={110}
          />
        </div>

        {/* ---------- Text + Button Section (Right Side) ---------- */}
        <div className="flex-12 md:flex-8 w-full">
          <div className="md:h-[120px] xl:h-[150px] bg-white/20 flex items-center md:gap-10 justify-between w-full md:-skew-x-18 text-white md:group-hover:bg-white md:group-hover:text-black transition-all duration-1000 ease-in-out">
            {/* Text Block */}
            <div className="md:flex-8 h-full w-full px-8 py-5 md:pl-8 md:pt-2 md:skew-x-18">
              <p className="text-[14px] text-center md:text-start">{time}</p>
              <p className="text-[28px] text-center md:text-start">
                {entertainment}
              </p>
            </div>

            {/* Button */}
            <div>
              <button className="flex-4 hidden md:block w-full sm:w-auto bg-red-600 sm:mx-5 px-5 py-[5px] transition-all duration-700 hover:bg-red-700">
                <p className="text-white sm:skew-x-18">READ MORE</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventComponent;
