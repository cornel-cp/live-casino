import Link from "next/link";
import { IcoBabacat } from "../icons/icons";
import PriIcon from "../icons/priIcon";
import ThreeCard from "../icons/threeCard";

const EachGame = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-4 group border border-white/20 m-1 text-center py-6 hover:border-red-600 transition duration-1000 px-4">
        <ThreeCard />
        <p className="text-[18px]">THREE CARD POKER</p>
        <p className="pt-2.5 text-[12px] text-white/40">
          Three card poker is one of the most popular poker games with two of
          the most played bonuses in the casino. Three card bonus pays with a
          pair or better…
        </p>
        <Link href={"/gaming/threeCardGame"}>
          <button className="text-white border-white border-2 bg-black py-2.5 px-5 mt-2.5 -skew-x-12 hover:text-red-600 hover:border-red-600">
            <p className="skew-x-12">SEE MORE</p>
          </button>
        </Link>
      </div>
      <div className="flex-4 group border border-white/20 m-1 text-center py-6 hover:border-red-600 transition duration-1000">
        <IcoBabacat />
        <p className="text-[18px]">BACCARAT</p>
        <p className="pt-2.5 text-[12px] text-white/40">
          Three card poker is one of the most popular poker games with two of
          the most played bonuses in the casino. Three card bonus pays with a
          pair or better…
        </p>
        <Link href={"/gaming/threeCardGame"}>
          <button className="text-white border-white border-2 bg-black py-2.5 px-5 mt-2.5 -skew-x-12 hover:text-red-600 hover:border-red-600">
            <p className="skew-x-12">SEE MORE</p>
          </button>
        </Link>
      </div>
      <div className="flex-4 group border border-white/20 m-1 text-center py-6 hover:border-red-600 transition duration-1000">
        <PriIcon />
        <p className="text-[18px]">PAI GOE TILES</p>
        <p className="pt-2.5 text-[12px] text-white/40">
          Three card poker is one of the most popular poker games with two of
          the most played bonuses in the casino. Three card bonus pays with a
          pair or better…
        </p>
        <Link href={"/gaming/threeCardGame"}>
          <button className="text-white border-white border-2 bg-black py-2.5 px-5 mt-2.5 -skew-x-12 hover:text-red-600 hover:border-red-600">
            <p className="skew-x-12">SEE MORE</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EachGame;
