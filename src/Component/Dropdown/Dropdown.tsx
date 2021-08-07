import React, { useState } from "react";
import { SpanItem } from "./dropdown.style";

interface Props {
    isOpen:boolean,
    title:string,
    text:string,
    value:string
}

export const Dropdown = ({ isOpen, title, text, value }: Props) => {
    const [isOpenState, setIsOpen] = useState<boolean>(isOpen);
    return (
        <div className=" flex " style={{ borderBottom: "1px solid rgba(0,0,0,.3)" }}>
        <div className="w-full" onClick={() => setIsOpen(!isOpenState)}>
          <div className="relative  w-full ">
            <input className="bg-black my-2 w-full flex flex-col absolute z-10 cursor-pointer opacity-0 h-5  " type="checkbox" id="chck1" />
            <div className="flex justify-between items-center my-4 cursor-pointer select-none tab-label" >
              <SpanItem isActive={isOpenState}>
                   <span className="pr-2">{value}</span> {title} </SpanItem>
              <div className={`rounded-full flex items-center ${isOpenState ? "rotate-180" : ""} w-7 h-7 justify-end`}>
                <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            <div className={`${isOpenState ? "" : "hidden"} `}>
              <div className=" pr-8 text-grey-darkest text-left">{text}</div>
            </div>
          </div>
        </div>
      </div>

    );
};
