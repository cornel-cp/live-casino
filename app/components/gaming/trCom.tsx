const TrCom = (props: any) => {

    const { data } = props;


    return (
        <tbody>
            {
                data.map((trData, index) => {
                    <tr className="text-white text-center border-b-1 border-b-white/20" key={index}>
                        <td className="text-left">{trData.game}</td>
                        <td className="text-red-600">2</td>
                        <td className="">1-2-3</td>
                        <td className="">POKER</td>
                    </tr>
                })
            }
        </tbody>
        // <tr className="text-white text-center border-b-1 border-b-white/20">
        //     <td className="text-left">No limit holdem</td>
        //     <td className="text-red-600">2</td>
        //     <td className="">1-2-3</td>
        //     <td className="">POKER</td>
        // </tr>
    )
}

export default TrCom