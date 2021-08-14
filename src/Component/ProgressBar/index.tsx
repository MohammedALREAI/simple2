import React from "react";
import { TooltipProgressBar } from "./Tooltip";

interface Props {
    title:string,
    value:number,
    textshow:string
}

export const Progressbar = ({ title, value, textshow }: Props) => {
    const position = {
        x: 70,
        y: 70,
    };
    return (
    <div className="w-full flex flex-col" style={{
 width: "70%",
    boxShadow: "0 0 0 1px #ffffff inset",

     }}>
     <h1 className="float-left text-white mb-1 " >{"Gallery City Cente"}</h1>
     <div className="relative flex flex-col items-center group">
<div className="absolute bottom-0 flex flex-col items-center   group-hover:flex">
    <span className="relative z-10 p-2 text-xs leading-none  whitespace-no-wrap text-whit shadow-lg"style={{ background: "#ba9778" }}>ddd</span>
    <div className="w-3 h-3 mt-2 rotate-45 z-10" style={{ background: "#ba9778" }}/>
</div>
</div>
     <TooltipProgressBar text={textshow} value={value}/>
        <div className=" w-full h-6  flex justify-start items-center ">
        <div className="w-3 h-3 -mt-1 rotate-45 "/>
        </div>
        </div>
    );
};
