import React, { useState, CSSProperties } from "react";
import SwipeableViews from "react-swipeable-views";
import { data } from "./image";
import { ArrowsWrapper, BoxBolit, SpanBox, WrapperMe, WrapperRight } from "./Slider.style";
import { SliderItem } from "./SliderItem";
import { autoPlay } from "react-swipeable-views-utils";

const cssStyle: CSSProperties = {
    position: "relative",
    width: "auto",
    backgroundSize: "100% 100%",
    objectFit: "contain",
    height: "885.281px",
    maxHeight: "885.281px",
    maxWidth: "auto",
    // minWidth: "1326px",
    transition: "transform 1000ms cubic-bezier(.190,1,.220,1),opacity 1000ms cubic-bezier(.190,1,.220,1),opacity 600ms linearo",
    transitionDelay: "200ms",
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

        <WrapperMe className=" mb-32 mx-auto w-full bg-white container">
            <div className="h-full  relative w-full" style={{
                width: "100%",
                height: "885.281px",
                maxHeight: "885.281px",
                maxWidth: "auto",
                // minWidth: "1326px",
                transition: "transform 1000ms cubic-bezier(.190,1,.220,1),opacity 1000ms cubic-bezier(.190,1,.220,1),opacity 600ms linearo",
                transitionDelay: "200ms",
            }}>
                <AutoPlaySwipeableViews
                slideStyle={{
                        width: "100%",
                        height: "885.281px",
                        maxHeight: "885.281px",
                        maxWidth: "auto",
                        // minWidth: "1326px",
    transition: "transform 1000ms cubic-bezier(.190,1,.220,1),opacity 1000ms cubic-bezier(.190,1,.220,1),opacity 600ms linearo",
                        transitionDelay: "200ms",
                }}
                    direction="incremental"
                    interval={5000}
                    animateTransitions={false}
                springConfig={{
                    duration: "3.0s",
                    delay: "3s",
                    easeFunction: "ease-out",
                }}
                onChangeIndex={(index) => setSliderIndex(index)} index={sliderIndex} style={cssStyle}>
                    {sliders}
                </AutoPlaySwipeableViews>

                <WrapperRight className="right-0" >
                    <SpanBox className="flex justify-end items-center w-[70px]">BOLLING A VISIT</SpanBox>
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
