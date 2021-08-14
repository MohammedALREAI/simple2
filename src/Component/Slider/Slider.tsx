import React, { useState, CSSProperties } from "react";
import SwipeableViews from "react-swipeable-views";
import { data } from "./image";
import { ArrowsWrapper, BoxBolit, SpanBox, WrapperMe, WrapperRight } from "./Slider.style";
import { SliderItem } from "./SliderItem";

const cssStyle: CSSProperties = {
    position: "relative",
    width: "1326px",
    // height: "500.281px",
    // background: "red",
    height: "885.281px",
    maxHeight: "885.281px",
     maxWidth: "1326px",
     minWidth: "1326px",
     overflow: "hidden",

};

export const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState<number>(0);
    const handleChangeIndex = () => {
        console.log("me");
    };
    const handleLeft = () => {
        if (sliderIndex === 0) {
            setSliderIndex(2);
        } else setSliderIndex(sliderIndex - 1);
    };
    const handleRight = () => {
        if (sliderIndex === 2) {
            setSliderIndex(0);
        } else setSliderIndex(sliderIndex + 1);
    };

    const sliders =
        data.length &&
        data.map((item, index) => (
            <SliderItem
                key={index}
                location={item.location}
                description={item.description}
                image={item.image}
            />
        ));

    const BoxSize = () => (
        <div className=" justify-center  mt-16 z-50 hidden md:flex">
            <BoxBolit>
                <SpanBox className="flex justify-end items-center">BOLLING A VISIT</SpanBox>
            </BoxBolit>
        </div>);

    return (

        <WrapperMe className="container mx-auto mb-32   w-full">
            <div className="h-full w-full relative">
                <SwipeableViews index={sliderIndex} style={cssStyle}>
                    {sliders}
                </SwipeableViews>

                <WrapperRight style={{
                }}>
                <SpanBox className="flex justify-end items-center">BOLLING A VISIT</SpanBox>
                </WrapperRight>
            </div>
                <ArrowsWrapper className="space-x-5 relative">
                    <span className=" text-7xl text-white cursor-pointer" style={{
                          transform: "rotate(-180deg)",
                          }} onClick={handleLeft} >&#10141;</span>
                    <span className=" text-7xl text-white cursor-pointer" onClick={handleRight}>&#10141;</span>
                </ArrowsWrapper>
        </WrapperMe>
    );
};
