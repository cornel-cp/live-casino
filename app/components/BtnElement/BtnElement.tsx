const BtnElement = (props: any) => {
    return(
        <button className={`flex justify-center items-center w-[93px] h-[33.5px] -skew-x-16 cursor-pointer ${props.color === "red" ? "bg-red-600" : "border rounded-xs border-white"}`}>
            <p className="skew-x-16 text-white max-w-[68px] text-[14px] font-normal text-wrap leading-none text-center">{props.name}</p>
        </button>
    )
}

export default BtnElement