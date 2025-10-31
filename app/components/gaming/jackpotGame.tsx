'use client'

import { useState } from "react";
import GameIcon from "../home/gameicon"
import Modal from "../Modal/modal";
import Image from "next/image";
import Cutlery from "../icons/cutlery";
import Cocktail from "../icons/cocktail";
import ThreeCard from "../icons/threeCard";


interface jackpotGameProps {

    icon: string,
    name: string
}

const JackpotGame = (props: jackpotGameProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const { icon, name } = props;

    return (
        <div className="flex-4 group border-1 border-white/20 m-1 text-center py-6 hover:border-red-600 transition duration-1000">
            <GameIcon icon={icon} name={name} />
            <button className="text-white border-white border-2 bg-black py-2.5 px-5 mt-2.5 -skew-x-12 flex mx-auto md:justify-center hover:text-red-600 hover:border-red-600" onClick={() => setIsOpen(true)}><p className="skew-x-12">TRIGGER HANDS</p></button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Image
                    className="absolute -top-0.5 -left-0.5"
                    src={"/assets/images/jackpot_corner.png"}
                    alt="corner"
                    width={54}
                    height={61}
                />
                <div>
                    <div className="flex justify-between">
                        <div className="text-left">
                            <p className="text-[14px] text-red-600">progressive jackpot</p>
                            <p className="text-[36px] font-[200px] text-white">Three card poker</p>
                        </div>
                        <ThreeCard />
                    </div>

                    <div>
                        <div className="flex justify-between nunito text-white/60 text-[12px] px-4 border-b-2 border-white/60">
                            <p>Trigger Hand</p>
                            <p>Value</p>
                        </div>
                        <div className="flex justify-between nunito text-white text-[14px] px-4 py-4 border-b-1 border-white/40">
                            <p>Trigger Hand #1</p>
                            <p>$XXX</p>
                        </div>
                        <div className="flex justify-between nunito text-white text-[14px] px-4 py-4 border-b-1 border-white/40">
                            <p>Trigger Hand #2</p>
                            <p>$XXX</p>
                        </div>
                        <div className="flex justify-between nunito text-white text-[14px] px-4 py-4 border-b-1 border-white/40">
                            <p>Trigger Hand #3</p>
                            <p>$XXX</p>
                        </div>
                        <div className="flex justify-between nunito text-white text-[14px] px-4 py-4 border-b-1 border-white/40">
                            <p>Trigger Hand #4</p>
                            <p>$XXX</p>
                        </div>
                        <div className="flex justify-between nunito text-white text-[14px] px-4 py-4 border-b-1 border-white/40 bg-linear-to-b from-[#181818] to-black/50">
                            <p>Trigger Hand #5</p>
                            <p>$XXX</p>
                        </div>
                    </div>

                </div>
            </Modal>
        </div>

    )
}

export default JackpotGame

