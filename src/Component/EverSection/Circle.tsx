import React, { useContext, useState } from "react";
import { Tooltip } from "../Tooltip/tooltip";
import { IContext, OpenContext } from "./EverySection";

interface Props {
    text:string,
    value:string
    x:number,
    y:number

}

export const Circle = ({ text, value, x, y }: Props) => {
    return (
        <div className="absolute inset-0 w-auto h-auto " style={{
            left: `${x}%`,
            top: `${y}%`,
        }}>
            <Tooltip value={value} text={text} />
        </div>
    );
};
