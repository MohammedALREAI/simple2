import React from "react";
import { TitreProgress } from "./Know.styles";

interface Props {
    title:string,
    value:number,
    textshow:string
}

export const Progrss = ({ title, value, textshow }: Props) => {
    return (
        <>
        <div className=" my-4">
            <h1 className="mb-1 text-start text-white ">{title}</h1>

            <div className="relative flex flex-col items-center group">
                <div className="absolute  bottom-0 flex flex-col items-center  group-hover:flex "
                 style={{
 left: `${value}%`,
                //  background: "#ba9778",
                    }}>
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap  shadow-lg" style={{
                        background: "#ba9778",
                    }}>{textshow}.</span>
                    <TitreProgress/>
                </div>
            </div>
        </div><div className="relative left- flex flex-col items-center group">

                <div className=" w-full h-6  flex justify-start items-center  p-1 " style={{ background: "rgba(255,255,255,.5)" }}>
                    <div className=" h-3 z-50 " style={{
 background: "#fff",
                        width: `${value}%`,
                }} />
                </div>
            </div></>
    );
};
