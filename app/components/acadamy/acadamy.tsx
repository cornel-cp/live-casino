import Link from "next/link";
import GameIcon from "../home/gameicon";

const Acadamy = () => {
  return (
    <div className="flex-4 group border border-white/20 m-1 text-center py-6 hover:border-red-600 transition duration-1000">
      <GameIcon icon="baccarat" name="Baccarat" />
      <p className="nunito text-[16px] md:text-[14px] md:min-h-[200px] lg:min-h-[130px]">
        Baccarat Gold 1.0 is played around the world and is one of the most
        popular games at Casino M8trix. Known for its simplicity, the objective
        of Baccarat Gold 1.0 is to get closest to the point value of 9 by
        betting on either the Player or Banker hand. Introducing bonus options
        that pay up to $2,000!
      </p>
      <Link href={"/cardacadamy/baccaratGold"}>
        <button className="text-white border-white border-2 bg-black py-2.5 px-5 mt-2.5 -skew-x-12 flex mx-auto md:justify-center group-hover:text-red-600 group-hover:border-red-600">
          <p className="skew-x-12">TRIGGER HANDS</p>
        </button>
      </Link>
    </div>
  );
};

export default Acadamy;
