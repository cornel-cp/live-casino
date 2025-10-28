import GameIcon from "../home/gameicon"


interface jackpotGameProps {

    icon: string,
    name: string
}

const JackpotGame = (props: jackpotGameProps) => {

    const { icon, name } = props;

    return (
        <div className="flex-4 group border-1 border-white/20 m-1 text-center py-6 hover:border-red-600 transition duration-1000">
            <GameIcon icon={icon} name={name} />
            <button className="text-white border-white border-2 bg-black py-2.5 px-5 mt-2.5 -skew-x-12 flex mx-auto md:justify-center hover:text-red-600 hover:border-red-600"><p className="skew-x-12">TRIGGER HANDS</p></button>
            {/* <div className="flex flex-col md:hidden nunito text-white">
                <p className="text-white/30 text-[12px] border-b-1 border-white/20">Trigger Hand <span className="ml-20">Value</span></p>
                <p className="text-white/70 text-[14px]">Trigger Hand #1<span>$XXX</span></p>
                <p className="text-white/70 text-[14px]">Trigger Hand #2<span>$XXX</span></p>
                <p className="text-white/70 text-[14px]">Trigger Hand #3<span>$XXX</span></p>
                <p className="text-white/70 text-[14px]">Trigger Hand #4<span>$XXX</span></p>
                <p className="text-white/70 text-[14px]">Trigger Hand #5<span>$XXX</span></p>
            </div> */}
        </div>

    )
}

export default JackpotGame

