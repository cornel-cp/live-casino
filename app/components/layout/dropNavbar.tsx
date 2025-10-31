import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react";

interface dropNavbarProps {
    className: string,
    text: string,
    title: string,
    button: string,
    children: ReactNode
}

const DropNavbar = (props: dropNavbarProps) => {

    return (<div className={`${props.className} absolute top-[40px] text-white bg-white/10 border border-white/30 -translate-x-1/2
          w-[350px]  backdrop-blur-md  
          rounded-lg invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-300 p-4 text-center z-50
          group-hover:translate-y-1 -skew-x-12 -ml-4`}>
        <div className="flex items-center">
            <div className="text-left min-w-[70x]">
                <p className="text-[18px]">{props.title}<span className="text-red-600">casino m8trix</span> </p>
                <p className="text-[12px] nunito">{props.text}</p>
            </div>
            {props.button === "" ? "" : <button className="bg-red-600 text-[12px] w-[100px] h-[30px] px-2 ml-16">{props.button}</button>}
        </div>
        {props.children}
    </div>)
}

export default DropNavbar