import GameIcon from "../home/gameicon"

const JackpotGame = (props: any) => {

    const { icon, name } = props;

    return (
        <div className="flex-4 group border-1 border-white/20 m-1 text-center py-6 hover:border-red-600 transition duration-1000">
            <GameIcon icon={icon} name={name} />
            <button className="text-white border-white border-2 bg-black py-2.5 px-5 mt-2.5 -skew-x-12 hover:text-red-600 hover:border-red-600"><p className="skew-x-12">TRIGGER HANDS</p></button>
        </div>

    )
}

export default JackpotGame

