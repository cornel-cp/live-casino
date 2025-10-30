import Image from "next/image";

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
  return (
    <div className="flex flex-col md:gap-2 md:flex-row  w-full items-center rounded-2xl mx-auto cursor-pointer group">
      <Image
        className="hidden group-hover:block md:flex-4 w-full h-auto md:-skew-x-18 md:h-[90px] lg:h-[120px] xl:h-[150px] brightness-50 group-hover:brightness-100 transition-all duration-1000"
        src={imageUrlHover}
        alt="special event"
        width={265}
        height={110}
      />
      <Image
        className="block group-hover:hidden md:flex-4 w-full h-auto md:-skew-x-18 md:h-[120px] xl:h-[150px] brightness-50 group-hover:brightness-100 transition-all duration-1000"
        src={imageUrl}
        alt="special event"
        width={265}
        height={110}
      />
      <div className="flex-12 md:flex-8 w-full">
        <div className=" md:h-[120px] xl:h-[150px] bg-white/20 flex items-center md:gap-10 justify-between w-full md:-skew-x-18 text-white group-hover:bg-white group-hover:text-black transition-all duration-1000">
          <div className="md:flex-8 h-full w-full px-8 py-5 md:pl-8 md:pt-2 md:skew-x-18">
            <p className="text-[14px] text-center md:text-start">{time}</p>
            <p className="text-[28px] text-center md:text-start">
              {entertainment}
            </p>
          </div>
          <div>
            <button className="flex-4 hidden md:block w-full sm:w-auto bg-red-600 sm:mx-5 px-5 py-[5px]">
              <p className="text-white sm:skew-x-18">READ MORE</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
