import React from "react";
import { FirstCircle, SecondCircle, WrapperCircle } from "./tooltip.style";

interface Props {
value:number,
color:string,
bg:string
}

export const CircleAnimation = ({ value, color, bg }: Props) => {
    return (
        <WrapperCircle style={{
          zIndex: 20,
 color: `${color}`,
        background: `${bg}`,
        }}>
          {50}
        <FirstCircle/>
        <SecondCircle/>
      </WrapperCircle>
    );
};
