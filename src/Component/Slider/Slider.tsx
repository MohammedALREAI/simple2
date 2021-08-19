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

    return (

        <WrapperMe className="container mx-auto mb-32   w-full bg-white">
            <div className="h-full w-full relative">
                <SwipeableViews index={sliderIndex} style={cssStyle}>
                    {sliders}
                </SwipeableViews>

                <WrapperRight className=" bg-gray-800" >
                    <SpanBox className="flex justify-end items-center">BOLLING A VISIT</SpanBox>
                </WrapperRight>
            </div>
            <ArrowsWrapper className="space-x-5 relative flex justify-center items-center  h-[14px]">
                <span className=" h-[12px] w-[34px] text-white cursor-pointer flex items-center" style={{
                    transform: "rotate(-180deg)",
                }} onClick={handleLeft} >&#10141;</span>
                <span className="text-white  w-[34px] h-[12px] cursor-pointer  flex items-center" onClick={handleRight}>&#10141;</span>
            </ArrowsWrapper>
        </WrapperMe>
    );
};
