"use client";

import Image from "next/image";
import Link from "next/link";

interface EventComponentProps {
  imageUrl: string;
  time: string;
  entertainment: string;
}

const PartSmComponent: React.FC<EventComponentProps> = ({
  imageUrl,
  time,
  entertainment,
}) => {
  const urlList: Record<string, string> = {
    "/assets/images/image_dish (1).png": "/events/oysters",
    "/assets/images/image_dish (2).png": "/events/drink",
    "/assets/images/image_dish (3).png": "/events/garning",
    "/assets/images/image_dish (4).png": "/events/blackJack",
    "/assets/images/image_dish (5).png": "/events/liquid",
  };

  const link = urlList[imageUrl] || "/events";

  return (
    <>
      <Link href={link}>
        <div className="relative w-[265px] h-[117px] -skew-x-18 overflow-visible">
          {/* Background wrapper — controls clipping */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Background image layer (unskewed visually) */}
            <div
              className="brightness-50 absolute inset-0 bg-cover bg-center transform skew-x-18 scale-150"
              style={{
                backgroundImage: `url('${imageUrl}')`,
              }}
            ></div>
          </div>

          {/* Foreground content (unskewed) */}
          <div className="relative z-10 transform skew-x-18 pt-2.5 pl-5 w-full h-full">
            <p className="text-[14px]">{time}</p>
            <p className="text-[28px] leading-none">{entertainment}</p>
          </div>

          {/* Button (overflow allowed) */}
          <div className="relative z-10 skew-x-18">
            <button className="absolute bottom-0 right-0 translate-x-[80%] bg-red-600 -skew-x-18 px-5 py-2.5 md:py-[5px] transition-all duration-700 hover:bg-red-700 -mt-10">
              <p className="text-white skew-x-18">READ MORE</p>
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PartSmComponent;
