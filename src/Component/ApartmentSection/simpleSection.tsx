import React from "react";
import { Image, Title, Description, SubTitle } from "./simple.style";
interface Props {
src?:string,
alt?:string,
title?:string,
subTitle?:string,
description?:string
subTitle2?:string
}

export const SimpleSection = ({
 src,
alt,
 title,
  subTitle,
   subTitle2,
 description,
}: Props) => {
    return (
        <div className=" flex flex-col mb-8">
            <Image src={src} alt={alt} className="mb-4"/>
            <div className="px-8">
            <Title className="px-4">{title}</Title>
            <SubTitle>{subTitle} <br/> <span style={{ color: "#ba9778" }}>{subTitle2}</span></SubTitle>
            <Description className="mt-2">{description}</Description>
            </div>
        </div>
    );
};
