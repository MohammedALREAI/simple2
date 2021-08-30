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
            <div className="px-12 container mx-6 mr-4 md:mx-auto  bg-[#f1f1f1]  flex flex-col w-full h-full lg:flex-row shadow-sm "
            // style={{ margin: "0 auto" }}
            >
                <div className="w-1/1 lg:w-1/2 mt-12">
                <HeaderTitle title="APARTMENT TYPE" className="text-base"/>
                <TitleHeadAppp>03/
                    <br/>
                    Bedroom</TitleHeadAppp>
                    <div className="flex flex-col  ">
                        {Array(4).fill(0).map(c => (
                            <ListItems icon={AiFillCar} text={"BEDROOM"} value={3}/>
                        ))}
                    </div>
                    <div className="my-12" style={{ width: "191px", height: "50px" }}>
                    <Button className="text-[15px]" text="SCHEDULE A VISIT"/>
                    </div>

            </div>
            <div className="lg:w-2/3 sm:block right-0  md:right-[-10%]  mt-8 z-50  md:relative">
                <SliderImage/>
        </div>
                </div>
    );
}
export default Apartment;
