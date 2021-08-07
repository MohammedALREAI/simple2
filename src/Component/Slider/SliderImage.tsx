import React, { useState, CSSProperties } from "react";
import SwipeableViews from "react-swipeable-views";
import { data } from "./image";
import { SliderItemWrapper, WrapperMe } from "./Slider.style";

const cssStyle: CSSProperties = {
    position: "relative",
    // width: "100%",
    // height: "100%",
};

interface props {
    jc?:"flex-start" | "flex-end"
}
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
        data.map((item, index) => (
            <SliderItemWrapper imag={item.image} />
        ));

    return (

                <div className="">
                    <SwipeableViews index={sliderIndex} style={cssStyle}>
                        {sliders}
                    </SwipeableViews>
                    <div className=" ">
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
