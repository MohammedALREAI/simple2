import React from "react";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { TitleHead } from "../MatlerSection/MailSection.styles";
import { SliderImage } from "../Slider/SliderImage";
import { TitleHeadAppp } from "./apartment.style";
import { ListItems } from "./ListItems";
import { AiFillCar } from "react-icons/ai";
import { Button } from "../Button/Button";

function Apartment() {
    return (
            <div style={{
                    backgroundColor: "#f1f1f1",

            }} className=" container   w-full h-full flex dark:bg-gray-800 shadow mx-auto">
                <div className="w-1/2 mt-12 pl-8 pr-24">
                <HeaderTitle title="APARTMENT TYPE" className="text-base"/>
                <TitleHeadAppp>03/
                    <br/>
                    Bedroom</TitleHeadAppp>
                    <div className="flex flex-col mt-8">
                        {Array(4).fill(0).map(c => (
                            <ListItems icon={AiFillCar} text={"BEDROOM"} value={3}/>
                        ))}
                    </div>
                    <div className=" w-1/2 h-16 my-12">
                    <Button text="SCHEDULE A VISIT"/>
                    </div>

            </div>
            <div className=" w-2/3 z-50 mt-8 z-50 -ml-20 relative left-12">
                <SliderImage/>
        </div>
                </div>
    );
}
export default Apartment;
