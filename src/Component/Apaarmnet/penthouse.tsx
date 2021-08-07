import React from "react";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { TitleHead } from "../MatlerSection/MailSection.styles";
import { SliderImage } from "../Slider/SliderImage";
import { TitleHeadAppp } from "./apartment.style";
import { ListItems } from "./ListItems";
import { AiFillCar } from "react-icons/ai";
import { Button } from "../Button/Button";

const style:React.CSSProperties = {
    width: "807px",
    position: "relative",
    zIndex: 999,
    opacity: 1,
    height: "600px",
};
function Penthouse() {
    return (
        <>
            <div style={{
                    backgroundColor: "#f1f1f1",
            }} className="container mx-auto w-full h-full flex  bg-white-200 mt-12 dark:bg-gray-800 shadow ">
            <div className=" w-2/3 z-50 -ml-20 relative left-12 mt-24">
                <SliderImage jc="flex-end"/>
        </div>
                <div className="w-1/2 mt-12 p-8 pr-24 relative left-12 mt-32">
                <HeaderTitle title="APARTMENT TYPE" className="text-base"/>
                <TitleHeadAppp>Penthouse</TitleHeadAppp>
                    <div className="flex flex-col mt-8">
                        {Array(4).fill(0).map(c => (
                            <ListItems icon={AiFillCar} text={"BEDROOM"} value={3}/>
                        ))}
                    </div>
                    <div className="w-1/2 h-16 my-12">
                    <Button text="SCHEDULE A VISIT"/>
                    </div>

            </div>
                </div>
        </>
    );
}
export default Penthouse;
