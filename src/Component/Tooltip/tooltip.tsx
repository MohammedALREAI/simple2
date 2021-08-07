import React, { useState } from "react";
import { CircleAnimation } from "./circleAnimation";
import { LocationFile, Time } from "./tooltip.style";

interface Props {
value:number,
text:string,
isDisplay:boolean,
onClick?:()=>void,
onMouseLeave?:()=>void
onMouseEnter?:()=>void

position:{
    x:number,
    y:number
}
}

export const Tooltip = ({ value, text, position, isDisplay, onClick, onMouseLeave, onMouseEnter }: Props) => {
    const [display, setDisplayState] = useState<boolean>(isDisplay);
    return (
        <LocationFile x={position.x} y={position.y} className=" ml-72 relative flex flex-col items-center group my-40 p1" onClick={onClick} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
          <div className=" rounded-full me ">
              <CircleAnimation bg={`${display ? "white" : "#fcf2e9"}`} color={`${display ? "#ba9778" : "white"}`} value={value} />
            {50}
          </div>

          <div className={`absolute bottom-0 flex flex-col items-center  ${isDisplay ? "" : "hidden"} mb-12 group-hover:flex`}>
            <span className="relative z-10 p-2 text-xs leading-none text-white font-semibold whitespace-no-wrap w-28 h-8 tome shadow-lg">{text}</span>
            <Time className="tome  w-3 h-3 -mt-2 rotate-45"/>
          </div>
        </LocationFile>

    );
};
