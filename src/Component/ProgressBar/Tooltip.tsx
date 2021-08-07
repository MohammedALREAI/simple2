import React from "react";
import { Titre } from "./tooltip.style";

interface Props {
text:string
value:number,
}

export const TooltipProgressBar = ({ text, value }: Props) => {
    return (
        <div className="relative   bottom-0 flex flex-col items-center  group-hover:flex">
        <span className="relative z-10  text-xs leading-none text-white whitespace-no-wrap  shadow-lg">{text}</span>
        <Titre/>
    </div>
    );
};
