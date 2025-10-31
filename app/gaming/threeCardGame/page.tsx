"user client";

import Link from "next/link";
import Layout from "../../components/layout/layout";
import AkaIcon from "@/app/components/icons/akaIcon";
import BtnElement from "@/app/components/BtnElement/BtnElement";

const ThreeCardGame = () => {
  return (
    <Layout>
      <div className="px-6 sm:px-12 md:px-[85px] max-w-6xl mx-auto">
        <Link href={"/gaming"} className="transition-all duration-1000">
          <p className="text-white/40 text-[14px] mt-[121px] group hover:text-white">
            <span className="text-[14px] font-bold pr-2">&lt;</span>
            Back to <p className="inline group-hover:text-red-600">Gaming</p>
          </p>
        </Link>
        <div className="mt-[50px] flex justify-between border-b-2 border-gray-600">
          <p className="text-white text-[36px] mx-4 ">THREE CARD POKER</p>
          <AkaIcon />
        </div>
        <div className="pt-5 flex flex-col items-center">
          <p className="text-white/80 text-[12px] pb-2.5 w-full nunito">
            GEGA-001277
          </p>
          <p className="text-white/80 text-[12px] pb-[30px] w-full nunito">
            Three card poker is one of the most popular poker games with two
            of the most played bonuses in the casino. Three card bonus pays
            with a pair or better and our Six card bonus gives our players the
            opportunity to win up to 1000 to 1.
          </p>
          <Link href={"/cardacadamy/threecard"}>

            <BtnElement className="mb-16 px-4 w-full md:w-auto" color="white" name="LEARN MORE" />
          </Link>
        </div>
        <div className="nunito border-2 border-gray-600 gap-7 px-3 md:px-10 pb-8">
          <p className="noodle bg-background text-red-600 text-[28px] text-center font-[400px] max-w-[140px] px-2 -mt-5">
            HOW TO PLAY
          </p>
          <div className="block md:flex">
            <div className="flex-6">
              <p className="text-white text-[14px] font-bold pb-2.5">
                Hand Rankings
              </p>
              <p className="text-white/40 text-[12px] font-normal">
                The ranking of hands differs from traditional poker:
              </p>
              <ul className="list-disc inline-block ml-[15px]">
                <li className="text-white text-[12px]">Royal Flush</li>
                <li className="text-white text-[12px]">Straight Flush</li>
                <li className="text-white text-[12px]">Three-Of-A-Kind</li>
                <li className="text-white text-[12px]">Straight</li>
                <li className="text-white text-[12px]">Flush</li>
                <li className="text-white text-[12px]">Pair</li>
                <li className="text-white text-[12px]">Hight Card</li>
              </ul>
              <br />
              <br />
              <p className="text-[12px] text-white/40 mb-2.5">
                <span className="text-white">Note:</span> Ace is high, except in
                3-2-A sequence.
              </p>
              <div>
                <p className="text-white text-[14px] pb-2.5">Getting Started</p>
                <p className="text-white/40 text-[12px]">
                  Make the Ante wager to compete against the player-dealer. You
                  and the player-dealer will each receive three cards to make a
                  poker hand, and the player-dealer will expose one of his
                  cards.
                </p>
              </div>
            </div>
            <div className="flex-6 md:mx-4">
              <div>
                <p className="text-white text-[14px]">Play or Fold?</p>
                <p className="text-white/40 text-[12px]">
                  When you look at your three card poker hand, you have two
                  choices: fold and forfeit your Ante wager, or stay in the game
                  by making a play wager equal to your Ante.
                </p>
              </div>
              <div className="mt-6">
                <p className="text-white text-[14px]">Wining Or Losing</p>
                <p className="text-white/40 text-[12px]">
                  You win even-money on the Ante and play wagers when your
                  three-card hand beats the player-dealer’s qualifying hand of a
                  Queen-high or better. You lose these wagers when the
                  player-dealer’s qualifying hand beats your hand. Ties push. If
                  the player-dealer does not qualify, your Play receives no
                  action. Player can never lose Ante on non qualifying
                  Player/Dealer hand. She/he can only push or win unless
                  surrendered by Player or by exercising the House Way option.
                </p>
              </div>
              <div className="mt-6">
                <p className="text-white text-[14px] mt-2.5">
                  House Way Option
                </p>
                <ul className="list-disc ml-4">
                  <li className="text-white">
                    <span className="font-bold text-[10px]">Qualifier: </span>
                    <span className="font-normal text-[12px] text-white/40">
                      Queen or better and must play.
                    </span>
                  </li>
                  <li className="text-white">
                    <span className="font-bold text-[10px]">
                      Non-Qualifier:{" "}
                    </span>
                    <span className="font-normal text-[12px] text-white/40">
                      The play bet will be returned.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:flex gap-2 items-start my-15">
          <div className="relative flex-6 border-2 border-gray-600">
            <p className="absolute top-0 left-40 -translate-[50%] bg-background w-[250px] text-[28px] font-[400px] text-red-600 text-center">
              3 card bonus payoff chart
            </p>
            <div className="mt-8 flex border-b border-gray-300">
              <p className=" ml-10 flex-3 text-[12px] text-white/40 font-light">
                Hand
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white/40 font-light">
                Pay Off
              </p>
            </div>
            <div className="flex border-b border-gray-600">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                Royal Flush
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                200 to 1
              </p>
            </div>
            <div className="flex border-b border-gray-600">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                Straight flush
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                40 to 1
              </p>
            </div>
            <div className="flex border-b border-gray-600">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                Three of a kind
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                30 to 1
              </p>
            </div>
            <div className="flex border-b border-gray-600">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                straight
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                6 to 1
              </p>
            </div>
            <div className="flex border-b border-gray-600">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                Flush
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                3 to 1
              </p>
            </div>
            <div className="flex">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                one pair
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                1 to 1
              </p>
            </div>
          </div>
          <div className="relative flex-6 my-5 md:my-0 border-2 border-gray-600">
            <p className="absolute top-0 left-40 -translate-[50%] bg-background w-[250px] text-[28px] font-[400px] text-red-600 text-center">
              6 card bonus payoff chart
            </p>
            <div className="mt-8 flex border-b border-gray-300">
              <p className=" ml-10 flex-3 text-[12px] text-white/40 font-light">
                Hand
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white/40 font-light">
                Pay Off
              </p>
            </div>
            <div className="flex border-b border-gray-600">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                Royal Flush
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                200 to 1
              </p>
            </div>
            <div className="flex border-b border-gray-600">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                Straight flush
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                40 to 1
              </p>
            </div>
            <div className="flex border-b border-gray-600">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                Three of a kind
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                30 to 1
              </p>
            </div>
            <div className="flex border-b border-gray-600">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                straight
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                6 to 1
              </p>
            </div>
            <div className="flex border-b border-gray-600">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                Flush
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                3 to 1
              </p>
            </div>
            <div className="flex border-b border-gray-600">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                one pair
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                1 to 1
              </p>
            </div>
            <div className="flex">
              <p className=" ml-10 flex-3 text-[12px] text-white font-[400px]">
                Full house
              </p>
              <div className="flex-5"></div>
              <p className="flex-4 text-center text-[12px] text-white font-[400px]">
                20 to 1
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThreeCardGame;
