import Image from "next/image";
import BtnElement from "../BtnElement/BtnElement";
import Link from "next/link";

interface RoomPartProps {
  direction: string;
  logoUrl: string;
  text: string;
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
  text,
  firstHeader,
  firstBody,
  secondHeader,
  secondBody,
  href,
  imageUrl,
  imageName,
}) => {
  return (
    <div className="relative mx-8 md:mx-[88px] lg:mx-auto lg:max-w-[1020px] px-4 md:px-10 pt-[25px] pb-[33.5px] mt-2.5 border-4 border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.9)] rounded-xs">
      <Image
        className={`absolute top-0 transform -translate-[50%] left-[50%] ${
          direction === "right" ? " md:left-[85%]" : "md:left-20"
        }`}
        src={logoUrl}
        alt="restaurant"
        width={100}
        height={100}
      />
      {direction === "right" ? (
        <div className="flex gap-4 flex-col-reverse md:flex-row mb-20 md:mb-0 nunito">
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
            <div className="absolute -bottom-25 md:bottom-2.5 w-full noodle">
              <div className="flex flex-wrap justify-between gap-4">
                <BtnElement
                  className="flex-2/12 sm:flex-5/12 md:flex-3/12 w-full md:w-full ml-5 md:ml-0"
                  color="white"
                  name="3D TOUR"
                />
                <BtnElement
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
        <div className="flex flex-col mb-20 md:mb-0 md:flex-row gap-4">
          <Image
            className="flex-6 w-full md:w-1/2 md:h-full"
            src={imageUrl}
            alt={imageName}
            width={300}
            height={315}
          />
          <div className="flex-6 relative nunito">
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
            <div className="absolute -bottom-25 md:bottom-2.5 w-full noodle">
              <div className="flex flex-wrap justify-between gap-4">
                <BtnElement
                  className="flex-2/12 sm:flex-5/12 md:flex-3/12 w-full md:w-full ml-5 md:ml-0"
                  color="white"
                  name="3D TOUR"
                />
                <BtnElement
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
