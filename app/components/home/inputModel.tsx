"use client"

interface modelProps {
    text: string,
    input: string
}

const InputModel = (props: modelProps) => {

    const { text, input } = props;


    return (
        <div className="flex justify-center mx-auto md:max-w-4xl border-b-3 border-red-600 pb-2">
            <p className="flex items-end text-[12px] lg:text-[24px] text-normal mx-3 text-white min-w-[170px] lg:min-w-[310px]" style={{ fontFamily: 'Nunito' }}>{text}</p>
            <p className="flex items-end text-[30px] sm:text-[45px] md:text-[50px] lg:text-[60px] text-white">{input}</p>
        </div>
    )
}

export default InputModel