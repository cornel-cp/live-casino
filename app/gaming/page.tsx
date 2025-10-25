import TrCom from "../components/gaming/trCom"
import Header from "../components/layout/header"

const Gaming = () => {

    return (
        <div>
            <main className="">
                <Header className="absolute right-0" />
                <div className="bg-[url(/assets/images/gaming_header.png)] bg-no-repeat bg-cover h-[469px] flex flex-col justify-end w-full" >
                    <div className="bg-[url(/assets/images/bggradient_home.png)] bg-no-repeat bg-cover w-full h-[267px]"></div>
                </div>
                <div className="bg-black/50 relative flex flex-col justify-center pt-20">
                    <div className="bg-[url(/assets/images/games_border.png)] bg-no-repeat w-[722px] mx-auto">
                        <p className="text-white text-center text-[50px] -mt-10">GAMES</p>
                        <p className="text-[9px] text-white text-center">Last Update: 07/06/2022 16:04:28</p>
                        <table className="m-5">
                            <thead className="text-white/20">
                                <tr className="border-b-2 border-b-white/20">
                                    <th className="min-w-54 text-left ">Game</th>
                                    <th className="min-w-20">Active Tables</th>
                                    <th className="min-w-20">Min/Max</th>
                                    <th className="min-w-20">PIT</th>
                                    <th className="min-w-30">Game/Limit</th>
                                    <th className="min-w-30">Waiting/List</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrCom data={"1"} />
                                <tr className="text-white text-center border-b-1 border-b-white/20">
                                    <td className="text-left">No limit holdem</td>
                                    <td className="text-red-600">2</td>
                                    <td className="">1-2-3</td>
                                    <td className="">POKER</td>
                                </tr>
                                <tr className="text-white text-center">
                                    <td className="text-left">No limit holdem</td>
                                    <td className="text-red-600">1</td>
                                    <td className="">2-3-5</td>
                                    <td className="">POKER</td>
                                </tr>
                                <tr className="text-white text-center">
                                    <td className="text-left">Poker-side TCP</td>
                                    <td className="text-red-600">1</td>
                                    <td className="">5-100</td>
                                    <td className="">CAL</td>
                                </tr>
                                <tr className="text-white text-center">
                                    <td className="text-left">Baccarat Squeeze</td>
                                    <td className="text-red-600">3</td>
                                    <td className="">10-100</td>
                                    <td className="">CAL</td>
                                </tr>
                                <tr className="text-white text-center">
                                    <td className="text-left">Baccarat Squeeze</td>
                                    <td className="text-red-600">3</td>
                                    <td className="">10-100</td>
                                    <td className="">CAL</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Gaming