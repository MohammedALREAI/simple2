import React, { useState, CSSProperties } from "react";
import SwipeableViews from "react-swipeable-views";
import { data } from "./image";
import { WrapperMe } from "./Slider.style";
import { SliderItem } from "./SliderItem";

const cssStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    background: "#c0bbbb",
    height: "100%",
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

        <WrapperMe className="flex mb-32">
            <SwipeableViews className="bg-gray-50" index={sliderIndex} style={cssStyle}>
                {sliders}
            </SwipeableViews>
            <div className="h-12 w-full -mt-12 flex justify-end items-center z-50 pr-8">
                <div className="flex justify-between space-x-5 items-center">
                    <div className="-rotate-180" style={{
                        transform: "rotate(-180deg)",
                    }}>
                        <span className="w-24 h-24 text-xl text-white cursor-pointer" onClick={handleLeft} >&#10141;</span>
                    </div>
                    <div>
                        <span className="w-24 h-24 text-xl text-white cursor-pointer" onClick={handleRight}>&#10141;</span>
                    </div>
                </div>
            </div>

        </WrapperMe>
    );
};
