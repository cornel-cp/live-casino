import Image from "next/image";
import BtnElement from "../BtnElement/BtnElement";

const RoomPart = (props: any) => {
  return (
    <main className="relative h-[380px] mx-[88px] px-10 pt-[25px] pb-[33.5px] border-4 border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.9)] rounded-xs">
      <Image
        className={`absolute top-0 transform -translate-[50%] ${
          props.direction === "right" ? "-right-5" : "left-20"
        }`}
        src={props.logoUrl}
        alt={props.logoName}
        width={100}
        height={100}
      />
      {props.direction === "right" ? (
        <div className="flex gap-4">
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
            <div className="absolute bottom-2.5 w-full">
              <div className="flex justify-between">
                <BtnElement color="white" name="3D TOUR" />
                <BtnElement color="white" name="MENU" />
                <BtnElement color="red" name="SEE MORE" />
              </div>
            </div>
          </div>
          <Image
            src={props.imageUrl}
            alt={props.imageName}
            width={300}
            height={315}
          />
        </div>
      ) : (
        <div className="flex gap-4">
          <Image
            src={props.imageUrl}
            alt={props.imageName}
            width={300}
            height={315}
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
            <div className="absolute bottom-2.5 w-full">
              <div className="flex justify-between">
                <BtnElement color="white" name="3D TOUR" />
                <BtnElement color="white" name="RESERVATION" />
                <BtnElement color="red" name="SEE MORE" />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default RoomPart;
