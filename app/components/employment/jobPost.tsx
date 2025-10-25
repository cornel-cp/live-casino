import Image from "next/image";
import BtnElement from "../BtnElement/BtnElement";

const JobPost = (props: any) => {
  return (
    <div
      className={`group w-[233px] h-[268px] relative border border-gray-700  ${props.className}`}
    >
      <Image
        className={`absolute top-[15.5px] right-[16.5px]`}
        src={"/assets/images/Group 48095852.png"}
        alt="Molicule"
        width={11.5}
        height={12.5}
      />
      <Image
        className="absolute -top-0.5 -left-0.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
        src={"/assets/images/Vector 3.png"}
        alt="Vector"
        width={54}
        height={61}
      />
      <div className="ml-[26px] mr-[30px] mt-[27px] mb-12 text-[14px] ">
        <p className="text-white/40 font-light">{props.date}</p>
        <div>
          <p className="text-[20px] font-bold text-white">{props.title}</p>
          <p className="text-white/40 font-light text-[14px]">{props.text}</p>
        </div>
      </div>
      <div className="flex gap-2 justify-center absolute -bottom-0.5 left-[50%] -translate-[50%]">
        <button
          className={`bg-white flex justify-center items-center w-[93px] h-[33.5px] -skew-x-16 cursor-pointer border rounded-xs border-white`}
        >
          <p
            className={`skew-x-16 text-red-600 max-w-[68px] text-[14px] font-normal text-wrap leading-none text-center`}
          >
            PREVIEW
          </p>
        </button>
        <BtnElement className="" color="red" name="APPLY NOW" />
      </div>
    </div>
  );
};

export default JobPost;
