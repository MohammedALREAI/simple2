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
 src = "https://nestin.bold-themes.com/fancy/wp-content/uploads/sites/3/2020/01/tab_1.jpg",
alt = "some text", title = "APARTMENT TYPE", subTitle = "45m2 / ", subTitle2 = "South-East",
 description = "Leverage agile frameworks to provide a robust synopsis for high level overviews to corporate strategy foster.",
}: Props) => {
    return (
        <div className=" flex flex-col mb-8">
            <Image src={src} alt={alt} className="mb-4"/>
            <div className="px-4">
            <Title>{title}</Title>
            <SubTitle>{subTitle} <br/> <span style={{ color: "#ba9778" }}>{subTitle2}</span></SubTitle>
            <Description className="mt-2">{description}</Description>
            </div>
        </div>
    );
};
