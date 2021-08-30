import React, { useContext, useState } from "react";
import { IContext, OpenContext } from "../EverSection/EverySection";
import { CircleAnimation } from "./circleAnimation";
import { LocationFile, Time } from "./tooltip.style";

interface Props {
  value: string,
  text: string,
}

export const Tooltip = ({ value, text }: Props) => {
  const { display, handleChange } = useContext<IContext>(OpenContext);
  return (
    <>
      <div className={`relative flex  flex-col items-center group w-auto `} onClick={() => handleChange(display)}>
      <CircleAnimation value={value} isActive={display} />
      <div>
      <div onMouseEnter={() => handleChange(display)} onMouseLeave={() => handleChange(display)} className={`relative  flex flex-col items-center group-hover:flex ${display ? "" : "hidden"}`} style={{ top: "-80px" }}>
          <span className=" mt-[10px] relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap font-bold flex justify-center items-center  bg-[#BA9778] h-auto">A top aligned tooltip.</span>
          <div className="w-4 h-4 -mt-3 rotate-45 bg-[#BA9778]"></div>
        </div>
      </div>
      </div>
    </>
  );
};
