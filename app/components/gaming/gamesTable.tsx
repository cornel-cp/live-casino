const GamesTable = () => {


    return (
        <table className="m-5" >
            <thead className="text-white/20">
                <tr className="border-b-2 border-b-white/70">
                    <th className="min-w-54 text-left ">Game</th>
                    <th className="min-w-20">Active Tables</th>
                    <th className="min-w-20">Min/Max</th>
                    <th className="min-w-20 border-r-2 border-r-white/70">PIT</th>
                    <th className="min-w-30">Game/Limit</th>
                    <th className="min-w-30">Waiting/List</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-white text-center border-b-1 border-b-white/20 relative">
                    <td className="text-left">No limit holdem</td>
                    <td className="text-red-600">2</td>
                    <td className="">1-2-3</td>
                    <td className="border-r-2 border-r-white/70">POKER</td>
                    <td rowSpan={4} className="text-left "><p className="-mt-14 ml-2">No limit holdem<br />$1 - $2 - $3</p></td>
                    <td rowSpan={4} className="text-[10px]">1.MB <br /> 2.JC <br />3.JoseJose<br /> 4. David.R <br /> 5.Joe <br /> 6.Victor <br />7. Alex</td>
                </tr>
                <tr className="text-white text-center border-b-1 border-b-white/20">
                    <td className="text-left">No limit holdem</td>
                    <td className="text-red-600">1</td>
                    <td className="">2-3-5</td>
                    <td className="border-r-2 border-r-white/70">POKER</td>
                </tr>
                <tr className="text-white text-center border-b-1 border-b-white/20">
                    <td className="text-left">Poker-side TCP</td>
                    <td className="text-red-600">1</td>
                    <td className="">5-100</td>
                    <td className="border-r-2 border-r-white/70">CAL</td>
                </tr>
                <tr className="text-white text-center border-b-1 border-b-white/20">
                    <td className="text-left">Baccarat Squeeze</td>
                    <td className="text-red-600">3</td>
                    <td className="">10-100</td>
                    <td className="border-r-2 border-r-white/70">CAL</td>
                </tr>
                <tr className="text-white text-center border-b-1 border-b-white/20">
                    <td className="text-left">Pure 21.5 Blackjack</td>
                    <td className="text-red-600">1</td>
                    <td className="">25-100</td>
                    <td className="border-r-2 border-r-white/70">CAL</td>
                    <td rowSpan={4} className="text-left"><p className="-mt-14 ml-2">No limit holdem <br />$2 - $3 - $5</p></td>
                    <td rowSpan={4} className="text-[10px]">1.MB <br /> 2.JC <br />3.JoseJose<br /> 4. David.R <br /> 5.Joe <br /> 6.Victor <br />7. Alex</td>
                </tr>
                <tr className="text-white text-center border-b-1 border-b-white/20">
                    <td className="text-left">Double Hand Poker Halfmoon</td>
                    <td className="text-red-600">3</td>
                    <td className="">5-100</td>
                    <td className="border-r-2 border-r-white/70">CAL</td>
                </tr>
                <tr className="text-white text-center border-b-1 border-b-white/20">
                    <td className="text-left">THREE CARD POKER</td>
                    <td className="text-red-600">2</td>
                    <td className="">10-100</td>
                    <td className="border-r-2 border-r-white/70">CAL</td>
                </tr>
                <tr className="text-white text-center ">
                    <td className="text-left">ULTIMATE TEXAS HOLD EM</td>
                    <td className="text-red-600">2</td>
                    <td className="">5-100</td>
                    <td className="border-r-2 border-r-white/70">CAL</td>
                </tr>
            </tbody>
        </table>
    )
}

export default GamesTable;