import Image from "next/image";
import BtnElement from "../BtnElement/BtnElement";
import Link from "next/link";

const RoomPart = (props: any) => {
  return (
    <main className="relative max-w-4xl mx-auto px-4 md:px-10 pt-[25px] pb-[33.5px] border-4 border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.9)] rounded-xs">
      <Image
        className={`absolute top-0 transform -translate-[50%] left-1/2 ${props.direction === "right" ? "md:right-5 md:left-auto" : "md:left-20"
          }`}
        src={props.logoUrl}
        alt={props.logoName}
        width={100}
        height={100}
      />
      {props.direction === "right" ? (
        <div className="flex gap-4 flex-col-reverse md:flex-row">
          <div className="flex-6 relative gap-2 flex flex-col">
            <p className="text-white/60 font-extralight text-[14px] mb-5">
              {props.text}
            </p>
            <div className="flex justify-between mb-2.5">
              <p className="text-[14px] font-bold text-white">
                {props.firstHeader}
              </p>
              <p className="text-[12px] font-light text-white/60">
                {props.firstBody}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] font-bold text-white">
                {props.secondHeader}
              </p>
              <p className="text-[12px] font-light text-white/60">
                Call at{" "}
                <span className="text-[10px] font-bold text-white">
                  {props.secondBody}
                </span>
              </p>
            </div>
            <div className="w-full">
              <div className="flex justify-between flex-wrap gap-2">
                <BtnElement className="" color="white" name="3D TOUR" />
                <BtnElement className="" color="white" name="MENU" />
                <Link href={props.href}>
                  <BtnElement className="" color="red" name="SEE MORE" />
                </Link>
              </div>
            </div>
          </div>
          <Image
            src={props.imageUrl}
            alt={props.imageName}
            width={300}
            height={315}
            className="w-full md:w-1/2 aspect-4/3"
          />
        </div>
      ) : (
        <div className="flex gap-4 flex-col md:flex-row">
          <Image
            src={props.imageUrl}
            alt={props.imageName}
            width={300}
            height={315}
            className="w-full md:w-1/2 aspect-4/3"
          />
          <div className="flex-6 relative">
            <p className="text-white/60 font-extralight text-[14px] mb-5">
              {props.text}
            </p>
            <div className="flex justify-between mb-2.5">
              <p className="text-[14px] font-bold text-white">
                {props.firstHeader}
              </p>
              <p className="text-[12px] font-light text-white/60">
                {props.firstBody}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] font-bold text-white">
                {props.secondHeader}
              </p>
              <p className="text-[12px] font-light text-white/60">
                Call at{" "}
                <span className="text-[10px] font-bold text-white">
                  {props.secondBody}
                </span>
              </p>
            </div>
            <div className="w-full">
              <div className="flex justify-between flex-wrap gap-2">
                <BtnElement className="" color="white" name="3D TOUR" />
                <BtnElement className="" color="white" name="RESERVATION" />
                <Link href={props.href}>
                  <BtnElement className="" color="red" name="SEE MORE" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default RoomPart;
