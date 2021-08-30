import React, { useState, CSSProperties } from "react";
import SwipeableViews from "react-swipeable-views";
import { data } from "./image";
import { SliderItemJustImage, WrapperMe } from "./Slider.style";
import { autoPlay } from "react-swipeable-views-utils";

const cssStyle: CSSProperties = {
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden !important",

};

interface props {
    jc?:"flex-start" | "flex-end"
}
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const SliderImage = ({ jc } : props) => {
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
        data.map((item, index) => {
            return (
                <SliderItemJustImage className="inset-0 overflow-hidden min-h-[560px] min-w-[380px] md:min-h-[600px]" imag={item.image}/>
            );
});

    return (

                <div className="overflow-hidden w-full min-h-[700px]">
                  <AutoPlaySwipeableViews
                slideStyle={{
                        width: "100%",
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
                  <div className="mt-[20px]">
  <div className={`flex ${jc ? "justify-end" : "justify-start"} px-2 space-x-5 items-center`}>
    <div className="-rotate-180"style={{
          transform: "rotate(-180deg)",
}}>
      <span className="w-24 h-24 text-xl text-black cursor-pointer" onClick={ handleLeft} >&#10141;</span>
    </div>
    <div>
      <span className="w-24 h-24 text-xl  text-black cursor-pointer" onClick={handleRight}>&#10141;</span>
    </div>
  </div>
</div>

                                </div>
    );
};
