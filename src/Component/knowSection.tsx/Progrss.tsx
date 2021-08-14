import { useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useState } from "react";
import { ProgressAnimated, TitreProgress } from "./Know.styles";

interface Props {
    title:string,
    value:number,
    textshow:string,
    index:number
}

export const Progrss = ({ title, value, textshow, index }: Props) => {
    const [propgress, set] = useState(false);
    const transitionsProgress = useTransition(propgress, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      reverse: false,
      delay: 400 + index * 100,
      config: { duration: 400 + index * 100 },
      onRest: () => set(true),
    });
    return (<div>

{transitionsProgress(
            (styles, item) => item && <animated.div style={styles}>
        <div className=" my-4">
            <h1 className="mb-1 text-start text-white ">{title}</h1>

            <div className="relative flex flex-col items-center group">
                <ProgressAnimated value={value} className="absolute  bottom-0 flex flex-col items-center  group-hover:flex "
                 style={{
 left: `${value < 15 ? 0 : value - 15}%`,
                    }}>
                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap  shadow-lg" style={{
                        background: "#ba9778",
                    }}>{textshow}.</span>
                    <TitreProgress/>
                </ProgressAnimated>
            </div>
        </div><div className="relative left- flex flex-col items-center group">

                <div className=" w-full h-6  flex justify-start items-center  p-1 " style={{ background: "rgba(255,255,255,.5)" }}>
                    <ProgressAnimated value={value} className=" h-3 z-50 " style={{
 background: "#fff",
                        width: `${value - 10}%`,
                }} />
                </div>
            </div></animated.div>)}
    </div>
    );
};
