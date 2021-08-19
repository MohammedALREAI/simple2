import React from "react";
import { BoxCircle, FirstCircle, SecondCircle } from "./tooltip.style";

interface Props {
isActive?:boolean,
value:string
}

export const CircleAnimation = ({ isActive = true, value }: Props) => {
     return <BoxCircle isActive={isActive}>{value}</BoxCircle>;
};
