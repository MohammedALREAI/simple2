import React, { ReactNode } from "react";
 import styled, { keyframes } from "styled-components";

interface Props {
text:string,
className?:string
icon?:ReactNode
}

export const Button = ({ text, className, icon }: Props) => {
    return (
        <ButtonStyle className={`flex items-center ${className}`}>
            {text}
            {icon || <span className="mx-4">&#10141;</span>
            }
        </ButtonStyle>
    );
};

export const ButtonAnimation = keyframes`
 20%{
    transform: translateY(-7px);
  }

  100%{
    transform: translateY(+7px);
  }`;

const ButtonStyle = styled("a")`
 box-shadow: 0 0 0 3em #ba9778 inset;
    color: #ffffff;
    width: 100%;
    height: 100%;
    background: #ba9778;
    display: flex;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: center;
    align-items: center;
        transition: all 200ms ease;

&:hover{
    animation: ${ButtonAnimation} 2s ease-in 1 ;

}
&:focus{
    outline: none;
    outline: 0;
}
`;
