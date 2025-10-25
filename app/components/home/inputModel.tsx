"use client"

const InputModel = (props: any) => {

    const { text, input } = props;


    return (
        <div className="flex border-b-3 border-red-600 mb-3">
            <p className="text-[12px] text-normal mt-[42.5px] ml-3 mr-3 text-white/80 min-w-[170px]">{text}</p>
            <p className="w-[190px] h-[55px] text-[50px] text-white mt-4 mb-2">{input}</p>
        </div>
    )
}

export default InputModel